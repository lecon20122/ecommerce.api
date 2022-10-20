<?php

namespace App\Listeners;

use App\Domain\Cart\Contracts\CartInterface;
use App\Events\OrderPlacedEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SyncVariationStockAfterOrderPlaced implements ShouldQueue
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct(protected CartInterface $cartService)
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
        foreach ($this->cartService->items() as $variation) {
            $variation->stocks()->create([
                'amount' => 0 - $variation->pivot->quantity
            ]);
        }
    }
}
