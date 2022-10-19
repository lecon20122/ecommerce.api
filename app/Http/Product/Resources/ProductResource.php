<?php

namespace App\Http\Product\Resources;

use App\Http\Category\Resources\CategoryResource;
use App\Http\Media\Resources\MediaResource;
use App\Http\Variation\Resources\VariationResource;
use App\Http\Variation\Resources\VariationTypeResource;
use App\Http\Variation\Resources\VariationTypeValueResource;
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
        return [
            'id' => $this->id,
            'title' => $this->getTranslations('title'),
            'price' => $this->price,
            'slug' => $this->slug,
            'store_id' => $this->store_id,
            'media' => MediaResource::collection($this->whenLoaded('media')),
            'variations' => VariationResource::collection($this->whenLoaded('variations')),
//            'thumbnail' => $this->getFirstMedia(MediaCollectionEnums::PRODUCT)?->getFullUrl(MediaCollectionEnums::THUMB_CONVENTION),
            'deleted_at' => $this->deleted_at,
            'categories' => CategoryResource::collection($this->whenLoaded('categories')),
            'variation_type' => VariationTypeResource::collection($this->whenLoaded('variationType')),
            'variation_type_value' => VariationTypeValueResource::collection($this->whenLoaded('variationTypeValue')),
        ];
    }
}
