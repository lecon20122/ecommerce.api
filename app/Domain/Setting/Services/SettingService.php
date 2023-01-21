<?php

namespace App\Domain\Setting\Services;

use App\Domain\Setting\Models\Setting;
use App\Domain\Variation\Models\VariationTypeValue;
use App\Http\Media\Request\StoreMediaRequest;
use App\Support\Enums\MediaCollectionEnums;
use App\Support\Services\Media\ImageService;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class SettingService
{
    public function getSettingValue(string $setting)
    {
        return Setting::query()->where($setting, '=', 'key')->first()->value ?? null;
    }

    public function store(array $data)
    {
        Setting::query()->create($data);
    }

    public function update(Setting $setting, array $data)
    {
        $setting->update($data);
    }

    public function delete(Setting $setting)
    {
        $setting->delete();
    }

    /**
     * @param Setting $setting
     * @param StoreMediaRequest $request
     * @param ImageService $imageService
     */
    public function uploadColorImage(Setting $setting, StoreMediaRequest $request, ImageService $imageService)
    {
        if ($request->hasFile('images')) {
            $imageService->addMultipleMediaFromRequest($setting, 'images', MediaCollectionEnums::LOGO, $setting->id);
        }
    }
}
