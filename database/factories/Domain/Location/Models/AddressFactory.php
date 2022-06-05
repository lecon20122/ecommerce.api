<?php

namespace Database\Factories\Domain\Location\Models;

use App\Domain\Location\Enums\LocationEnums;
use App\Domain\Location\Models\Address;
use App\Domain\Location\Models\District;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Domain\Location\Models\Address>
 */
class AddressFactory extends Factory
{
    protected $model = Address::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'street' => $this->faker->unique()->streetName,
            'building' => $this->faker->randomNumber,
            'floor' => $this->faker->randomNumber,
            'apartment_number' => $this->faker->randomNumber,
            'district_id' => District::factory(),
            'type' => LocationEnums::ADDRESS_TYPE_HOME,
            'nearby_landmark' => $this->faker->streetName,
        ];
    }
}
