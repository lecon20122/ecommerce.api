<?php

namespace Tests\Feature\Variation;

use App\Domain\Admin\Models\Admin;
use App\Domain\Product\Models\Product;
use App\Domain\Product\Models\Variation;
use Domain\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Laravel\Sanctum\Sanctum;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Tests\TestCase;

class VariationTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_variation_can_be_created_with_images_by_admin()
    {
        $admin = Admin::factory()->create();
        Sanctum::actingAs($admin, [], 'admin');
        $product = Product::factory()->create();
        Storage::fake('public');
        $data = [
            'en' => 'black',
            'ar' => 'اسود',
            'price' => 150,
            'type' => 'color',
            'order' => 1,
            'product_id' => $product->id,
            'images' => [
                0 => UploadedFile::fake()->image("test.jpg", 1000, 1000)
            ]
        ];

        $response = $this->post(route('admin.variations.store'), $data)->assertRedirect();
//        dd($response);
        $response->assertSessionHas('message', 'success');
        $this->assertEquals('black', Variation::first()->title);
        $this->assertCount(1, Variation::all());
        $this->assertCount(1,Media::all());
    }

    public function test_variation_can_be_updated_by_admin()
    {
        $admin = Admin::factory()->create();
        Sanctum::actingAs($admin, [], 'admin');
        $variation = Variation::factory()->create();

        $data = [
            'en' => 'new black',
        ];

        $response = $this->post(route('admin.variations.update', ['variation' => $variation]),$data)->assertRedirect();
        $response->assertSessionHas('message', 'success');
        $this->assertEquals('new black', Variation::first()->title);
    }

    public function test_variation_can_be_destroyed()
    {
        $admin = Admin::factory()->create();
        Sanctum::actingAs($admin, [], 'admin');
        $variation = Variation::factory()->create();

        $this->post(route('admin.variations.destroy', ['id' => $variation->id]))->assertRedirect();

        $this->assertNull(Variation::first());
    }

    public function test_variation_can_be_restored()
    {
        $admin = Admin::factory()->create();
        Sanctum::actingAs($admin, [], 'admin');
        $variation = Variation::factory()->trashed()->create();

        $response = $this->post(route('admin.variations.restore', ['id' => $variation->id]))->assertRedirect();

        $response->assertSessionHas('message', 'success');
        $variation->refresh();
        $this->assertNull(Variation::first()->deleted_at);
    }

    public function test_variation_can_be_force_delete()
    {
        $admin = Admin::factory()->create();
        Sanctum::actingAs($admin, [], 'admin');
        $variation = Variation::factory()->create();

        $response = $this->post(route('admin.variations.permanent.delete', ['id' => $variation->id]))->assertRedirect();

        $response->assertSessionHas('message', 'success');

        $this->assertNull(Variation::first());
    }
}
