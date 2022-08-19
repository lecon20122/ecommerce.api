<?php

namespace App\Domain\Order\Services;

use App\Domain\Cart\Models\Cart;
use App\Domain\Product\Models\Variation;
use App\Domain\Shipping\Models\ShippingType;
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


        $order = auth()->user()->orders()->create([
            'store_id' => $request['store_id'],
            'notes' => $request['notes'],
            'shipping_address_id' => $request['shipping_address_id'],
            'pickup_address_id' => $request['pickup_address_id'],
            'shipping_type_id' => $request['shipping_type_id'],
        ]);

        //        dd($request);
        $subtotal = 0;
        $delivery_fees = ShippingType::find($request['shipping_type_id'])->price;

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
            //calculating the subtotal
            $subtotal += $this->calculateVariationsubtotal($variation->price, $item->qty);
        }

        $total = $subtotal + $delivery_fees;
        $commission =  0.1 * $subtotal;
        $net = $total - ($commission + $delivery_fees);
        // updating the rest of the calculations
        $order->update([
            'total' => $total,
            'subtotal' => $subtotal,
            'delivery_fees' => $delivery_fees,
            'commission' => $commission,
            'net' => $net,
        ]);
        // $store->notifications()->create([
        //     'title' => 'You Have a New Order',
        //     'content' => 'you have new order from '  . $request->user()->name . ' and Total Price is  ' . $total,
        //     'order_id' => $order->id,
        // ]);
        Cart::where('user_id', auth()->user()->id)->delete();
        DB::commit();
        return $order;
    }

    public function calculateVariationsubtotal($price, $qty)
    {
        return ($price * $qty);
    }
}
