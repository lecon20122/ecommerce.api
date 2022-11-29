<?php

namespace Database\Seeders;

use App\Domain\Location\Models\District;
use App\Domain\Variation\Models\VariationType;
use Illuminate\Database\Seeder;
use Illuminate\Foundation\Testing\WithFaker;

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
            StartupSeeder::class,
            ProductSeeder::class,
        ]);
    }
}
