<?php

namespace App\Domain\Product\Services;

use App\Domain\Product\Models\Product;
use App\Http\Product\Requests\StoreProductRequest;
use App\Http\Product\Requests\UpdateProductRequest;
use App\Http\Product\Resources\ProductResource;
use App\Support\Jobs\UploadImageJob;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductService
{
    /**
     * @param StoreProductRequest $request
     * @return mixed
     */

    public function store(StoreProductRequest $request)
    {
        $product = Product::create($request->validated());

        if ($product && $request->hasFile('images')) {
            UploadImageJob::dispatchAfterResponse($product, 'images', 'products');
        }
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
