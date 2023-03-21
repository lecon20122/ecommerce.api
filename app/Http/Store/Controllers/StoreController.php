<?php

namespace App\Http\Store\Controllers;

use App\Domain\Store\Models\Store;
use App\Domain\Store\Services\StoreService;
use App\Domain\Variation\Services\VariationService;
use App\Http\Store\Requests\Sell\StoreSellerRequest;
use App\Http\Store\Requests\StoreCreateRequest;
use App\Http\Store\Requests\StoreUpdateRequest;
use App\Http\Store\Resources\StoreResource;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;

class StoreController extends BaseController
{
    public function __construct(protected StoreService $storeService)
    {
    }

    /**
     * Display a listing of the resource.
     *
     * @return RedirectResponse|\Inertia\Response
     */
    public function index(): \Inertia\Response|RedirectResponse
    {
        try {
            return Inertia::render('Dashboard/stores/StoreIndex', [
                'stores' => StoreResource::collection($this->storeService->index())
            ]);
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
     * @return RedirectResponse
     */
    public function store(StoreCreateRequest $request): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $this->storeService->store($request);
            DB::commit();
            return $this->redirectToWithMessage('admin.stores.index', 'success');
        } catch (Exception $exception) {
            DB::rollback();
            return $this->redirectBackWithMessage($exception->getMessage());
        }
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return RedirectResponse|\Inertia\Response
     */
    public function edit(int $id): \Inertia\Response|RedirectResponse
    {
        try {
            return Inertia::render('Dashboard/stores/StoreEdit', [
                'currentStore' => $this->storeService->getStoreById($id),
                'variationTypes' => (new VariationService())->getVariationTypes(),
                'variationTypesValues' => (new VariationService())->getVariationTypeValues(),
            ]);
        } catch (Exception $exception) {
            return $this->redirectBackWithMessage($exception->getMessage());
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
            $this->storeService->update($store, $request);
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
            $this->storeService->delete($id);
            DB::commit();
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            DB::rollback();
            return $this->redirectBackWithMessage($exception->getMessage());
        }
    }

    public function approve(Store $store): JsonResponse|RedirectResponse
    {
        try {
            $this->storeService->approve($store);
            return $this->redirectBackWithMessage('success');
        } catch (Exception $exception) {
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
        }
    }

    public function createSellerRequest(StoreSellerRequest $request)
    {
        try {
            return $this->storeService->createSellerRequest($request->validated());
        } catch (Exception $exception) {
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
        }
    }
}
