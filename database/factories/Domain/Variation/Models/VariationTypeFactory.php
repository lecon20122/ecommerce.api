<?php

namespace Database\Factories\Domain\Variation\Models;

use App\Domain\Variation\Models\VariationType;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class VariationTypeFactory extends Factory
{
    protected $model = VariationType::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'type' => [
                'en' => $this->faker->name,
                'ar' => $this->faker->jobTitle,
            ],
            'is_mediable' => true,
        ];
    }
}
