<?php

namespace Database\Factories\Domain\Store\Models;

use App\Domain\Store\Models\Store;
use Domain\User\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class StoreFactory extends Factory
{
    protected $model = Store::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->sentence(2),
            'description' => $this->faker->realText(),
            'user_id' => User::factory(),
            'is_active' => true,
        ];
    }
}
