<?php

namespace Tests\Feature\Admin;

use App\Domain\Admin\Models\Admin;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
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
        $this->assertArrayHasKey('token' , $response->json());
    }
}
