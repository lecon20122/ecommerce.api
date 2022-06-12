<?php

namespace Tests\Feature\Cart;

use App\Domain\Cart\Models\Cart;
use App\Domain\Product\Models\Variation;
use Domain\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use JetBrains\PhpStorm\ArrayShape;
use Tests\TestCase;

class CartTest extends TestCase
{

    use WithFaker, RefreshDatabase;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_authenticated_user_can_add_items_to_cart()
    {
        $user = User::factory()->create();
        $tokenHeader = $this->generateBearerTokenHeader($user);

        $variation = Variation::factory()->create();

        $data = [
            'notes' => $this->faker->sentence,
            'qty' => $this->faker->randomDigit(),
            'variation_id' => $variation->id,
        ];

        $response = $this->post(route('cart.store'), $data, $tokenHeader)->assertCreated();

        $this->assertEquals(1, Cart::first()->count());

    }

    /**
     * @param $user
     * @return string[]
     */
    #[ArrayShape(['Authorization' => "string"])]
    public function generateBearerTokenHeader($user): array
    {
        return ['Authorization' => 'Bearer ' . $user->createToken($user->email, ['customer'])->plainTextToken];
    }

    public function test_authenticated_user_can_update_items_to_cart()
    {
        $user = User::factory()->create();
        $tokenHeader = $this->generateBearerTokenHeader($user);

        $variation = Variation::factory()->create();

        $data = [
            'notes' => $this->faker->sentence,
            'qty' => 3,
        ];

        $cart = $variation->carts()->create($data);

        $response = $this->put(route('cart.update', ['cart' => $cart]),
            ['qty' => 1]
            , $tokenHeader)
            ->assertOk();


        $this->assertEquals(1, Cart::first()->qty);

    }
}
