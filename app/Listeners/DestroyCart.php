<?php

namespace App\Listeners;


use App\Domain\Cart\Models\Cart;
use App\Events\OrderPlacedEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class DestroyCart
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param OrderPlacedEvent $event
     * @return void
     */
    public function handle(OrderPlacedEvent $event)
    {

    }
}
