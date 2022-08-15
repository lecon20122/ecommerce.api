<?php

namespace App\Http\Product\Resources;

use App\Http\Media\Resources\MediaResource;
use App\Support\Enums\MediaCollectionEnums;
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
            'ar' => $this->getTranslation('title' , 'ar' , true),
            'en' => $this->getTranslation('title' , 'en' , true),
            'price' => $this->price,
            'slug' => $this->slug,
            'description' => $this->description,
            'media' => MediaResource::collection($this->whenLoaded('media')),
            'thumbnail' => $this->getFirstMedia(MediaCollectionEnums::PRODUCT)?->getFullUrl(MediaCollectionEnums::THUMB_CONVENTION),
            'deleted_at' => $this->deleted_at,
        ];
    }
}
