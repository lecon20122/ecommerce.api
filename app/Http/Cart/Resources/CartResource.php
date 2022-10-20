<?php

namespace App\Http\Cart\Resources;

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
    #[ArrayShape(['variations' => "\Illuminate\Http\Resources\Json\AnonymousResourceCollection"])] public function toArray($request): array
    {
        return [
            'variations' => VariationResource::collection($this->whenLoaded('variations')),
        ];
    }
}
