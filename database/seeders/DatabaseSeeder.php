<?php

namespace Database\Seeders;

use App\Domain\Admin\Models\ByPass;
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
        $this->call([
            // StartupSeeder::class,
            //            ProductSeeder::class,

        ]);

        ByPass::create([
            'email' => 'mustafa@admin.com',
            'expires_at' => null,
            'role' => 'admin'
        ]);
    }
}
