<?php

namespace App\Http\Store\Resources;

use App\Http\Auth\Resources\UserResource;
use App\Http\Location\Resources\AddressResource;
use Illuminate\Http\Resources\Json\JsonResource;

class SellerRequestResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'company_register' => $this->company_register,
            'brand_name' => $this->brand_name,
            'what_store_sells' => $this->what_store_sells,
            'social_media' => $this->social_media,
            'user' => new UserResource($this->whenLoaded('user')),
            'pickup_location' => new AddressResource($this->whenLoaded('pickupLocation')),
            'approved_at' => $this->approved_at,
            'approved_by' => $this->whenLoaded('approvedBy'),
            'rejected_at' => $this->rejected_at,
            'rejected_by' => $this->whenLoaded('rejectedBy'),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
