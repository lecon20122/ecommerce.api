<?php

namespace App\Domain\Cart\Services;

use App\Contracts\CartContract;
use App\Contracts\CartManagerContract;
use App\Domain\Cart\Exceptions\InvalidCartConfigurationException;
use App\Domain\Cart\Models\Cart;
use App\Domain\Variation\Models\Variation;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Collection;

class CartManager implements CartManagerContract
{

    public const CONFIG_SESSION_KEY = 'cart_session_key';

    /** @var string The key in session that holds the cart id */
    protected mixed $sessionKey;

    /** @var  Cart  The Cart model instance */
    protected Cart $cart;

    /**
     * @throws InvalidCartConfigurationException
     */
    public function __construct()
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

    public function __call(string $name, array $arguments): mixed
    {
        if (null !== $this->model()) {
            return call_user_func([$this->model(), $name], ...$arguments);
        }

        return null;
    }

    /**
     * @inheritDoc
     */
    public function model(): ?Cart
    {
        $id = $this->getCartId();

        if ($id && $this->cart) {
            return $this->cart;
        } elseif ($id) {
            $this->cart = Cart::find($id);

            return $this->cart;
        }

        return null;
    }

    /**
     * Returns the model id of the cart for the current session
     * or null if it does not exist
     *
     * @return int|null
     */
    protected function getCartId(): ?int
    {
        return session($this->sessionKey);
    }

    /**
     * @inheritDoc
     */
    public function getItems(): Collection
    {
        return $this->exists() ? $this->model()->getItems() : collect();
    }

    /**
     * @inheritDoc
     */
    public function exists(): bool
    {
        return (bool)$this->getCartId() && $this->model();
    }

    /**
     * @inheritDoc
     */
    public function removeItem($item)
    {
        if ($cart = $this->model()) {
            $cart->removeItem($item);
        }
    }

    /**
     * @inheritDoc
     */
    public function removeProduct(Variation $variation)
    {
        if ($cart = $this->model()) {
            $cart->removeProduct($variation);
        }
    }

    /**
     * @inheritDoc
     */
    public function total(): float
    {
        return $this->exists() ? $this->model()->total() : 0;
    }

    /**
     * @inheritDoc
     */
    public function doesNotExist(): bool
    {
        return !$this->exists();
    }

    /**
     * @inheritDoc
     */
    public function isNotEmpty(): bool
    {
        return !$this->isEmpty();
    }

    /**
     * @inheritDoc
     */
    public function isEmpty(): bool
    {
        return 0 == $this->itemCount();
    }

    /**
     * @inheritDoc
     */
    public function itemCount(): int
    {
        return $this->exists() ? $this->model()->itemCount() : 0;
    }

    /**
     * @inheritDoc
     */
    public function destroy()
    {
        $this->clear();
        $this->model()->delete();
        $this->forget();
    }

    /**
     * @inheritDoc
     */
    public function clear()
    {
        if ($cart = $this->model()) {
            $cart->clear();
        }
    }

    /**
     * @inheritDoc
     */
    public function forget()
    {
        $this->cart = null;
        session()->forget($this->sessionKey);
    }

    /**
     * @inheritdoc
     */
    public function create($forceCreateIfExists = false)
    {
        if ($this->exists() && !$forceCreateIfExists) {
            return;
        }

        $this->createCart();
    }

    /**
     * Creates a new cart model and saves it's id in the session
     */
    protected function createCart(): CartContract
    {
        if (config('vanilo.cart.auto_assign_user') && Auth::check()) {
            $attributes = [
                'user_id' => Auth::user()->id
            ];
        }

        return $this->setCartModel(Cart::create($attributes ?? []));
    }

    protected function setCartModel(CartContract $cart): CartContract
    {
        $this->cart = $cart;

        session([$this->sessionKey => $this->cart->id]);

        return $this->cart;
    }

    /**
     * @inheritDoc
     */
    public function getUser(): Authenticatable|null
    {
        return $this->exists() ? $this->model()->getUser() : null;
    }

    /**
     * @inheritdoc
     */
    public function removeUser()
    {
        $this->setUser(null);
    }

    /**
     * @inheritDoc
     */
    public function setUser($user)
    {
        if ($this->exists()) {
            $this->cart->setUser($user);
            $this->cart->save();
            $this->cart->load('user');
        }
    }

    public function restoreLastActiveCart($user)
    {
        $lastActiveCart = Cart::ofUser($user)->actives()->latest()->first();

        if ($lastActiveCart) {
            $this->setCartModel($lastActiveCart);
        }
    }

    public function mergeLastActiveCartWithSessionCart($user)
    {
        /** @var Cart $lastActiveCart */
        if ($lastActiveCart = Cart::ofUser($user)->actives()->latest()->first()) {
            /** @var Variation $item */
            foreach ($lastActiveCart->getItems() as $item) {
                $this->addItem($item->getBuyable(), $item->getQuantity());
            }

            $lastActiveCart->delete();
        }
    }

    /**
     * @inheritDoc
     */
    public function addItem(Variation $variation, $qty = 1)
    {
        $cart = $this->findOrCreateCart();

        return $cart->addItem($variation, $qty);
    }

    /**
     * Returns the cart model for the current session by either fetching it or creating one
     *
     * @return CartContract|Cart
     */
    protected function findOrCreateCart(): CartContract|Cart
    {
        return $this->model() ?: $this->createCart();
    }
}
