<?php

namespace App\Http\Category\Services;

use App\Domain\Category\Models\Category;
use App\Http\Category\Resources\CategoryResource;
use App\Http\Media\Request\StoreMediaRequest;
use App\Http\Product\Requests\StoreCategoryRequest;
use App\Http\Product\Requests\UpdateCategoryRequest;
use App\Support\Enums\MediaCollectionEnums;
use App\Support\Services\Media\ImageService;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\DB;

class CategoryService
{


    public function sellGetParentsAndChildren(): AnonymousResourceCollection
    {
        return CategoryResource::collection(
            Category::query()->with('childrenRecursive.oppositeCategory')->parent()->get()
        );
    }

    public function getChildren(): AnonymousResourceCollection
    {
        return CategoryResource::collection(
            Category::query()->children()->active()->select('id', 'title', 'parent_id', 'is_active')->get()
        );
    }

    public function getCategoriesParentsWithItsMediaAndChildren(): AnonymousResourceCollection
    {
        return CategoryResource::collection(
            Category::query()
                ->has('children')
                ->with([
                    'banners',
                    'mobileBanners',
                    'children' => function (HasMany $query) {
                        $query->with('thumbnail')
                            ->has('thumbnail')
                            ->has('products');
                    }])
                ->parent()
                ->orderBy('order')
                ->get()
        );
    }

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
            $imageService->addMultipleMediaFromRequest($category, 'images', MediaCollectionEnums::THUMBNAIL, $category->id);
        }
        DB::commit();
        return new CategoryResource($category);
    }

    public function edit($id): CategoryResource
    {
        return new CategoryResource(Category::with('media')->find($id));
    }

    public function update(UpdateCategoryRequest $request, ImageService $imageService, $id)
    {
        $category = Category::query()->find($id);
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
                $imageService->addMultipleMediaFromRequest($category, 'images', MediaCollectionEnums::THUMBNAIL, $category->id);
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

    public function getCategoriesChildrenAndThumbnail(): Collection|array
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

    public function uploadCategoryThumbnail($id, StoreMediaRequest $request, ImageService $imageService)
    {
        $category = Category::query()->find($id);
        if ($request->hasFile('images')) {
            [$width, $height] = $imageService->getDimensions($request->file('images')[0]);
            $imageService->addMultipleMediaFromRequestWithDimensions($category, 'images', MediaCollectionEnums::THUMBNAIL, $category->id, $width, $height);
        }
    }

    public function deleteCategoryThumbnail($id, $mediaId)
    {
        $category = Category::query()->find($id);
        $image = $category->media()->find($mediaId);
        $image?->delete();
    }

    public function addBannerToCategory($id, StoreMediaRequest $request, ImageService $imageService)
    {
        $category = Category::query()->find($id);
        if ($request->hasFile('images')) {
            [$width, $height] = $imageService->getDimensions($request->file('images')[0]);
            $imageService->addMultipleMediaFromRequestWithDimensions($category, 'images', $request->validated('collection_name'), $category->id, $width, $height);
        }
    }

    public function toggleCategoryStatus($id)
    {
        $category = Category::query()->find($id);
        $category->is_active = !$category->is_active;
        $category->save();
    }

    public function attach($product, array $ids)
    {
        $category = Category::query()
            ->find($ids);
        $product->categories()->syncWithoutDetaching($category);
    }
}
