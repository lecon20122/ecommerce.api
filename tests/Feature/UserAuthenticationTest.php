<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserAuthenticationTest extends TestCase
{
    use WithFaker;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_user_can_create_a_new_account()
    {
        $response = $this->post('api/v1/auth/register', [
            'name' => 'Mustafa Khaled',
            'email' => $this->faker->email,
            'password' => '123456'
        ]);
        $response->assertOk();
        $this->assertArrayHasKey('token', $response->json());
    }

    public function test_a_user_can_login()
    {
        $response = $this->post('api/v1/auth/login', [
            'email' => 'mustafa12@gmail.com',
            'password' => '123456'
        ])->assertOk();

        $this->assertArrayHasKey('token', $response->json());
    }
}
