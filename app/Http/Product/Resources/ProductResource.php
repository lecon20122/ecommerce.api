<?php

namespace App\Http\Product\Resources;

use App\Http\Media\Resources\MediaResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request)
    {
        $data = [
            "id" => $this->id,
            'title' => $this->title,
            'price' => $this->price,
            'slug' => $this->slug,
            'description' => $this->description,
            'media' => MediaResource::collection($this->whenLoaded('media')),
        ];
        return $data;
    }
}
