<?php

namespace App\Domain\Cart\Services;

use App\Domain\Cart\Contracts\CartInterface;
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
            throw new Exception(
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
        return $this->items()->count();
    }

//    public function showCart()
//    {
//        if ($user = auth('web')->user()) {
//
//        }
//    }

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
    public function cartInstance($relations = 'variations'): Model|null
    {
        if ($this->cartInstance) {
            return $this->cartInstance;
        }

        return $this->cartInstance = Cart::query()
            ->with($relations)
            ->where('uuid', '=', session()->get($this->sessionKey))
            ->first();
    }

    /**
     */
    public function addItem($variation_id, $price, $quantity = 0)
    {
        $variation = Variation::query()->find($variation_id);

        $this->findOrCreateCartInstance();

        if ($existingVariation = $this->cartItemExists($variation->id)) {
            $quantity += $existingVariation->pivot->quantity;
        }

        $this->cartInstance->variations()->syncWithoutDetaching([
            $variation->id => [
                'quantity' => min($quantity, $variation->StockCount()),
                'price' => $existingVariation->pivot->price ?? $price,
            ]
        ]);
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
        $this->findOrCreateCartInstance();

        $subtotal = 0;

        foreach ($this->items() as $item) {
            $subtotal += $this->calculateCartItemPrice($item->pivot->quantity, $item->pivot->price);
        }

        return $subtotal;
    }

    public function calculateCartItemPrice($quantity, $price): float|int
    {
        return ($quantity * $price);
    }
}
