<?php

namespace App\Domain\Product\Services;

use App\Domain\Product\Models\Variation;
use App\Http\Variation\Requests\StoreVariationRequest;
use App\Http\Variation\Requests\UpdateVariationRequest;
use App\Support\Enums\MediaCollectionEnums;
use App\Support\Jobs\UploadImageJob;
use App\Support\Services\Media\ImageService;

class VariationService
{
    /**
     * @param StoreVariationRequest $request
     * @return mixed
     */

    public function store(StoreVariationRequest $request , ImageService $imageService): void
    {
        $data = $request->validated();

        if ($request->has('en') || $request->has('ar')) {
            $data['title'] = [
                'en' => $request->validated('en'),
                'ar' => $request->validated('ar'),
            ];
        }

        $variation = Variation::query()
            ->create($data);

        if ($variation && $request->hasFile('images')) {
            $imageService->imageUpload($variation, 'images', MediaCollectionEnums::THUMBNAIL, $variation->id);
        }
    }

    public function update(UpdateVariationRequest $request, Variation $variation)
    {
        $data = $request->validated();

        if ($request->has('en') || $request->has('ar')) {
            $data['title'] = [
                'en' => $request->validated('en'),
                'ar' => $request->validated('ar'),
            ];
        }

        $variation->update($data);
    }

    public function destroy(int $id)
    {
        $variation = Variation::query()->find($id);
        $variation?->delete();
    }
}
