<?php

namespace App\Domain\Variation\Services;

use App\Domain\Variation\Models\VariationType;
use App\Http\Variation\Resources\VariationTypeResource;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class VariationTypeService
{
    public function index(): AnonymousResourceCollection
    {
        return VariationTypeResource::collection(VariationType::all());
    }

    public function store(mixed $data)
    {
        $data['type'] = [
            'en' => $data['en'],
            'ar' => $data['ar'],
        ];
        VariationType::query()->create($data);
    }

    public function update(int $id, mixed $data)
    {
        $model = VariationType::withTrashed()
            ->find($id);

        if ($model) {
            $data['type'] = [
                'en' => $data['en']?? null,
                'ar' => $data['ar']?? null,
            ];
            $model->update($data);
        }

    }

    public function destroy(int $id)
    {
        $model = VariationType::withTrashed()->find($id);
        $model?->delete();
    }

    public function restore(int $id)
    {
        $model = VariationType::withTrashed()->find($id);
        $model?->restore();
    }

    public function permanentDelete(int $id)
    {
        $variation = VariationType::withTrashed()->find($id);
        $variation?->forceDelete();
    }
}
