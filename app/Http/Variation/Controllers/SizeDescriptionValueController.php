<?php

namespace App\Http\Variation\Controllers;


use App\Domain\Cart\Models\Domain\Variation\Services\SizeDescriptionValueService;
use App\Http\Variation\Requests\StoreSizeDescriptionValueRequest;
use App\Http\Variation\Requests\UpdateSizeDescriptionValueRequest;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class SizeDescriptionValueController extends BaseController
{
    public function __construct(protected SizeDescriptionValueService $service)
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
     * @param StoreSizeDescriptionValueRequest $request
     * @return RedirectResponse
     */
    public function store(StoreSizeDescriptionValueRequest $request): RedirectResponse
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
     * @param UpdateSizeDescriptionValueRequest $request
     * @param int $id
     * @return RedirectResponse
     */
    public function update(UpdateSizeDescriptionValueRequest $request, $id): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $this->service->update($request->validated(), $id);
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
