<?php

namespace App\Http\Media\Resources;


use App\Support\Enums\MediaCollectionEnums;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MediaResource extends JsonResource
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
            'file_name' => $this->file_name,
            'mime_type' => $this->mime_type,
            'width' => $this->getCustomProperty('width'),
            'height' => $this->getCustomProperty('height'),
        ];
        if ($this->hasGeneratedConversion(MediaCollectionEnums::THUMB_CONVENTION)) {
            $data['thumbnail'] = $this->getFullUrl(MediaCollectionEnums::THUMB_CONVENTION);
        }
        if ($this->hasGeneratedConversion(MediaCollectionEnums::BIG_CONVENTION)) {
            $data['big'] = $this->getFullUrl(MediaCollectionEnums::BIG_CONVENTION);
        }
        if ($this->hasGeneratedConversion(MediaCollectionEnums::SMALL_CONVENTION)) {
            $data['small'] = $this->getFullUrl(MediaCollectionEnums::SMALL_CONVENTION);
        }
        if ($this->hasGeneratedConversion(MediaCollectionEnums::VARIATION_COLOR_CONVENTION)) {
            $data['color'] = $this->getFullUrl(MediaCollectionEnums::VARIATION_COLOR_CONVENTION);
        }
        if ($this->hasGeneratedConversion(MediaCollectionEnums::CATEGORY_BIG_BANNER_CONVENTION)) {
            $data['big_banner'] = $this->getFullUrl(MediaCollectionEnums::CATEGORY_BIG_BANNER_CONVENTION);
        }
        if ($this->hasGeneratedConversion(MediaCollectionEnums::CATEGORY_MOBILE_BANNER_CONVENTION)) {
            $data['mobile_banner'] = $this->getFullUrl(MediaCollectionEnums::CATEGORY_MOBILE_BANNER_CONVENTION);
        }
        return $data;
    }
}
