<?php

namespace Tests\Feature\Cart;

use App\Domain\Cart\Models\Cart;
use App\Domain\Cart\Services\CartService;
use App\Domain\Inventory\Models\Stock;
use App\Domain\Product\Models\ProductDiscount;
use App\Domain\Variation\Models\Variation;
use App\Domain\Variation\Models\VariationType;
use App\Domain\Variation\Models\VariationTypeValue;
use Domain\User\Models\User;
use Illuminate\Foundation\Testing\LazilyRefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use JetBrains\PhpStorm\ArrayShape;
use Tests\TestCase;

class CartTest extends TestCase
{

    use WithFaker, LazilyRefreshDatabase;

    public function testThatUserCanAddItemToCart()
    {
        $user = User::factory()->create();
        $this->actingAs($user, 'web');

        $variations = $this->createParentAndChildVariations();
        $data = [
            'variation_id' => $variations['child']['id'],
            'store_id' => $variations['parent']['store_id'],
            'variation_parent_id' => $variations['parent']['id'],
            'price' => $variations['child']['price'],
        ];

        $response = $this->post(route('api.client.add.to.cart'), $data)->assertOk();
        $this->assertArrayHasKey('variation', $response->json()[0]);
        $this->assertArrayHasKey('parent_variation', $response->json()[0]);
        $this->assertDatabaseCount('carts', 1);
    }

    #[ArrayShape([
        'parent' => "\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model|mixed",
        'child' => "\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model|mixed"])]
    public function createParentAndChildVariations(): array
    {
        $variationProps = $this->createVariationsProperties();
        $parentVariation = Variation::factory()->create([
            'variation_type_id' => $variationProps['type_color'],
            'variation_type_value_id' => $variationProps['value_color'],
        ]);
        $childVariation = Variation::factory()->create([
            'parent_id' => $parentVariation->id,
            'product_id' => $parentVariation->product_id,
            'store_id' => $parentVariation->store_id,
            'variation_type_id' => $variationProps['type_size'],
            'variation_type_value_id' => $variationProps['value_size'],
        ]);

        return [
            'parent' => $parentVariation,
            'child' => $childVariation,
        ];
    }

    #[ArrayShape(['type_color' => "mixed", 'type_size' => "mixed", 'value_color' => "mixed", 'value_size' => "mixed"])] public function createVariationsProperties(): array
    {
        $variationTypeColor = VariationType::create([
            'type' => 'color',
            'is_mediable' => true,
            'is_stockable' => false,
        ]);
        $variationTypeSize = VariationType::create([
            'type' => 'size',
            'is_mediable' => false,
            'is_stockable' => true,
        ]);

        $variationTypeValueColor = VariationTypeValue::create([
            'value' => 'red',
            'variation_type_id' => $variationTypeColor->id
        ]);
        $variationTypeValueSize = VariationTypeValue::create([
            'value' => 'XL',
            'variation_type_id' => $variationTypeSize->id
        ]);

        return [
            'type_color' => $variationTypeColor->id,
            'type_size' => $variationTypeSize->id,
            'value_color' => $variationTypeValueColor->id,
            'value_size' => $variationTypeValueSize->id,
        ];
    }

    public function testQuantityIncreasesByOneWhenUserAddItAgain()
    {
        $user = User::factory()->create();
        $this->actingAs($user, 'web');
        $variations = $this->createParentAndChildVariations();

        Stock::create([
            'variation_id' => $variations['child']['id'],
            'amount' => 2,
        ]);

        $data = [
            'variation_id' => $variations['child']['id'],
            'store_id' => $variations['parent']['store_id'],
            'variation_parent_id' => $variations['parent']['id'],
            'price' => $variations['child']['price'],
        ];
        $this->post(route('api.client.add.to.cart'), $data)->assertOk();

        $this->post(route('api.client.add.to.cart'), $data)->assertOk();

        $this->assertEquals(2, Cart::first()->quantity);
    }

    public function testItemQuantityMustBeLowerOrEqualItemStockCount()
    {
        $user = User::factory()->create();
        $this->actingAs($user, 'web');
        $variations = $this->createParentAndChildVariations();
        $data = [
            'variation_id' => $variations['child']['id'],
            'store_id' => $variations['parent']['store_id'],
            'variation_parent_id' => $variations['parent']['id'],
            'price' => $variations['child']['price'],
        ];
        Stock::create([
            'variation_id' => $variations['child']['id'],
            'amount' => 2,
        ]);
        $this->post(route('api.client.add.to.cart'), $data)->assertOk();
        $this->post(route('api.client.add.to.cart'), $data)->assertOk();
        $this->post(route('api.client.add.to.cart'), $data)->assertStatus(400);

        $this->assertEquals(2, Cart::first()->quantity);
        $this->assertEquals(Cart::first()->stockCount($variations['child']['id']), Cart::first()->quantity);
    }

    public function testUserCanGetHisCartItems()
    {
        $user = User::factory()->create();
        $this->actingAs($user, 'web');
        $variations = $this->createParentAndChildVariations();
        $data = [
            'variation_id' => $variations['child']['id'],
            'store_id' => $variations['parent']['store_id'],
            'variation_parent_id' => $variations['parent']['id'],
            'price' => $variations['child']['price'],
        ];
        Stock::create([
            'variation_id' => $variations['child']['id'],
            'amount' => 2,
        ]);
        $this->post(route('api.client.add.to.cart'), $data)->assertOk();
        $this->post(route('api.client.add.to.cart'), $data)->assertOk();
        $this->post(route('api.client.add.to.cart'), $data)->assertStatus(400);

        $this->get(route('api.client.get.user.cart'))->assertOk();
    }

    public function testUserCanRemoveItemFromCart()
    {
        $user = User::factory()->create();
        $this->actingAs($user, 'web');
        $variations = $this->createParentAndChildVariations();
        $data = [
            'variation_id' => $variations['child']['id'],
            'store_id' => $variations['parent']['store_id'],
            'variation_parent_id' => $variations['parent']['id'],
            'price' => $variations['child']['price'],
        ];
        Stock::create([
            'variation_id' => $variations['child']['id'],
            'amount' => 2,
        ]);
        $this->post(route('api.client.add.to.cart'), $data)->assertOk();

        $this->delete(route('api.client.remove.user.item.from.cart'), ['id' => Cart::first()->id])->assertOk();

        $this->assertNull(Cart::first());
    }

    public function testUserCanUpdateCartItemQuantity()
    {
        $user = User::factory()->create();
        $this->actingAs($user, 'web');
        $variations = $this->createParentAndChildVariations();
        $data = [
            'variation_id' => $variations['child']['id'],
            'store_id' => $variations['parent']['store_id'],
            'variation_parent_id' => $variations['parent']['id'],
            'price' => $variations['child']['price'],
        ];
        Stock::create([
            'variation_id' => $variations['child']['id'],
            'amount' => 5,
        ]);
        $this->post(route('api.client.add.to.cart'), $data)->assertOk(); // becomes 1

        $putData = [
            'id' => Cart::first()->id,
            'quantity' => 5
        ];
        $this->put(route('api.client.update.cart.item.quantity'), $putData)->assertOk();

        $this->assertEquals(5, Cart::first()->quantity);
    }

    public function testUserCannotUpdateCartItemQuantityAboveTheStockCount()
    {
        $user = User::factory()->create();
        $this->actingAs($user, 'web');
        $variations = $this->createParentAndChildVariations();
        $data = [
            'variation_id' => $variations['child']['id'],
            'store_id' => $variations['parent']['store_id'],
            'variation_parent_id' => $variations['parent']['id'],
            'price' => $variations['child']['price'],
        ];
        Stock::create([
            'variation_id' => $variations['child']['id'],
            'amount' => 2,
        ]);
        $this->post(route('api.client.add.to.cart'), $data)->assertOk(); // becomes 1

        $putData = [
            'id' => Cart::first()->id,
            'quantity' => 5
        ];
        $this->put(route('api.client.update.cart.item.quantity'), $putData)->assertOk();

        $this->assertEquals(2, Cart::first()->quantity);
    }

    public function testCartTotalCalculationIsRight()
    {
        $user = User::factory()->create();
        $this->actingAs($user, 'web');
        $variations = $this->createParentAndChildVariations();
        $variations2 = $this->createParentAndChildVariations();

        $discount = ProductDiscount::factory()->create([
            'product_id' => $variations['parent']['product_id'],
            'value' => 13,
            'type' => 'fixed',
        ]);

        $carts = Cart::factory(3)->create([
            'quantity' => 2,
            'price' => 100,
            'variation_id' => $variations['child']['id'],
            'variation_parent_id' => $variations['parent']['id'],
            'user_id' => $user->id,
            'store_id' => $variations['parent']['store_id'],
        ]);

        $this->assertEquals(522, (new CartService())->getCartSubTotalWithDiscount());
    }

    public function test_user_can_get_cart_summary()
    {
        $user = User::factory()->create();
        $this->actingAs($user, 'web');
        $variations = $this->createParentAndChildVariations();
        $variations2 = $this->createParentAndChildVariations();

        $discount = ProductDiscount::factory()->create([
            'product_id' => $variations['parent']['product_id'],
            'value' => 13,
            'type' => 'fixed',
        ]);

        $carts = Cart::factory(3)->create([
            'quantity' => 2,
            'price' => 100,
            'variation_id' => $variations['child']['id'],
            'variation_parent_id' => $variations['parent']['id'],
            'user_id' => $user->id,
            'store_id' => $variations['parent']['store_id'],
        ]);

        Cart::factory(3)->create([
            'quantity' => 2,
            'price' => 100,
            'variation_id' => $variations2['child']['id'],
            'variation_parent_id' => $variations2['parent']['id'],
            'user_id' => $user->id,
            'store_id' => $variations2['parent']['store_id'],
        ]);

//        dd((new CartService())->getCartSummary());
    }
}
