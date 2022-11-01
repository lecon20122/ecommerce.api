<?php

namespace Database\Factories\Domain\Location\Models;

use App\Domain\Location\Models\City;
use App\Domain\Location\Models\Country;
use App\Domain\Location\Models\Governorate;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Domain\Location\Models\City>
 */
class CityFactory extends Factory
{
    protected $model = City::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => 'Nasr City',
            'governorate_id' =>  Governorate::factory(),
        ];
    }
}
