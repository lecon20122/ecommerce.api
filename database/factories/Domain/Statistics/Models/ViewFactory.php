<?php

namespace Database\Factories\Domain\Statistics\Models;

use App\Domain\Statistics\Models\View;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Domain\Statistics\Models\View>
 */
class ViewFactory extends Factory
{

    protected $model = View::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'ip_address' => $this->faker->ipv4,
            'referer' => $this->faker->url,
            'user_agent' => $this->faker->userAgent,
            'session_id' => $this->faker->uuid,
            'user_id' => null,
        ];
    }
}
