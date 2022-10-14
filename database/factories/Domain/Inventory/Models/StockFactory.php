<?php

namespace Database\Factories\Domain\Inventory\Models;

use App\Domain\Inventory\Models\Stock;
use App\Domain\Variation\Models\Variation;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class StockFactory extends Factory
{
    protected $model = Stock::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'variation_id' => Variation::factory(),
            'amount' => 1,
        ];
    }
}
