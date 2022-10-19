<?php

namespace App\Http\Variation\Resources;

use App\Http\Media\Resources\MediaResource;
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
        $variationType = new VariationTypeResource($this->whenLoaded('variationType'));
        return [
            'id' => $this->id,
            'parent_id' => $this->parent_id,
            'variation_type' => $variationType,
            'variation_type_value' => new VariationTypeValueResource($this->whenLoaded('variationTypeValue')),
            'price' => $this->price,
            'type' => $this->type,
            'title' => $this->title,
            'order' => $this->order,
            'deleted_at' => $this->deleted_at,
            'children' => VariationResource::collection($this->whenLoaded('children')),
            'media' => MediaResource::collection($this->whenLoaded('VariationImages')),
            'color' => new MediaResource($this->whenLoaded('VariationColor')),
            'stock_count' => (int)$this->stocks()->sum('amount'),
        ];
    }
}
