<?php

namespace App\Http\Auth\Controllers;

use App\Http\Auth\Requests\LoginRequest;
use App\Http\Auth\Resources\UserResource;
use Application\Controllers\BaseController;
use Domain\Auth\Traits\HasLogin;
use Domain\User\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class LoginController extends BaseController
{
    use HasLogin;

    /**
     * Display a listing of the resource.
     *
     * @param LoginRequest $request
     * @return JsonResponse
     */
    public function __invoke(LoginRequest $request): JsonResponse
    {
        try {
            $user = User::where('email', $request->email)->first();
            return $this->login($user, $request->validated('password'));
        } catch (\Exception $exception) {
            return response()->json($exception->getMessage());
        }
    }

    public function user()
    {
        return new UserResource(Auth::user());
    }
}
