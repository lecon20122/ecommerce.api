<?php

namespace App\Http\Product\Controllers;

use App\Domain\Product\Services\ProductAttributeService;
use App\Http\Product\Requests\StoreProductAttributeValueRequest;
use App\Http\Product\Requests\UpdateProductAttributeValueRequest;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class ProductAttributeValueController extends BaseController
{
    public function __construct(protected ProductAttributeService $service)
    {
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        //
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
     * @param StoreProductAttributeValueRequest $request
     * @return RedirectResponse
     */
    public function store(StoreProductAttributeValueRequest $request): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $this->service->storeProductAttributeValue($request->validated());
            DB::commit();
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->redirectBackWithError($exception->getMessage());
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
    public function update(UpdateProductAttributeValueRequest $request, $id): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $this->service->updateProductAttributeValue($request->validated(), $id);
            DB::commit();
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->redirectBackWithError($exception->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }
}
