<?php

namespace App\Http\Location\Controllers;

use App\Domain\Location\Models\District;
use App\Http\Location\Requests\StoreDistrictRequest;
use App\Http\Location\Requests\UpdateDistrictRequest;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class DistrictController extends BaseController
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
     * @param StoreDistrictRequest $request
     * @return RedirectResponse
     */
    public function store(StoreDistrictRequest $request): RedirectResponse
    {
        DB::beginTransaction();
        try {
            District::query()->create($request->validated());
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
     * @param UpdateDistrictRequest $request
     * @param int $id
     * @return RedirectResponse
     */
    public function update(UpdateDistrictRequest $request, District $district): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $district->update($request->validated());
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
     * @param int $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }
}
