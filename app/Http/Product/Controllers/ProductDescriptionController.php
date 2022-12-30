<?php

namespace App\Http\Product\Controllers;

use App\Domain\Product\Models\ProductDescription;
use App\Domain\Product\Services\ProductDescriptionService;
use App\Http\Product\Requests\StoreProductDescriptionRequest;
use App\Http\Product\Requests\UpdateProductDescriptionRequest;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class ProductDescriptionController extends BaseController
{
    public function __construct(protected ProductDescriptionService $service)
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
     * @param StoreProductDescriptionRequest $request
     * @return RedirectResponse
     */
    public function store(StoreProductDescriptionRequest $request): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $this->service->store($request->validated());
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
     * @param $id
     * @param UpdateProductDescriptionRequest $request
     * @return RedirectResponse
     */
    public function update($id, UpdateProductDescriptionRequest $request): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $this->service->update($request->validated(), $id);
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
     * @param int $id
     * @return RedirectResponse
     */
    public function destroy($id): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $this->service->delete($id);
            DB::commit();
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->logAndRedirectBackWithError($exception->getMessage());
        }
    }
}