<?php

namespace App\Domain\Cart\Proxies;

use App\Domain\Cart\Contracts\CartInterface;
use App\Domain\Cart\Services\CartService;

class CartProxy implements CartInterface
{
    public function __construct(protected CartService $cart)
    {
    }

    public function create()
    {
        if (!$this->cart->exists()) {
            $this->cart->create();
        }
    }
}
