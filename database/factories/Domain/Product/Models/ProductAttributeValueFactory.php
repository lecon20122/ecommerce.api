<?php

namespace Database\Factories\Domain\Product\Models;

use App\Domain\Product\Models\ProductAttribute;
use App\Domain\Product\Models\ProductAttributeValue;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class ProductAttributeValueFactory extends Factory
{
    protected $model = ProductAttributeValue::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'value' => $this->faker->name,
            'product_attribute_id' => ProductAttribute::factory(),
        ];
    }
}
