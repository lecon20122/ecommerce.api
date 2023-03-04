<?php

namespace Tests\Feature\Variation\Sell;

use App\Domain\Order\Models\Order;
use App\Domain\Variation\Models\Variation;
use App\Support\Traits\FeatureTestTrait;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SellVariationTest extends TestCase
{
    use RefreshDatabase, WithFaker, FeatureTestTrait;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testSellVariationCanBeSafeDeleted()
    {
        $user = $this->authorizedUser();
        $store = $this->createApprovedStore($user);

        $order = Order::factory()->create(
            [
                'user_id' => $user->id,
            ]
        );

        $variation = Variation::factory()->create(
            [
                'store_id' => $store->id,
            ]
        );

        $order->variations()->attach($variation->id, [
            'quantity' => 1,
            'price' => $variation->price,
            'store_id' => $store->id,
        ]);

        $this->assertDatabaseHas('order_variation', [
            'order_id' => $order->id,
            'variation_id' => $variation->id,
        ]);

        $res = $this->post(route('api.sell.safe.delete.owner.variation' , ['variation' => $variation->id]));

        $this->assertNotNull($variation->fresh()->deleted_at);

    }

    public function testSellVariationCannotBeSafeDeleted()
    {
        $user = $this->authorizedUser();
        $store = $this->createApprovedStore($user);

        $variation = Variation::factory()->create(
            [
                'store_id' => $store->id,
            ]
        );

        $res = $this->post(route('api.sell.safe.delete.owner.variation' , ['variation' => $variation->id]));

        $this->assertNull(Variation::first());

    }
}
