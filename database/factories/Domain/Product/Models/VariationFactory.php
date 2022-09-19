<?php

namespace Database\Factories\Domain\Product\Models;

use App\Domain\Product\Models\Product;
use App\Domain\Product\Models\Variation;
use App\Domain\Store\Models\Store;
use App\Domain\Variation\Models\VariationType;
use App\Domain\Variation\Models\VariationTypeValue;
use App\Model;
use App\Support\Enums\MediaCollectionEnums;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class VariationFactory extends Factory
{

    protected $model = Variation::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {

        return [
            'price' => $this->faker->randomFloat(null, 99, 500),
            'order' => $this->faker->randomDigit(),
            'product_id' => Product::factory(),
            'variation_type_value_id' => rand(1, 4),
            'variation_type_id' => 1,
        ];
    }

    public function configure(): VariationFactory
    {
        return $this->afterCreating(function (Variation $variation) {
            $url = 'https://source.unsplash.com/random/1280x1919/?clothes';
            $variation
                ->addMediaFromUrl($url)
                ->toMediaCollection(MediaCollectionEnums::VARIATION);
        });
    }
}
