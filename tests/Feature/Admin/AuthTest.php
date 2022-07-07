<?php

namespace Tests\Feature\Admin;

use App\Domain\Admin\Models\Admin;
use Domain\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    protected const NEW_PASSWORD = 'NEW_PASSWORD';
    protected const PASSWORD = 'password';

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_admin_can_login()
    {
        $user = Admin::factory()->create();

        $response = $this->post(route('admin.login'), [
            'email' => $user->email,
            'password' => self::PASSWORD,
        ], ['Accept' => 'application/json'])->assertOk();

        $this->assertEquals($user->email, $response['user']['email']);
    }

    public function test_admin_the_only_one_can_visit_protected_route()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user);

        $headers = [
            'Accept' => 'application/json',
        ];

        $this->get(route('protected'), $headers)->assertUnauthorized();
    }
}
