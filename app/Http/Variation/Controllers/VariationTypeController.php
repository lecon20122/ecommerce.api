<?php

namespace App\Http\Variation\Controllers;

use App\Domain\Variation\Models\VariationType;
use App\Domain\Variation\Services\VariationTypeService;
use App\Http\Variation\Requests\StoreVariationTypeRequest;
use App\Http\Variation\Requests\UpdateVariationTypeRequest;
use App\Http\Variation\Resources\VariationTypeResource;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class VariationTypeController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return RedirectResponse|\Inertia\Response
     */
    public function index(): \Inertia\Response|RedirectResponse
    {
        try {
            return Inertia::render('Dashboard/variations/VariationTypeIndex', [
                'variationTypes' => VariationTypeResource::collection(VariationType::all())
            ]);
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
     * @param StoreVariationTypeRequest $request
     * @param VariationTypeService $service
     * @return RedirectResponse
     */
    public function store(StoreVariationTypeRequest $request, VariationTypeService $service): RedirectResponse
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
     * @return RedirectResponse|\Inertia\Response
     */
    public function edit($id): \Inertia\Response|RedirectResponse
    {
        try {
            return Inertia::render('Dashboard/variations/VariationTypeValueIndex', [
                'currentVariationType' => new VariationTypeResource(VariationType::with('variationTypeValues')->find($id)),
            ]);
        } catch (Exception $exception) {
            return $this->webMessage($exception->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateVariationTypeRequest $request
     * @param VariationTypeService $service
     * @param int $id
     * @return RedirectResponse
     */
    public function update(UpdateVariationTypeRequest $request, VariationTypeService $service, int $id): RedirectResponse
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
     * @param VariationTypeService $service
     * @param int $id
     * @return RedirectResponse
     */
    public function destroy(VariationTypeService $service, int $id): RedirectResponse
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

    public function restore(VariationTypeService $service, int $id): RedirectResponse
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

    public function permanentDelete(VariationTypeService $service, int $id): RedirectResponse
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
