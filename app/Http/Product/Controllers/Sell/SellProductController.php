<?php

namespace App\Http\Product\Controllers\Sell;

use App\Domain\Product\Models\Product;
use App\Domain\Product\Services\Sell\SellProductService;
use App\Http\Product\Requests\Sell\StoreSellProductRequest;
use App\Http\Product\Requests\Sell\UpdateSellProduct;
use App\Http\Product\Resource\Sell\SellProductResource;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;

class SellProductController extends BaseController
{
    //create constructor and inject the service
    public function __construct(protected SellProductService $service)
    {
    }


    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function index(): JsonResponse|AnonymousResourceCollection
    {
        try {
            return $this->service->index();
        } catch (Exception $exception) {
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
        }
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
     * @param StoreSellProductRequest $request
     * @return SellProductResource|JsonResponse
     */
    public function store(StoreSellProductRequest $request): JsonResponse|SellProductResource
    {
        DB::beginTransaction();
        try {
            $product = $this->service->create($request->validated());
            DB::commit();
            return $product;
        } catch (Exception $exception) {
            DB::rollBack();
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return SellProductResource|JsonResponse
     */
    public function show(int $id): JsonResponse|SellProductResource
    {
        try {
            return $this->service->getProductDetails($id);
        } catch (Exception $exception) {
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateSellProduct $request
     * @param int $id
     * @return JsonResponse|SellProductResource
     */
    public function update(UpdateSellProduct $request, int $id): JsonResponse|SellProductResource
    {
        try {
            return $this->service->update($request->validated(), $id);
        } catch (Exception $exception) {

            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
