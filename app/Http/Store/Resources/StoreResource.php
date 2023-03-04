<?php

namespace App\Http\Store\Resources;

use App\Http\Auth\Resources\UserResource;
use App\Http\Product\Resources\ProductPaginateResource;
use App\Http\Product\Resources\ProductResource;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;

class StoreResource extends JsonResource
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
            'description' => $this->description,
            'user' => new UserResource($this->whenLoaded('user')),
            'approved_at' => $this->approved_at,
            'approved_by' => $this->whenLoaded('approvedBy'),
            'products' => ProductResource::collection($this->whenLoaded('products')),
        ];
    }
}
