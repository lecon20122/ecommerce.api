<?php

namespace App\Domain\Cart\Services;

use App\Domain\Cart\Models\Cart;
use App\Http\Cart\Requests\StoreCartRequest;
use App\Http\Cart\Requests\UpdateCartRequest;
use App\Http\Product\Requests\StoreCategoryRequest;

class CartService
{
    /**
     * @param StoreCartRequest $request
     * @return mixed
     */
    public function store(StoreCartRequest $request): mixed
    {
        return auth()->user()->carts()->create($request->validated());
    }

    public function update(array $request, Cart $cart)
    {
        $cart->update($request);
    }

    public function delete(Cart $cart)
    {
        $cart->delete();
    }
}
