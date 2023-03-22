<?php

namespace Application\Controllers;

use App\Support\Traits\HasHttpResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;

class BaseController extends Controller
{
    use HasHttpResponse;
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

    public function respondWithOk(string $message = 'success'): JsonResponse
    {
        return response()->json(['message' => $message ?? 'success']);
    }

    public function logErrorsAndRedirectBack($exceptionMessage, $class = null, $functionName = null, int $code = 400, $customMessage = 'something went wrong we working on it'): RedirectResponse
    {
        Log::error($exceptionMessage . '  At CLASS ' . $class . ' , ' . $functionName . '()');

        return redirect()->back()->with('message', $customMessage);
    }
}
