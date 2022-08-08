<?php

namespace App\Http\Product\Resources;

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
            'title' => $this->title,
            'price' => $this->price,
            'slug' => $this->slug,
            'description' => $this->description,
            'thumbnail' => $this->getFirstMediaUrl(MediaCollectionEnums::THUMBNAIL, 'thumb370x370'),
            'small_thumbnail' => $this->getFirstMediaUrl(MediaCollectionEnums::THUMBNAIL, 'small50x50'),
        ];
    }
}
