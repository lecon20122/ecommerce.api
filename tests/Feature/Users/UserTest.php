<?php

namespace Tests\Feature\Users;

use App\Domain\Admin\Models\Admin;
use App\Domain\Product\Models\Product;
use Domain\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_that_admins_can_get_users()
    {
        $admin = Admin::factory()->create();
        $users = User::factory(5)->create();
        Sanctum::actingAs($admin, [], 'admin');
        $response = $this->get(route('admin.users'));
        $response->assertOk();
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_that_only_admins_can_get_users()
    {
        $admin = User::factory()->create();
        $users = User::factory(5)->create();
        Sanctum::actingAs($admin, [], 'web');
        $headers = ['Accept' => 'application/json'];
        $response = $this->get(route('admin.users'), $headers);
        $response->assertUnauthorized();
    }
}
