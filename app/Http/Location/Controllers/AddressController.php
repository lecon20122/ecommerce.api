<?php

namespace App\Http\Location\Controllers;

use App\Domain\Location\Models\Address;
use App\Http\Location\Requests\StoreAddressRequest;
use App\Http\Location\Requests\UpdateAddressRequest;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class AddressController extends BaseController
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
     * @param StoreAddressRequest $request
     * @return RedirectResponse
     */
    public function store(StoreAddressRequest $request): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $user = auth('web')->user();
            $user->addresses()->create($request->validated());
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
     * @param UpdateAddressRequest $request
     * @param Address $address
     * @return RedirectResponse
     */
    public function update(UpdateAddressRequest $request, Address $address): RedirectResponse
    {
        DB::beginTransaction();
        try {
            if ($address->user_id == auth()->user()->getAuthIdentifier()) {
                $address->update($request->validated());
            }
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
