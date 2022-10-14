<?php

namespace Database\Factories\Domain\Variation\Models;

use App\Domain\Variation\Models\SizeDescription;
use App\Domain\Variation\Models\SizeDescriptionValue;
use App\Domain\Variation\Models\Variation;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class SizeDescriptionValueFactory extends Factory
{
    protected $model = SizeDescriptionValue::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'value' => $this->faker->randomDigit(),
            'size_description_id' => SizeDescription::factory(),
            'variation_id' => Variation::factory(),
        ];
    }
}
