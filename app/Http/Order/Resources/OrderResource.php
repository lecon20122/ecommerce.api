<?php

namespace App\Http\Order\Resources;

use App\Support\Services\HashIDService;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;

class OrderResource extends JsonResource
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
            'id' => (new HashIDService())->encode($this->id),
            'user_id' => $this->user_id,
            'status' => $this->status,
            'total' => $this->total,
            'subtotal' => $this->subtotal,
            'delivery_fees' => $this->delivery_fees,
            'commission' => $this->commission,
            'net' => $this->net,
            'store_id' => $this->store_id,
            'shipping_address_id' => $this->shipping_address_id,
            'created_at' => $this->created_at,
        ];
    }
}
