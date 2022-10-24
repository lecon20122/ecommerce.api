<?php

namespace App\Domain\Cart\Contracts;

use Domain\User\Models\User;
use Illuminate\Support\Collection;

interface CartInterface
{
    public function create();

    public function exists(): bool;

    public function itemsCount(): int;

    public function items(): Collection;

    public function cartInstance();

    public function addItem($variation_id, $price, $quantity);

    public function findOrCreateCartInstance();

    public function cartId();

    public function cartItemExists($variation_id);

    public function getUser();

    public function associateUser(User $user);

    public function model();

    public function cartSubTotal();

    public function showCartItems();

    public function destroy();

}
