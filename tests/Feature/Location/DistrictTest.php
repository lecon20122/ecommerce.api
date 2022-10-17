<?php

namespace Tests\Feature\Location;

use App\Domain\Admin\Models\Admin;
use App\Domain\Location\Models\City;
use App\Domain\Location\Models\District;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class DistrictTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testAdminCanCreateDistrict()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $city = City::factory()->create();

        $data = [
            'name' => 'Al Hay sabee',
            'city_id' => $city->id
        ];

        $response = $this->post(route('admin.add.district'), $data)->assertRedirect();

        $this->assertEquals('Al Hay sabee', District::first()->name);
    }

    public function testAdminCanUpdateDistrict()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $district = District::factory()->create();

        $response = $this->post(route('admin.update.district', ['district' => $district]), ['name' => 'Al Hay sabee'])->assertRedirect();

        $this->assertEquals('Al Hay sabee', District::first()->name);
    }
}
