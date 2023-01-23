<?php

namespace Tests\Feature\Product;


use App\Domain\Product\Models\Product;
use App\Domain\Product\Models\ProductDiscount;
use App\Domain\Product\Services\ProductDiscountService;
use App\Domain\Store\Models\Store;
use App\Support\Enums\TypeEnum;
use Domain\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProductPricingTest extends TestCase
{
    use withFaker, RefreshDatabase;

    public function test_can_calculate_the_percentage_discount_correct()
    {
        $product = Product::factory()->create([
            'price' => 450
        ]);

        $productDiscount = ProductDiscount::create([
            'value' => 10,
            'type' => TypeEnum::PERCENTAGE,
            'start_at' => now(),
            'end_at' => now()->addDays(10),
            'is_active' => true,
            'product_id' => $product->id,
        ]);

       $result =  (new ProductDiscountService())->getDiscountedPercentagePrice($product, $product->price);

        $this->assertEquals(10, ProductDiscount::first()->value);

        $this->assertEquals(405, $result);

    }

    public function test_can_calculate_the_discount_correct()
    {
        $product = Product::factory()->create([
            'price' => 450
        ]);

        $productDiscount = ProductDiscount::create([
            'value' => 10,
            'type' => TypeEnum::FIXED,
            'start_at' => now(),
            'end_at' => now()->addDays(10),
            'is_active' => true,
            'product_id' => $product->id,
        ]);

       $result =  (new ProductDiscountService())->getDiscountedPrice($product, $product->price);

        $this->assertEquals(10, ProductDiscount::first()->value);

        $this->assertEquals(440, $result);

    }

    public function test_that_zero_is_returned_when_no_discount()
    {
        $product = Product::factory()->create([
            'price' => 450
        ]);

        $result =  (new ProductDiscountService())->getActiveDiscountAmount($product);

        $this->assertEquals(0, $result);
    }

    public function test_no_deduction_when_no_discount()
    {
        $product = Product::factory()->create([
            'price' => 450
        ]);

        $result =  (new ProductDiscountService())->getDiscountedPrice($product, $product->price);
        $resultPercentage =  (new ProductDiscountService())->getDiscountedPercentagePrice($product, $product->price);

        $this->assertEquals(450, $result);
        $this->assertEquals(450, $resultPercentage);
    }

    public function test_that_expired_discounts_returns_zero()
    {
        $product = Product::factory()->create([
            'price' => 450
        ]);

        $productDiscount = ProductDiscount::factory()->create([
            'value' => 10,
            'type' => TypeEnum::FIXED,
            'product_id' => $product->id,
            'start_at' => now()->subDays(10),
            'end_at' => now()->subDays(5),
        ]);

        $result =  (new ProductDiscountService())->getDiscountedPrice($product, $product->price);
        $resultPercentage =  (new ProductDiscountService())->getDiscountedPercentagePrice($product, $product->price);

        $this->assertEquals(450, $result);
        $this->assertEquals(450, $resultPercentage);
    }

    public function test_that_cant_create_another_discount_while_there_is_active_discount()
    {
        $user = User::factory()->create();
        $this->actingAs($user, 'web');

        $store = Store::factory()->create([
            'user_id' => $user->id,
        ]);

        $product = Product::factory()->create([
            'price' => 450,
            'store_id' => $store->id,
        ]);

        $productDiscount = ProductDiscount::factory()->create([
            'product_id' => $product->id,
        ]);

        $data = [
            'value' => 15,
            'type' => TypeEnum::FIXED,
            'product_id' => $product->id,
            'start_at' => now(),
            'end_at' => now()->addDays(5),
            'is_active' => true,
        ];

        $response = $this->post(route('api.update.or.create.product.discount'), $data);

        $productDiscount->refresh();
        $this->assertCount(1, ProductDiscount::all());
        $this->assertEquals(15, $productDiscount->value);
        $this->assertEquals(450, $product->price);
    }

    public function test_that_if_no_active_discount_should_create_one()
    {
        $user = User::factory()->create();
        $this->actingAs($user, 'web');

        $store = Store::factory()->create([
            'user_id' => $user->id,
        ]);

        $product = Product::factory()->create([
            'price' => 450,
            'store_id' => $store->id,
        ]);

        $data = [
            'value' => 15,
            'type' => TypeEnum::FIXED,
            'product_id' => $product->id,
            'start_at' => now(),
            'end_at' => now()->addDays(5),
            'is_active' => true,
        ];

        $this->assertCount(0, ProductDiscount::all());

        $response = $this->post(route('api.update.or.create.product.discount'), $data);

        $this->assertCount(1, ProductDiscount::all());
        $this->assertEquals(15, ProductDiscount::first()->value);
        $this->assertEquals(TypeEnum::FIXED, ProductDiscount::first()->type);
    }

    public function test_non_owner_cant_do_create_or_update()
    {
        $user = User::factory()->create();
        $notOwner = User::factory()->create();
        $this->actingAs($notOwner, 'web');

        $store = Store::factory()->create([
            'user_id' => $user->id,
        ]);

        $product = Product::factory()->create([
            'price' => 450,
            'store_id' => $store->id,
        ]);

        $data = [
            'value' => 15,
            'type' => TypeEnum::FIXED,
            'product_id' => $product->id,
            'start_at' => now(),
            'end_at' => now()->addDays(5),
            'is_active' => true,
        ];

        $response = $this->post(route('api.update.or.create.product.discount'), $data);

        $response->assertStatus(403);
    }
}
