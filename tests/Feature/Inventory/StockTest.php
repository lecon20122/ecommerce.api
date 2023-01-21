<?php

namespace Tests\Feature\Inventory;

use App\Domain\Admin\Models\Admin;
use App\Domain\Inventory\Models\Stock;
use App\Domain\Inventory\Services\StockService;
use App\Domain\Product\Models\Product;
use App\Domain\Store\Models\Store;
use App\Domain\Variation\Models\Variation;
use Domain\User\Models\User;
use Exception;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use JetBrains\PhpStorm\NoReturn;
use Tests\TestCase;

class StockTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testIsStockableReturnsNullIfVariationIsNotStockable()
    {
        $variation = Variation::factory()->create();
        $variation->is_stockable = false;
        $variation->save();

        $this->assertFalse((new StockService())->isStockable($variation));
    }

    /**
     * @throws Exception
     */
    #[NoReturn] public function testStockCantBeCreatedByAdmin()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');
        $variation = Variation::factory()->create();
        $data = [
            'variation_id' => $variation->id,
            'amount' => 2
        ];
        $this->post(route('admin.add.stock'), $data)->assertRedirect();

        $this->assertEquals(2, Stock::first()->amount);
    }

    #[NoReturn] public function testStockCanBeAddedByOwner()
    {
        $user = User::factory()->create();

        $this->actingAs($user, 'web');

        $store = Store::factory()->create([
            'user_id' => $user->id
        ]);

        $product = Product::factory()->create([
            'store_id' => $store->id
        ]);


        $variation = Variation::factory()->create([
            'product_id' => $product->id,
            'store_id' => $store->id
        ]);

        $data = [
            'variation_id' => $variation->id,
            'amount' => 2
        ];
        $res = $this->post(route('api.add.variation.stock'), $data)->assertOk();
        $this->assertEquals(2, Stock::first()->amount);
        $this->assertEquals(2, Variation::first()->stock_count);
    }
}
