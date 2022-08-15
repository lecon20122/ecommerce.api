<?php

namespace App\Domain\Product\Services;

use App\Domain\Category\Models\Category;
use App\Domain\Product\Models\Product;
use App\Domain\Store\Models\Store;
use App\Http\Media\Request\StoreMediaRequest;
use App\Http\Product\Requests\StoreProductRequest;
use App\Http\Product\Requests\UpdateProductRequest;
use App\Http\Product\Resources\ProductResource;
use App\Support\Enums\MediaCollectionEnums;
use App\Support\Requests\ModelIDsRequest;
use App\Support\Services\Media\ImageService;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;


class ProductService
{

    /**
     * @param int $id
     * @return Model|Builder|ProductResource|null
     */
    public function getProductsById(int $id): Model|Builder|ProductResource|null
    {
        return new ProductResource(
            Product::query()
                ->with('media')
                ->whereIn('id', [$id])
                ->select('id', 'title', 'price', 'slug', 'description')
                ->latest()
                ->first()
        );
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
                $imageService->imageUpload($product, 'images', MediaCollectionEnums::PRODUCT, $data['store_id']);
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

    public function restore(int $id)
    {
        $product = Product::withTrashed()->find($id);
        $product?->restore();
    }

    public function addImagesToProduct(Product $product, StoreMediaRequest $request, ImageService $imageService)
    {
        if ($request->hasFile('images')) {
            $imageService->imageUpload($product, 'images', MediaCollectionEnums::PRODUCT, $product->id);
        }
    }

    public function attachCategoryToProduct(Product $product, ModelIDsRequest $request)
    {
        $category = Category::query()
            ->find($request->validated('id'));
        $product->categories()->syncWithoutDetaching($category);
    }

    public function deleteProductImage(Product $product, ModelIDsRequest $request)
    {
        $image = $product->media()->find($request->validated('id'));
        $image?->delete();
    }

//    public function changeMediaOrder()
//    {
//
//    }
}
