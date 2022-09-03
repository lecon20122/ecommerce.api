<?php

namespace App\Domain\Product\Services;

use App\Domain\Product\Models\Product;
use App\Domain\Product\Models\Variation;
use App\Domain\Variation\Models\VariationType;
use App\Domain\Variation\Models\VariationTypeValue;
use App\Http\Variation\Requests\StoreVariationRequest;
use App\Http\Variation\Requests\UpdateVariationRequest;
use App\Http\Variation\Resources\VariationResource;
use App\Http\Variation\Resources\VariationTypeResource;
use App\Http\Variation\Resources\VariationTypeValueResource;
use App\Support\Enums\MediaCollectionEnums;
use App\Support\Services\Media\ImageService;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class VariationService
{

    public function getVariationById(int $id): VariationResource
    {
        return new VariationResource(
            Variation::query()
                ->with(['children', 'media', 'variationType', 'variationTypeValue'])
                ->first()
        );
    }

    public function getVariationTypes(): AnonymousResourceCollection
    {
        return VariationTypeResource::collection(
            VariationType::query()->select(['id', 'type', 'is_mediable'])->get()
        );
    }


    public function getVariationTypeValues(): AnonymousResourceCollection
    {
        return VariationTypeValueResource::collection(
            VariationTypeValue::query()->select(['id', 'value'])->get()
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
        $variationType = VariationType::find($data['variation_type_id']);

        $product = Product::query()
            ->find($data['product_id']);

        $variation = $product->variations()
            ->create($data);

        if ($request->hasFile('images') && $variationType->is_mediable && $variation) {
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
