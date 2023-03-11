<?php

namespace App\Domain\Order\Services;


use App\Domain\Cart\Services\CartService;
use App\Domain\Location\Services\AddressService;
use Exception;

class OrderService
{

    /**
     * @param AddressService $addressService
     */
    public function __construct(protected AddressService $addressService)
    {
    }

    public function checkout()
    {

        foreach ((new CartService())->getCartItemsGroupedByStoreName() as $store_id => $items) {
            dd($store_id);
        }
    }

    /**
     * @throws Exception
     */
    // public function checkout(array $data)
    // {
    //     $order = $this->createOrderInstance($data);

    //     $relationWillBeEagerLoaded = 'variations.store.addresses';
    //     foreach ($this->cartService->items($relationWillBeEagerLoaded) as $variation) {
    //         echo 'looped';
    //         if (!$variation->is_stockable) return;

    //         $readyVariation = [
    //             $variation->id => [
    //                 'quantity' => $variation->pivot->quantity,
    //                 'price' => $variation->pivot->price,
    //                 'store_id' => $variation->store_id,
    //                 'pickup_address_id' => $this->addressService->getStorePickupAddressId($variation),
    //             ]
    //         ];

//         $order->variations()->attach($readyVariation);
    //     }

    //     $listener = new SyncVariationStockAfterOrderPlaced($this->cartService);
    //     $listener->handle(new OrderPlacedEvent());

    //     event(new OrderPlacedEvent());
    //     return $order->uuid;
    // }

    /**
     * @throws Exception
     */
    // public function createOrderInstance($data): Order
    // {
    //     $order = new Order();
    //     $order->subtotal = $this->cartService->cartSubTotal();
    //     $order->notes = $data['notes'] ?? null;
    //     $order->shipping_address_id = $this->addressService->checkAndReturnShippingAddressId($data['shipping_address_id']);
    //     $order->shipping_type_id = $data['shipping_type_id'];
    //     $order->user_id = auth('web')->user()->getAuthIdentifier();

    //     $order->save();

    //     return $order;
    // }
}
