<?php

namespace App\Http\Variation\Controllers\Sell;

use App\Domain\Variation\Models\Variation;
use App\Domain\Variation\Services\Sell\SellVariationService;
use App\Http\Media\Requests\Sell\DeleteSellMediaRequest;
use App\Http\Media\Requests\Sell\StoreSellMediaRequest;
use App\Http\Variation\Requests\Sell\StoreSellColorVariation;
use App\Http\Variation\Resources\Sell\SellVariationResource;
use App\Http\Variations\Requests\Sell\StoreSellSizeVariation;
use Application\Controllers\BaseController;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;



/** @group Sell Variation
 * @authenticated
 * APIs for managing Sell Variation
 */
class SellVariationController extends BaseController
{
    //constructor and inject the service
    public function __construct(protected SellVariationService $service)
    {
    }


    /**
     * Safe Delete the variation
     *
     * if the variation has a order, it will be soft deleted, otherwise it will be hard deleted
     *
     * @urlParam variation required The id of the variation Example: 1
     * @param Variation $variation
     * @return void
     */
    public function safeDelete(Variation $variation): JsonResponse
    {
        DB::beginTransaction();
        try {
            $this->service->safeDelete($variation);
            DB::commit();
            return response()->json(['message' => 'Variation deleted successfully'], 200);
        } catch (\Exception $exception) {
            DB::rollBack();
            return response()->json(['message' => $exception->getMessage()], 400);
        }
    }

    /**
     * Get the color variation with its sizes
     * @urlParam id required The id of color the variation Example: 1
     * @param integer $id
     * @return void
     */
    public function getColorVariationWithItsSizes(int $id): SellVariationResource|JsonResponse
    {
        try {
            return $this->service->getColorVariationWithItsSizes($id);
        } catch (\Exception $exception) {
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->httpResponse($exception->getMessage(), $code ?? 400);
        }
    }

    /**
     * Store a newly created Sell Size Variation
     * @bodyParam parent_id required The color id of the variation Example: 1
     * @bodyParam sizes array required The sizes of the variation, price is nullable Example: [{"id":1,"stock_amount":10,"price":100},{"id":2,"stock_amount":10,"price":100}]
     * @param StoreSellSizeVariation $request
     * @return void
     */
    public function createSizesVariation(StoreSellSizeVariation $request): JsonResponse
    {
        DB::beginTransaction();
        try {
            $this->service->createSizeVariation($request->validated());
            DB::commit();
            return $this->httpResponseOk(null, 'Size variations created successfully');
        } catch (\Exception $exception) {
            // dd($exception->getMessage());
            DB::rollBack();
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->httpResponse($exception->getMessage(), $code ?? 400);
        }
    }

    /**
     * Store a newly created Sell Color Variation
     * @bodyParam product_id required The product id of the variation Example: 1
     * @bodyParam color_id required The color id of the variation Example: 1
     * @bodyParam price required The price of the variation Example: 100
     * @param StoreSellColorVariation $request
     * @return void
     */
    public function createColorVariation(StoreSellColorVariation $request): JsonResponse
    {
        DB::beginTransaction();
        try {
            $this->service->createColorVariation(
                $request->validated('product_id'),
                $request->validated('color_id'),
                $request->validated('sizes')
            );
            DB::commit();
            return $this->httpResponseOk(null, 'Color variation created successfully');
        } catch (\Exception $exception) {
            DB::rollBack();
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->httpResponse($exception->getMessage(), $code ?? 400);
        }
    }

    public function uploadImageToColor(StoreSellMediaRequest $request)
    {
        DB::beginTransaction();
        try {
            $this->service->uploadImageToColor($request->validated('color_id'));
            DB::commit();
            return $this->httpResponseOk(null, 'Image uploaded successfully');
        } catch (\Exception $exception) {
            DB::rollBack();
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->httpResponse($exception->getMessage(), $code ?? 400);
        }
    }

    public function deleteImageFromColor(DeleteSellMediaRequest $request)
    {
        DB::beginTransaction();
        try {
            $this->service->deleteImageFromColor(
                $request->validated('color_id'),
                $request->validated('image_id')
            );
            DB::commit();
            return $this->httpResponseOk(null, 'Image deleted successfully');
        } catch (\Exception $exception) {
            DB::rollBack();
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->httpResponse($exception->getMessage(), $code ?? 400);
        }
    }
}
