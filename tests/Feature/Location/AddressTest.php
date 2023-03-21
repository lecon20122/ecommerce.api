<?php

namespace Tests\Feature\Location;

use App\Domain\Location\Enums\AddressTypeEnums;
use App\Domain\Location\Models\Address;
use App\Domain\Location\Models\City;
use App\Domain\Location\Models\District;
use App\Domain\Location\Models\Governorate;
use App\Support\Traits\FeatureTestTrait;
use Domain\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AddressTest extends TestCase
{
    use RefreshDatabase, WithFaker, FeatureTestTrait;

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
            'name' => 'Mustafa Khaled',
            'phone' => '0111477555'
        ];

        $this->post(route('api.client.add.addresses'), $data)->assertOk();

        $this->assertNotNull(Address::first());
        $this->assertEquals(AddressTypeEnums::SHIPPING->value, Address::first()->type);
    }

    public function testGetCairoLocations()
    {
        $this->authorizedUser();

        $gov = Governorate::factory()->create(['name' => 'cairo']);

        $cities = City::factory()->count(3)->create(['governorate_id' => $gov->id]);

        $district = District::factory()->create(['city_id' => $cities[0]->id]);

        $res = $this->get(route('api.sell.get.cairo.locations'))->assertOk();


        $this->assertEquals($gov->name, $res->json()['name']);
        $this->assertEquals($cities[0]->name, $res->json()['cities'][0]['name']);
        $this->assertEquals($district->name, $res->json()['cities'][0]['districts'][0]['name']);

    }
}
