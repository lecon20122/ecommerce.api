<?php

namespace Tests\Feature\Variation;

use App\Domain\Admin\Models\Admin;
use App\Domain\Variation\Models\VariationType;
use App\Domain\Variation\Models\VariationTypeValue;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class VariationTypeValueTest extends TestCase
{
    use RefreshDatabase;
    public function test_variation_type_value_can_be_created()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $variationType = VariationType::factory()->create();

        $data = [
            'en' => 'red',
            'ar' => 'احمر',
            'variation_type_id' => $variationType->id
        ];

        $response = $this->post(route('admin.variations.type.value.store'), $data)
            ->assertRedirect();
        $response->assertSessionHas('message', 'success');

        $this->assertEquals('red', VariationTypeValue::first()->value);
    }

    public function test_variation_type_value_can_be_updated()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');
        $variationTypeValue = VariationTypeValue::factory()->create();

        $data = [
            'en' => 'blue',
        ];

        $response = $this->post(route('admin.variations.type.value.update', ['id' => $variationTypeValue->id]), $data)
            ->assertRedirect();

        $response->assertSessionHas('message', 'success');

        $this->assertEquals('blue', VariationTypeValue::first()->value);
    }

    public function test_variation_type_value_can_be_deleted()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');
        $variationTypeValue = VariationTypeValue::factory()->create();

        $response = $this->post(route('admin.variations.type.value.destroy', ['id' => $variationTypeValue->id]))
            ->assertRedirect();

        $response->assertSessionHas('message', 'success');
        $this->assertNotNull(VariationTypeValue::withTrashed()->first()->deleted_at);
    }

    public function test_variation_type_value_can_be_restored()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');
        $variationTypeValue = VariationTypeValue::factory()->trashed()->create();

        $response = $this->post(route('admin.variations.type.value.restore', ['id' => $variationTypeValue->id]))
            ->assertRedirect();

        $response->assertSessionHas('message', 'success');

        $this->assertNull(VariationTypeValue::first()->deleted_at);
    }
}
