<?php

namespace Tests\Feature\Variation;

use App\Domain\Admin\Models\Admin;
use App\Domain\Variation\Models\SizeDescription;
use App\Domain\Variation\Models\SizeDescriptionValue;
use App\Domain\Variation\Models\Variation;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SizeDescriptionValueTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testAdminCanStoreSizeDescriptionValueToVariation()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');
        $variation = Variation::factory()->create();
        $sizeDescription = SizeDescription::factory()->create();
        $data = [
            'variation_id' => $variation->id,
            'size_description_id' => $sizeDescription->id,
            'value' => '44'
        ];
        $response = $this->post(route('admin.store.variations.size.description.value'), $data)->assertRedirect();

        $this->assertEquals('44', SizeDescriptionValue::query()->first()->value);
    }


    public function testAdminCanUpdateSizeDescriptionValueOfVariation()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $sizeDescriptionValue = SizeDescriptionValue::factory()->create();
        $data = [
            'value' => '44'
        ];
        $response = $this->post(route('admin.update.variations.size.description.value', ['id' => $sizeDescriptionValue->id]), $data)->assertRedirect();

        $this->assertEquals('44', SizeDescriptionValue::query()->first()->value);
    }

}
