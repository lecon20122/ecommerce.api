<?php

namespace App\Http\Category\Services;

use App\Domain\Category\Models\Category;
use App\Http\Category\Resources\CategoryResource;
use App\Http\Product\Requests\StoreCategoryRequest;
use App\Http\Product\Requests\UpdateCategoryRequest;
use App\Support\Services\Media\ImageService;
use Illuminate\Support\Facades\DB;

class CategoryService
{

    public function index()
    {
        return Category::with('parent')->get();
    }


    public function store(StoreCategoryRequest $request, ImageService $imageService)
    {
        DB::beginTransaction();
        $category = Category::create($request->validated());

        if ($category && $request->hasFile('images')) {
            $imageService->imageUpload($category, 'images',  'categories', $category->id);
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
        $category->update($request->validated());
        if ($category && $request->hasFile('images')) {
            $category->media()->delete();
            $imageService->imageUpload($category, 'images',  'categories', $category->id);
        }
        DB::commit();
    }
}
