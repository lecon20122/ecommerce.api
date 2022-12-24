<?php

namespace App\Http\Location\Controllers;

use App\Domain\Location\Models\Address;
use App\Domain\Location\Services\AddressService;
use App\Http\Location\Requests\StoreAddressRequest;
use App\Http\Location\Requests\UpdateAddressRequest;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class AddressController extends BaseController
{
    public function __construct(protected AddressService $service)
    {
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
     * @return AnonymousResourceCollection|JsonResponse
     */
    public function store(StoreAddressRequest $request): AnonymousResourceCollection | JsonResponse
    {
        DB::beginTransaction();
        try {
            $this->service->createAddress($request->validated());
            DB::commit();
            return $this->index();
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse | AnonymousResourceCollection
     */
    public function index(): AnonymousResourceCollection|JsonResponse
    {
        try {
            return $this->service->getUserAddresses();
        } catch (Exception $exception) {
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
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
