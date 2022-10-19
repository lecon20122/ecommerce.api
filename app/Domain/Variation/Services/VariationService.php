<?php

namespace App\Domain\Variation\Services;

use App\Domain\Product\Models\Product;
use App\Domain\Variation\Models\Variation;
use App\Domain\Variation\Models\VariationType;
use App\Domain\Variation\Models\VariationTypeValue;
use App\Http\Media\Request\StoreMediaRequest;
use App\Http\Variation\Requests\StoreVariationRequest;
use App\Http\Variation\Resources\VariationResource;
use App\Http\Variation\Resources\VariationTypeResource;
use App\Http\Variation\Resources\VariationTypeValueResource;
use App\Support\Enums\MediaCollectionEnums;
use App\Support\Requests\ModelIDsRequest;
use App\Support\Services\Media\ImageService;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class VariationService
{

    public function getVariationById(int $id): VariationResource
    {
        return new VariationResource(
            Variation::with(['children', 'VariationColor', 'VariationImages', 'variationType', 'variationTypeValue'])->find($id)
        );
    }

    public function getVariationTypes(): AnonymousResourceCollection
    {
        return VariationTypeResource::collection(
            VariationType::query()->with('variationTypeValues')->select(['id', 'type', 'is_mediable'])->get()
        );
    }


    public function getVariationTypeValues(): AnonymousResourceCollection
    {
        return VariationTypeValueResource::collection(
            VariationTypeValue::query()->select(['id', 'value', 'variation_type_id'])->get()
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
        $variationTypeValue = VariationTypeValue::find($data['variation_type_value_id']);

        $data['type'] = $variationType->getTranslations('type');
        $data['title'] = $variationTypeValue->getTranslations('value');

        $product = Product::query()
            ->find($data['product_id']);

        $variation = $product->variations()
            ->create($data);

        if ($request->hasFile('images') && $variationType->is_mediable && $variation) {
            $imageService->imageUpload($variation, 'images', MediaCollectionEnums::VARIATION, $variation->id);
        }
    }

    public function update(array $data, Variation $variation, ImageService $imageService)
    {
        $variationType = VariationType::with('variationTypeValues')->find($variation->variation_type_id);
        $variation->update($data);

        if (array_key_exists('images', $data) && $variationType->is_mediable) {
            $imageService->imageUpload($variation, 'images', MediaCollectionEnums::VARIATION, $variation->id);
        }
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

    public function addImagesToVariation(Variation $variation, StoreMediaRequest $request, ImageService $imageService)
    {
        if ($request->hasFile('images')) {
            $imageService->imageUpload($variation, 'images', MediaCollectionEnums::VARIATION, $variation->id);
        }
    }

    public function uploadVariationColorImage(Variation $variation, StoreMediaRequest $request, ImageService $imageService)
    {
        if ($request->hasFile('images')) {
            $imageService->imageUpload($variation, 'images', MediaCollectionEnums::VARIATION_COLOR, $variation->id);
        }
    }

    public function deleteVariationImage(Variation $variation, ModelIDsRequest $request)
    {
        $image = $variation->media()->find($request->validated('id'));
        $image?->delete();
    }

    public function getFacetsArray(): array
    {
        //TODO: cache results here
        return VariationType::query()
            ->select('type')
            ->get()
            ->pluck('type')
            ->toArray();
    }
}
