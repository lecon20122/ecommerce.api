<?php

namespace Database\Seeders;

use App\Domain\Category\Models\Category;
use App\Domain\Location\Models\District;
use App\Domain\Product\Models\Variation;
use App\Domain\Store\Models\Store;
use Domain\User\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // User::factory(10)->create();
        Variation::factory(5)->create();
        // Store::factory(2)->hasAddresses(3)->create();
    }
}
