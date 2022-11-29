<?php

namespace Database\Seeders;

use App\Domain\Product\Models\Product;
use App\Domain\Store\Models\Store;
use App\Domain\Variation\Models\VariationType;
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
            'store_id' => rand(0, 5),
        ])->each(function ($product) use ($colorType) {
            Variation::factory(3)->create(
                [
                    'price' => $this->faker->randomFloat(null, 99, 500),
                    'order' => $this->faker->randomDigit(),
                    'store_id' => $product->store_id,
                    'product_id' => $product->id,
                    'is_stockable' => true,
                    'variation_type_id' => $colorType->id,
                    'variation_type_value_id' => rand(0, 6),
                ]
            );
        });
    }
}
