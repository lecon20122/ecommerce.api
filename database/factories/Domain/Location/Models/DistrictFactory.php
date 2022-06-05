<?php

namespace Database\Factories\Domain\Location\Models;

use App\Domain\Location\Models\City;
use App\Domain\Location\Models\District;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Domain\Location\Models\District>
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
            'name' => $this->faker->streetAddress,
        ];
    }
}
