<?php

namespace App\Http\Variation\Resources;

use App\Http\Media\Resources\MediaResource;
use App\Support\Enums\MediaCollectionEnums;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VariationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'variation_type' => new VariationTypeResource($this->whenLoaded('variationType')),
            'variation_type_value' => new VariationTypeValueResource($this->whenLoaded('variationTypeValue')),
            'price' => $this->price,
            'order' => $this->order,
            'deleted_at' => $this->deleted_at,
            'children' => VariationResource::collection($this->whenLoaded('children')),
            'media' => MediaResource::collection($this->whenLoaded('media')),
            'thumbnail' => $this->getFirstMedia(MediaCollectionEnums::VARIATION)?->getFullUrl(MediaCollectionEnums::THUMB_CONVENTION),
        ];
    }
}
