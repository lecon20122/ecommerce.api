<?php

namespace App\Contracts;

use App\Domain\Variation\Models\Variation;
use Illuminate\Contracts\Auth\Authenticatable;

interface CartContract
{
    /**
     * Add an item to the cart (or adds the quantity if the product is already in the cart)
     *
     */
    public function addItem(Variation $variation, $qty = 1);

    /**
     * Removes an item from the cart
     *
     * @param object|int $item Object: item or int = item id
     */
    public function removeItem(object|int $item);

    /**
     * Removes a product from the cart
     *
     * @param Variation $variation
     */
    public function removeProduct(Variation $variation);

    /**
     * Clears the entire cart
     */
    public function clear();

    /**
     * Returns the number of items in the cart
     *
     * @return int
     */
    public function itemCount(): int;

    /**
     * Returns the cart's associated user, or NULL
     *
     * @return Authenticatable|null
     */
    public function getUser(): ?Authenticatable;

    /**
     * Set the user of the cart
     *
     * @param integer|Authenticatable $user User object or user id
     */
    public function setUser(int|Authenticatable $user);
}
