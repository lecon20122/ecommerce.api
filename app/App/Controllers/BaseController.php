<?php

namespace Application\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;

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
        return response()->json($response);
    }

    public function redirectBackWithMessage($message): RedirectResponse
    {
        return back()->with('message', $message);
    }

    public function redirectToWithMessage($route, $message, $params = null): RedirectResponse
    {
        return Redirect::route($route, $params)->with('message', $message);
    }

    public function logAndRedirectBackWithError($message = 'ops, something went wrong! dont worry we on it'): RedirectResponse
    {
        Log::error($message);
        return redirect()->back()->withErrors($message);
    }

    public function logErrorsAndReturnJsonMessage($exceptionMessage, $class = null, $functionName = null, int $code = 400, $customMessage = 'something went wrong we working on it'): JsonResponse
    {
        Log::error($exceptionMessage . '  At CLASS ' . $class . ' , ' . $functionName . '()');
        return response()->json(['message' => $customMessage], $code);
    }

    public function respondWithOk(): JsonResponse
    {
        return response()->json();
    }
}
