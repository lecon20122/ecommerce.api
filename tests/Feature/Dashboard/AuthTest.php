<?php

namespace Tests\Feature\Dashboard;

use App\Domain\Admin\Models\Admin;
use App\Domain\Admin\Models\ByPass;
use App\Support\Enums\RolesEnum;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use WithFaker, RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_it_should_show_the_admin_login_page()
    {
        ByPass::create([
            'email' => 'mustafa@email.com',
            'expires_at' => null,
            'role' => RolesEnum::SUPER_ADMIN->value,
        ]);

        $res =  $this->get(route('admin.getLogin' ,['bypass' => 'mustafa@email.com']))
        ->assertOk()
        ->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Auth/login')
                ->where('errors', [])
        );
    }

    public function test_it_should_login_successfully_and_redirect_to_the_dashboard_page()
    {
        $this->get(route('admin.getLogin'));

        $user = Admin::factory(1)->create()->first();
        $this
            ->followingRedirects()
            ->post(route('admin.postLogin'), [
                'email' => $user->email,
                'password' => 'password',
            ])
            ->assertOk();
    }
}
