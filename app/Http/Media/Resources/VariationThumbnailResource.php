<?php

namespace App\Http\Media\Resources;

use App\Support\Enums\MediaCollectionEnums;
use Illuminate\Http\Resources\Json\JsonResource;

class VariationThumbnailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return  [
            'id' => $this->id,
            'name' => $this->name,
            'width' => $this->getCustomProperty('width'),
            'height' => $this->getCustomProperty('height'),
            'url' => $this->getFullUrl(MediaCollectionEnums::THUMB_CONVENTION),
            'big_url' => $this->getFullUrl(MediaCollectionEnums::BIG_CONVENTION),
        ];
    }
}
