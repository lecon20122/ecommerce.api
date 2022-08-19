<?php

namespace App\Http\Variation\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class VariationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'type' => $this->type,
            'title' => $this->title,
            'price' => $this->price,
            'order' => $this->order,
            'children' => VariationResource::collection($this->whenLoaded('children')),
        ];
    }
}
