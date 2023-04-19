<?php

namespace Tests\Feature\Product;

use App\Domain\Admin\Models\Admin;
use App\Domain\Product\Models\Product;
use App\Domain\Product\Models\ProductAttribute;
use App\Domain\Product\Models\ProductDescription;
use App\Domain\Store\Models\Store;
use Domain\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProductDescriptionTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testAdminCanAddProductAttribute()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');
        $product = Product::factory()->create();
        $productAttribute = ProductAttribute::factory()->create();
        $data = [
            'en' => '200x100',
            'ar' => '200x100',
            'product_id' => $product->id,
            'product_attribute_id' => $productAttribute->id,
        ];
        $response = $this->post(route('admin.add.product.description'), $data)->assertRedirect();


        $this->assertEquals('200x100', ProductDescription::first()->value);
    }

    public function testOwnerCanAddProductAttribute()
    {
        $user = User::factory()->create();
        $this->actingAs($user, 'web');

        $store = Store::factory()->create([
            'user_id' => $user->id
        ]);

        $product = Product::factory()->create([
            'store_id' => $store->id
        ]);

        $productAttribute = ProductAttribute::factory()->create();

        $data = [
            'en' => '200x100',
            'ar' => '200x100',
            'product_id' => $product->id,
            'product_attribute_id' => $productAttribute->id,
        ];
        $response = $this->post(route('api.sell.add.product.description'), $data)->assertOk();
        $this->assertEquals('200x100', ProductDescription::first()->value);
    }

    public function testAdminCanUpdateProductAttribute()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $productDescription = ProductDescription::factory()->create();

        $data = [
            'en' => '200x100',
        ];

        $response = $this->post(route('admin.update.product.description' , ['id' => $productDescription->id]), $data)->assertRedirect();



        $this->assertEquals('200x100', ProductDescription::first()->value);
    }
    public function testOwnerCanUpdateProductAttribute()
    {
        $user = User::factory()->create();
        $this->actingAs($user, 'web');

        $store = Store::factory()->create([
            'user_id' => $user->id
        ]);

        $product = Product::factory()->create([
            'store_id' => $store->id
        ]);

        $productDescription = ProductDescription::factory()->create([
            'product_id' => $product->id
        ]);

        $data = [
            'en' => '200x100',
        ];

        $response = $this->post(route('api.sell.update.product.description' , ['id' => $productDescription->id]), $data)->assertOk();

        $this->assertEquals('200x100', ProductDescription::first()->value);
    }

    public function testAdminCanDeleteProductAttribute()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $productDescription = ProductDescription::factory()->create();

        $response = $this->post(route('admin.delete.product.description' , ['id' => $productDescription->id]))->assertRedirect();


        $this->assertNull(ProductDescription::first());
    }

    public function testOwnerCanDeleteProductAttribute()
    {
        $user = User::factory()->create();
        $this->actingAs($user, 'web');

        $store = Store::factory()->create([
            'user_id' => $user->id
        ]);

        $product = Product::factory()->create([
            'store_id' => $store->id
        ]);

        $productDescription = ProductDescription::factory()->create([
            'product_id' => $product->id
        ]);

        $response = $this->post(route('api.sell.delete.product.description' , ['id' => $productDescription->id]))->assertOk();

        $this->assertNull(ProductDescription::first());
    }
}
