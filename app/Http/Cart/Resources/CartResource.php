<?php

namespace App\Http\Cart\Resources;

use App\Http\Media\Resources\MediaResource;
use App\Http\Store\Resources\StoreResource;
use App\Http\Variation\Resources\VariationResource;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use JetBrains\PhpStorm\ArrayShape;
use JsonSerializable;

class CartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'variation' => new VariationResource($this->whenLoaded('variation')),
            'parent_variation' => new VariationResource($this->whenLoaded('parentVariation')),
            'store' => new StoreResource($this->whenLoaded('store')),
            'quantity' => $this->quantity,
            'price' => $this->price,
        ];
    }
}
