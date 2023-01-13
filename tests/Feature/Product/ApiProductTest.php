<?php

namespace Tests\Feature\Product;

use App\Domain\Category\Models\Category;
use App\Domain\Product\Models\Product;
use App\Domain\Product\Services\ProductService;
use App\Domain\Store\Models\Store;
use Domain\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use JetBrains\PhpStorm\NoReturn;
use Tests\TestCase;

class ApiProductTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    public function test_that_as_store_can_get_his_products()
    {
        $user = User::factory()->create();
        $this->actingAs($user, 'web');

        $store = Store::factory()->create([
            'user_id' => $user,
        ]);

        Product::factory()->create(['store_id' => $store->id]);
        $this->assertArrayHasKey('title', (new ProductService())->getStoreProducts()[0]);
        $this->assertEquals($store->id, (new ProductService())->getStoreProducts()[0]['store_id']);
    }

    public function test_as_a_store_product_can_be_created()
    {
        $user = User::factory()->create();

        $this->actingAs($user, 'web');

        $store = Store::factory()->create([
            'user_id' => $user->id
        ]);

        $data = [
            'en' => 'new product',
            'ar' => 'منتج جديد',
            'price' => 325,
            'live_at' => now(),
//            'store_id' => $store->id,
        ];

        $response = $this->post(route('api.add.store.products'), $data);
        $product = Product::query()->first();

        $this->assertEquals('new product', $product->title);

    }

    public function test_as_a_store_owner_can_update_my_product()
    {
        $user = User::factory()->create();

        $this->actingAs($user, 'web');

        $store = Store::factory()->create([
            'user_id' => $user->id
        ]);

        $product = Product::factory()->trashed()->create([
            'store_id' => $store->id
        ]);

        $data = [
            'en' => 'hello',
        ];

        $this->post(route('api.update.store.product', ['slug' => $product->slug]), $data);
        $product->refresh();
        $this->assertEquals('hello', $product->title);
    }

    public function test_product_can_only_be_updated_by_its_owner()
    {
        $user = User::factory()->create();
        $user2 = User::factory()->create();

        $this->actingAs($user2, 'web');

        $store = Store::factory()->create([
            'user_id' => $user->id
        ]);

        $product = Product::factory()->trashed()->create([
            'store_id' => $store->id
        ]);

        $data = [
            'en' => 'hello',
        ];

        $this->post(route('api.update.store.product', ['slug' => $product->slug]), $data);
        $product->refresh();
        $this->assertNotEquals('hello', $product->title);
    }

    public function test_as_a_store_owner_can_soft_delete_his_product()
    {
        $user = User::factory()->create();

        $this->actingAs($user, 'web');

        $store = Store::factory()->create([
            'user_id' => $user->id
        ]);

        $product = Product::factory()->create([
            'store_id' => $store->id
        ]);

        $this->post(route('api.delete.store.product'), ['id' => $product->id]);
        $this->assertNotNull(Product::withTrashed()->first()->deleted_at);
    }

    public function test_product_can_only_be_soft_deleted_by_its_owner()
    {
        $user = User::factory()->create();
        $user2 = User::factory()->create();

        $this->actingAs($user2, 'web');

        $store = Store::factory()->create([
            'user_id' => $user->id
        ]);

        $product = Product::factory()->create([
            'store_id' => $store->id
        ]);
        $this->post(route('api.delete.store.product'), ['id' => $product->id]);

        $this->assertNull(Product::withTrashed()->first()->deleted_at);
    }

    public function test_as_a_store_owner_can_restore_his_product()
    {
        $user = User::factory()->create();

        $this->actingAs($user, 'web');

        $store = Store::factory()->create([
            'user_id' => $user->id
        ]);

        $product = Product::factory()->trashed()->create([
            'store_id' => $store->id
        ]);

        $this->post(route('api.restore.store.product'), ['id' => $product->id]);
        $this->assertNull(Product::withTrashed()->first()->deleted_at);
    }

    #[NoReturn] public function test_as_a_owner_can_attach_categories_to_product()
    {
        $user = User::factory()->create();

        $this->actingAs($user, 'web');

        $store = Store::factory()->create([
            'user_id' => $user->id
        ]);

        $product = Product::factory()->trashed()->create([
            'store_id' => $store->id
        ]);

        Category::factory(3)->create();

        $ids = [
            'id' => [
                1, 2, 3
            ]
        ];

        $response = $this->post(route('api.attach.category.to.product', ['id' => $product->id]), $ids);

        $expectedData = [
            'category_id' => 3,
            'product_id' => 1
        ];

        $this->assertDatabaseHas('category_product', $expectedData);
    }

    public function test_as_a_admin_can_detach_categories_from_product()
    {
        $user = User::factory()->create();

        $this->actingAs($user, 'web');

        $store = Store::factory()->create([
            'user_id' => $user->id
        ]);

        $product = Product::factory()->create([
            'store_id' => $store->id
        ]);

        Category::factory(3)->create();

        $idsToBeAttached = [
            'id' => [
                1, 2, 3
            ]
        ];

        $this->post(route('api.attach.category.to.product', ['id' => $product->id]), $idsToBeAttached);

        $idsToBeDetached = [
            'id' => [
                1,
            ]
        ];

        $response = $this->post(route('api.detach.category.from.product', ['id' => $product->id]), $idsToBeDetached);


        $expectedData = [
            'category_id' => 1,
            'product_id' => 1
        ];

        $this->assertDatabaseMissing('category_product', $expectedData);
    }


}
