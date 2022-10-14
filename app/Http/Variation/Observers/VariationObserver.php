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
        $variationType = VariationType::find($variation->variation_type_id);
        $variationTypeValue = VariationTypeValue::find($variation->variation_type_value_id);

        $variation->type = $variationType->getTranslations('type');
        $variation->title = $variationTypeValue->getTranslations('value');
    }

    public function created(Variation $variation)
    {

    }

}
