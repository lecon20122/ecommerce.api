<?php

namespace App\Http\Variation\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VariationTypeResource extends JsonResource
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
            'type' => $this->getTranslations('type'),
            'is_mediable' => $this->is_mediable,
            'variationTypeValues' => VariationTypeValueResource::collection($this->whenLoaded('variationTypeValues')),
        ];
    }
}
