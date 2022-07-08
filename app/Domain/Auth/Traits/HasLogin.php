<?php

namespace Domain\Auth\Traits;

use App\Http\Auth\Resources\UserResource;
use Exception;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Auth\User as Authenticatable;

trait HasLogin
{
    /**
     * uses Hash::check() to validate the hashed password
     *
     * @param [Authenticatable] $user
     * @param string $value
     * @return JsonResponse
     * @throws ValidationException
     * @throws Exception
     */
    public function login($user, string $value): JsonResponse
    {
        if (!$user instanceof Authenticatable) throw new Exception('this model not extending Authenticatable');

        if (!$user || !Hash::check($value, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }
        $token = $user->createToken($user->email, ['customer'])->plainTextToken;

        return $this->ok([
            'user' => new UserResource($user),
            'token' => $token
        ])->withCookie(cookie('token', $token, 24 * 60, '/', null, null, true, true, 'strict'));
    }
}
