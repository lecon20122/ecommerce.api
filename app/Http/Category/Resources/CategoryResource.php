<?php

namespace App\Http\Category\Resources;

use App\Http\Media\Resources\CategoryBannerResource;
use App\Http\Media\Resources\CategoryMobileBannerResource;
use App\Http\Media\Resources\CategoryThumbnailResource;
use App\Http\Media\Resources\MediaResource;
use App\Http\Product\Resources\ProductResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
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
            'parent_id' => $this->parent_id,
            'title' => $this->getTranslations('title'),
            'slug' => $this->slug,
            'order' => $this->order,
            'is_active' => $this->is_active,
            'primary_color' => $this->primary_color,
            'secondary_color' => $this->secondary_color,
            'children' => CategoryResource::collection($this->whenLoaded('children')),
            'parent' => new CategoryResource($this->whenLoaded('parent')),
            'products' => ProductResource::collection($this->whenLoaded('products')),
            'images' => [
                'banners' => CategoryBannerResource::collection($this->whenLoaded('banners')),
                'mobile_banners' => CategoryMobileBannerResource::collection($this->whenLoaded('mobileBanners')),
            ],
            'media' => MediaResource::collection($this->whenLoaded('media')),
            'thumbnail' => new CategoryThumbnailResource($this->whenLoaded('thumbnail')),
        ];
    }
}
