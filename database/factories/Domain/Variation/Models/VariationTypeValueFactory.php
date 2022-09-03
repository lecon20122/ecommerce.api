<?php

namespace Database\Factories\Domain\Variation\Models;

use App\Domain\Variation\Models\VariationType;
use App\Domain\Variation\Models\VariationTypeValue;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class VariationTypeValueFactory extends Factory
{
    protected $model = VariationTypeValue::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'value' => [
                'en' => $this->faker->colorName,
                'ar' => 'اسود',
            ],
            'variation_type_id' => VariationType::factory(),
        ];
    }
}
