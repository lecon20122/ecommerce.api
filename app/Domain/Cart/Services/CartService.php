<?php

namespace App\Domain\Cart\Services;

use App\Domain\Cart\Contracts\CartInterface;
use App\Domain\Cart\Exceptions\InvalidCartConfigurationException;
use App\Domain\Cart\Models\Cart;
use App\Domain\Variation\Models\Variation;
use Domain\User\Models\User;
use Exception;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Builder;
use Illuminate\Session\SessionManager;
use Illuminate\Support\Collection;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;

class CartService implements CartInterface
{
    protected const CONFIG_SESSION_KEY = 'cart.session.key';

    protected mixed $cartInstance;
    protected mixed $sessionKey;

    /**
     * @throws Exception
     */
    public function __construct(protected SessionManager $sessionManager)
    {
        $this->sessionKey = config(self::CONFIG_SESSION_KEY);
        if (empty($this->sessionKey)) {
            throw new InvalidCartConfigurationException(
                sprintf(
                    'Cart session key (`%s`) is empty. Please provide a valid value.',
                    self::CONFIG_SESSION_KEY
                )
            );
        }
    }

    /**
     * @throws ContainerExceptionInterface
     * @throws NotFoundExceptionInterface
     */
    public function itemsCount(): int
    {
        if ($this->exists()) {
            return $this->items()->count();
        }
        return 0;
    }

    /**
     */
    public function exists(): bool
    {
        return $this->cartId() && $this->model();
    }

    public function cartId()
    {
        return $this->sessionManager->get($this->sessionKey);
    }

    public function model(): Model|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Builder|array|null
    {
        $uuid = $this->cartId();
        if ($uuid && isset($this->cartInstance)) {
            return $this->cartInstance;
        } elseif ($uuid) {
            $this->cartInstance = Cart::query()->where('uuid', $uuid)->first();
            return $this->cartInstance;
        }
        return null;
    }

    /**
     * @throws ContainerExceptionInterface
     * @throws NotFoundExceptionInterface
     */
    public function items(string|array $cartEagerLoadingRelations = 'variations'): Collection
    {
        return $this->cartInstance($cartEagerLoadingRelations)->variations;
    }

    /**
     * @throws ContainerExceptionInterface
     * @throws NotFoundExceptionInterface
     */
    public function cartInstance(mixed $relations = 'variations'): Model|null
    {
        if ($this->cartInstance) {
            return $this->cartInstance;
        }

        if ($user = auth('web')->user()) {
            $this->cartInstance = $user->carts()
                ->with($relations)
                ->where('uuid', '=', session()->get($this->sessionKey))
                ->first();
        }

        return $this->cartInstance = Cart::query()
            ->with($relations)
            ->where('uuid', '=', session()->get($this->sessionKey))
            ->first();
    }

    /**
     */
    public function showCartItems(): ?Model
    {
        if ($this->exists()) {
            return $this->cartInstance->load(['variations' => function ($query) {
                $query->with(['parent' => function ($query) {
                    $query->with('VariationType', 'VariationTypeValue', 'VariationImages');
                }, 'VariationType', 'VariationTypeValue']);
            }]);
        }
        return null;
    }

    /**
     */
    public function addItem($variation_id, $price, $quantity = 1)
    {
        $variation = Variation::query()->find($variation_id);

        $this->findOrCreateCartInstance();

        if ($existingVariation = $this->cartItemExists($variation->id)) {
            $quantity += $existingVariation->pivot->quantity;
        }
        $price = $existingVariation->pivot->price ?? $price;


        $quantity = min($quantity, $variation->StockCount());
        if ($quantity) {
            $this->cartInstance->variations()->syncWithoutDetaching([
                $variation->id => [
                    'quantity' => $quantity,
                    'price' => $price,
                    'total' => ($quantity * $price),
                ]
            ]);
            return response()->json(['message' => 'item added to cart successfully']);
        } else {
            return response()->json(['message' => 'item has no stock']);
        }
    }

    /**
     */
    public function findOrCreateCartInstance()
    {
        if (!$this->exists()) {
            $this->create();
        }
    }

    /**
     */
    public function create()
    {
        $this->cartInstance = Cart::with('variations')->make();

        if ($user = auth()->user()) {
            $this->associateUser($user);
        }

        $this->cartInstance->save();

        $this->sessionManager->put($this->sessionKey, $this->cartInstance->uuid);
    }

    public function associateUser($user)
    {
        $this->cartInstance->user()->associate($user);
        $this->cartInstance->save();
    }

    /**
     */
    public function cartItemExists($variation_id)
    {
        return $this->cartInstance->variations()->find($variation_id);
    }

    public function getUser(): Builder|Collection|Model|null
    {
        if ($this->exists() && $this->cartInstance->user_id) {
            return User::query()->find($this->cartInstance->user_id);
        }

        return null;
    }

    public function cartSubTotal(): float|int
    {
        if ($this->exists()) {
            return $this->cartInstance->variations()->sum('total');
        }
        return 0;
    }

    public function calculateCartItemPrice($quantity, $price): float|int
    {
        return ($quantity * $price);
    }

    public function destroy()
    {
        $this->clear();
        $this->model()->delete();
        $this->forget();
    }

    public function clear()
    {
        if ($cart = $this->model()) {
            $cart->variations()->detach();
        }
    }

    public function forget()
    {
        $this->cartInstance = null;
        session()->forget($this->sessionKey);
    }

    public function removeItemFromCart(Variation $variation)
    {
        $this->getCartInstance()?->variations()->detach($variation);
    }

    public function getCartInstance()
    {
        if ($this->exists()) {
            return $this->cartInstance;
        } else {
            return null;
        }
    }

    public function updateItemQuantity(Variation $variation, $quantity)
    {
        $this->getCartInstance()?->variations()->updateExistingPivot($variation->id, [
            'quantity' => $quantity,
            'total' => $quantity * $variation->price // calculates new total
        ]);
    }
}
