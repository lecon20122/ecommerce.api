<?php

namespace Tests\Feature\Dashboard;

use App\Domain\Admin\Models\Admin;
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
        $this->get(route('admin.getLogin'))
            ->assertOk()
            ->assertInertia(
                fn (AssertableInertia $page) => $page
                    ->component('Auth/login')
                    ->where('errors', [])
            );
    }

    public function test_it_should_return_errors_when_required_fields_fall_validation()
    {
        $this->get(route('admin.getLogin'));

        $this
            ->followingRedirects()
            ->post(route('admin.postLogin'))
            ->assertInertia(
                fn (AssertableInertia $page) => $page
                    ->component('Auth/login')
                    ->where('errors.email', 'The email field is required.')
                    ->where('errors.password', 'The password field is required.')
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
