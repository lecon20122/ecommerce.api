<?php

namespace Database\Factories\Domain\Location\Models;

use App\Domain\Location\Models\City;
use App\Domain\Location\Models\District;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class DistrictFactory extends Factory
{
    protected $model = District::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'city_id' => City::factory(),
            'name' => 'Al Hay El Sabee',
        ];
    }
}
