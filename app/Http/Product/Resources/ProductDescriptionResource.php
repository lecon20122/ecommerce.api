<?php

namespace App\Http\Product\Resources;

use App\Domain\Product\Models\Product;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;

class ProductDescriptionResource extends JsonResource
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
            'value' => $this->getTranslations('value'),
            'product' => new ProductResource($this->whenLoaded('product')),
            'attribute' => new ProductAttributeResource($this->whenLoaded('productAttribute')),
        ];
    }
}
