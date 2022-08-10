<?php

namespace App\Domain\Product\Services;

use App\Domain\Product\Models\Product;
use App\Domain\Store\Models\Store;
use App\Http\Product\Requests\StoreProductRequest;
use App\Http\Product\Requests\UpdateProductRequest;
use App\Support\Enums\MediaCollectionEnums;
use App\Support\Services\Media\ImageService;

class ProductService
{

    public function getProductsByStoreId(int $store_id)
    {
        $store = Store::query()
            ->find($store_id);

        return $store?->products()
            ->select('id', 'title', 'price', 'slug', 'description')
            ->with('media')
            ->latest()
            ->get();
    }

    /**
     * @param StoreProductRequest $request
     * @param ImageService $imageService
     *
     */

    public function store(StoreProductRequest $request, ImageService $imageService)
    {
        $data = $request->validated();

        $store = Store::query()->find($data['store_id']);
        if ($store) {
            if ($request->has('en') || $request->has('ar')) {
                $data['title'] = [
                    'en' => $request->validated('en'),
                    'ar' => $request->validated('ar'),
                ];
            }
            $product = $store->products()->create($data);
            if ($product && $request->hasFile('images')) {
                $imageService->imageUpload($product, 'images', MediaCollectionEnums::THUMBNAIL, $data['store_id']);
            }
        }
    }

    public function update(UpdateProductRequest $request, Product $product, ImageService $imageService)
    {
        $data = $request->validated();

        if ($request->has('en') || $request->has('ar')) {
            $data['title'] = [
                'en' => $request->validated('en'),
                'ar' => $request->validated('ar'),
            ];
        }
        $product->update($data);

        if ($request->hasFile('images')) {
            $imageService->imageUpload($product, 'images', MediaCollectionEnums::THUMBNAIL, $product->id);
        }
    }

    public function destroy(int $id)
    {
        $product = Product::query()->find($id);
        $product?->delete();
    }
}
