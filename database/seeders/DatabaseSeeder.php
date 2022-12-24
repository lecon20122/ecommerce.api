<?php

namespace Database\Seeders;

use App\Domain\Location\Enums\LocationEnums;
use App\Domain\Location\Models\Address;
use App\Domain\Location\Models\District;
use App\Domain\Variation\Models\VariationType;
use Domain\User\Models\User;
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
//        $this->call([
//            StartupSeeder::class,
//            ProductSeeder::class,
//        ]);
        Address::factory()->create([
            'district_id' => 1,
            'addressable_id' => 136,
            'addressable_type' => User::class,
        ]);
    }
}
