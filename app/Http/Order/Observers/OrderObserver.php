<?php

namespace App\Http\Order\Observers;


use App\Domain\Order\Models\Order;
use Illuminate\Support\Str;

class OrderObserver
{
    /**
     * Handle the Order "created" event.
     *
     * @param Order $order
     * @return void
     */
    public function created(Order $order)
    {
        //
    }

    /**
     * Handle the Order "updated" event.
     *
     * @param Order $order
     * @return void
     */
    public function updated(Order $order)
    {
        //
    }

    /**
     * Handle the Order "deleted" event.
     *
     * @param Order $order
     * @return void
     */
    public function deleted(Order $order)
    {
        //
    }

    /**
     * Handle the Order "restored" event.
     *
     * @param Order $order
     * @return void
     */
    public function restored(Order $order)
    {
        //
    }

    /**
     * Handle the Order "force deleted" event.
     *
     * @param Order $order
     * @return void
     */
    public function forceDeleted(Order $order)
    {
        //
    }

    /**
     * @param Order $order
     */
    public function creating(Order $order)
    {
//        $order->uuid = (string)Str::uuid();
    }
}
