<?php

namespace App\Http\Store\Controllers;

use App\Domain\Cart\Models\Domain\Store\Services\StoreService;
use App\Domain\Cart\Models\Domain\Variation\Services\VariationService;
use App\Domain\Store\Models\Store;
use App\Http\Store\Requests\StoreCreateRequest;
use App\Http\Store\Requests\StoreUpdateRequest;
use App\Http\Store\Resources\StoreResource;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class StoreController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return RedirectResponse|\Inertia\Response
     */
    public function index(): \Inertia\Response|RedirectResponse
    {
        try {
            return Inertia::render('Dashboard/stores/StoreIndex', [
                'stores' => StoreResource::collection((new StoreService())->index())]);
        } catch (Exception $exception) {
            return $this->redirectBackWithMessage($exception->getMessage());
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
     * @param StoreCreateRequest $request
     * @param StoreService $storeService
     * @return RedirectResponse
     */
    public function store(StoreCreateRequest $request, StoreService $storeService): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $storeService->store($request);
            DB::commit();
            return $this->redirectToWithMessage('admin.stores.index', 'success');
        } catch (Exception $exception) {
            DB::rollback();
            return $this->redirectBackWithMessage($exception->getMessage());
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
     * @return \Inertia\Response
     */
    public function edit(int $id): \Inertia\Response
    {
        try {
            return Inertia::render('Dashboard/stores/StoreEdit', [
                'currentStore' => (new StoreService())->getStoreById($id),
                'variationTypes' => (new VariationService())->getVariationTypes(),
                'variationTypesValues' => (new VariationService())->getVariationTypeValues(),
            ]);
        } catch (Exception $exception) {
//            return $this->webMessage($exception->getMessage());
            dd($exception->getMessage());
        }

    }

    /**
     * Update the specified resource in storage.
     *
     * @param StoreUpdateRequest $request
     * @param Store $store
     * @return RedirectResponse
     */
    public function update(StoreUpdateRequest $request, Store $store): RedirectResponse
    {
        try {
            (new StoreService())->update($store, $request);
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollback();
            return $this->redirectBackWithMessage($exception->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return RedirectResponse
     */
    public function destroy(int $id): RedirectResponse
    {
        DB::beginTransaction();
        try {
            (new StoreService())->delete($id);
            DB::commit();
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollback();
            return $this->redirectBackWithMessage($exception->getMessage());
        }
    }
}
