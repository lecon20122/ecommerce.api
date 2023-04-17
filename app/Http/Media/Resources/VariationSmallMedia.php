<?php

namespace App\Http\Media\Resources;


use App\Support\Enums\MediaCollectionEnums;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VariationSmallMedia extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request)
    {
        return  [
            'id' => $this->id,
            'name' => $this->name,
            'width' => $this->getCustomProperty('width'),
            'height' => $this->getCustomProperty('height'),
            'url' => $this->getFullUrl(MediaCollectionEnums::SMALL_CONVENTION),
        ];
    }
}
