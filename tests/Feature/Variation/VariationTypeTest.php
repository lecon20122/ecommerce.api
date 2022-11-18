<?php

namespace Tests\Feature\Variation;

use App\Domain\Admin\Models\Admin;
use App\Domain\Variation\Models\VariationType;
use Illuminate\Foundation\Testing\RefreshDatabase;
use JetBrains\PhpStorm\NoReturn;
use Tests\TestCase;

class VariationTypeTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    #[NoReturn] public function test_variation_type_can_be_created()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $data = [
            'en' => 'color',
            'ar' => 'لون',
            'is_mediable' => true,
            'is_stockable' => false,
        ];

        $response = $this->post(route('admin.variations.type.store'), $data)
            ->assertRedirect();
        $response->assertSessionHas('message', 'success');

        $this->assertEquals('color', VariationType::first()->type);
    }

    public function test_variation_type_can_be_updated()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');
        $variationType = VariationType::factory()->create();

        $data = [
            'en' => 'size',
        ];

        $response = $this->post(route('admin.variations.type.update', ['id' => $variationType->id]), $data)
            ->assertRedirect();

        $response->assertSessionHas('message', 'success');

        $this->assertEquals('size', VariationType::first()->type);
    }

    public function test_variation_type_can_be_deleted()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');
        $variationType = VariationType::factory()->create();

        $response = $this->post(route('admin.variations.type.destroy', ['id' => $variationType->id]))
            ->assertRedirect();

        $response->assertSessionHas('message', 'success');
        $this->assertNotNull(VariationType::withTrashed()->first()->deleted_at);
    }

    public function test_variation_type_can_be_restored()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');
        $variationType = VariationType::factory()->trashed()->create();

        $response = $this->post(route('admin.variations.type.restore', ['id' => $variationType->id]))
            ->assertRedirect();

        $response->assertSessionHas('message', 'success');

        $this->assertNull(VariationType::first()->deleted_at);
    }
}
