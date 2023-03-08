<?php

namespace App\Http\Product\Controllers;

use App\Domain\Product\Models\Product;
use App\Domain\Product\Services\ProductAttributeService;
use App\Domain\Product\Services\ProductService;
use App\Domain\Variation\Services\VariationService;
use App\Http\Category\Services\CategoryService;
use App\Http\Product\Requests\StoreProductRequest;
use App\Http\Product\Requests\UpdateProductRequest;
use App\Support\Requests\ModelIDsRequest;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ProductController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return RedirectResponse|\Inertia\Response
     */
    public function index(): \Inertia\Response|RedirectResponse
    {
        try {
            return Inertia::render('Dashboard/products/index');
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
     * @param StoreProductRequest $request
     * @param ProductService $service
     * @return RedirectResponse
     */
    public function store(StoreProductRequest $request, ProductService $service): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $service->store($request->validated());
            DB::commit();
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->redirectBackWithMessage($exception->getMessage());
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return RedirectResponse|\Inertia\Response
     */
    public function edit(mixed $id): \Inertia\Response|RedirectResponse
    {
        try {
            return Inertia::render('Dashboard/products/ProductEdit', [
                'currentProduct' => (new ProductService())->getProductsById($id),
                'attributes' => (new ProductAttributeService())->indexProductAttribute(),
                'variationTypes' => (new VariationService())->getVariationTypes(),
                'variationTypesValues' => (new VariationService())->getVariationTypeValues(),
                'categories' => (new CategoryService())->getCategories(), //TODO: CACHE ALL CATEGORIES
            ]);
        } catch (Exception $exception) {
            return $this->logAndRedirectBackWithError($exception->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateProductRequest $request
     * @param ProductService $service
     * @param Product $product
     * @return RedirectResponse
     */
    public function update(UpdateProductRequest $request, ProductService $service, string $slug): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $service->update($request->validated(), $slug);
            DB::commit();
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->redirectBackWithMessage($exception->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @param ProductService $service
     * @return RedirectResponse
     */
    public function destroy(int $id, ProductService $service): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $service->softDelete($id);
            DB::commit();
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->logAndRedirectBackWithError($exception->getMessage());
        }
    }

    /**
     * Restore the specified resource from Database.
     *
     * @param int $id
     * @param ProductService $service
     * @return RedirectResponse
     */
    public function restore(int $id, ProductService $service): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $service->restore($id);
            DB::commit();
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->logAndRedirectBackWithError($exception->getMessage());
        }
    }

    public function attachCategoriesToProduct(Product $product, ModelIDsRequest $request, ProductService $productService): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $productService->attachCategoryToProduct($product, $request);
            DB::commit();
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->logAndRedirectBackWithError($exception->getMessage());
        }
    }

    public function detachCategoryFromProduct(Product $product, ModelIDsRequest $request, ProductService $productService): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $productService->detachCategoryFromProduct($product, $request);
            DB::commit();
            return $this->redirectBackWithMessage('category detached');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->logAndRedirectBackWithError($exception->getMessage());
        }
    }
}
