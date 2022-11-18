<?php

namespace Tests\Feature\Product;

use App\Domain\Admin\Models\Admin;
use App\Domain\Category\Models\Category;
use App\Domain\Product\Models\Product;
use App\Domain\Product\Services\ProductService;
use App\Domain\Store\Models\Store;
use App\Support\Services\SearchService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Tests\TestCase;

class ProductTest extends TestCase
{
    use WithFaker, RefreshDatabase;


    public function test_product_model_has_valid_searchable_array()
    {
        $productModel = Product::factory()->create();
        $this->assertTrue([
                'id',
                'title',
                'price',
                'store_id',
                'stores',
                'category_ids',
                'created_at',
            ] === array_keys($productModel->toSearchableArray()));
    }

    public function test_that_product_model_uses_scout()
    {
        $this->assertTrue(in_array('Laravel\Scout\Searchable', class_uses(Product::class)));
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_as_a_admin_product_can_be_created()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');
        $store = Store::factory()->create();

        Storage::fake('public');

        $data = [
            'en' => 'new product',
            'ar' => 'منتج جديد',
            'price' => 325,
            'live_at' => now(),
            'store_id' => $store->id,
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

        $this->assertDatabaseHas('category_product', $expectedData);
    }

    public function test_as_a_admin_can_detach_categories_from_product()
    {
        $admin = Admin::factory()->create();

        $this->actingAs($admin, 'admin');

        $product = Product::factory()->create();

        Category::factory(3)->create();

        $idsToBeAttached = [
            'id' => [
                1, 2, 3
            ]
        ];

        $this->post(route('admin.attach.category.to.product', ['product' => $product]), $idsToBeAttached);

        $idsToBeDetached = [
            'id' => [
                1,
            ]
        ];

        $response = $this->post(route('admin.detach.category.from.product', ['product' => $product]), $idsToBeDetached);


        $expectedData = [
            'category_id' => 1,
            'product_id' => 1
        ];

        $this->assertDatabaseMissing('category_product', $expectedData);
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

    public function test_get_product_search_filters_buy_category()
    {
        $productService = new ProductService();

        dd($productService->getProductFiltersByCategory(5));

    }
}

