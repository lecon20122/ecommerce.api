<?php

namespace Tests\Feature\Cart;

use App\Domain\Cart\Models\Cart;
use App\Domain\Inventory\Models\Stock;
use App\Listeners\AssignUserToCart;
use Domain\User\Models\User;
use Illuminate\Auth\Events\Login;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use JetBrains\PhpStorm\NoReturn;
use Tests\TestCase;

class CartTest extends TestCase
{

    use WithFaker, RefreshDatabase;
    protected const CONFIG_SESSION_KEY = 'cart.session.key';

    /**
     * A basic feature test example.
     *
     * @return void
     */
    #[NoReturn] public function testNonAuthenticatedUserCanAddItemsToCart()
    {
        $stock = Stock::factory()->create(); // stock 1 here

        Stock::create([
            'variation_id' => $stock->variation_id,
            'amount' => 3,
        ]);

        $data = [
            'quantity' => 2,
            'price' => 241.2,
            'variation_id' => $stock->variation_id,
        ];

        $this->post(route('client.add.to.cart'), $data)->assertRedirect();
        $this->assertDatabaseHas('cart_variation', [
            'quantity' => 2,
            'price' => 241.2,
            'variation_id' => $stock->variation_id,
            'cart_id' => 1,
        ]);
    }

    #[NoReturn] public function testNotLoggedInUserCanUpdateAExistingCartItems()
    {
        $stock = Stock::factory()->create(); // stock 5 here

        Stock::create([
            'variation_id' => $stock->variation_id,
            'amount' => 3,
        ]);

        $data = [
            'quantity' => 2,
            'price' => 241.2,
            'variation_id' => $stock->variation_id,
        ];
        $this->post(route('client.add.to.cart'), $data)->assertRedirect();
        $data2 = [
            'quantity' => 1,
            'price' => 241.5,
            'variation_id' => $stock->variation_id,
        ];
        $this->post(route('client.add.to.cart'), $data2)->assertRedirect();

        $this->assertDatabaseHas('cart_variation', [
            'quantity' => 3,
            'price' => 241.2,
            'variation_id' => $stock->variation_id,
            'cart_id' => 1,
        ]);
    }

    public function testAssignUserToCartWhenLoggedIn()
    {
        $stock = Stock::factory()->create(); // stock 5 here
        $sessionKey = config(self::CONFIG_SESSION_KEY);
        $data = [
            'quantity' => 2,
            'price' => 241.2,
            'variation_id' => $stock->variation_id,
        ];
        $this->post(route('client.add.to.cart'), $data)->assertRedirect();

        $this->withSession([
            $sessionKey => Cart::first()->uuid,
        ]);

        $listener = new AssignUserToCart();

        $listener->handle(new Login('web', User::first(), true));

        $this->assertEquals(User::first()->id , Cart::first()->user_id);
    }
}
