<?php

namespace App\Domain\Product\Services;

use App\Domain\Product\Models\Product;
use App\Domain\Product\Models\Variation;
use App\Http\Variation\Requests\StoreVariationRequest;
use App\Http\Variation\Requests\UpdateVariationRequest;
use App\Http\Variation\Resources\VariationResource;
use App\Support\Enums\MediaCollectionEnums;
use App\Support\Services\Media\ImageService;

class VariationService
{

    public function getVariationById(int $id): VariationResource
    {
        return new VariationResource(
            Variation::query()
                ->with(['children', 'media'])
                ->first()
        );
    }


    /**
     * @param StoreVariationRequest $request
     * @param ImageService $imageService
     * @return mixed
     */

    public function store(StoreVariationRequest $request, ImageService $imageService): void
    {
        $data = $request->validated();
        $product = Product::query()
            ->find($data['product_id']);

        if ($request->has('en') || $request->has('ar')) {
            $data['title'] = [
                'en' => $request->validated('en'),
                'ar' => $request->validated('ar'),
            ];
        }

        $variation = $product->variations()
            ->create($data);

        if ($variation && $request->hasFile('images')) {
            $imageService->imageUpload($variation, 'images', MediaCollectionEnums::VARIATION, $variation->id);
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

    public function restore(int $id)
    {
        $variation = Variation::withTrashed()->find($id);
        $variation?->restore();
    }

    public function permanentDelete(int $id)
    {
        $variation = Variation::withTrashed()->find($id);
        $variation?->forceDelete();
    }
}
