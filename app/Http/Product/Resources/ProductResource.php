<?php

namespace App\Http\Product\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request)
    {
        $data = [
            "id" => $this->id,
            'title' => $this->title,
            'price' => $this->price,
            'slug' => $this->slug,
            'description' => $this->description,
        ];
//        if ($this->variations->exists()) {
//            $data['variations'] = VariationResource::collection($this->whenLoaded('variations'));
//        }
        return $data;
    }
}
