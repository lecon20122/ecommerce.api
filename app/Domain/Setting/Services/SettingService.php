<?php

namespace App\Domain\Setting\Services;

use App\Domain\Setting\Models\Setting;

class SettingService
{
    public function getSettingValue(string $setting)
    {
        return Setting::query()->where($setting, '=', 'key')->first()->value ?? null;
    }
}
