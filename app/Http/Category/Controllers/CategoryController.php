<?php

namespace App\Http\Category\Controllers;

use App\Domain\Category\Models\Category;
use App\Http\Category\Resources\CategoryResource;
use App\Http\Category\Services\CategoryService;
use App\Http\Product\Requests\StoreCategoryRequest;
use App\Http\Product\Requests\UpdateCategoryRequest;
use App\Support\Services\Media\ImageService;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CategoryController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index(CategoryService $categoryService)
    {
        try {
            return Inertia::render(
                'Dashboard/categories/index',
                [
                    'categories' => $categoryService->index()
                ]
            );
        } catch (\Exception $exception) {
            return $this->webMessage($exception->getMessage());
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
    public function store(StoreCategoryRequest $request, CategoryService $categoryService, ImageService $imageService)
    {
        try {
            $categoryService->store($request, $imageService);
            return redirect()->back()->with('message', 'success');
        } catch (Exception $exception) {
            DB::rollback();
            return $this->webMessage($exception->getMessage());
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
    public function edit($id, CategoryService $categoryService)
    {
        try {
            return Inertia::render('Dashboard/categories/edit', [
                'currentCategory' => $categoryService->edit($id),
                'categories' => $categoryService->index()
            ]);
        } catch (Exception $exception) {
            return $this->webMessage($exception->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateCategoryRequest $request
     * @param Category $category
     * @return CategoryResource
     */
    public function update(UpdateCategoryRequest $request, Category $category, CategoryService $categoryService, ImageService  $imageService)
    {
        try {
            $categoryService->update($request, $imageService, $category);
            return $this->webMessage('success');
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
