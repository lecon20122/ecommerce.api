<?php

namespace App\Http\Category\Controllers;

use App\Domain\Category\Models\Category;
use App\Http\Category\Resources\CategoryResource;
use App\Http\Product\Requests\StoreCategoryRequest;
use App\Http\Product\Requests\UpdateCategoryRequest;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class CategoryController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        try {
            return CategoryResource::collection(Cache::remember('categories', 3600, function () {
                return Category::with('childrenRecursive')->whereNull('parent_id')->get(['title', 'slug', 'id']);
            }));
        } catch (\Exception $exception) {
            return $this->sendError($exception->getMessage());
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param storeCategoryRequest $request
     * @return CategoryResource
     */
    public function store(StoreCategoryRequest $request)
    {
        try {
            //TODOs: add later the slug in StoreCategoryRequest
            DB::beginTransaction();
            $categories = Category::create($request->validated());
            DB::commit();
            return new CategoryResource($categories);
        } catch (Exception $exception) {
            DB::rollback();
            return $this->sendError($exception->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateCategoryRequest $request
     * @param Category $category
     * @return CategoryResource
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        try {
            DB::beginTransaction();
            $category->update($request->validated());
            DB::commit();
            return new CategoryResource($category);
        } catch (Exception $exception) {
            DB::rollback();
            $this->sendError($exception->getMessage(), $exception->getCode());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Category $category
     * @return JsonResponse
     */
    public function destroy(Category $category)
    {
        try {
            DB::beginTransaction();
            $category->delete();
            DB::commit();
            return $this->sendSuccess('record has been deleted Successfully');
        } catch (Exception $exception) {
            DB::rollback();
            $this->sendError($exception->getMessage(), $exception->getCode());
        }
    }
}
