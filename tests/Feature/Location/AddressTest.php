<?php

namespace Tests\Feature\Location;

use App\Domain\Location\Enums\AddressTypeEnums;
use App\Domain\Location\Models\Address;
use App\Domain\Location\Models\District;
use Domain\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AddressTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testClientCanCreateAddress()
    {
        $user = User::factory()->createQuietly();
        $this->actingAs($user, 'web');

        $district = District::factory()->create();

        $data = [
            'type' => 'shipping',
            'district_id' => $district->id,
            'street' => 'Hafez',
            'building' => '25',
            'floor' => '9',
            'apartment_number' => '18',
            'nearby_landmark' => 'Care',
        ];

        $response = $this->post(route('client.add.address'), $data)->assertRedirect();

        $this->assertNotNull(Address::first());
        $this->assertEquals(AddressTypeEnums::SHIPPING->value, Address::first()->type);
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testClientCanUpdateAddress()
    {
        $user = User::factory()->create();
        $this->actingAs($user, 'web');

        $address = Address::factory()->create();

        $data = [
            'type' => AddressTypeEnums::HOME->value,
        ];

        $response = $this->post(route('client.update.address' , ['address' => $address]), $data)->assertRedirect();

        $this->assertEquals(AddressTypeEnums::HOME->value, Address::first()->type);
    }
}
