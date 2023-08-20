<?php

namespace App\Domain\Statistics\Services;

use App\Domain\Product\Models\Product;
use App\Domain\Statistics\Models\View;
use App\Http\Product\Resource\Sell\SellProductResource;
use App\Support\Enums\ApplicationEnums;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class StatisticsService
{
    public function recordVisit(Model $model): int | null
    {
        $visitCookieId = request()->cookie(ApplicationEnums::VISIT_ID_COOKIE);

        if (!$visitCookieId) {
            $viewLog = View::createViewLog($model);
            return $viewLog->id;
        }

        return (int) $visitCookieId;
    }

    public function countDailyViewSummary(Product|SellProductResource $product): int
    {
        return $product
            ->views()
            ->whereDate('created_at', Carbon::today()->startOfDay())
            ->count();
    }
}
