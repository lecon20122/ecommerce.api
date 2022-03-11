<?php

namespace App\Http\User\Controllers;

use App\Http\User\Requests\LoginRequest;
use App\Http\User\Requests\RegisterRequest;
use Application\Controllers\BaseController;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Domain\User\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class UserController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws ValidationException
     */
    public function login(LoginRequest $request)
    {
        try {
            $user = User::where('email', $request->email)->first();

            if (!$user || !Hash::check($request->password, $user->password)) {
                throw ValidationException::withMessages([
                    'email' => ['The provided credentials are incorrect.'],
                ]);
            }
            return $this->ok(
                [
                    'user' => $user,
                    'token' => $user->createToken($request->email, ['customer'])->plainTextToken,
                ]
            );
        } catch (\Exception $exception) {
            $this->sendError($exception->getMessage(), $exception->getCode());        }

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return JsonResponse
     */
    public function register(RegisterRequest $request)
    {
        try {
            DB::beginTransaction();
            $user = User::create($request->validated());
            DB::commit();
            return $this->ok([
                'user' => $user,
                'token' => $user->createToken($request->email, ['customer'])->plainTextToken
            ]);
        } catch (\Exception $exception) {
            DB::rollBack();
            $this->sendError($exception->getMessage(), $exception->getCode());        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function logout(Request $request)
    {
        try {
            DB::beginTransaction();
            $request->user()->currentAccessToken()->delete();
            DB::commit();
            return $this->sendSuccess('user logged out successfully');
        } catch (\Exception $exception) {
            DB::rollBack();
            $this->sendError($exception->getMessage(), $exception->getCode());        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }
}
