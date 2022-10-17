<?php

namespace Tests\Feature\Location;

use App\Domain\Admin\Models\Admin;
use App\Domain\Location\Models\City;
use App\Domain\Location\Models\Governorate;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CityTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testAdminCanCreateCity()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $gov = Governorate::factory()->create();
        $data = [
            'name' => 'Nasr City',
            'governorate_id' => $gov->id
        ];
        $response = $this->post(route('admin.add.city'),$data)->assertRedirect();

        $this->assertEquals('Nasr City', City::first()->name);
    }

    public function testAdminCanUpdateCity()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $gov = City::factory()->create();

        $response = $this->post(route('admin.update.city', ['city' => $gov]), ['name' => 'Nasr City'])->assertRedirect();

        $this->assertEquals('Nasr City', City::first()->name);
    }
}
