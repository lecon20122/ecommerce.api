<?php

namespace Tests\Feature\Store;

use App\Domain\Admin\Models\Admin;
use App\Domain\Location\Enums\AddressTypeEnums;
use App\Domain\Location\Models\Address;
use App\Domain\Location\Models\City;
use App\Domain\Location\Models\District;
use App\Domain\Location\Models\Governorate;
use App\Domain\Store\Models\SellerRequest;
use App\Domain\Store\Models\Store;
use App\Domain\Store\Services\StoreService;
use App\Support\Traits\FeatureTestTrait;
use Domain\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class
StoreTest extends TestCase
{
    use RefreshDatabase, WithFaker, FeatureTestTrait;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_store_can_be_created()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $data = [
            'name' => 'JK',
            'description' => $this->faker->realText(),
            'user_id' => User::factory()->create()->id,
        ];

        $response = $this->post(route('admin.stores.store'), $data)
            ->assertRedirect();

        $response->assertSessionHas('message', 'success');

        $this->assertEquals('JK', Store::first()->name);
    }

    public function test_store_can_be_updated()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $user = User::factory()->create();

        $store = $user->store()->create([
            'name' => $this->faker->unique()->firstName,
            'description' => $this->faker->realText(),
        ]);

        $data = [
            'name' => 'new store',
        ];

        $response = $this->post(route('admin.stores.update', ['store' => $store]), $data)->assertRedirect();

        $store->refresh();

        $this->assertEquals('new store', $store->name);
    }

    public function test_store_can_be_destroyed()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $user = User::factory()->create();

        $store = $user->store()->create([
            'name' => $this->faker->unique()->firstName,
            'description' => $this->faker->realText(),
        ]);

        $response = $this->post(route('admin.stores.destroy', ['id' => $store->id]))->assertRedirect();

        $this->assertNull(Store::first());
    }

    public function testStoreCanBeApprovedByAdmin()
    {
        $admin = $this->authorizedAdmin();

        $store = Store::factory()->create();

        $response = $this->post(route('admin.stores.approve', ['store' => $store]))->assertRedirect();

        

        $store->refresh();
        $this->assertEquals($admin->id, $store->approved_by);
        $this->assertNotNull($store->approved_at);
    }

    public function testUserCanCreateSellerRequest()
    {
        $user = $this->authorizedUser();

        $gov = Governorate::factory()->create(['name' => 'cairo']);

        $cities = City::factory()->count(3)->create(['governorate_id' => $gov->id]);

        $district = District::factory()->create(['city_id' => $cities[0]->id]);

        $data = [
            'brand_name' => 'Mustafa Store',
            'phone' =>  '01066199150',
            'company_register' => '19998712',
            'district_id' => $district->id,
            'street' => 'street',
            'building' => 'building',
            'what_store_sells' => 'mens shoes, womens shoes, kids shoes',
            'social_media' => 'facebook.com/mustafa',
        ];

        $this->post(route('api.sell.create.seller.request'), $data)->assertOk();

        $this->assertEquals($user->id, SellerRequest::first()->id);
    }

    public function testThatAdminCanApproveStoreSellerRequest()
    {
        $admin = $this->authorizedSuperAdmin();

        $user = $this->unAuthorizedUser();

        $gov = Governorate::factory()->create(['name' => 'cairo']);

        $cities = City::factory()->count(3)->create(['governorate_id' => $gov->id]);

        $district = District::factory()->create(['city_id' => $cities[0]->id]);

        $addressData = [
            'name' => $user->name,
            'phone' =>  '01066199150',
            'district_id' => $district->id,
            'street' => 'street',
            'building' => 'building',
            'type' => AddressTypeEnums::PICKUP->value,
        ];

        $pickupLocation =  $user->addresses()->create($addressData);

        $data = [
            'user_id' => $user->id,
            'brand_name' => 'Mustafa Store',
            'company_register' => '19998712',
            'what_store_sells' => 'mens shoes, womens shoes, kids shoes',
            'social_media' => 'facebook.com/mustafa',
            'pickup_location_id' => $pickupLocation->id,
        ];

        $sellerRequest = SellerRequest::create($data);

        $response = $this->post(route('admin.seller.requests.approve',), ['id' => $sellerRequest->id])
            ->assertRedirect();


        $this->assertEquals(Store::first()->approved_at , now());
        $this->assertEquals(Store::first()->approved_by , $admin->id);
        $this->assertNotNull(Store::first()->addresses()->first());
    }
}
