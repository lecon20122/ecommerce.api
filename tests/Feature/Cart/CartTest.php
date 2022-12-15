<?php

namespace Tests\Feature\Cart;

use App\Domain\Cart\Models\Cart;
use App\Domain\Cart\Models\CartVariation;
use App\Domain\Cart\Services\CartService;
use App\Domain\Inventory\Models\Stock;
use App\Domain\Location\Enums\AddressTypeEnums;
use App\Domain\Location\Models\Address;
use App\Domain\Location\Models\District;
use App\Domain\Shipping\Models\ShippingType;
use App\Domain\Store\Models\Store;
use App\Domain\Variation\Models\Variation;
use App\Domain\Variation\Models\VariationType;
use App\Domain\Variation\Models\VariationTypeValue;
use App\Listeners\AssignUserToCart;
use App\Support\Enums\ValidationRuleEnums;
use Domain\User\Models\User;
use Exception;
use Illuminate\Auth\Events\Login;
use Illuminate\Foundation\Testing\LazilyRefreshDatabase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use JetBrains\PhpStorm\ArrayShape;
use JetBrains\PhpStorm\NoReturn;
use Tests\TestCase;

class CartTest extends TestCase
{

    use WithFaker, LazilyRefreshDatabase;

//    protected const CONFIG_SESSION_KEY = 'cart.session.key';
//
//    #[NoReturn] public function testNotLoggedInUserCanUpdateAExistingCartItems()
//    {
//        $stock = Stock::factory()->create(); // stock 15 here
//
//        Stock::create([
//            'variation_id' => $stock->variation_id,
//            'amount' => 3,
//        ]);
//
//        $data = [
//            'price' => 241.2,
//            'variation_id' => $stock->variation_id,
//        ];
//        $this->post(route('client.add.to.cart'), $data)->assertRedirect();
//        $data2 = [
//            'price' => 241.5,
//            'variation_id' => $stock->variation_id,
//        ];
//        $this->post(route('client.add.to.cart'), $data2)->assertRedirect();
//
//        $this->assertDatabaseHas('cart_variation', [
//            'quantity' => 2,
//            'price' => 241.2,
//            'variation_id' => $stock->variation_id,
//            'cart_id' => 1,
//            'total' => 482.4
//        ]);
//    }
//
//    public function testAssignUserToCartWhenLoggedIn()
//    {
//        $stock = Stock::factory()->create(); // stock 15 here
//        $sessionKey = config(self::CONFIG_SESSION_KEY);
//        $data = [
//            'price' => 241.2,
//            'variation_id' => $stock->variation_id,
//        ];
//        $this->post(route('client.add.to.cart'), $data)->assertRedirect();
//
//        $this->withSession([
//            $sessionKey => Cart::first()->uuid,
//        ]);
//
//        $listener = new AssignUserToCart();
//
//        $listener->handle(new Login('web', User::first(), true));
//
//        $this->assertEquals(User::first()->id, Cart::first()->user_id);
//    }
//
//    /**
//     * @throws Exception
//     */
//    #[NoReturn] public function testCartCanCalculateSubTotal()
//    {
//        $this->createCartAndStock();
//        $expectedValue = (2 * 241.2);
//        $this->assertEquals($expectedValue, (new CartService(session()))->cartSubTotal());
//    }
//
//    public function createCartAndStock()
//    {
//        $stock = Stock::factory()->create(); // stock 15 here
//        $stock2 = Stock::factory()->create(); // stock 15 here
//
//        $data = [
//            'price' => 241.2,
//            'variation_id' => $stock->variation_id,
//        ];
//        $data2 = [
//            'price' => 241.2,
//            'variation_id' => $stock->variation_id,
//        ];
//        $this->post(route('client.add.to.cart'), $data)->assertRedirect();
//        $this->post(route('client.add.to.cart'), $data2)->assertRedirect();
//    }
//
//    #[NoReturn] public function testCartWillBeDestroyedAfterOrderPlaced()
//    {
//        $user = User::factory()->has(Address::factory())->create();
//        $this->actingAs($user, 'web');
//
//        $this->createCartAndStock();
//
//        $district = District::factory()->create();
//
//        $address = Address::first();
//
//        $storeAddress = Store::first();
//
//        $storeAddress->addresses()->create([
//            'type' => AddressTypeEnums::PICKUP->value,
//            'district_id' => $district->id,
//            'street' => 'Hafez',
//            'building' => '25',
//            'floor' => '9',
//            'apartment_number' => '18',
//            'nearby_landmark' => 'Care',
//            'name' => 'Mustafa',
//            'phone' => '01125475',
//        ]);
//
//        $addressType = ShippingType::factory()->create();
//
//
//        $data = [
//            'notes' => 'yes i wanted it',
//            'shipping_address_id' => $address->id,
//            'shipping_type_id' => $addressType->id,
//        ];
//
//        $this->post(route('client.checkout'), $data)->assertRedirect();
//
//        $this->assertNull(Cart::first());
//    }
//
//
//    public function testRemoveItemFromCart()
//    {
//        $stock = Stock::factory()->create(); // stock 15 here
//
//        Stock::create([
//            'variation_id' => $stock->variation_id,
//            'amount' => 3,
//        ]);
//
//        $data = [
//            'price' => 241.2,
//            'variation_id' => $stock->variation_id,
//        ];
//        $variation = Variation::find($stock->variation_id);
//        $this->post(route('client.add.to.cart'), $data)->assertRedirect();
//        $this->post(route('client.remove.item.from.cart', ['variation' => $variation]))->assertRedirect();
//
//        $this->assertEmpty(CartVariation::all()->toArray());
//
//    }
//
//    public function testUpdateCartItemQuantity()
//    {
//        $stock = Stock::factory()->create(); // stock 15 here
//
//        Stock::create([
//            'variation_id' => $stock->variation_id,
//            'amount' => 3,
//        ]);
//
//        $data = [
//            'price' => 241.2,
//            'variation_id' => $stock->variation_id,
//        ];
//        $variation = Variation::find($stock->variation_id);
//        $this->post(route('client.add.to.cart'), $data)->assertRedirect();
//        $this->post(route('client.update.cart.item.quantity', ['variation' => $variation]), ['quantity' => 3])->assertRedirect();
//
//        $this->assertEquals(3, CartVariation::first()->toArray()['quantity']);
//
//    }

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
}
