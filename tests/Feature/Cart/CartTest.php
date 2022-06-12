<?php

namespace Tests\Feature\Cart;

use Domain\User\Models\User;
use JetBrains\PhpStorm\ArrayShape;
use Tests\TestCase;

class CartTest extends TestCase
{

    /**
     * @param $user
     * @return string[]
     */
    #[ArrayShape(['Authorization' => "string"])]
    public function generateBearerTokenHeader($user): array
    {
        $token = $user->createToken($user->email, ['customer'])->plainTextToken;
        return ['Authorization' => 'Bearer ' . $token];
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_cart_can_be_created()
    {
        $user = User::factory()->create();
        $this->generateBearerTokenHeader($user);


    }
}
