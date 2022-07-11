<?php

namespace Domain\Auth\Traits;

use App\Http\Auth\Requests\LoginRequest;
use App\Http\Auth\Resources\UserResource;
use Exception;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Auth;

trait HasLogin
{
    /**
     * Undocumented function
     *
     * @param LoginRequest $request
     * @param [type] $guard
     * @return void
     */
    public function login($request, $guard)
    {
        if (Auth::guard($guard)->attempt($request->validated())) {
            $request->session()->regenerate(); // Session fixation vulnerability

            $user = auth($guard)->user();
            $token = $user->createToken($user->email, ['customer'])->plainTextToken;

            return $this->ok([
                'user' => new UserResource($user),
                'token' => $token
            ]);
        }

        throw ValidationException::withMessages([
            'email' => 'the provided credentials are incorrect'
        ]);
    }
}
