<?php

namespace App\Http\Store\Controllers;

use App\Domain\Store\Models\Store;
use App\Domain\Store\Services\StoreService;
use App\Http\Store\Requests\StoreCreateRequest;
use App\Http\Store\Requests\StoreUpdateRequest;
use App\Http\Store\Resources\StoreResource;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
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
            return Inertia::render('Dashboard/stores/index', [
                'stores' => StoreResource::collection((new StoreService())->index())]);
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
            return $this->redirectToWithMessage('admin.stores.index' , 'success');
        } catch (Exception $exception) {
            DB::rollback();
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
    public function edit(int $id)
    {
//        return \response()->json((new StoreService())->getStoreById($id));
        try {
            return Inertia::render('Dashboard/stores/edit' , [
                'currentStore' => (new StoreService())->getStoreById($id)
            ]);
        } catch (Exception $exception) {
            return $this->webMessage($exception->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(StoreUpdateRequest $request, Store $store)
    {
        try {
            DB::beginTransaction();
            $store->update($request->validated());
            return new StoreResource($store->refresh());
            DB::commit();
        } catch (Exception $exception) {
            DB::rollback();
            return $this->sendError($exception->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return Response
     */
    public function destroy(Store $store)
    {
        try {
            DB::beginTransaction();
            $store->delete();
            return new StoreResource($store->refresh());
            DB::commit();
        } catch (Exception $exception) {
            DB::rollback();
            return $this->sendError($exception->getMessage());
        }
    }
}
