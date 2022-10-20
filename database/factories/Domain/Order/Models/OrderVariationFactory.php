<?php

namespace Database\Factories\Domain\Order\Models;

use App\Domain\Order\Models\OrderVariation;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class OrderVariationFactory extends Factory
{
    protected $model = OrderVariation::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'order_id'
        ];
    }
}
