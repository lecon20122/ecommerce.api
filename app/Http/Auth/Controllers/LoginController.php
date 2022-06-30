<?php

namespace App\Http\Auth\Controllers;

use App\Http\Auth\Requests\LoginRequest;
use App\Http\Auth\Resources\UserResource;
use Application\Controllers\BaseController;
use Domain\User\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class LoginController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function __invoke(LoginRequest $request)
    {
        try {
            $user = User::where('email', $request->email)->first();
            if (!$user || !Hash::check($request->password, $user->password)) {
                throw ValidationException::withMessages([
                    'email' => ['The provided credentials are incorrect.'],
                ]);
            }
            $token = $user->createToken($request->email, ['customer'])->plainTextToken;
            // return $this->ok(
            //     [
            //         'user' => new UserResource($user),
            //         'token' => $user->createToken($request->email, ['customer'])->plainTextToken,
            //     ]
            // );
            return (new UserResource($user))->response()->withHeaders(
                [
                    'Authorization' =>  $token,
                    'Access-Control-Expose-Headers' => 'Authorization'
                ]
            );
        } catch (\Exception $exception) {
            return response()->json($exception->getMessage());
        }
    }
}
