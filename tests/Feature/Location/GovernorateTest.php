<?php

namespace Tests\Feature\Location;

use App\Domain\Admin\Models\Admin;
use App\Domain\Location\Models\Governorate;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class GovernorateTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testAdminCanCreateGovernorate()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $response = $this->post(route('admin.add.governorate'), ['name' => 'Cairo'])->assertRedirect();

        $this->assertEquals('Cairo', Governorate::first()->name);
    }

    public function testAdminCanUpdateGovernorate()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $gov = Governorate::factory()->create();

        $response = $this->post(route('admin.update.governorate', ['governorate' => $gov]), ['name' => 'Cairo'])->assertRedirect();

        $this->assertEquals('Cairo', Governorate::first()->name);
    }
}
