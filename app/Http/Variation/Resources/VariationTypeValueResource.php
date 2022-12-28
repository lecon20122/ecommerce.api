<?php

namespace App\Http\Variation\Resources;

use App\Http\Media\Resources\VariationColorMediaResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VariationTypeValueResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'value' => $this->getTranslations('value'),
            'slug' => $this->slug,
            'hex_value' => $this->hex_value,
            'variation_type_id' => $this->variation_type_id,
            'variation_type' => new VariationTypeResource($this->whenLoaded('VariationType')),
            'color' => new VariationColorMediaResource($this->whenLoaded('colorImage'))
        ];
    }
}
