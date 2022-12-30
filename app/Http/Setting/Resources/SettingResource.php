<?php

namespace App\Http\Setting\Resources;


use App\Http\Media\Resources\SettingLogoMediaResource;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;

class SettingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array|Arrayable|JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->key,
            'value' => $this->value,
            'logo' => new SettingLogoMediaResource($this->whenLoaded('logo'))
        ];
    }
}
