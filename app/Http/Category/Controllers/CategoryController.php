<?php

namespace App\Http\Category\Controllers;

use App\Domain\Category\Models\Category;
use App\Http\Category\Resources\CategoryResource;
use App\Http\Product\Requests\StoreCategoryRequest;
use App\Http\Product\Requests\UpdateCategoryRequest;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class CategoryController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        try {
            //dump the parents will all children
            $categories = Category::with('childrenRecursive')->whereNull('parent_id')->get(['name', 'slug', 'id']);
            return CategoryResource::collection($categories);
        } catch (\Exception $exception) {
            $this->sendError($exception->getMessage(), $exception->getCode());
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
     * @return JsonResponse|void
     */
    public function store(StoreCategoryRequest $request)
    {
        try {
            DB::beginTransaction();
            $categories = Category::create($request->validated());
            DB::commit();
            return $this->ok($categories);
        } catch (Exception $exception) {
            DB::rollback();
            $this->sendError($exception->getMessage(), $exception->getCode());
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
     * @return JsonResponse
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
