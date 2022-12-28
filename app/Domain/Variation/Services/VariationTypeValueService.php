<?php

namespace App\Domain\Variation\Services;

use App\Domain\Variation\Models\Variation;
use App\Domain\Variation\Models\VariationTypeValue;
use App\Http\Media\Request\StoreMediaRequest;
use App\Http\Variation\Resources\VariationTypeValueResource;
use App\Support\Enums\MediaCollectionEnums;
use App\Support\Services\Media\ImageService;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class VariationTypeValueService
{
    public function index(): AnonymousResourceCollection
    {
        return VariationTypeValueResource::collection(VariationTypeValue::all());
    }

    public function store(mixed $data)
    {
        $data['value'] = [
            'en' => $data['en'],
            'ar' => $data['ar'],
        ];
        VariationTypeValue::query()->create($data);
    }

    public function update(int $id, mixed $data)
    {
        $model = VariationTypeValue::withTrashed()
            ->find($id);

        if ($model) {
            $data['value'] = [
                'en' => $data['en'] ?? null,
                'ar' => $data['ar'] ?? null,
            ];
            $model->update($data);
        }

    }

    public function destroy(int $id)
    {
        $model = VariationTypeValue::withTrashed()->find($id);
        $model?->delete();
    }

    public function restore(int $id)
    {
        $model = VariationTypeValue::withTrashed()->find($id);
        $model?->restore();
    }

    public function permanentDelete(int $id)
    {
        $variation = VariationTypeValue::withTrashed()->find($id);
        $variation?->forceDelete();
    }

    public function uploadColorImage(VariationTypeValue $variationTypeValue, StoreMediaRequest $request, ImageService $imageService)
    {
        if ($request->hasFile('images')) {
            $imageService->imageUpload($variationTypeValue, 'images', MediaCollectionEnums::VARIATION_COLOR, $variationTypeValue->id);
        }
    }
}
