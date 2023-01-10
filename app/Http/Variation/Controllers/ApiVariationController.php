<?php

namespace App\Http\Variation\Controllers;

use App\Domain\Variation\Models\Variation;
use App\Domain\Variation\Services\VariationService;
use App\Http\Controllers\Controller;
use App\Http\Media\Request\StoreMediaRequest;
use App\Http\Variation\Requests\StoreStaticVariationRequest;
use App\Http\Variation\Requests\StoreVariationRequest;
use App\Http\Variation\Requests\UpdateVariationRequest;
use App\Http\Variation\Resources\VariationResource;
use App\Support\Requests\ModelIDsRequest;
use App\Support\Services\Media\ImageService;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;

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
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
        }
    }

    public function createColor(StoreStaticVariationRequest $request, ImageService $imageService): VariationResource|JsonResponse
    {
        try {
            return $this->service->createColorVariation($request->validated(), $imageService);
        } catch (Exception $exception) {
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
        }
    }

    public function getColorValues(): JsonResponse | AnonymousResourceCollection
    {
        try {
            return $this->service->getVariationColorValues();
        } catch (Exception $exception) {
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
        }
    }

    public function createSize(StoreStaticVariationRequest $request, ImageService $imageService): JsonResponse
    {
        try {
            $this->service->createSizeVariation($request->validated(), $imageService);
            return $this->respondWithOk();
        } catch (Exception $exception) {
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
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
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function destroy(int $id): JsonResponse
    {
        DB::beginTransaction();
        try {
            $this->service->destroy($id);
            DB::commit();
            return $this->respondWithOk();
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
        }
    }

    public function addMediaToVariation(Variation $variation, StoreMediaRequest $request, ImageService $imageService): VariationResource|JsonResponse
    {
        DB::beginTransaction();
        try {
            $this->service->addImagesToVariation($variation, $request, $imageService);
            DB::commit();
            return $this->show($variation);
        } catch (Exception $exception) {
            DB::rollBack();
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

    public function deleteVariationImage(Variation $variation, ModelIDsRequest $request): VariationResource|JsonResponse
    {
        DB::beginTransaction();
        try {
            $this->service->deleteVariationImage($variation, $request);
            DB::commit();
            return $this->show($variation);
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
        }
    }
}
