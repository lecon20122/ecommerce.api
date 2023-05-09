<?php

namespace App\Http\Product\Resource\Sell;

use App\Domain\Product\Services\ProductDiscountService;
use App\Domain\Statistics\Services\StatisticsService;
use App\Http\Variation\Resources\Sell\SellVariationResource;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;

class SellProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array|Arrayable|JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->getTranslations('title'),
            'price' => $this->price,
            'status' => $this->status,
            'variation' => new SellVariationResource($this->whenLoaded('variation')),
            'created_at' => $this->created_at,
            'variations' => SellVariationResource::collection($this->whenLoaded('variations')),
            'is_approved' => $this->is_approved,
            'discount_price' => $this->whenLoaded('discount', fn () => (new ProductDiscountService())->calculateDiscountedPrice($this->price, $this->discount)),
            'view_summary_sum_views' => $this->view_summary_sum_views,
            // 'view_summary_sum_views' => (new \NumberFormatter('en_US', \NumberFormatter::PADDING_POSITION))->format($this->view_summary_sum_views),
        ];
    }
}
