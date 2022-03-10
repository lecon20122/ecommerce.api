<?php

namespace App\Http\User\Controllers;

use App\Http\User\Requests\LoginRequest;
use App\Http\User\Requests\RegisterRequest;
use Application\Controllers\BaseController;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Domain\User\Models\User;
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
        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        return $this->Ok(
            [
                'user' => $user,
                'token' => $user->createToken($request->email, ['customer'])->plainTextToken,
            ]
        );
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
            return $this->Ok([
                'user' => $user,
                'token' => $user->createToken($request->email, ['customer'])->plainTextToken
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            $this->sendError($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return JsonResponse
     */
    public function logout(Request $request)
    {
        try {
            DB::beginTransaction();
            $request->user()->currentAccessToken()->delete();
            DB::commit();
            return $this->sendSuccess('user logged out successfully');
        }catch (\Exception $e){
            DB::rollBack();
            $this->sendError($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
