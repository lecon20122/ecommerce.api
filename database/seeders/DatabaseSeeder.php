<?php

namespace Database\Seeders;

use App\Domain\Product\Models\Product;
use App\Domain\Statistics\Models\View;
use Illuminate\Database\Seeder;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Carbon;

class DatabaseSeeder extends Seeder
{

    use WithFaker;
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        $this->call([
            // StartupSeeder::class,
            // PermissionSeeder::class,
            ViewsSeeder::class,
        ]);
    }
}
