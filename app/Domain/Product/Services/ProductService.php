<?php

namespace App\Domain\Product\Services;

use App\Domain\Product\Models\Product;
use App\Http\Product\Requests\storeProductRequest;
use App\Support\Jobs\UploadImageJob;

class ProductService
{
    /**
     * @param storeProductRequest $request
     * @return mixed
     */

    public function store(storeProductRequest $request)
    {
        $product = Product::create($request->validated());

        if ($product && $request->hasFile('images')) {
            UploadImageJob::dispatchAfterResponse($product, 'images', 'products');
        }
        return $product;
    }
}
