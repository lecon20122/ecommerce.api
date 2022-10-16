<?php

namespace App\Http\Variation\Observers;

use App\Domain\Variation\Models\Variation;
use App\Domain\Variation\Models\VariationType;
use App\Domain\Variation\Models\VariationTypeValue;

class VariationObserver
{
    public function creating(Variation $variation)
    {
        if (is_null($variation->order)) {
            $variation->order = 99;
        }
    }
}
