<?php

namespace App\Http\Variation\Controllers;

use App\Domain\Variation\Services\SizeDescriptionService;
use App\Http\Controllers\Controller;
use App\Http\Variation\Requests\StoreSizeDescriptionRequest;
use App\Http\Variation\Requests\UpdateSizeDescriptionRequest;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class SizeDescriptionController extends BaseController
{
    public function __construct(protected SizeDescriptionService $service)
    {
    }

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
     * @param Request $request
     * @return RedirectResponse
     */
    public function store(StoreSizeDescriptionRequest $request): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $this->service->store($request->validated());
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
     * @param UpdateSizeDescriptionRequest $request
     * @param int $id
     * @return RedirectResponse
     */
    public function update(UpdateSizeDescriptionRequest $request, $id): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $this->service->update($id, $request->validated());
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
