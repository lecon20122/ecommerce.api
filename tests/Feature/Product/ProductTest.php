<?php

namespace Tests\Feature\Product;

use App\Domain\Admin\Models\Admin;
use App\Domain\Category\Models\Category;
use App\Domain\Product\Models\Product;
use App\Domain\Product\Services\ProductService;
use App\Domain\Store\Models\Store;
use App\Domain\Variation\Models\Variation;
use App\Support\Enums\StateEnums;
use App\Support\Traits\FeatureTestTrait;
use Domain\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Tests\Feature\Product\Sell\SellProductTest;
use Tests\TestCase;

class ProductTest extends TestCase
{
    use WithFaker, RefreshDatabase, FeatureTestTrait;


    //    public function test_product_model_has_valid_searchable_array()
    //    {
    //        $productModel = Product::factory()->create();
    //        $this->assertTrue([
    //                'id',
    //                'title',
    //                'price',
    //                'store_id',
    //                'stores',
    //                'category',
    //                'created_at',
    //            ] === array_keys($productModel->toSearchableArray()));
    //    }

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
            'store_id' => $store->id,
        ];

        $response = $this->post(route('admin.products.store'), $data);

        $product = Product::query()->first();
        $this->assertEquals('new product', $product->title);
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */

    public function test_as_a_admin_product_can_be_updated()
    {
        $admin = Admin::factory()->create();

        $this->actingAs($admin, 'admin');

        $product = Product::factory()->create();

        Storage::fake('public');

        $data = [
            'en' => 'hello',
            'product_id' => $product->id
        ];

        $response = $this->post(route('admin.products.update', ['slug' => $product->slug]), $data);

        $product->refresh();
        $this->assertEquals('hello', $product->title);
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

    public function testAdminCanApproveProductAndAllVariationsImages()
    {
        Storage::fake('public');
        $user = $this->authorizedUser();
        $admin = Admin::factory()->create();
        $oppositeCategory = Category::factory()->create([
            'title' => 'Men Shoes',
        ]);
        $category = Category::factory()->create([
            'opposite_category_id' => $oppositeCategory->id,
            'title' => 'Women Shoes',
        ]);
        Store::factory()->create([
            'user_id' => $user->id,
            'approved_at' => now(),
            'approved_by' => $admin->id
        ]);
        $colorType = $this->createColorType();

        $colorValue = $this->createColorValue($colorType);
        $colorValue2 = $this->createColorValue($colorType);
        $sizeType = $this->createSizeType();
        $sizeValue = $this->createSizeValue($sizeType);
        $sizeValue2 = $this->createSizeValue($sizeType);

        $data = [
            'title' => [
                'ar' => $this->faker->name,
                'en' => $this->faker->name,
            ],
            'unisex' => true,
            'category_id' => $category->id,
            'price' => $this->faker->randomNumber(2),
            'status' => StateEnums::ACTIVE->value,
            'variations' => [
                [
                    'color_id' => $colorValue->id,
                    'sizes' => [
                        $sizeValue->id,
                        $sizeValue2->id,
                    ],
                    'images' => [
                        0 => UploadedFile::fake()->image("test.jpg", 1080, 1350),
                        1 => UploadedFile::fake()->image("test.jpg", 670, 838),
                    ],
                ],
                [
                    'color_id' => $colorValue2->id,
                    'sizes' => [
                        $sizeValue->id,
                        $sizeValue2->id,
                    ],
                    'images' => [
                        0 => UploadedFile::fake()->image("test.jpg", 1080, 1350),
                        1 => UploadedFile::fake()->image("test.jpg", 670, 838),
                    ],
                ],
            ],
        ];

        $res = $this->post(route('api.sell.post.products'), $data)->assertCreated();
        $json = $res->json();
        $this->assertEquals($json['title'], $data['title']);
        $this->assertEquals(2, Product::first()->categories->count());
        $this->assertEquals(6, Product::first()->variations->count());
        $this->assertEquals(4, Media::all()->count());

        $this->assertDatabaseHas('products', [
            'price' => $data['price'] * 100,
            'store_id' => $user->store->id,
        ]);

        $product = Product::first();

        $this->actingAs($admin, 'admin');

        $this->post(route('admin.products.approve', ['id' => $product->id]));

        $this->assertTrue(Product::first()->is_approved);

        $this->assertEquals(4, Media::where('is_approved', true)->count());
    }
}
