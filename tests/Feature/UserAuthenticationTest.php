<?php

namespace Tests\Feature;

use Domain\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class UserAuthenticationTest extends TestCase
{
    use WithFaker, RefreshDatabase;
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
        $user = User::first();
        $this->assertEquals('Mustafa Khaled', $user->name);
        $this->assertArrayHasKey('token', $response->json());
    }

    public function test_a_user_can_login()
    {
        $user = User::factory()->create();

        $response = $this->post('api/v1/auth/login', [
            'email' => $user->email,
            'password' => 'password',
        ])->assertOk();

        $this->assertArrayHasKey('token', $response->json());
    }

    public function test_a_user_can_logout()
    {
        //create a user
        $user = User::factory()->create();
        //login this user
        $loginResponse = $this->post('api/v1/auth/login', [
            'email' => $user->email,
            'password' => 'password',
        ])->assertOk();

        $token = $loginResponse->json()['token'];
        $headers = ['Authorization' => 'Bearer ' . $token];

        $logoutResponse = $this->post(route('auth.logout'), [], $headers)->assertOk();

        $this->assertArrayHasKey('success', $logoutResponse->json());
    }

    public function test_a_user_can_reset_his_password()
    {
        // create account
        $user = User::factory()->create();

        $token = Password::createToken($user);

        $this->post(route('auth.reset-password',[
            'email' => $user->email,
            'password' => 'newpassword',
            'password_confirmation' => 'newpassword',
            'token' => $token
        ]))->assertOk();

        $user->refresh();

        $this->assertTrue(Hash::check('newpassword' , $user->password));
        $this->assertFalse(Hash::check('password' , $user->password));

    }
}
