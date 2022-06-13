<?php

namespace App\Domain\Order\Services;

use App\Domain\Cart\Models\Cart;
use App\Domain\Product\Models\Variation;
use App\Domain\Store\Models\Store;
use App\Http\Cart\Requests\StoreCartRequest;
use App\Http\Cart\Requests\UpdateCartRequest;
use App\Http\Order\Requests\StoreOrderRequest;
use App\Http\variation\Requests\StoreCategoryRequest;
use Illuminate\Support\Facades\DB;

class OrderService
{
    public function store($request)
    {
        $store = Store::find($request['store_id']);

        //check if the store is open
        if (!$store->is_active) {
            return response()->json("store Closed at the time , come back later", 200);
        }

        dd($request);

        $order = auth()->user()->orders()->create([
            'store_id' => $request['store_id'],
            'notes' => $$request['notes'],
            'shipping_address_id' => $request['shipping_address_id'],
            'pickup_address_id' => $request['pickup_address_id'],
        ]);

        $cost = 0;
        $delivery_cost = $store->delivery_fees;

        $items = Cart::where('user_id', auth()->user()->id)->get();
        foreach ($items as $item) {

            $variation = Variation::find($item->variation_id);

            $readyVariation = [
                $item['variation_id'] => [
                    'qty' => $item->qty,
                    'price' => $variation->price,
                    'notes' => $item->notes,
                ],
            ]; //end ready variations

            //attaching the order info to pivot table
            $order->variations()->attach($readyVariation);
            //calculating the cost
            $cost += $this->calculateVariationCost($variation->price, $item->qty);
        }
        //     //minimum charge
        if ($cost >= $store->min_order) {
            $total = $cost + $delivery_cost;
            $commission =  0.5 * $total; //TODO:put setting here
            $net = $total - $commission;
            // updating the rest of the calculations
            $order->update([
                'total' => $total,
                'cost' => $cost,
                'delivery_fees' => $delivery_cost,
                'commission' => $commission,
                'net' => $net,
            ]);
        }

        // $store->notifications()->create([
        //     'title' => 'You Have a New Order',
        //     'content' => 'you have new order from '  . $request->user()->name . ' and Total Price is  ' . $total,
        //     'order_id' => $order->id,
        // ]);
        Cart::where('user_id', auth()->user()->id)->delete();
        DB::commit();
        return $order;
    }

    public function calculateVariationCost($price, $qty)
    {
        return ($price * $qty);
    }
}
