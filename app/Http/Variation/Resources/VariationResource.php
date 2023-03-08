<?php

namespace App\Http\Variation\Resources;

use App\Http\Media\Resources\MediaResource;
use App\Http\Media\Resources\VariationSmallMedia;
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
            'parent_id' => $this->parent_id,
            'store_id' => $this->store_id,
            'variation_type' => new VariationTypeResource($this->whenLoaded('variationType')),
            'variation_type_value' => new VariationTypeValueResource($this->whenLoaded('variationTypeValue')),
            'price' => $this->price,
            'type' => $this->type,
            'title' => $this->title,
            'product_id' => $this->product_id,
            'order' => $this->order,
            'deleted_at' => $this->deleted_at,
            'children' => VariationResource::collection($this->whenLoaded('children')),
            'media' => MediaResource::collection($this->whenLoaded('VariationImages')),
            'color' => new MediaResource($this->whenLoaded('VariationColor')),
            'stock_count' => $this->stock_count,
        ];
    }
}
