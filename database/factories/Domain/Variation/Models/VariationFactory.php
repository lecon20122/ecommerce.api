<?php

namespace Database\Factories\Domain\Variation\Models;

use App\Domain\Product\Models\Product;
use App\Domain\Variation\Models\Variation;
use App\Domain\Variation\Models\VariationType;
use App\Domain\Variation\Models\VariationTypeValue;
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
            'title' => $this->faker->title,
            'price' => $this->faker->randomFloat(null, 99, 500),
            'order' => $this->faker->randomDigit(),
            'product_id' => Product::factory(),
            'variation_type_value_id' => VariationTypeValue::factory(),
            'variation_type_id' => VariationType::factory(),
        ];
    }

//    public function configure(): VariationFactory
//    {
//        return $this->afterCreating(function (Variation $variation) {
//                $url = 'https://source.unsplash.com/random/1280x1919/?fashion';
//            $variation
//                ->addMediaFromUrl($url)
//                ->toMediaCollection(MediaCollectionEnums::VARIATION);
//        });
//    }
}
