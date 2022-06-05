<?php

namespace App\Http\Store\Controllers;

use App\Domain\Store\Models\Store;
use App\Http\Controllers\Controller;
use App\Http\Store\Requests\StoreCreateRequest;
use App\Http\Store\Requests\StoreUpdateRequest;
use App\Http\Store\Resources\StoreResource;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StoreController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCreateRequest $request)
    {
        try {
            DB::beginTransaction();
            return new StoreResource(Store::create($request->validated()));
            DB::commit();
        } catch (Exception $exception) {
            DB::rollback();
            return $this->sendError($exception->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
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
