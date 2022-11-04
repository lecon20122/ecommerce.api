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
use App\Listeners\AssignUserToCart;
use Domain\User\Models\User;
use Exception;
use Illuminate\Auth\Events\Login;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use JetBrains\PhpStorm\NoReturn;
use Tests\TestCase;

class CartTest extends TestCase
{

    use WithFaker, RefreshDatabase;

    protected const CONFIG_SESSION_KEY = 'cart.session.key';

    #[NoReturn] public function testNotLoggedInUserCanUpdateAExistingCartItems()
    {
        $stock = Stock::factory()->create(); // stock 15 here

        Stock::create([
            'variation_id' => $stock->variation_id,
            'amount' => 3,
        ]);

        $data = [
            'price' => 241.2,
            'variation_id' => $stock->variation_id,
        ];
        $this->post(route('client.add.to.cart'), $data)->assertRedirect();
        $data2 = [
            'price' => 241.5,
            'variation_id' => $stock->variation_id,
        ];
        $this->post(route('client.add.to.cart'), $data2)->assertRedirect();

        $this->assertDatabaseHas('cart_variation', [
            'quantity' => 2,
            'price' => 241.2,
            'variation_id' => $stock->variation_id,
            'cart_id' => 1,
            'total' => 482.4
        ]);
    }

    public function testAssignUserToCartWhenLoggedIn()
    {
        $stock = Stock::factory()->create(); // stock 15 here
        $sessionKey = config(self::CONFIG_SESSION_KEY);
        $data = [
            'price' => 241.2,
            'variation_id' => $stock->variation_id,
        ];
        $this->post(route('client.add.to.cart'), $data)->assertRedirect();

        $this->withSession([
            $sessionKey => Cart::first()->uuid,
        ]);

        $listener = new AssignUserToCart();

        $listener->handle(new Login('web', User::first(), true));

        $this->assertEquals(User::first()->id, Cart::first()->user_id);
    }

    /**
     * @throws Exception
     */
    #[NoReturn] public function testCartCanCalculateSubTotal()
    {
        $this->createCartAndStock();
        $expectedValue = (2 * 241.2);
        $this->assertEquals($expectedValue, (new CartService(session()))->cartSubTotal());
    }

    public function createCartAndStock()
    {
        $stock = Stock::factory()->create(); // stock 15 here
        $stock2 = Stock::factory()->create(); // stock 15 here

        $data = [
            'price' => 241.2,
            'variation_id' => $stock->variation_id,
        ];
        $data2 = [
            'price' => 241.2,
            'variation_id' => $stock->variation_id,
        ];
        $this->post(route('client.add.to.cart'), $data)->assertRedirect();
        $this->post(route('client.add.to.cart'), $data2)->assertRedirect();
    }

    #[NoReturn] public function testCartWillBeDestroyedAfterOrderPlaced()
    {
        $user = User::factory()->has(Address::factory())->create();
        $this->actingAs($user, 'web');

        $this->createCartAndStock();

        $district = District::factory()->create();

        $address = Address::first();

        $storeAddress = Store::first();

        $storeAddress->addresses()->create([
            'type' => AddressTypeEnums::PICKUP->value,
            'district_id' => $district->id,
            'street' => 'Hafez',
            'building' => '25',
            'floor' => '9',
            'apartment_number' => '18',
            'nearby_landmark' => 'Care',
            'name' => 'Mustafa',
            'phone' => '01125475',
        ]);

        $addressType = ShippingType::factory()->create();


        $data = [
            'notes' => 'yes i wanted it',
            'shipping_address_id' => $address->id,
            'shipping_type_id' => $addressType->id,
        ];

        $this->post(route('client.checkout'), $data)->assertRedirect();

        $this->assertNull(Cart::first());
    }


    public function testRemoveItemFromCart()
    {
        $stock = Stock::factory()->create(); // stock 15 here

        Stock::create([
            'variation_id' => $stock->variation_id,
            'amount' => 3,
        ]);

        $data = [
            'price' => 241.2,
            'variation_id' => $stock->variation_id,
        ];
        $variation = Variation::find($stock->variation_id);
        $this->post(route('client.add.to.cart'), $data)->assertRedirect();
        $this->post(route('client.remove.item.from.cart', ['variation' => $variation]))->assertRedirect();

        $this->assertEmpty(CartVariation::all()->toArray());

    }

    public function testUpdateCartItemQuantity()
    {
        $stock = Stock::factory()->create(); // stock 15 here

        Stock::create([
            'variation_id' => $stock->variation_id,
            'amount' => 3,
        ]);

        $data = [
            'price' => 241.2,
            'variation_id' => $stock->variation_id,
        ];
        $variation = Variation::find($stock->variation_id);
        $this->post(route('client.add.to.cart'), $data)->assertRedirect();
        $this->post(route('client.update.cart.item.quantity', ['variation' => $variation]), ['quantity' => 3])->assertRedirect();

        $this->assertEquals(3, CartVariation::first()->toArray()['quantity']);

    }
}
