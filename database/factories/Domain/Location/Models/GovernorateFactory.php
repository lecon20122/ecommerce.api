<?php

namespace Database\Factories\Domain\Location\Models;

use App\Domain\Location\Models\Governorate;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class GovernorateFactory extends Factory
{
    protected $model = Governorate::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->city
        ];
    }
}
