<?php

namespace App\Http\Variation\Controllers;

use App\Domain\Variation\Models\Variation;
use App\Domain\Variation\Services\VariationService;
use App\Http\Controllers\Controller;
use App\Http\Product\Requests\ProductBySlugRequest;
use App\Http\Variation\Requests\GetVariationBySlugRequest;
use App\Http\Variation\Requests\StoreVariationRequest;
use App\Http\Variation\Requests\UpdateVariationRequest;
use App\Http\Variation\Resources\VariationResource;
use App\Support\Services\Media\ImageService;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class ApiVariationController extends BaseController
{
    public function __construct(protected VariationService $service)
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
     * @param StoreVariationRequest $request
     * @param ImageService $imageService
     * @return JsonResponse
     */
    public function store(StoreVariationRequest $request, ImageService $imageService): JsonResponse
    {
        try {
            $this->service->store($request->validated(), $imageService);
            return $this->respondWithOk();
        } catch (Exception $exception) {
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Variation $variation
     * @return JsonResponse|VariationResource
     */
    public function show(Variation $variation): JsonResponse|VariationResource
    {
        try {
            return $this->service->getVariationDetails($variation);
        } catch (Exception $exception) {
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
        }
    }

    public function getVariationTypes(): JsonResponse|AnonymousResourceCollection
    {
        try {
            return $this->service->getVariationTypes();
        } catch (Exception $exception) {
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
        }
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
     * @param UpdateVariationRequest $request
     * @param Variation $variation
     * @param ImageService $imageService
     * @return JsonResponse
     */
    public function update(UpdateVariationRequest $request, Variation $variation, ImageService $imageService): JsonResponse
    {
        DB::beginTransaction();
        try {
            $this->service->update($request->validated(), $variation, $imageService);
            DB::commit();
            return $this->respondWithOk();
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function destroy($id): JsonResponse
    {
        DB::beginTransaction();
        try {
            $this->service->permanentDelete($id);
            DB::commit();
            return $this->respondWithOk();
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
        }
    }
}
