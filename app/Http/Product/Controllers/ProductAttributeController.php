<?php

namespace App\Http\Product\Controllers;

use App\Domain\Product\Models\ProductAttribute;
use App\Domain\Product\Services\ProductAttributeService;
use App\Http\Controllers\Controller;
use App\Http\Product\Requests\AttachProductAttributeRequest;
use App\Http\Product\Requests\DetachProductAttributeRequest;
use App\Http\Product\Requests\StoreProductAttributeRequest;
use App\Http\Product\Requests\UpdateProductAttributeRequest;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;

class ProductAttributeController extends BaseController
{
    public function __construct(protected ProductAttributeService $service)
    {
    }

    /**
     * Display a listing of the resource.
     *
     * @return RedirectResponse|\Inertia\Response
     */
    public function index(): \Inertia\Response|RedirectResponse
    {
        try {
            return Inertia::render('Dashboard/products/ProductAttributeIndex',
                [
                    'productAttributes' => $this->service->indexProductAttribute(),
                ]);
        } catch (Exception $exception) {
            return $this->logAndRedirectBackWithError($exception->getMessage());
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
     * @param StoreProductAttributeRequest $request
     * @return RedirectResponse
     */
    public function store(StoreProductAttributeRequest $request): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $this->service->storeProductAttribute($request->validated());
            DB::commit();
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->logAndRedirectBackWithError($exception->getMessage());
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
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return RedirectResponse
     */
    public function update(UpdateProductAttributeRequest $request, $id): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $this->service->updateProductAttribute($request->validated(), $id);
            DB::commit();
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->logAndRedirectBackWithError($exception->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param ProductAttribute $attribute
     * @return RedirectResponse
     */
    public function destroy(ProductAttribute $attribute): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $this->service->delete($attribute);
            DB::commit();
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->logAndRedirectBackWithError($exception->getMessage());
        }
    }

//    public function attachAttributeToProduct(ProductAttribute $attribute, AttachProductAttributeRequest $request): RedirectResponse
//    {
//        DB::beginTransaction();
//        try {
//            $this->service->attachAttributeToProduct($attribute, $request->validated());
//            DB::commit();
//            return $this->redirectBackWithMessage('success');
//        } catch (Exception $exception) {
//            DB::rollBack();
//            return $this->logAndRedirectBackWithError($exception->getMessage());
//        }
//    }
//
//    public function detachAttributeFromProduct(ProductAttribute $attribute, DetachProductAttributeRequest $request): RedirectResponse
//    {
//        DB::beginTransaction();
//        try {
//            $this->service->detachAttributeFromProduct($attribute, $request->validated());
//            DB::commit();
//            return $this->redirectBackWithMessage('success');
//        } catch (Exception $exception) {
//            DB::rollBack();
//            return $this->logAndRedirectBackWithError($exception->getMessage());
//        }
//    }
}
