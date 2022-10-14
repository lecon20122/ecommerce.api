<?php

namespace Database\Factories\Domain\Cart\Models;

use App\Domain\Cart\Models\Cart;
use App\Domain\Variation\Models\Variation;
use Domain\User\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class CartFactory extends Factory
{
    protected $model = Cart::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
        ];
    }
}
