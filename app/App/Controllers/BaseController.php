<?php

namespace Application\Controllers;

use App\Http\User\Requests\RegisterRequest;
use Application\Controllers\Controller;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Domain\User\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class BaseController extends Controller
{
    /**
     * return a 200 success response json with results.
     *
     * @param mixed $result
     * @param string|null $message
     * @return JsonResponse
     */
    public function ok(array $result, string $message = null): JsonResponse
    {
        if (!empty($message)) {
            $result['message'] = $message;
        }
        return response()->json($result);
    }

    /**
     * return a 200 success response json with results for Paginate Results.
     *
     * @param mixed $result
     * @return JsonResponse
     */
    public function okWithPaginate(mixed $result): JsonResponse
    {
        return response()->json($result, 200);
    }

    /**
     * return error response.
     *
     * @param $error
     * @param int $code
     * @param array $errorMessages
     * @return JsonResponse
     */
    public function sendError($error, int $code = 400): JsonResponse
    {
        return response()->json(['error' => $error], $code);
    }


    /**
     * send Success Message only
     * @param $message
     * @return JsonResponse
     */
    public function sendSuccess($message = null): JsonResponse
    {
        if (!empty($message)) {
            $response['success'] = $message;
        }
        return response()->json($response, 200);
    }

    public function webMessage($message)
    {
        return back()->with('message', $message);
    }
}
