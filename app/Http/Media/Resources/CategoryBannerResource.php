<?php

namespace App\Http\Media\Resources;


use App\Support\Enums\MediaCollectionEnums;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryBannerResource extends JsonResource
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
            'id' => $this->id,
            'name' => $this->name,
            'width' => $this->getCustomProperty('width'),
            'height' => $this->getCustomProperty('height'),
        ];
        $data['url'] = $this->getFullUrl(MediaCollectionEnums::CATEGORY_BIG_BANNER_CONVENTION);

        return $data;
    }
}
