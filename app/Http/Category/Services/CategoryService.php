<?php

namespace App\Http\Category\Services;

use App\Domain\Category\Models\Category;
use App\Http\Category\Resources\CategoryResource;
use App\Http\Product\Requests\StoreCategoryRequest;
use App\Http\Product\Requests\UpdateCategoryRequest;
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
            'categories',
            3600,
            fn() => Category::query()
                ->select('id', 'title', 'parent_id', 'created_at')
                ->with('parent:title,id')
                ->get()
        );
    }


    public function store(StoreCategoryRequest $request, ImageService $imageService)
    {
        DB::beginTransaction();
        $data = $request->validated();
        $data['title'] = [
            'en' => $data['en'],
            'ar' => $data['ar'],
        ];

        $category = Category::create($data);

        if ($category && $request->hasFile('images') || $request->hasFile('new_images')) {
            $keyName = $request->hasFile('images') == false ? 'new_images' : 'images';
            $imageService->imageUpload($category, $keyName, 'categories', $category->id);
        }

        DB::commit();
        return new CategoryResource($category);
    }

    public function edit($id)
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

        if ($request->hasFile('images') || $request->hasFile('new_images')) {
            $keyName = $request->hasFile('images') == false ? 'new_images' : 'images';
            $imageService->imageUpload($category, $keyName, 'categories', $category->id);
        }

        $category->save();
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
            ->with('thumbnail', 'children.thumbnail')
            ->select('id', 'title', 'slug', 'parent_id')
            ->isParent()
            ->get();
    }
}
