<?php

namespace Tests\Browser;

use App\Domain\Admin\Models\Admin;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\Browser\Pages\AdminLoginPage;
use Tests\DuskTestCase;

class AdminLoginTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function test_admin_can_login_in()
    {
        $admin = Admin::factory(1)->create()->first();

        $this->browse(function (Browser $browser) use ($admin) {
            $browser->visit(new AdminLoginPage)
                ->signIn($admin->email)
                ->waitForRoute('dashboard.index');
        });
    }

    public function test_admin_can_logout()
    {
        $admin = Admin::factory(1)->create()->first();

        $this->browse(function (Browser $browser) use ($admin) {
            $browser->visit(new AdminLoginPage)
                ->signIn($admin->email)
                ->waitForRoute('dashboard.index')
                ->click('.logout')
                ->waitForRoute('admin.getLogin');
        });
    }
}
