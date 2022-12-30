<?php

namespace Database\Factories\Domain\Product\Models;

use App\Domain\Product\Models\Product;
use App\Domain\Product\Models\ProductAttribute;
use App\Domain\Product\Models\ProductAttributeValue;
use App\Domain\Product\Models\ProductDescription;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class ProductDescriptionFactory extends Factory
{
    protected $model = ProductDescription::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'value' => $this->faker->name,
            'product_id' => Product::factory(),
            'product_attribute_id' => ProductAttribute::factory(),
        ];
    }
}
