<?php

namespace Database\Factories\Domain\Variation\Models;

use App\Domain\Variation\Models\SizeDescription;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class SizeDescriptionFactory extends Factory
{
    protected $model = SizeDescription::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'guide' => $this->faker->sentence
        ];
    }
}
