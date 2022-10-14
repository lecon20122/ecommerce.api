<?php

namespace App\Http\Category\Controllers;

use App\Domain\Cart\Models\Support\Requests\ModelIDsRequest;
use App\Domain\Cart\Models\Support\Services\Media\ImageService;
use App\Domain\Category\Models\Category;
use App\Http\Category\Services\CategoryService;
use App\Http\Media\Request\StoreMediaRequest;
use App\Http\Product\Requests\StoreCategoryRequest;
use App\Http\Product\Requests\UpdateCategoryRequest;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CategoryController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @param CategoryService $categoryService
     * @return RedirectResponse|\Inertia\Response
     */
    public function index(CategoryService $categoryService): \Inertia\Response|RedirectResponse
    {
        try {
            return Inertia::render(
                'Dashboard/categories/CategoryIndex',
                [
                    'categories' => $categoryService->adminIndex()
                ]
            );
        } catch (Exception $exception) {
            return $this->redirectBackWithMessage($exception->getMessage());
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
     * @param CategoryService $categoryService
     * @param ImageService $imageService
     * @return Application|RedirectResponse|Redirector
     */
    public function store(StoreCategoryRequest $request, CategoryService $categoryService, ImageService $imageService): Redirector|RedirectResponse|Application
    {
        try {
            $categoryService->store($request, $imageService);
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollback();
            return $this->redirectBackWithMessage($exception->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @param CategoryService $categoryService
     * @return RedirectResponse|\Inertia\Response
     */
    public function edit(int $id, CategoryService $categoryService): \Inertia\Response|RedirectResponse
    {

        try {
            return Inertia::render('Dashboard/categories/CategoryEdit', [
                'currentCategory' => $categoryService->edit($id),
                'categories' => $categoryService->adminIndex()
            ]);
        } catch (Exception $exception) {
            return $this->redirectBackWithMessage($exception->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateCategoryRequest $request
     * @param Category $category
     * @param CategoryService $categoryService
     * @param ImageService $imageService
     * @return RedirectResponse
     */
    public function update(UpdateCategoryRequest $request, Category $category, CategoryService $categoryService, ImageService $imageService): RedirectResponse
    {
        try {
            $categoryService->update($request, $imageService, $category);
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollback();
            return $this->redirectBackWithMessage($exception->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @param CategoryService $categoryService
     * @return RedirectResponse
     */
    public function destroy(int $id, CategoryService $categoryService): RedirectResponse
    {
        try {
            $categoryService->delete($id);
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollback();
            return $this->redirectBackWithMessage($exception->getMessage());
        }
    }


    public function addMediaToCategory(Category $category, StoreMediaRequest $request, ImageService $imageService, CategoryService $categoryService): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $categoryService->addImagesToCategory($category, $request, $imageService);
            DB::commit();
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->redirectBackWithError($exception->getMessage());
        }
    }

    public function deleteCategoryImage(Category $category, ModelIDsRequest $request, CategoryService $categoryService): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $categoryService->deleteCategoryImage($category, $request);
            DB::commit();
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->redirectBackWithError($exception->getMessage());
        }
    }

    public function addBannerToCategory(Category $category, StoreMediaRequest $request, ImageService $imageService, CategoryService $categoryService): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $categoryService->addBannerToCategory($category, $request, $imageService);
            DB::commit();
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->redirectBackWithError($exception->getMessage());
        }
    }

    public function toggleCategoryStatus($id, CategoryService $categoryService): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $categoryService->toggleCategoryStatus($id);
            DB::commit();
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->redirectBackWithError($exception->getMessage());
        }
    }

}
