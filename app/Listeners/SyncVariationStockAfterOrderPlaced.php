<?php

namespace App\Listeners;


use App\Events\OrderPlacedEvent;
use Illuminate\Contracts\Queue\ShouldQueue;

class SyncVariationStockAfterOrderPlaced implements ShouldQueue
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
    // public function handle(OrderPlacedEvent $event)
    // {
    //     foreach ($this->cartService->items() as $variation) {
    //         $variation->stocks()->create([
    //             'amount' => 0 - $variation->pivot->quantity
    //         ]);
    //     }
    // }
}
