<?php

namespace App\Domain\Product\Services;

use App\Domain\Product\Models\Product;
use App\Domain\Product\Models\Variation;
use App\Http\Product\Requests\StoreProductRequest;
use App\Http\Product\Requests\StoreVariationRequest;
use App\Support\Jobs\UploadImageJob;

class VariationService
{
    /**
     * @param StoreProductRequest $request
     * @return mixed
     */

    public function store(StoreVariationRequest $request)
    {
        $variation = Variation::create($request->validated());

        if ($variation && $request->hasFile('images')) {
            UploadImageJob::dispatchAfterResponse($variation, 'images', 'variations');
        }

        return $variation;
    }

    public function update($data, Variation $variation)
    {
        $variation->update($data);
    }

    public function destroy(Variation $variation)
    {
        $variation->delete();
    }
}
