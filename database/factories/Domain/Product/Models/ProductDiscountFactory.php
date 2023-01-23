<?php

namespace Database\Factories\Domain\Product\Models;

use App\Domain\Product\Models\Product;
use App\Domain\Product\Models\ProductDiscount;
use App\Support\Enums\TypeEnum;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class ProductDiscountFactory extends Factory
{
    protected $model = ProductDiscount::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'product_id' => Product::factory(),
            'value' => $this->faker->numberBetween(1, 100),
            'type' => TypeEnum::PERCENTAGE,
            'start_at' => now(),
            'end_at' => now()->addDays(10),
            'is_active' => true,
        ];
    }
}
