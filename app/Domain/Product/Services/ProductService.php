<?php

namespace App\Domain\Product\Services;

use App\Domain\Product\Models\Product;
use App\Http\Product\Requests\StoreProductRequest;
use App\Support\Jobs\UploadImageJob;
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
}
