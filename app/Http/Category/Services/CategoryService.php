<?php

namespace App\Http\Category\Services;

use App\Domain\Category\Models\Category;
use App\Http\Category\Resources\CategoryResource;
use App\Http\Media\Request\StoreMediaRequest;
use App\Http\Product\Requests\StoreCategoryRequest;
use App\Http\Product\Requests\UpdateCategoryRequest;
use App\Support\Enums\MediaCollectionEnums;
use App\Support\Requests\ModelIDsRequest;
use App\Support\Services\Media\ImageService;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\DB;

class CategoryService
{

    public function adminIndex(): AnonymousResourceCollection
    {
        return CategoryResource::collection(
            Category::query()
                ->with('parent:title,id')
                ->get());
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
        return new CategoryResource(Category::with('media')->find($id));
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
        //TODO:Caching the results
        return Category::query()
            ->active()
            ->parent()
            ->with(['media', 'children' => function ($query) {
                $query
                    ->with('media')
                    ->has('products');
            }])
            ->has('children')
            ->get();
    }

    public function getCategories(): AnonymousResourceCollection
    {
        return CategoryResource::collection(
            Category::query()
                ->select(['id', 'title'])
                ->get()
        );
    }

    public function addImagesToCategory(Category $category, StoreMediaRequest $request, ImageService $imageService)
    {
        if ($request->hasFile('images')) {
            $imageService->imageUpload($category, 'images', MediaCollectionEnums::CATEGORY, $category->id);
        }
    }

    public function deleteCategoryImage(Category $category, ModelIDsRequest $request)
    {
        $image = $category->media()->find($request->validated('id'));
        $image?->delete();
    }

    public function addBannerToCategory(Category $category, StoreMediaRequest $request, ImageService $imageService)
    {
        if ($request->hasFile('images')) {
            $imageService->imageUpload($category, 'images', $request->validated('collection_name'), $category->id);
        }
    }

    public function toggleCategoryStatus($id)
    {
        $category = Category::query()->find($id);
        $category->is_active = !$category->is_active;
        $category->save();
    }
}
