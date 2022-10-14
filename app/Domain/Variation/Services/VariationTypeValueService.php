<?php

namespace App\Domain\Cart\Models\Domain\Variation\Services;

use App\Domain\Variation\Models\VariationTypeValue;
use App\Http\Variation\Resources\VariationTypeValueResource;
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
}
