<?php

namespace App\Http\Variation\Controllers;

use App\Domain\Variation\Models\Variation;
use App\Domain\Variation\Services\VariationService;
use App\Http\Media\Request\StoreMediaRequest;
use App\Http\Variation\Requests\StoreVariationRequest;
use App\Http\Variation\Requests\UpdateVariationRequest;
use App\Support\Requests\ModelIDsRequest;
use App\Support\Services\Media\ImageService;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

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
     * @param ImageService $imageService
     * @return RedirectResponse
     */
    public function store(VariationService $variationService, StoreVariationRequest $request, ImageService $imageService): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $variationService->store($request, $imageService);
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
     * @param VariationService $service
     * @return RedirectResponse|Response
     */
    public function edit(int $id, VariationService $service)
    {
        try {
            return Inertia::render('Dashboard/variations/VariationEdit', [
                'currentVariation' => $service->getVariationById($id),
                'variationTypes' => $service->getVariationTypes(),
                'variationTypesValues' => $service->getVariationTypeValues(),
            ]);
        } catch (Exception $exception) {
            return $this->redirectBackWithMessage($exception->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param VariationService $service
     * @param UpdateVariationRequest $request
     * @param Variation $variation
     * @param ImageService $imageService
     * @return RedirectResponse
     */
    public function update(VariationService $service, UpdateVariationRequest $request, Variation $variation, ImageService $imageService): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $service->update($request->validated(), $variation, $imageService);
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
     * @param VariationService $service
     * @param int $id
     * @return RedirectResponse
     */
    public function destroy(VariationService $service, int $id): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $service->destroy($id);
            DB::commit();
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->redirectBackWithMessage('ops');
        }
    }

    public function restore(VariationService $service, int $id): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $service->restore($id);
            DB::commit();
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->redirectBackWithMessage('ops');
        }
    }

    public function permanentDelete(VariationService $service, int $id): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $service->permanentDelete($id);
            DB::commit();
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->redirectBackWithMessage('ops');
        }
    }

    public function addMediaToVariation(Variation $variation, StoreMediaRequest $request, ImageService $imageService, VariationService $variationService): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $variationService->addImagesToVariation($variation, $request, $imageService);
            DB::commit();
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->redirectBackWithError();
        }
    }

    public function uploadVariationColorImage(Variation $variation, StoreMediaRequest $request, ImageService $imageService, VariationService $variationService): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $variationService->uploadVariationColorImage($variation, $request, $imageService);
            DB::commit();
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->redirectBackWithError($exception->getMessage());
        }
    }

    public function deleteVariationImage(Variation $variation, ModelIDsRequest $request, VariationService $variationService): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $variationService->deleteVariationImage($variation, $request);
            DB::commit();
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->redirectBackWithError();
        }
    }

    public function setVariationImageToPrimary(Variation $variation, ModelIDsRequest $request, ImageService $imageService, VariationService $variationService): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $variationService->setVariationImageAsPrimary($imageService, $variation, $request->validated());
            DB::commit();
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->redirectBackWithError();
        }
    }

}
