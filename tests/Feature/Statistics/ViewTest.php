<?php

namespace Tests\Feature\Statistics;

use App\Domain\Product\Models\Product;
use App\Domain\Statistics\Models\View;
use App\Domain\Statistics\Services\StatisticsService;
use App\Http\Product\Jobs\CountProductDailyViewsSummaryJob;
use App\Support\Enums\StateEnums;
use App\Support\Traits\FeatureTestTrait;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Carbon;
use Tests\TestCase;

class ViewTest extends TestCase
{
    use RefreshDatabase, FeatureTestTrait;



    public function testThatCountProductDailyViewsSummaryFuncGetsTodaysOnlyViews()
    {
        $user = $this->authorizedUser();
        $store = $this->createApprovedStore($user);

        $product = Product::factory()->create([
            'store_id' => $store->id,
            'is_approved' => true,
            'status' => StateEnums::ACTIVE,
        ]);

        View::factory(10)->create([
            'viewable_id' => $product->id,
            'viewable_type' => Product::class,
        ]);

        View::factory(5)->create([
            'viewable_id' => $product->id,
            'viewable_type' => Product::class,
            'created_at' => now()->subDays(1),
        ]);

        $statistics = new StatisticsService();

        $this->assertEquals(10, $statistics->countDailyViewSummary($product));
    }

    public function testThatWeCanSaveProductDailyViewsCountToViewsSummary()
    {
        $timezone = config('app-settings.timezone');

        $yesterdayDate = Carbon::yesterday($timezone);

        $user = $this->authorizedUser();

        $store = $this->createApprovedStore($user);

        $product = Product::factory()->create([
            'store_id' => $store->id,
        ]);

        $product2 = Product::factory()->create([
            'store_id' => $store->id,
        ]);

        $product3 = Product::factory()->create([
            'store_id' => $store->id,
        ]);


        View::factory(5)->create([
            'viewable_id' => $product->id,
            'viewable_type' => Product::class,
            'created_at' => $yesterdayDate
                ->hour(5)
                ->minute(23)
                ->second(10),
        ]);

        View::factory(5)->create([
            'viewable_id' => $product2->id,
            'viewable_type' => Product::class,
            'created_at' => $yesterdayDate
                ->hour(2)
                ->minute(1)
                ->second(24),
        ]);

        View::factory(5)->create([
            'viewable_id' => $product3->id,
            'viewable_type' => Product::class,
            'created_at' => $yesterdayDate->hour(6)->minute(20)->second(25),
        ]);

        $this->assertEquals(15, View::whereDate('created_at', $yesterdayDate)->get()->count());

        dispatch(new CountProductDailyViewsSummaryJob());

        $this->assertDatabaseHas('view_summaries', [
            'viewable_id' => $product->id,
            'viewable_type' => Product::class,
            'views' => 5,
            'summary_date' => $yesterdayDate->format('Y-m-d')
        ]);

        $this->assertDatabaseHas('view_summaries', [
            'viewable_id' => $product2->id,
            'viewable_type' => Product::class,
            'views' => 5,
            'summary_date' => $yesterdayDate->format('Y-m-d')
        ]);

        $this->assertDatabaseHas('view_summaries', [
            'viewable_id' => $product3->id,
            'viewable_type' => Product::class,
            'views' => 5,
            'summary_date' => $yesterdayDate->format('Y-m-d')
        ]);
    }
}
