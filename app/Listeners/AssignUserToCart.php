<?php

namespace App\Listeners;

use App\Domain\Cart\Contracts\CartInterface;
use App\Domain\Cart\Services\CartService;
use Exception;

class AssignUserToCart
{
    protected CartInterface $cartService;

    /**
     * @throws Exception
     */
    public function __construct()
    {
         $this->cartService = new CartService(session());
    }

    public function handle($event)
    {
        if ($this->cartService->exists()) {
            if ($this->cartService->getUser() && $this->cartService->getUser()->id == $event->user->id) {
                return; //  Don't associate to the same user again
            }
            $this->cartService->associateUser($event->user);
        }
    }
}
