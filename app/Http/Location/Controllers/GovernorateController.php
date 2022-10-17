<?php

namespace App\Http\Location\Controllers;

use App\Domain\Location\Models\Governorate;
use App\Http\Location\Requests\StoreGovernorateRequest;
use App\Http\Location\Requests\UpdateGovernorateRequest;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class GovernorateController extends BaseController
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
     * @param StoreGovernorateRequest $request
     * @return RedirectResponse
     */
    public function store(StoreGovernorateRequest $request): RedirectResponse
    {
        DB::beginTransaction();
        try {
            Governorate::query()->create($request->validated());
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
     * @param UpdateGovernorateRequest $request
     * @param Governorate $governorate
     * @return RedirectResponse
     */
    public function update(UpdateGovernorateRequest $request, Governorate $governorate): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $governorate->update($request->validated());
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
