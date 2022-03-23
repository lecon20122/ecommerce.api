<?php

namespace App\Http\Media\Resources;

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
            'name' => $this->name,
            'file_name' => $this->file_name,
            'mime_type' => $this->mime_type,
            'original_url' => $this->original_url,
            'small_url' => 'https://product-cdn.nyc3.cdn.digitaloceanspaces.com' . $this->getPath('small38x50'),
            'thumb_url' => 'https://product-cdn.nyc3.cdn.digitaloceanspaces.com' . $this->getPath('thumb232x320'),
        ];
    }
}
