<?php

namespace App\Http\Category\Resources;

use App\Http\Media\Resources\MediaResource;
use App\Http\Product\Resources\ProductResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
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
            'parent_id' => $this->parent_id,
            'title' => $this->getTranslations('title'),
            'slug' => $this->slug,
            'children' => CategoryResource::collection($this->whenLoaded('children')),
            'parent' => new CategoryResource($this->whenLoaded('parent')),
            'products' => ProductResource::collection($this->whenLoaded('products')),
            'media' => MediaResource::collection($this->whenLoaded('media')),
        ];
    }
}
