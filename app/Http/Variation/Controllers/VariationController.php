<?php

namespace App\Http\Variation\Controllers;

use App\Domain\Product\Models\Variation;
use App\Domain\Product\Services\VariationService;
use App\Http\Variation\Requests\StoreVariationRequest;
use App\Http\Variation\Requests\UpdateVariationRequest;
use App\Support\Services\Media\ImageService;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
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
     * @return RedirectResponse
     */
    public function store(VariationService $variationService, StoreVariationRequest $request, ImageService $imageService): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $variationService->store($request, $imageService);
            DB::commit();
            return $this->webMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->webMessage('ops');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return void
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
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
     * @return RedirectResponse
     */
    public function update(VariationService $service, UpdateVariationRequest $request, Variation $variation): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $service->update($request, $variation);
            DB::commit();
            return $this->webMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->webMessage('ops');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param VariationService $service
     * @param Variation $variation
     * @return RedirectResponse
     */
    public function destroy(VariationService $service,int $id): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $service->destroy($id);
            DB::commit();
            return $this->webMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->webMessage('ops');
        }
    }
}
