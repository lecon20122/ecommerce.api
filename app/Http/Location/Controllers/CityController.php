<?php

namespace App\Http\Location\Controllers;

use App\Domain\Location\Models\City;
use App\Http\Location\Requests\StoreCityRequest;
use App\Http\Location\Requests\UpdateCityRequest;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class CityController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return array|Collection|JsonResponse
     */
    public function index(): array|Collection|JsonResponse
    {
        try {
            return City::query()->with('districts')->has('districts')->get();
        } catch (Exception $exception) {
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
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
     * @param StoreCityRequest $request
     * @return RedirectResponse
     */
    public function store(StoreCityRequest $request): RedirectResponse
    {
        DB::beginTransaction();
        try {
            City::query()->create($request->validated());
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
     * @param UpdateCityRequest $request
     * @param City $city
     * @return RedirectResponse
     */
    public function update(UpdateCityRequest $request, City $city): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $city->update($request->validated());
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
