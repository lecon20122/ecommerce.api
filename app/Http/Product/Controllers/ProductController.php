<?php

namespace App\Http\Product\Controllers;

use App\Domain\Category\Models\Category;
use App\Domain\Product\Models\Product;
use App\Domain\Product\Models\ProductAttribute;
use App\Domain\Product\Services\ProductAttributeService;
use App\Domain\Product\Services\ProductService;
use App\Domain\User\Services\UserFavoriteService;
use App\Domain\Variation\Services\VariationService;
use App\Http\Category\Services\CategoryService;
use App\Http\Media\Request\StoreMediaRequest;
use App\Http\Product\Requests\ProductFilterRequest;
use App\Http\Product\Requests\StoreProductRequest;
use App\Http\Product\Requests\UpdateProductRequest;
use App\Support\Requests\ModelIDsRequest;
use App\Support\Services\Media\ImageService;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\JsonResponse;
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
     * Display the specified resource.
     *
     * @param Product $product
     * @param ProductService $service
     * @return RedirectResponse|\Inertia\Response
     */
    public function show(Product $product, ProductService $service): \Inertia\Response|RedirectResponse
    {
        try {
            return Inertia::render('Client/ProductDetails', [
                'product' => $service->showProductDetails($product)
            ]);
        } catch (Exception $exception) {
            return $this->logAndRedirectBackWithError($exception->getMessage());
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
    public function update(UpdateProductRequest $request, ProductService $service, Product $product): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $service->update($request->validated(), $product);
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
            $service->destroy($id);
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

    public function getProductsByCategory(Category $category, ProductService $productService, ProductFilterRequest $request): JsonResponse
    {

        try {
            if ($request->session()->get('previous_inputs')) {
                (new UserFavoriteService)->storeAfterAuthenticated($request->session()->get('previous_inputs'));
            }

            $products = $productService->getProductsByCategory($category, $request->validated());

//            return Inertia::render('Client/ShopByCategory', [
//                'products' => $products['products'],
//                'filters' => $products['filters'],
//                'category' => $category,
//                'maxPrice' => $products['maxPrice'],
//            ]);
            return \response()->json([
                'products' => $products['products'],
                'filters' => $products['filters'],
                'category' => $category,
                'maxPrice' => $products['maxPrice'],
            ]);
        } catch (Exception $exception) {
            DB::rollback();
            return $this->redirectBackWithMessage($exception->getMessage());
        }
    }
}
