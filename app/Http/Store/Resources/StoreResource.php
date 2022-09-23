<?php

namespace App\Http\Store\Resources;

use App\Http\Auth\Resources\UserResource;
use App\Http\Product\Resources\ProductPaginateResource;
use App\Http\Product\Resources\ProductResource;
use Illuminate\Http\Resources\Json\JsonResource;

class StoreResource extends JsonResource
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
            'name' => $this->name,
            'description' => $this->description,
            'user' => new UserResource($this->whenLoaded('user')),
            'products' => ProductResource::collection($this->whenLoaded('products')),
        ];
    }
}
