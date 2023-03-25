<?php

namespace Database\Factories\Domain\Store\Models;

use App\Domain\Admin\Models\Admin;
use App\Domain\Location\Models\Address;
use App\Domain\Store\Models\SellerRequest;
use Domain\User\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Domain\Store\Models\SellerRequest>
 */
class SellerRequestFactory extends Factory
{
    protected $model = SellerRequest::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'brand_name' => $this->faker->name,
            'phone' => $this->faker->phoneNumber,
            'what_store_sells' => $this->faker->text,
            'company_register' => $this->faker->numberBetween(0,15),
            'pickup_location' => Address::factory(),
            'user_id' => User::factory(),
            'approved_by' => Admin::factory(),
            'approved_at' => now(),
        ];
    }
}
