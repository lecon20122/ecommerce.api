<?php

namespace Database\Factories\Domain\Variation\Models;

use App\Domain\Variation\Models\Variation;
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
//        $product = Product::factory()->create();
        return [
            'price' => $this->faker->randomFloat(null, 99, 500),
            'order' => $this->faker->randomDigit(),
//            'product_id' => $product->id,
            'store_id' => 1,
            'is_stockable' => false,
//            'variation_type_value_id' => VariationTypeValue::factory(),
//            'variation_type_id' => VariationType::factory(),
            'variation_type_value_id' => rand(1, 5),
            'variation_type_id' => 1,
        ];
    }

    public function configure(): VariationFactory
    {
        return $this->afterCreating(function (Variation $variation) {
            $url = 'https://source.unsplash.com/random/1280x1919/?fashion';
            $variation
                ->addMediaFromUrl($url)
                ->toMediaCollection(MediaCollectionEnums::VARIATION);
        });
    }
}
