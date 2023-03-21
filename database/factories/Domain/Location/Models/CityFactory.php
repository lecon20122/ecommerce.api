<?php

namespace Database\Factories\Domain\Location\Models;

use App\Domain\Location\Models\City;
use App\Domain\Location\Models\Governorate;
use Faker\Provider\ar_EG\Address;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
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
            'name' => $this->faker->city,
            'governorate_id' => Governorate::factory(),
        ];
    }
}
