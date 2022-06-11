<?php

namespace App\Http\Product\Controllers;

use App\Domain\Product\Models\Variation;
use App\Domain\Product\Services\VariationService;
use App\Http\Controllers\Controller;
use App\Http\Product\Requests\StoreVariationRequest;
use App\Http\Product\Requests\UpdateVariationRequest;
use App\Http\Product\Resources\VariationResource;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VariationController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return void
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return void
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param VariationService $variationService
     * @param StoreVariationRequest $request
     * @return JsonResponse|VariationResource
     */
    public function store(VariationService $variationService, StoreVariationRequest $request)
    {
        try {
            DB::beginTransaction();
            $variation = $variationService->store($request);
            DB::commit();
            return new VariationResource($variation);
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->sendError($exception->getMessage(), 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return void
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return void
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param VariationService $service
     * @param UpdateVariationRequest $request
     * @param Variation $variation
     * @return JsonResponse|VariationResource
     */
    public function update(VariationService $service, UpdateVariationRequest $request, Variation $variation)
    {
        try {
            DB::beginTransaction();
            $service->update($request->validated(), $variation);
            DB::commit();
            return new VariationResource($variation->refresh());
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->sendError($exception->getMessage(), 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param VariationService $service
     * @param Variation $variation
     * @return JsonResponse|Variation
     */
    public function destroy(VariationService $service, Variation $variation)
    {
        try {
            DB::beginTransaction();
            $service->destroy($variation);
            DB::commit();
            return $variation;
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->sendError($exception->getMessage(), 400);
        }
    }
}
