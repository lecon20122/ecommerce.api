<?php

namespace Database\Factories\Domain\Product\Models;

use App\Domain\Product\Models\ProductAttribute;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class ProductAttributeFactory extends Factory
{

    protected $model = ProductAttribute::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'attribute' => $this->faker->jobTitle,
            'is_filterable' => $this->faker->boolean(),
        ];
    }
}
