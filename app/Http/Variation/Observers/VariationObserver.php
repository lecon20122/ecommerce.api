<?php

namespace App\Http\Variation\Observers;

use App\Domain\Product\Models\Product;
use Illuminate\Support\Str;

class VariationObserver
{
    public function creating(Product $product)
    {
        $product->slug = Str::slug($product->title);
    }
}
