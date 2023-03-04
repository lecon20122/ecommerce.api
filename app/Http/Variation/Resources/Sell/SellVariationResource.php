<?php

namespace App\Http\Variation\Resources\Sell;

use App\Http\Media\Resources\Sell\SellMainImageResource;
use App\Http\Variation\Resources\VariationTypeValueResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SellVariationResource extends JsonResource
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
            'price' => $this->price,
            'main_image' => new SellMainImageResource($this->whenLoaded('mainImage')),
            'created_at' => $this->created_at,
            'variation_type_value' => new VariationTypeValueResource($this->whenLoaded('variationTypeValue')),
        ];
    }
}
