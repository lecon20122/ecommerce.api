<?php

namespace App\Http\Product\Controllers;

use App\Domain\Product\Models\Product;
use App\Domain\Product\Services\ProductService;
use App\Http\Media\Request\StoreMediaRequest;
use App\Http\Product\Requests\StoreProductRequest;
use App\Http\Product\Requests\UpdateProductRequest;
use App\Support\Requests\ModelIDsRequest;
use App\Support\Services\Media\ImageService;
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
     * @param StoreProductRequest $request
     * @param ProductService $service
     * @param ImageService $imageService
     * @return RedirectResponse
     */
    public function store(StoreProductRequest $request, ProductService $service, ImageService $imageService): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $service->store($request, $imageService);
            DB::commit();
            return $this->webMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->webMessage($exception->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function show(int $id): Response
    {
        return Product::query()->find($id)->with('media')->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return RedirectResponse|\Inertia\Response
     */
    public function edit(int $id): \Inertia\Response|RedirectResponse
    {
        try {
            return Inertia::render('Dashboard/products/edit', [
                'currentProduct' => (new ProductService())->getProductsById($id)
            ]);
        } catch (Exception $exception) {
            return $this->redirectBackWithError();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateProductRequest $request
     * @param ProductService $service
     * @param Product $product
     * @param ImageService $imageService
     * @return RedirectResponse
     */
    public function update(UpdateProductRequest $request, ProductService $service, Product $product, ImageService $imageService): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $service->update($request, $product, $imageService);
            DB::commit();
            return $this->webMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->webMessage($exception->getMessage());
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
            return $this->webMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->redirectBackWithError();
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
            return $this->webMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->redirectBackWithError();
        }
    }

    public function addMediaToProduct(Product $product, StoreMediaRequest $request, ImageService $imageService, ProductService $productService): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $productService->addImagesToProduct($product, $request, $imageService);
            DB::commit();
            return $this->webMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->redirectBackWithError();
        }
    }

    public function attachCategoriesToProduct(Product $product, ModelIDsRequest $request, ProductService $productService): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $productService->attachCategoryToProduct($product, $request);
            DB::commit();
            return $this->webMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->redirectBackWithError();
        }
    }

    public function deleteProductImage(Product $product, ModelIDsRequest $request, ProductService $productService): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $productService->deleteProductImage($product, $request);
            DB::commit();
            return $this->webMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->redirectBackWithError();
        }
    }
}
