<?php

namespace Tests\Feature\Order;

use App\Domain\Cart\Models\CartVariation;
use App\Domain\Cart\Services\CartService;
use App\Domain\Inventory\Models\Stock;
use App\Domain\Location\Enums\AddressTypeEnums;
use App\Domain\Location\Models\Address;
use App\Domain\Location\Models\District;
use App\Domain\Location\Services\AddressService;
use App\Domain\Order\Models\OrderVariation;
use App\Domain\Order\Services\OrderService;
use App\Domain\Shipping\Models\ShippingType;
use App\Domain\Store\Models\Store;
use App\Events\OrderPlacedEvent;
use App\Listeners\SyncVariationStockAfterOrderPlaced;
use Domain\User\Models\User;
use Exception;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use JetBrains\PhpStorm\NoReturn;
use Tests\TestCase;

class OrderTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /**
     * @throws Exception
     */
    #[NoReturn] public function testClientCanCheckout()
    {
        $this->expectsEvents(OrderPlacedEvent::class);

        $user = User::factory()->has(Address::factory())->create();
        $this->actingAs($user, 'web');

        $this->createCartAndStock();
        $district = District::factory()->create();

        $address = Address::first();

        $storeAddress = Store::first();

        $storeAddress->addresses()->create([
            'type' => AddressTypeEnums::PICKUP->value,
            'name' => 'Mustafa',
            'phone' => '01125475',
            'district_id' => $district->id,
            'street' => 'Hafez',
            'building' => '25',
            'floor' => '9',
            'apartment_number' => '18',
            'nearby_landmark' => 'Care',
        ]);

        $addressType = ShippingType::factory()->create(); // payment type


        $data = [
            'notes' => 'yes i wanted it',
            'shipping_address_id' => $address->id,
            'shipping_type_id' => $addressType->id,
        ];

        $this->post(route('client.checkout'), $data)->assertRedirect();

        $this->assertCount(2, OrderVariation::all());

    }

    public function createCartAndStock()
    {
        $stock = Stock::factory()->create(); // stock 15 here
        $stock2 = Stock::factory()->create(); // stock 15 here

        $data = [
            'price' => 241.2,
            'variation_id' => $stock->variation_id,
        ];
        $data2 = [
            'price' => 154.5,
            'variation_id' => $stock2->variation_id,
        ];
        $this->post(route('client.add.to.cart'), $data)->assertRedirect();

        $this->post(route('client.add.to.cart'), $data2)->assertRedirect();
    }

    public function testOrderItemsStockWillSyncWithNewStockCountAfterOrderBeingPlaced()
    {
        $user = User::factory()->has(Address::factory())->create();
        $this->actingAs($user, 'web');

        $this->createCartAndStock();

        $district = District::factory()->create();

        $address = Address::first();

        $storeAddress = Store::first();

        $storeAddress->addresses()->create([
            'type' => AddressTypeEnums::PICKUP->value,
            'district_id' => $district->id,
            'street' => 'Hafez',
            'building' => '25',
            'floor' => '9',
            'apartment_number' => '18',
            'nearby_landmark' => 'Care',
            'name' => 'Mustafa',
            'phone' => '01125475',
        ]);

        $addressType = ShippingType::factory()->create();


        $data = [
            'notes' => 'yes i wanted it',
            'shipping_address_id' => $address->id,
            'shipping_type_id' => $addressType->id,
        ];
        $cartService = new CartService(session());

        (new OrderService(cartService: $cartService, addressService: new AddressService()))->createOrderInstance($data);

        $listener = new SyncVariationStockAfterOrderPlaced($cartService);

        $listener->handle(new OrderPlacedEvent());

        $expectedData1 = [
            'variation_id' => 1,
            'amount' => -1,
        ];
        $expectedData2 = [
            'variation_id' => 2,
            'amount' => -1,
        ];

        $this->assertDatabaseHas('stocks', $expectedData1);
        $this->assertDatabaseHas('stocks', $expectedData2);
    }
}
