<?php

namespace Application\Controllers;

use App\Http\User\Requests\RegisterRequest;
use Application\Controllers\Controller;
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
    public function Ok(mixed $result, string $message = null): JsonResponse
    {
        $response = [
            'data' => $result,
        ];

        if (!empty($message)) {
            $response['message'] = $message;
        }

        return response()->json($response, 200);
    }

    /**
     * return error response.
     *
     * @param $error
     * @param array $errorMessages
     * @param int $code
     * @return JsonResponse
     */
    public function sendError($error, int $code = 404, array $errorMessages = [],): JsonResponse
    {
        $response = [
            'success' => false,
            'message' => $error,
        ];


        if (!empty($errorMessages)) {
            $response['data'] = $errorMessages;
        }


        return response()->json($response, $code);
    }

    /**
     * send Success Message only
     * @param $message
     * @return JsonResponse
     */
    public function sendSuccess($message): JsonResponse
    {
        $response = [
            'success' => true,
            'message' => $message,
        ];

        return response()->json($response, 200);
    }
}
