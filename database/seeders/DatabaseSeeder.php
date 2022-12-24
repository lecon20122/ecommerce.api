<?php

namespace Database\Seeders;

use App\Domain\Location\Enums\LocationEnums;
use App\Domain\Location\Models\Address;
use App\Domain\Location\Models\City;
use App\Domain\Location\Models\District;
use App\Domain\Location\Models\Governorate;
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
        $gov = Governorate::factory()->create([
            'name' => 'Cairo',
        ]);
        $city = City::factory()->create([
            'governorate_id' => $gov->id,
            'name' => 'Nasr City'
        ]);
        $city2 = City::factory()->create([
            'governorate_id' => $gov->id,
            'name' => 'Maadi'
        ]);

        District::factory()->create([
            'city_id' => $city->id,
            'district' => 'Al Hay Sabea'
        ]);
        District::factory()->create([
            'city_id' => $city->id,
            'district' => 'Al Hay Sades'
        ]);

        District::factory()->create([
            'city_id' => $city2->id,
            'district' => '90 Street'
        ]);
    }
}
