<?php

namespace App\Http\Product\Resources\Admin;

use App\Domain\Product\Services\ProductDiscountService;
use App\Http\Category\Resources\CategoryResource;
use App\Http\Product\Resource\ProductDiscountResource;
use App\Http\Product\Resources\ProductDescriptionResource;
use App\Http\Store\Resources\StoreResource;
use App\Http\Variation\Resources\VariationResource;
use Illuminate\Http\Resources\Json\JsonResource;

class AdminProductResource extends JsonResource
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
            'title' => $this->getTranslations('title'),
            'price' => $this->price,
            'slug' => $this->slug,
            'status' => $this->status,
            'is_approved' => $this->is_approved,
            'store_id' => $this->store_id,
            'store' => new StoreResource($this->whenLoaded('store')),
            'deleted_at' => $this->deleted_at,
            'variations' => VariationResource::collection($this->whenLoaded('variations')),
            'categories' => CategoryResource::collection($this->whenLoaded('categories')),
            'description' => ProductDescriptionResource::collection($this->whenLoaded('description')),
            'discount' => new ProductDiscountResource($this->whenLoaded('discount')),
            'discount_price' => $this->whenLoaded('discount', fn() => (new ProductDiscountService())->calculateDiscountedPrice($this->price, $this->discount)),
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->diffForHumans(),
        ];
    }
}
