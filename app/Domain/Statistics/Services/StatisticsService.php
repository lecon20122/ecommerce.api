<?php

namespace App\Domain\Statistics\Services;

use App\Domain\Statistics\Models\View;
use App\Support\Enums\ApplicationEnums;
use Illuminate\Database\Eloquent\Model;

class StatisticsService
{
    public function recordVisit(Model $model): int | null
    {
        $visitCookieId = request()->cookie(ApplicationEnums::VISIT_ID_COOKIE);

        if (!$visitCookieId) {
            $viewLog = View::createViewLog($model);

            return $viewLog->id;
        }

        $viewLog = $model->views()->find($visitCookieId);

        if (!$viewLog) {
            $viewLog = View::createViewLog($model);

            return $viewLog->id;
        }

        return null;
    }
}
