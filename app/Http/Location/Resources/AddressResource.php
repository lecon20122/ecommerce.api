<?php

namespace App\Http\Location\Resources;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;

class AddressResource extends JsonResource
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
            'district_id' => $this->district_id,
            'district' => $this->whenLoaded('district'),
            'apartment_number' => $this->apartment_number,
            'building' => $this->building,
            'floor' => $this->floor,
            'nearby_landmark' => $this->nearby_landmark,
            'street' => $this->street,
        ];
    }
}
