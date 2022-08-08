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
        return [
            'id' => $this->id,
            'name' => $this->name,
            'file_name' => $this->file_name,
            'mime_type' => $this->mime_type,
            'original_url' => $this->getFullUrl(),
            'thumb' => $this->getFullUrl(MediaCollectionEnums::THUMB_CONVENTION),
        ];
    }
}
