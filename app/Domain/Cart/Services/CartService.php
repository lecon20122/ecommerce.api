<?php

namespace App\Domain\Cart\Services;

use App\Domain\Cart\Contracts\CartInterface;
use App\Domain\Cart\Models\Cart;
use App\Domain\Variation\Models\Variation;
use Domain\User\Models\User;
use Exception;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Session\SessionManager;
use Illuminate\Support\Collection;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;

class CartService implements CartInterface
{
    protected const CONFIG_SESSION_KEY = 'cart.session.key';

    protected mixed $sessionKey;
    protected Model $cartInstance;

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

    /**
     * @throws ContainerExceptionInterface
     * @throws NotFoundExceptionInterface
     */
    public function items(): Collection
    {
        return $this->cartInstance()->variations;
    }

    /**
     * @throws ContainerExceptionInterface
     * @throws NotFoundExceptionInterface
     */
    protected function cartInstance(): Model|null
    {
        if ($this->cartInstance) {
            echo 'second time';
            return $this->cartInstance;
        }
        echo 'first time';

        return $this->cartInstance = Cart::query()
            ->with('variations')
            ->where('uuid', '=', session()->get($this->sessionKey))
            ->first();
    }

    /**
     */
    public function addItem($variation_id, $price, $quantity = 0)
    {
        $variation = Variation::query()->find($variation_id);

        $this->findOrCreateCartInstance();
//        echo $this->cartItemExists($variation);
        if ($existingVariation = $this->cartItemExists($variation)) {
            $quantity += $existingVariation->pivot->quantity;
        }

        $this->cartInstance->variations()->syncWithoutDetaching([
            $variation->id => [
                'quantity' => min($quantity, $variation->StockCount()->count),
                'price' => $price,
            ]
        ]);
        $this->cartInstance->save();
    }

    /**
     */
    protected function findOrCreateCartInstance()
    {
        if (!$this->exists()) {
            $this->create();
        }
    }

    public function exists()
    {
        return $this->sessionManager->get($this->sessionKey);
    }

    /**
     */
    public function create(?User $user = null)
    {
        $this->cartInstance = Cart::with('variations')->make();

        if ($user) {
            $this->cartInstance->user()->associate($user);
        }

        $this->cartInstance->save();

        $this->sessionManager->put($this->sessionKey, $this->cartInstance->uuid);
    }

    /**
     */
    protected function cartItemExists(Variation $variation)
    {
        return $this->cartInstance->variations()->find($variation->id);
    }
}
