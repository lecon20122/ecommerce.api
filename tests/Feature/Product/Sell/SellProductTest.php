<?php

namespace Tests\Feature\Product\Sell;

use App\Domain\Admin\Models\Admin;
use App\Domain\Category\Models\Category;
use App\Domain\Product\Models\Product;
use App\Domain\Product\Services\Sell\SellProductService;
use App\Domain\Store\Models\Store;
use App\Domain\Variation\Models\Variation;
use App\Support\Traits\FeatureTestTrait;
use Domain\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Sentry\Util\JSON;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Tests\TestCase;

class SellProductTest extends TestCase
{
    use RefreshDatabase, WithFaker, FeatureTestTrait;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_that_store_owner_can_get_his_products()
    {
        $user = User::factory()->create();
        $admin = Admin::factory()->create();
        $this->actingAs($user, 'web');

        $store = Store::factory()->create([
            'user_id' => $user->id,
            'approved_at' => now(),
            'approved_by' => $admin->id
        ]);

        Product::factory()->create([
            'store_id' => $store->id
        ]);

        $res = $this->get(route('api.sell.get.products'))->assertOk();
        $json = $res->json();
        dd($json);
    }

    public function testSellerCanCreateProductWithColor()
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

        $colorValue = $this->createColorValue();
        $sizeValue = $this->createSizeValue();

        $data = [
            'title' => [
                'ar' => $this->faker->name,
                'en' => $this->faker->name,
            ],
            'unisex' => true,
            'category_id' => $category->id,
            'price' => $this->faker->randomNumber(2),
            'color_id' => $colorValue->id,
            'sizes' => [
                [
                    'id' => $sizeValue->id,
                    'stock_count' => $this->faker->randomNumber(2),
                ],
            ],
            'images' => [
                0 => UploadedFile::fake()->image("test.jpg", 1080, 1350),
                1 => UploadedFile::fake()->image("test.jpg", 670, 838),
            ],
        ];

        $res = $this->post(route('api.sell.post.products'), $data)->assertCreated();
        $json = $res->json();
        $this->assertEquals($json['title'], $data['title']);
        $this->assertEquals($json['variations'][0]['title']['en'], $colorValue->value);
        $this->assertEquals($json['variations'][1]['title']['en'], $sizeValue->value);
        $this->assertEquals(2, Product::first()->categories->count());
        $this->assertEquals(2, Product::first()->variations->count());
        $this->assertEquals(2, Media::all()->count());

        $this->assertDatabaseHas('products', [
            'price' => $data['price'] * 100,
            'store_id' => $user->store->id,
        ]);

        $this->assertDatabaseHas('variations', [
            'price' => $data['price'] * 100,
            'variation_type_value_id' => $data['color_id'],
            'variation_type_id' => $colorValue->variationType->id,
            'store_id' => $user->store->id,
        ]);

        $this->assertDatabaseHas('variations', [
            'price' => $data['price'] * 100,
            'variation_type_value_id' => $sizeValue->id,
            'variation_type_id' => $sizeValue->variationType->id,
            'store_id' => $user->store->id,
        ]);


    }

    public function testUnAuthorizedUserCantCreateProduct()
    {
        $unAuthorized = $this->unAuthorizedUser();

        $admin = Admin::factory()->create();

        $store = Store::factory()->create([
            'user_id' => $unAuthorized->id,
            'approved_at' => now(),
            'approved_by' => $admin->id
        ]);

        $data = [
            'title' => [
                'ar' => $this->faker->name,
                'en' => $this->faker->name,
            ],
            'price' => $this->faker->randomNumber(2),
            'color_id' => $this->faker->randomNumber(2),
        ];

        $res = $this->post(route('api.sell.post.products'), $data)->assertForbidden();
    }

    public function testAssignAUnisexCategoryToProduct()
    {
        $user = $this->authorizedUser();

        $oppositeCategory = Category::factory()->create([
            'title' => 'Men Shoes',
        ]);
        $category = Category::factory()->create([
            'opposite_category_id' => $oppositeCategory->id,
            'title' => 'Women Shoes',
        ]);

        $product = Product::factory()->create();

        $data = [
            'category_id' => $category->id,
        ];

        (new SellProductService())->assignCategories($product, $category->id , true);

        $this->assertEquals(2, $product->categories->count());

        $this->assertDatabaseHas('category_product', [
            'category_id' => $category->id,
            'product_id' => $product->id,
        ]);

        $this->assertDatabaseHas('category_product', [
            'category_id' => $oppositeCategory->id,
            'product_id' => $product->id,
        ]);
    }

    public function testAssignCategoryToProduct()
    {
        $user = $this->authorizedUser();

        $oppositeCategory = Category::factory()->create([
            'title' => 'Men Shoes',
        ]);
        $category = Category::factory()->create([
            'opposite_category_id' => $oppositeCategory->id,
            'title' => 'Women Shoes',
        ]);

        $product = Product::factory()->create();

        $data = [
            'category_id' => $category->id,
        ];

        (new SellProductService())->assignCategories($product, $category->id);

        $this->assertEquals($product->categories->count(), 1);

        $this->assertDatabaseHas('category_product', [
            'category_id' => $category->id,
            'product_id' => $product->id,
        ]);
    }

    public function test_seller_can_get_a_product_with_details()
    {
        $user = $this->authorizedUser();
        $admin = Admin::factory()->create();
        $store = Store::factory()->create([
            'user_id' => $user->id,
            'approved_at' => now(),
            'approved_by' => $admin->id
        ]);

        $product = Product::factory()->create([
            'store_id' => $store->id
        ]);

        $res = $this->get(route('api.sell.get.product', $product->id))->assertOk();
        $json = $res->json();
        $this->assertEquals($json['id'], $product->id);
    }

    public function test_that_product_can_be_viewed_only_by_owner()
    {
        $unAuthorized = $this->unAuthorizedUser();
        $admin = Admin::factory()->create();
        $store = Store::factory()->create([
            'user_id' => $unAuthorized->id,
            'approved_at' => now(),
            'approved_by' => $admin->id
        ]);

        $product = Product::factory()->create([
            'store_id' => $store->id
        ]);

        $this->get(route('api.sell.get.product', $product->id))->assertNotFound();
    }

    public function test_that_seller_cant_view_product_until_get_approved()
    {

        $user = $this->authorizedUser();
        $store = Store::factory()->create([
            'user_id' => $user->id,
            'approved_at' => null,
            'approved_by' => null
        ]);

        $product = Product::factory()->create([
            'store_id' => $store->id
        ]);

        $this->get(route('api.sell.get.product', $product->id))->assertForbidden();

    }

    public function test_mass_product_price_update()
    {
        $product = Product::factory()->create();

       $variation = Variation::factory()->create([
           'product_id' => $product->id,
       ]);

        (new SellProductService())->massProductPriceUpdate($product, 100);

        $this->assertDatabaseHas('variations', [
            'product_id' => $product->id,
            'price' => 100,
        ]);
    }

    public function test_seller_can_update_his_product()
    {
        $user = $this->authorizedUser();
        $store = $this->createApprovedStore($user);

        $product = Product::factory()->create([
            'store_id' => $store->id
        ]);

        $variations = Variation::factory(3)->create([
            'product_id' => $product->id,
        ]);

        $data = [
            'title' => [
                'ar' => $this->faker->name,
                'en' => $this->faker->name,
            ],
            'price' => 250,
        ];

        $res = $this->put(route('api.sell.update.product', $product->id), $data)->assertOk();
        $json = $res->json();
        $this->assertEquals($json['title']['ar'], $data['title']['ar']);
        $this->assertEquals($json['title']['en'], $data['title']['en']);
        $this->assertEquals($json['price'], $data['price']);
        $this->assertEquals(Variation::all()->toArray()[1]['price'], $data['price']);
    }
}
