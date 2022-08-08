<?php

namespace Tests\Browser;

use App\Domain\Admin\Models\Admin;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\Browser\Pages\AdminLoginPage;
use Tests\Browser\Pages\Dashboard;
use Tests\Browser\Pages\DashboardCategoryPage;
use Tests\DuskTestCase;

class DashboardCategoryTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function test_admin_can_create_category()
    {
        $admin = Admin::factory(1)->create()->first();
        $this->browse(function (Browser $browser) use ($admin) {
            $browser->loginAs($admin, 'admin')
                ->visit(new DashboardCategoryPage)
                ->click('#add > button')
                ->assertDialogOpened('Create New Category');
        });
    }
}
