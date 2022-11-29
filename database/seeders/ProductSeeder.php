<?php

namespace Database\Seeders;

use App\Domain\Product\Models\Product;
use App\Domain\Store\Models\Store;
use App\Domain\Variation\Models\Variation;
use App\Domain\Variation\Models\VariationType;
use App\Support\Enums\MediaCollectionEnums;
use Faker\Generator;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{

    /**
     * The current Faker instance.
     *
     * @var Generator
     */
    protected Generator $faker;

    /**
     * @param Generator $faker
     */
    public function __construct(Generator $faker)
    {
        $this->faker = $faker;
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $colorType = VariationType::query()->whereRaw("JSON_EXTRACT(type, '$.en') = 'color'")->first();

        Store::factory(5)->create();

        Product::factory(5)->create([
            'title' => [
                'en' => $this->faker->paragraph(1),
                'ar' => $this->faker->name(),
            ],
            'price' => $this->faker->randomFloat(null, 99, 500),
            'live_at' => now(),
            'store_id' => rand(1, 5),
        ])->each(function (Product $product) use ($colorType) {
            for ($i = 0; $i < 4; $i++) {

                $variation = $product->variations()->create(
                    [
                        'price' => $this->faker->randomFloat(null, 99, 500),
                        'order' => $this->faker->randomDigit(),
                        'store_id' => $product->store_id,
                        'product_id' => $product->id,
                        'is_stockable' => true,
                        'variation_type_id' => $colorType->id,
                        'variation_type_value_id' => rand(1, 6),
                    ]);

                $url = 'https://picsum.photos/1200/1919';
//                $url = 'https://source.unsplash.com/random/1280x1919/?fashion';
                $variation
                    ->addMediaFromUrl($url)
                    ->toMediaCollection(MediaCollectionEnums::VARIATION);
            }
        });

        foreach (Product::all() as $product){
            $product->categories()->attach(rand(4,6));
        }
    }
}
