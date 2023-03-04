<?php

namespace Database\Factories\Domain\Order\Models;

use App\Domain\Order\Models\Order;
use Database\Factories\Domain\User\Models\UserFactory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class OrderFactory extends Factory
{
    protected $model = Order::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => UserFactory::class,
            'state' => $this->faker->randomElement(['pending', 'processing', 'completed', 'declined']),
            'total' => $this->faker->randomNumber(2),
            'subtotal' => $this->faker->randomNumber(2),
            'delivery_fees' => $this->faker->randomNumber(2),
            'commission' => $this->faker->randomNumber(2),
            'net' => $this->faker->randomNumber(2),
        ];
    }
}
