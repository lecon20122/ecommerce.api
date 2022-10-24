<?php

namespace Database\Factories\Domain\Product\Models;

use App\Domain\Product\Models\Product;
use App\Domain\Store\Models\Store;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class ProductFactory extends Factory
{

    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => [
                'en' => $this->faker->name,
                'ar' => 'منتج',
            ],
            'price' => $this->faker->randomFloat(null, 99, 500),
            'live_at' => now(),
            'store_id' => Store::factory(),
        ];
    }
}
