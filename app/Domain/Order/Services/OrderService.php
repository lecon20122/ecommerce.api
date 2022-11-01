<?php

namespace App\Domain\Order\Services;


use App\Domain\Cart\Contracts\CartInterface;
use App\Domain\Location\Services\AddressService;
use App\Domain\Order\Models\Order;
use App\Events\OrderPlacedEvent;
use App\Listeners\SyncVariationStockAfterOrderPlaced;
use Exception;

class OrderService
{
    protected AddressService $addressService;
    protected CartInterface $cartService;

    /**
     * @param CartInterface $cartService
     * @param AddressService $addressService
     */
    public function __construct(CartInterface $cartService, AddressService $addressService)
    {
        $this->cartService = $cartService;
        $this->addressService = $addressService;
    }

    /**
     * @throws Exception
     */
    public function checkout(array $data)
    {
        $order = $this->createOrderInstance($data);

        $relationWillBeEagerLoaded = 'variations.store.addresses';
        foreach ($this->cartService->items($relationWillBeEagerLoaded) as $variation) {
            echo 'looped';
            if (!$variation->is_stockable) return;

            $readyVariation = [
                $variation->id => [
                    'quantity' => $variation->pivot->quantity,
                    'price' => $variation->pivot->price,
                    'store_id' => $variation->store_id,
                    'pickup_address_id' => $this->addressService->getStorePickupAddressId($variation),
                ]
            ];

            $order->variations()->attach($readyVariation);
        }

        $listener = new SyncVariationStockAfterOrderPlaced($this->cartService);
        $listener->handle(new OrderPlacedEvent());

        event(new OrderPlacedEvent());
        return $order->uuid;
    }

    /**
     * @throws Exception
     */
    public function createOrderInstance($data): Order
    {
        $order = new Order();
        $order->subtotal = $this->cartService->cartSubTotal();
        $order->notes = $data['notes'] ?? null;
        $order->shipping_address_id = $this->addressService->checkAndReturnShippingAddressId($data['shipping_address_id']);
        $order->shipping_type_id = $data['shipping_type_id'];
        $order->user_id = auth('web')->user()->getAuthIdentifier();

        $order->save();

        return $order;
    }
}
