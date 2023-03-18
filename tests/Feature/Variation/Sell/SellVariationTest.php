<?php

namespace Tests\Feature\Variation\Sell;

use App\Domain\Order\Models\Order;
use App\Domain\Variation\Models\Variation;
use App\Domain\Variation\Services\Sell\SellVariationService;
use App\Support\Traits\FeatureTestTrait;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SellVariationTest extends TestCase
{
    use RefreshDatabase, WithFaker, FeatureTestTrait;


    public function testThatOwnerOnlyCanViewHisColorVariations()
    {
        $this->authorizedUser();
        $unAuthorizedUser = $this->unAuthorizedUser();
        $store = $this->createApprovedStore($unAuthorizedUser);

        $variation = Variation::factory()->create(
            [
                'store_id' => $store->id,
            ]
        );

        $res = $this->get(route('api.sell.get.color.variation.with.sizes', ['id' => $variation->id]))->assertForbidden();

        $res->assertJsonFragment(
            [
                'message' => "you are not allowed to view products yet!",
            ]
        );
    }

    public function testThatOwnerCanViewHisColorVariations()
    {
        $user = $this->authorizedUser();

        $store = $this->createApprovedStore($user);

        $variation = Variation::factory()->create(
            [
                'store_id' => $store->id,
            ]
        );

        $res = $this->get(route('api.sell.get.color.variation.with.sizes', ['id' => $variation->id]))->assertOk();

        $res->assertJsonFragment(
            [
                'id' => $variation->id,
                'price' => $variation->price,
            ]
        );
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testSellVariationCanBeSafeDeleted()
    {
        $user = $this->authorizedUser();
        $store = $this->createApprovedStore($user);

        $variation = Variation::factory()->create(
            [
                'store_id' => $store->id,
            ]
        );

        $res = $this->delete(route('api.sell.safe.delete.owner.variation', ['variation' => $variation->id]));

        $this->assertNotNull($variation->fresh()->deleted_at);
    }



    public function testThatOwnerCannotUpdatePriceOfVariationChildrenWhenNoChildren()
    {
        $user = $this->authorizedUser();
        $store = $this->createApprovedStore($user);

        $product = $this->createProduct($store);

        $variation = Variation::factory()->create(
            [
                'store_id' => $store->id,
                'price' => 150, // in pounds
                'product_id' => $product->id,
            ]
        );

        $secondVariation = Variation::factory()->create(
            [
                'store_id' => $store->id,
                'parent_id' => $variation->id,
                'price' => 150, // in pounds
                'product_id' => $product->id,
            ]
        );

        $childForSecondVariation = Variation::factory()->create(
            [
                'store_id' => $store->id,
                'parent_id' => $secondVariation->id,
                'price' => 150, // in pounds
                'product_id' => $product->id,
            ]
        );

        $res = (new SellVariationService)->updatePrice($variation->id, 100);

        // assert database has updated price in pounds
        $this->assertEquals(100, $variation->fresh()->price);
        $this->assertNotEquals(100, $childForSecondVariation->fresh()->price);

        // assert database has updated price in cents
        $this->assertDatabaseHas('variations', [
            'id' => $variation->id,
            'price' => 10000, // in cents
        ]);

        $this->assertDatabaseHas('variations', [
            'id' => $childForSecondVariation->id,
            'price' => 15000, // in cents
        ]);
    }

    public function testThatCreateSizeFunctionWorksCorrectly()
    {
        $user = $this->authorizedUser();
        $store = $this->createApprovedStore($user);

        $product = $this->createProduct($store);

        $variation = Variation::factory()->create(
            [
                'store_id' => $store->id,
                'price' => 150, // in pounds
                'product_id' => $product->id,
            ]
        );

        $sizeValue = $this->createSizeValue();

        $sizeAndStock = [
            'id' => $sizeValue->id,
            'stock_count' => $this->faker->randomNumber(2),
        ];

        $res = (new SellVariationService)->createSize($variation, $sizeAndStock, 100);

        $this->assertDatabaseHas('variations', [
            'id' => $res->id,
            'is_stockable' => true,
            'price' => 10000, // in cents
            'parent_id' => $variation->id,
            'product_id' => $product->id,
            'store_id' => $store->id,
            'variation_type_value_id' => $sizeValue->id,
            'variation_type_id' => $sizeValue->variation_type_id,
        ]);
    }

    public function testThatCreateColorFunctionWorksCorrectly()
    {
        $user = $this->authorizedUser();
        $store = $this->createApprovedStore($user);

        $product = $this->createProduct($store);


        $colorValue = $this->createColorValue();

        $res = (new SellVariationService)->createColor($product, $colorValue->id, 100);

        $this->assertDatabaseHas('variations', [
            'id' => $res->id,
            'is_stockable' => false,
            'price' => 10000, // in cents
            'parent_id' => null,
            'product_id' => $product->id,
            'store_id' => $store->id,
            'variation_type_value_id' => $colorValue->id,
            'variation_type_id' => $colorValue->variation_type_id,
        ]);
    }

    public function testOwnerCanCreateManySizesVariations()
    {
        $user = $this->authorizedUser();
        $store = $this->createApprovedStore($user);

        $product = $this->createProduct($store);

        $parentVariation = Variation::factory()->create(
            [
                'store_id' => $store->id,
                'price' => 150, // in pounds
                'product_id' => $product->id,
            ]
        );

        $sizeType = $this->createSizeType();

        $sizeValue = $this->createSizeValue($sizeType);

        $sizeValue2 = $this->createSizeValue($sizeType, [
            'ar' => 'متوسط',
            'en' => 'Medium',
        ]);

        $sizeAndStock = [
            'id' => $sizeValue->id,
            'stock_amount' => $this->faker->randomNumber(2),
        ];

        $sizeAndStock2 = [
            'id' => $sizeValue2->id,
            'stock_amount' => $this->faker->randomNumber(2),
            'price' => 100,
        ];

        $data = [
            'parent_id' => $parentVariation->id,
            'sizes' => [
                $sizeAndStock,
                $sizeAndStock2,
            ],
        ];

        $res = $this->post(route('api.sell.create.sizes.variation'), $data);

        $res->assertStatus(200);

        $this->assertEquals(150, $parentVariation->fresh()->children->first()->price);
        $this->assertEquals(100, $parentVariation->fresh()->children->last()->price);
        $this->assertEquals(2, $parentVariation->fresh()->children->count());
    }
}
