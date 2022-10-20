<?php

namespace App\Listeners;

use App\Domain\Variation\Models\Variation;
use App\Events\StockChangedEvent;

class UpdateVariationStock
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
     * @param StockChangedEvent $event
     * @return void
     */
    public function handle(StockChangedEvent $event)
    {
        $variation = Variation::query()->find($event->stock->variation_id);
        $stockCount = (int)$variation?->stocks()->sum('amount');

        if ($stockCount < 0) return;

        $variation->stock_count = $stockCount;
        $variation->save();
    }
}
