<?php

namespace Tests\Feature\Order;

use App\Domain\Location\Enums\LocationEnums;
use App\Domain\Location\Models\District;
use App\Domain\Product\Models\Variation;
use App\Domain\Shipping\Models\ShippingType;
use App\Domain\Store\Models\Store;
use Domain\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use JetBrains\PhpStorm\NoReturn;
use Tests\TestCase;

class OrderTest extends TestCase
{

    public function addressData()
    {
        return [
            'street' => $this->faker->unique()->streetName,
            'building' => $this->faker->randomNumber,
            'floor' => $this->faker->randomNumber,
            'apartment_number' => $this->faker->randomNumber,
            'district_id' => District::factory()->create()->id,
            'type' => LocationEnums::ADDRESS_TYPE_HOME,
            'nearby_landmark' => $this->faker->streetName,
        ];
    }

    public function generateBearerTokenHeader($user): array
    {
        return ['Authorization' => 'Bearer ' . $user->createToken($user->email, ['customer'])->plainTextToken];
    }


    use WithFaker, RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    #[NoReturn] public function test_order_can_be_submitted()
    {
        $user = User::factory()->create();
        $tokenHeader = $this->generateBearerTokenHeader($user);

        $variation = Variation::factory()->create();

        $data = [
            'variation_id' => $variation->id,
            'notes' => $this->faker->sentence,
            'qty' => 3,
        ];

        //create cart
        $user->carts()->create($data);
        $shippingType = ShippingType::factory()->create();
        $store = Store::with('addresses')->where('id', $variation->store_id)->first();
        $address = $store->addresses()->create($this->addressData());

        $formRequest = [
            'store_id' => $variation->store_id,
            'notes' => $this->faker->sentence,
            'shipping_address_id' => $address->id,
            'pickup_address_id' => $address->id,
            'shipping_type_id' => $shippingType->id,
        ];

        $response = $this->post(route('order.store'), $formRequest, $tokenHeader)->assertCreated();
    }
}
