<?php

namespace App\Domain\Cart\Contracts;

use Domain\User\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

interface CartInterface
{
    public function create();

    public function exists(): bool;

    public function itemsCount(): int;

    public function items(): Collection;

    public function cartInstance(): Model|null;

    public function addItem($variation_id, $price, $quantity = 0);

    public function findOrCreateCartInstance();

    public function cartId();

    public function cartItemExists($variation_id);

    public function getUser();

    public function associateUser(User $user);

    public function model();

}
