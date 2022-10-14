<?php

namespace Database\Factories\Domain\Cart\Models;

use App\Domain\Cart\Models\Cart;
use App\Domain\Cart\Models\CartVariation;
use App\Domain\Variation\Models\Variation;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class CartVariationFactory extends Factory
{
    protected $model = CartVariation::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'cart_id' => Cart::factory(),
            'variation_id' => Variation::factory(),
            'quantity' => 2,
            'price' => 325.4,
        ];
    }
}
