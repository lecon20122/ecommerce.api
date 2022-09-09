<?php

namespace Tests\Feature\Product;

use App\Domain\Admin\Models\Admin;
use App\Domain\Category\Models\Category;
use App\Domain\Product\Models\Product;
use App\Domain\Store\Models\Store;
use App\Support\Enums\HttpStatusEnums;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Storage;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Tests\TestCase;

class ProductTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_as_a_admin_product_can_be_created_with_thumbnail()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');
        $store = Store::factory()->create();

        Storage::fake('public');

        $data = [
            'en' => 'new product',
            'ar' => 'منتج جديد',
            'description' => $this->faker->text,
            'price' => $this->faker->randomFloat(00, 50, 300),
            'live_at' => now(),
            'store_id' => $store->id,
            'images' => [
                0 => UploadedFile::fake()->image("test.jpg", 1000, 1000)
            ]
        ];

        $response = $this->post(route('admin.products.store'), $data);
        $response->assertSessionHas('message', 'success');
        $product = Product::query()->first();
        $this->assertEquals('new product', $product->title);
    }

    public function test_as_a_admin_product_can_be_updated()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $product = Product::factory()->create();
        Storage::fake('public');
        $data = [
            'en' => 'hello',
            'images' => [
                0 => UploadedFile::fake()->image("test.jpg", 1000, 1000)
            ]
        ];

        $response = $this->post(route('admin.products.update', ['product' => $product]), $data);
        $response->assertSessionHas('message', 'success');
        $product->refresh();
        $this->assertEquals('hello', $product->title);
    }

    public function test_as_a_admin_product_can_be_destroyed()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $product = Product::factory()->create();

        $response = $this->post(route('admin.products.destroy', ['id' => $product->id]))->assertRedirect();
        $response->assertSessionHas('message', 'success');
        $this->assertNull(Product::first());
    }

    public function that_as_a_admin_images_can_added_to_product()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $product = Product::factory()->create();

        Storage::fake('public');
        $data = [
            'images' => [
                0 => UploadedFile::fake()->image("test.jpg", 1000, 1000),
                1 => UploadedFile::fake()->image("test.jpg", 1000, 1000),
                2 => UploadedFile::fake()->image("test.jpg", 1000, 1000),
            ]
        ];

        $response = $this->post(route('admin.add.media.to.product', ['product' => $product]), $data)->assertRedirect();
        $response->assertSessionHas('message', 'success');
        $this->assertCount(3, Media::all());
    }

    public function test_as_a_admin_can_attach_categories_to_product()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');
        $product = Product::factory()->create();
        Category::factory(3)->create();

        $ids = [
            'id' => [
                1, 2, 3
            ]
        ];

        $response = $this->post(route('admin.attach.category.to.product', ['product' => $product]), $ids)->assertRedirect();
        $response->assertSessionHas('message', 'success');
        $expectedData = [
            'category_id' => 3,
            'product_id' => 1
        ];
        $this->artisan('scout:import "App\Domain\Product\Models\Product"')->assertSuccessful();
        $this->assertDatabaseHas('category_product', $expectedData);
    }

    public function test_as_a_admin_product_can_be_restored()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $product = Product::factory()->trashed()->create();
        $response = $this->post(route('admin.products.restore', ['id' => $product->id]))->assertRedirect();
        $response->assertSessionHas('message', 'success');
        $product->refresh();
        $this->assertNull(Product::first()->deleted_at);
    }
}

