<?php

namespace App\Domain\Product\Services;

use App\Domain\Product\Models\Product;
use App\Http\Product\Requests\StoreProductRequest;
use App\Http\Product\Requests\UpdateProductRequest;
use App\Http\Product\Resources\ProductResource;
use App\Support\Jobs\UploadImageJob;
use App\Support\Services\Media\ImageService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductService
{
    /**
     * @param StoreProductRequest $request
     * @return mixed
     */

    public function store(StoreProductRequest $request, ImageService $imageService)
    {
        DB::beginTransaction();
        $store = auth()->user()->stores()->where('id', $request->validated('store_id'))->first();
        if ($store) {
            $product = $store->products()->create($request->validated());
            if ($product && $request->hasFile('images')) {
                $imageService->imageUpload($product, 'images',  'products', $request->validated('store_id'));
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
