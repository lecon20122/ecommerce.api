<?php

namespace App\Http\Variation\Controllers\Sell;

use App\Domain\Variation\Models\Variation;
use App\Domain\Variation\Services\Sell\SellVariationService;
use Application\Controllers\BaseController;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SellVariationController extends BaseController
{
    //constructor and inject the service
    public function __construct(protected SellVariationService $service)
    {
    }

    public function safeDelete(Request $request, Variation $variation): JsonResponse
    {
        try {
            $this->service->safeDelete($variation);
            return response()->json(['message' => 'Variation deleted successfully'], 200);
        } catch (\Exception $exception) {
            return response()->json(['message' => $exception->getMessage()], 400);
        }
    }
}
