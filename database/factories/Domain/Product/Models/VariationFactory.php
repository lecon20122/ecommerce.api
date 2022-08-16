<?php

namespace Database\Factories\Domain\Product\Models;

use App\Domain\Product\Models\Product;
use App\Domain\Product\Models\Variation;
use App\Domain\Store\Models\Store;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Model>
 */
class VariationFactory extends Factory
{

    protected $model = Variation::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => $this->faker->unique()->sentence,
            'price' => $this->faker->randomFloat(null , 99 , 500),
            'type' => $this->faker->unique()->sentence,
            'order' => $this->faker->randomDigit(),
            'product_id' => Product::factory(),
        ];
    }
}
