<?php

namespace Tests\Feature\Inventory;

use App\Domain\Admin\Models\Admin;
use App\Domain\Inventory\Models\Stock;
use App\Domain\Inventory\Services\StockService;
use App\Domain\Variation\Models\Variation;
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

        $this->assertNull((new StockService())->isStockable($variation->id));
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
}
