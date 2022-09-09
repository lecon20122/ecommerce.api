<?php

namespace App\Http\Category\Services;

use App\Domain\Category\Models\Category;
use App\Http\Category\Resources\CategoryResource;
use App\Http\Product\Requests\StoreCategoryRequest;
use App\Http\Product\Requests\UpdateCategoryRequest;
use App\Support\Enums\CacheKeyEnums;
use App\Support\Enums\MediaCollectionEnums;
use App\Support\Services\Media\ImageService;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class CategoryService
{

    public function adminIndex()
    {
        return Cache::remember(
            CacheKeyEnums::CATEGORY,
            3600,
            fn() => CategoryResource::collection(
                Category::query()
                    ->select('id', 'title', 'parent_id', 'created_at')
                    ->with('parent:title,id')
                    ->get()
            )

        );
    }


    public function store(StoreCategoryRequest $request, ImageService $imageService): CategoryResource
    {
        DB::beginTransaction();
        $data = $request->validated();
        $data['title'] = [
            'en' => $data['en'],
            'ar' => $data['ar'],
        ];
        $category = Category::create($data);

        if ($category && $request->hasFile('images')) {
            $imageService->imageUpload($category, 'images', MediaCollectionEnums::THUMBNAIL, $category->id);
        }
        DB::commit();
        return new CategoryResource($category);
    }

    public function edit($id): CategoryResource
    {
        return new CategoryResource(Category::with('thumbnail')->find($id));
    }

    public function update(UpdateCategoryRequest $request, ImageService $imageService, Category $category)
    {
        DB::beginTransaction();
        $data = $request->validated();
        if ($request->has('en') || $request->has('ar')) {
            $data['title'] = [
                'en' => $request->validated('en'),
                'ar' => $request->validated('ar'),
            ];
        }
        $category->update($data);

        if ($request->hasFile('images')) {
            if ($imageService->isImageDeleted($request->validated(['image_id']))) {
                $imageService->imageUpload($category, 'images', MediaCollectionEnums::THUMBNAIL, $category->id);
            }
        }
        DB::commit();
    }

    public function delete(int $id)
    {
        DB::beginTransaction();
        $category = Category::query()->find($id);

        if ($category) {
            $category->delete();
            DB::commit();
        }
    }

    public function getCategoriesChildrenAndThumb(): Collection|array
    {
        return Category::query()
            ->with('thumbnail')
            ->select('id', 'title', 'slug', 'parent_id')
            ->isParent()
            ->get();
    }

    public function getCategories(): \Illuminate\Http\Resources\Json\AnonymousResourceCollection
    {
        return CategoryResource::collection(
            Category::query()
                ->select(['id', 'title'])
                ->get()
        );
    }
}
