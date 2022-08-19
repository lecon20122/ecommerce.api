<?php

namespace Domain\Auth\Traits;

use App\Http\Auth\Requests\LoginRequest;
use App\Http\Auth\Resources\UserResource;
use Domain\User\Models\User;
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
    public function mobileLogin($request)
    {
        $user = User::where('email', $request->validated('email'))->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $token = $user->createToken($user->email, ['customer'])->plainTextToken;

        return $this->ok([
            'user' => new UserResource($user),
            'token' => $token
        ]);

        throw ValidationException::withMessages([
            'email' => 'the provided credentials are incorrect'
        ]);
    }

    public function clientLogin(LoginRequest $request)
    {
        return Auth::guard('web')->attempt($request->validated());
    }
}
