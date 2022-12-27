<?php

namespace App\Http\Product\Observers;

use App\Domain\Product\Models\Product;
use Illuminate\Support\Str;

class ProductObserver
{
    public function creating(Product $product)
    {
        $product->slug = Str::slug($product->title);
    }

    public function updating(Product $product)
    {
        $product->slug = Str::slug($product->title);
    }
}
