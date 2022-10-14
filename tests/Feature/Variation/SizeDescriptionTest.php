<?php

namespace Tests\Feature\Variation;

use App\Domain\Admin\Models\Admin;
use App\Domain\Variation\Models\SizeDescription;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SizeDescriptionTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testThatAdminCanStoreSizeDescription()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');
        $data = [
            'name_en' => 'Shoulder',
            'name_ar' => 'Shoulder ar',
            'guide_en' => 'Shoulder guide en',
            'guide_ar' => 'Shoulder guide ar',
        ];
        $response = $this->post(route('admin.store.variations.size.description'), $data)->assertRedirect();

        $response->assertSessionHas('message', 'success');
        $sizeDescription = SizeDescription::query()->first();
        $this->assertEquals('Shoulder', $sizeDescription->name);
    }

    public function testThatAdminCanUpdateSizeDescription()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');
        $sizeDescription = SizeDescription::factory()->create();

        $data = [
            'name_en' => 'Shoulder updated',
        ];
        $response = $this->post(route('admin.update.variations.size.description', ['id' => $sizeDescription->id]), $data)->assertRedirect();

        $response->assertSessionHas('message', 'success');
        SizeDescription::query()->first();
        $this->assertEquals('Shoulder updated', SizeDescription::query()->first()->name);
    }
}
