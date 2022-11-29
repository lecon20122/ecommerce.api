<?php

namespace Database\Seeders;

use App\Domain\Admin\Models\Admin;
use App\Domain\Category\Models\Category;
use App\Domain\Product\Models\Product;
use App\Domain\Store\Models\Store;
use App\Domain\Variation\Models\Variation;
use App\Domain\Variation\Models\VariationType;
use App\Domain\Variation\Models\VariationTypeValue;
use Exception;
use Faker\Generator;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StartupSeeder extends Seeder
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
     * @throws Exception
     */
    public function run()
    {
        if (!Admin::query()->where('email', '=', 'mustafa@admin.com')->first()) {
            Admin::factory()->create();
        }

        $categories = [
            [
                'title' => [
                    'en' => 'Men',
                    'ar' => 'للرجال'
                ],
                'is_active' => true
            ],
            [
                'title' => [
                    'en' => 'Women',
                    'ar' => 'للنساء'
                ],
                'is_active' => true
            ],
            [
                'title' => [
                    'en' => 'Kids',
                    'ar' => 'للأطفال'
                ],
                'is_active' => true
            ],
            [
                'title' => [
                    'en' => 'Men Shoes',
                    'ar' => 'أحذية للرجال'
                ],
                'is_active' => true,
                'parent_id' => 1 // men
            ],
            [
                'title' => [
                    'en' => 'Women Dresses',
                    'ar' => 'فساتين للنساء'
                ],
                'is_active' => true,
                'parent_id' => 2 // women
            ],
            [
                'title' => [
                    'en' => 'Kids Shoes',
                    'ar' => 'أحذية للأطفال'
                ],
                'is_active' => true,
                'parent_id' => 3 // kids
            ],

        ]; //categories [women , men , kids]
        foreach ($categories as $category) {
            Category::create($category);
        }

        $variationTypes = [
            [
                'type' => [
                    'en' => 'color',
                    'ar' => 'لون',
                ],
                'is_mediable' => true,
                'is_stockable' => false,
            ],
            [
                'type' => [
                    'en' => 'size',
                    'ar' => 'مقاس',
                ],
                'is_mediable' => false,
                'is_stockable' => true,
            ],
        ]; //variationType (size-color)
        foreach ($variationTypes as $variationType) {
            VariationType::create($variationType);
        }
        $colorType = VariationType::query()->whereRaw("JSON_EXTRACT(type, '$.en') = 'color'")->first();
        $sizeType = VariationType::query()->whereRaw("JSON_EXTRACT(type, '$.en') = 'size'")->first();

        $variationTypesValues = [
            [
                'value' => [
                    'en' => 'Black',
                    'ar' => 'اسود',
                ],
                'hex_value' => '#000000',
                'variation_type_id' => $colorType->id,
            ],
            [
                'value' => [
                    'en' => 'White',
                    'ar' => 'ابيض',
                ],
                'hex_value' => '#FFFFFF',
                'variation_type_id' => $colorType->id,
            ],
            [
                'value' => [
                    'en' => 'Red',
                    'ar' => 'احمر',
                ],
                'hex_value' => '#FF0000',
                'variation_type_id' => $colorType->id,
            ],
            [
                'value' => [
                    'en' => 'Green',
                    'ar' => 'احمر',
                ],
                'hex_value' => '#008000',
                'variation_type_id' => $colorType->id,
            ],
            [
                'value' => [
                    'en' => 'Gray',
                    'ar' => 'رمادي',
                ],
                'hex_value' => '#808080',
                'variation_type_id' => $colorType->id,
            ],
            [
                'value' => [
                    'en' => 'XL',
                    'ar' => 'XL',
                ],
                'variation_type_id' => $sizeType->id,
            ],
            [
                'value' => [
                    'en' => 'L',
                    'ar' => 'L',
                ],
                'variation_type_id' => $sizeType->id,
            ],
            [
                'value' => [
                    'en' => 'M',
                    'ar' => 'M',
                ],
                'variation_type_id' => $sizeType->id,
            ],
            [
                'value' => [
                    'en' => 'S',
                    'ar' => 'S',
                ],
                'variation_type_id' => $sizeType->id,
            ],
        ]; // colors and sizes [red , black , XL , L , etc ..]
        foreach ($variationTypesValues as $variationTypesValue) {
            VariationTypeValue::create($variationTypesValue);
        }


    }
}
