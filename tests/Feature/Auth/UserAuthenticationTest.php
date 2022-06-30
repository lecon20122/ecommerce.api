<?php

namespace Tests\Feature\Auth;

use App\Http\Auth\Notifications\ResetPasswordNotification;
use Domain\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Password;
use Tests\TestCase;

class UserAuthenticationTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    protected const NEW_PASSWORD = 'NEW_PASSWORD';
    protected const PASSWORD = 'password';

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_user_can_register()
    {
        $response = $this->post('api/v1/auth/register', [
            'name' => 'Mustafa Khaled',
            'email' => $this->faker->email,
            'password' => self::PASSWORD,
        ]);
        $response->assertOk();
        $user = User::first();
        $this->assertEquals('Mustafa Khaled', $user->name);
    }

    public function test_a_user_can_login()
    {
        $user = User::factory()->create();

        $response = $this->post('api/v1/auth/login', [
            'email' => $user->email,
            'password' => self::PASSWORD,
        ])->assertOk();

        $response->assertHeader('Authorization', $response->headers->get('Authorization'));
    }

    public function test_a_user_can_logout()
    {
        //create a user
        $user = User::factory()->create();
        //login this user
        $loginResponse = $this->post('api/v1/auth/login', [
            'email' => $user->email,
            'password' => self::PASSWORD,
        ])->assertOk();

        $token = $loginResponse->headers->get('Authorization');

        $headers = ['Authorization' => 'Bearer ' . $token];

        $logoutResponse = $this->post(route('auth.logout'), [], $headers)->assertOk();

        $this->assertArrayHasKey('success', $logoutResponse->json());
    }

    public function test_a_user_can_request_forget_password_token()
    {
        Notification::fake();

        $user = User::factory()->create();

        // trigger the notification
        $this->post(route('auth.forget-password', [
            'email' => $user->email,
        ]))->assertOk();

        Notification::assertSentTo($user, ResetPasswordNotification::class);
    }

    public function test_a_user_can_reset_his_password()
    {
        // create account
        $user = User::factory()->create();

        $token = Password::createToken($user);

        //update the password
        $this->post(route('auth.reset-password', [
            'email' => $user->email,
            'password' => self::NEW_PASSWORD,
            'password_confirmation' => self::NEW_PASSWORD,
            'token' => $token
        ]))->assertOk();

        $user->refresh();

        $this->assertTrue(Hash::check(self::NEW_PASSWORD, $user->password));
        $this->assertFalse(Hash::check(self::PASSWORD, $user->password));
    }
}
