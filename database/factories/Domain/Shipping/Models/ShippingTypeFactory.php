<?php

namespace Database\Factories\Domain\Shipping\Models;

use App\Domain\Location\Enums\ShippingEnums;
use App\Domain\Shipping\Models\ShippingType;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class ShippingTypeFactory extends Factory
{
    protected $model = ShippingType::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'type' => ShippingEnums::COD->value,
            'price' => 5,
        ];
    }
}
