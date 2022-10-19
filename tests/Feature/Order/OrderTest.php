<?php

namespace Tests\Feature\Order;

use App\Domain\Inventory\Models\Stock;
use App\Domain\Location\Enums\AddressTypeEnums;
use App\Domain\Location\Models\Address;
use App\Domain\Location\Models\District;
use App\Domain\Order\Models\OrderVariation;
use App\Domain\Shipping\Models\ShippingType;
use App\Domain\Store\Models\Store;
use Domain\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use JetBrains\PhpStorm\NoReturn;
use Tests\TestCase;

class OrderTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    #[NoReturn] public function testClientCanCheckout()
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
        ]);

        $addressType = ShippingType::factory()->create();


        $data = [
            'notes' => 'yes i wanted it',
            'shipping_address_id' => $address->id,
            'shipping_type_id' => $addressType->id,
        ];
        $response = $this->post(route('client.checkout'), $data)->assertRedirect();

        $this->assertCount(2, OrderVariation::all());

    }

    public function createCartAndStock()
    {
        $stock = Stock::factory()->create(); // stock 15 here
        $stock2 = Stock::factory()->create(); // stock 15 here

        $data = [
            'quantity' => 3,
            'price' => 241.2,
            'variation_id' => $stock->variation_id,
        ];
        $data2 = [
            'quantity' => 6,
            'price' => 154.5,
            'variation_id' => $stock2->variation_id,
        ];
        $this->post(route('client.add.to.cart'), $data)->assertRedirect();
        $this->post(route('client.add.to.cart'), $data2)->assertRedirect();
    }
}
