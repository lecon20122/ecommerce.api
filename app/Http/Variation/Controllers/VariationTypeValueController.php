<?php

namespace App\Http\Variation\Controllers;

use App\Domain\Variation\Services\VariationTypeValueService;
use App\Http\Variation\Requests\StoreVariationTypeValueRequest;
use App\Http\Variation\Requests\UpdateVariationTypeValueRequest;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class VariationTypeValueController extends BaseController
{
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
     * @param StoreVariationTypeValueRequest $request
     * @param VariationTypeValueService $service
     * @return RedirectResponse
     */
    public function store(StoreVariationTypeValueRequest $request, VariationTypeValueService $service): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $service->store($request->validated());
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
     * @param UpdateVariationTypeValueRequest $request
     * @param VariationTypeValueService $service
     * @param int $id
     * @return RedirectResponse
     */
    public function update(UpdateVariationTypeValueRequest $request, VariationTypeValueService $service, int $id): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $service->update($id, $request->validated());
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
     * @param VariationTypeValueService $service
     * @param int $id
     * @return RedirectResponse
     */
    public function destroy(VariationTypeValueService $service, int $id): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $service->destroy($id);
            DB::commit();
            return $this->webMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->webMessage($exception->getMessage());
        }
    }

    public function restore(VariationTypeValueService $service, int $id): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $service->restore($id);
            DB::commit();
            return $this->webMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->webMessage('ops');
        }
    }

    public function permanentDelete(VariationTypeValueService $service, int $id): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $service->permanentDelete($id);
            DB::commit();
            return $this->webMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->webMessage('ops');
        }
    }
}
