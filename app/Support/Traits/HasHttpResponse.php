<?php

namespace App\Support\Traits;
// create trait

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

trait HasHttpResponse
{
    public function httpResponseOk($data, $message = 'success'): JsonResponse
    {
        return response()->json([
            'message' => $message,
            'data' => $data
        ]);
    }
    public function httpResponseCreated($message = 'created'): JsonResponse
    {
        return response()->json(['message' => $message], 201);
    }

    public function httpResponseNoContent($message = 'no content'): JsonResponse
    {
        return response()->json(['message' => $message], 204);
    }

    public function httpResponseBadRequest($message = 'bad request'): JsonResponse
    {
        return response()->json(['message' => $message], 400);
    }

    public function httpResponseUnauthorized($message = 'unauthorized'): JsonResponse
    {
        return response()->json(['message' => $message], 401);
    }

    public function httpResponseForbidden($message = 'forbidden'): JsonResponse
    {
        return response()->json(['message' => $message], 403);
    }

    public function httpResponseNotFound($message = 'not found'): JsonResponse
    {
        return response()->json(['message' => $message], 404);
    }

    public function httpResponse($message = 'message', int $code = 200): JsonResponse
    {
        return response()->json(['message' => $message], $code);
    }
}
