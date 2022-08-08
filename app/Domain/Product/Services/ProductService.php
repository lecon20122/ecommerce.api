<?php

namespace App\Domain\Product\Services;

use App\Domain\Product\Models\Product;
use App\Domain\Store\Models\Store;
use App\Http\Product\Requests\StoreProductRequest;
use App\Support\Services\Media\ImageService;
use Illuminate\Support\Facades\DB;

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
     * @return mixed
     */

    public function store(StoreProductRequest $request, ImageService $imageService): mixed
    {
        DB::beginTransaction();
        $store = auth()->user()->stores()->where('id', $request->validated('store_id'))->first();
        if ($store) {
            $product = $store->products()->create($request->validated());
            if ($product && $request->hasFile('images')) {
                $imageService->imageUpload($product, 'images', 'products', $request->validated('store_id'));
            }
        }
        DB::commit();
        return $product;
    }

    public function update($data, Product $product)
    {
        $product->update($data);
    }

    public function destroy(Product $product)
    {
        $product->delete();
    }
}
