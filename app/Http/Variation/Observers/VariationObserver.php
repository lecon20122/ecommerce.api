<?php

namespace App\Http\Variation\Observers;

use App\Domain\Product\Models\Product;
use App\Domain\Product\Models\Variation;
use Illuminate\Support\Str;

class VariationObserver
{
    public function creating(Variation $variation)
    {
        if (is_null($variation->order)) {
            $variation->order = 99;
            }



    }
}
