<?php

namespace Tests\Feature\Variation;

use App\Domain\Admin\Models\Admin;
use App\Domain\Variation\Models\VariationType;
use App\Domain\Variation\Models\VariationTypeValue;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Tests\TestCase;

class VariationTypeValueTest extends TestCase
{
    use RefreshDatabase;

    public function test_variation_type_value_can_be_created_and_with_slug()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $variationType = VariationType::factory()->create();

        $data = [
            'en' => 'red',
            'ar' => 'احمر',
            'hex_value' => '#225',
            'variation_type_id' => $variationType->id
        ];

        $response = $this->post(route('admin.variations.type.value.store'), $data)
            ->assertRedirect();

        $this->assertEquals('red', VariationTypeValue::first()->value);
        $this->assertEquals('red', VariationTypeValue::first()->slug);
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

        $this->assertEquals('blue', VariationTypeValue::first()->value);
    }

    public function test_variation_type_value_can_be_deleted()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');
        $variationTypeValue = VariationTypeValue::factory()->create();

        $response = $this->post(route('admin.variations.type.value.destroy', ['id' => $variationTypeValue->id]))
            ->assertRedirect();

        $this->assertNotNull(VariationTypeValue::withTrashed()->first()->deleted_at);
    }

    public function test_variation_type_value_can_be_restored()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');
        $variationTypeValue = VariationTypeValue::factory()->trashed()->create();

        $response = $this->post(route('admin.variations.type.value.restore', ['id' => $variationTypeValue->id]))
            ->assertRedirect();


        $this->assertNull(VariationTypeValue::first()->deleted_at);
    }

    public function testAdminCanAddColorImageToVariationTypeValue()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $variationTypeValue = VariationTypeValue::factory()->create();

        Storage::fake('public');

        $data = [
            'images' => [
                0 => UploadedFile::fake()->image("test.webp", 100, 100)
            ]
        ];

        $this->post(route('admin.add.color.image.to.variation.type.value', ['variationTypeValue' => $variationTypeValue]), $data)
            ->assertRedirect();

        $this->assertCount(1, Media::all());
    }
}
