<?php

namespace App\Domain\Variation\Services;

use App\Domain\Product\Models\Product;
use App\Domain\Variation\Models\Variation;
use App\Domain\Variation\Models\VariationType;
use App\Domain\Variation\Models\VariationTypeValue;
use App\Http\Media\Request\StoreMediaRequest;
use App\Http\Variation\Resources\VariationResource;
use App\Http\Variation\Resources\VariationTypeResource;
use App\Http\Variation\Resources\VariationTypeValueResource;
use App\Support\Enums\MediaCollectionEnums;
use App\Support\Requests\ModelIDsRequest;
use App\Support\Services\Media\ImageService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class VariationService
{

    public function getVariationById(int $id): VariationResource
    {
        return new VariationResource(
            Variation::with(['children' => function ($query) {
                $query->with('variationType', 'variationTypeValue');
            }, 'VariationColor', 'VariationImages', 'variationType', 'variationTypeValue'])->find($id)
        );
    }

    public function getVariationDetails(Variation $variation): JsonResponse|VariationResource
    {
        Gate::authorize('view', $variation);

        return new VariationResource(
            $variation->load(['children' => function ($query) {
                $query->with('variationType', 'variationTypeValue');
            }, 'VariationColor', 'VariationImages', 'variationType', 'variationTypeValue'])
        );
    }

    public function getVariationTypes(): AnonymousResourceCollection
    {
        return VariationTypeResource::collection(
            VariationType::query()->with('variationTypeValues')->select(['id', 'type', 'is_mediable'])->get()
        );
    }

    public function getVariationColorValues(): AnonymousResourceCollection
    {
        $color = VariationType::query()->with('variationTypeValues')->whereRaw("JSON_EXTRACT(type, '$.en') = 'color'")->first();
        return VariationTypeValueResource::collection($color->variationTypeValues);
    }

    public function getVariationTypeValues(): AnonymousResourceCollection
    {
        return VariationTypeValueResource::collection(
            VariationTypeValue::query()->select(['id', 'value', 'variation_type_id'])->get()
        );
    }

    /**
     * @param array $data
     * @param ImageService $imageService
     * @return mixed
     */

    public function store(array $data, ImageService $imageService): void
    {
        $product = Product::query()
            ->find($data['product_id']);

        $isAdmin = Auth::guard('admin')->check();
        $isOwner = $isAdmin ? false : auth()->user()->isOwner($product->store_id);

        if (!$isAdmin && !$isOwner) abort(403);

        $variationType = VariationType::find($data['variation_type_id']);
        $variationTypeValue = VariationTypeValue::find($data['variation_type_value_id']);

        $data['is_stockable'] = $variationType->is_stockable;

        $data['title'] = $this->formVariationTitle($variationTypeValue->value, $product->title);


        $variation = $product->variations()
            ->create($data);

        if (isset($data['images']) && $variationType->is_mediable && $variation) {
            $imageService->imageUpload($variation, 'images', MediaCollectionEnums::VARIATION, $variation->id);
        }
    }

    public function formVariationTitle($typeValue, $productTitle): string
    {
        return $typeValue . ' ' . $productTitle;
    }

    public function createColorVariation(array $data, ImageService $imageService): VariationResource
    {
        $product = Product::query()
            ->find($data['product_id']);

        if (!auth()->user()->isOwner($product->store_id) && !Auth::guard('admin')->check()) abort(403);

        $colorType = VariationType::query()->whereRaw("JSON_EXTRACT(type, '$.en') = 'color'")->first();

        $variationTypeValue = VariationTypeValue::find($data['variation_type_value_id']);

        if ($variationTypeValue->variation_type_id !== $colorType->id) abort(400);

        $data['is_stockable'] = $colorType->is_stockable;

        $data['title'] = $this->formVariationTitle($variationTypeValue->value, $product->title);

        $data['variation_type_id'] = $colorType->id;


        $variation = $product->variations()
            ->create($data);

        if (isset($data['images']) && $variation) {
            $imageService->imageUpload($variation, 'images', MediaCollectionEnums::VARIATION, $variation->id);
        }

        return new VariationResource($variation->load(['variationSmallImage', 'variationTypeValue', 'variationType']));
    }

    public function createSizeVariation(array $data, ImageService $imageService): void
    {
        $product = Product::query()
            ->find($data['product_id']);

        if (!auth()->user()->isOwner($product->store_id) && !Auth::guard('admin')->check()) abort(403);

        $sizeType = VariationType::query()->whereRaw("JSON_EXTRACT(type, '$.en') = 'size'")->first();

        $variationTypeValue = VariationTypeValue::find($data['variation_type_value_id']);

        if ($variationTypeValue->variation_type_id !== $sizeType->id) abort(400);

        $data['is_stockable'] = $sizeType->is_stockable;

        $data['variation_type_id'] = $sizeType->id;

        $data['title'] = $this->formVariationTitle($variationTypeValue->value, $product->title);

        $variation = $product->variations()
            ->create($data);

        if (isset($data['images']) && $variation) {
            $imageService->imageUpload($variation, 'images', MediaCollectionEnums::VARIATION, $variation->id);
        }
    }

    public function update(array $data, Variation $variation, ImageService $imageService)
    {
        Gate::authorize('update', $variation);

        $variationType = VariationType::query()->find($data['variation_type_id']);

        $data['is_stockable'] = $variationType->is_stockable;

        $variation->update($data);

        if (array_key_exists('images', $data) && $variationType->is_mediable) {
            $imageService->imageUpload($variation, 'images', MediaCollectionEnums::VARIATION, $variation->id);
        }
    }

    public function destroy(int $id)
    {
        $variation = Variation::query()->find($id);
        Gate::authorize('delete', $variation);
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
        if (Auth::guard('admin')->check() || \auth()->user()->isOwner($variation->store_id)) {
            if ($request->hasFile('images')) {
                $imageService->imageUpload($variation, 'images', MediaCollectionEnums::VARIATION, $variation->id);
            }
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
        if (Auth::guard('admin')->check() || \auth()->user()->store()->first()->id === $variation->store_id) {
            $image = $variation->media()->find($request->validated('id'));
            $image?->delete();
        }
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

    public function setVariationImageAsPrimary(ImageService $imageService, Variation $variation, $imageId)
    {
        $this->forgetCurrentPrimaryImage($variation, $imageService);
        $imageService->setCustomProperty($imageId['id'], 'primary', true);
    }

    public function forgetCurrentPrimaryImage($variation, ImageService $imageService)
    {
        if ($currentPrimaryMedia = $variation->media()->where('custom_properties->primary', true)->first()) {
            $imageService->forgetCustomProperty($currentPrimaryMedia, 'primary');
        }
    }


}
