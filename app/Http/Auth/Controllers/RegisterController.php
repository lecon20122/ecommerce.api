<?php

namespace App\Http\Auth\Controllers;

use App\Http\User\Requests\RegisterRequest;
use Application\Controllers\BaseController;
use Domain\User\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RegisterController extends BaseController
{
    /**
     * Show the form for creating a new resource.
     *
     * @return JsonResponse
     */
    public function __invoke(RegisterRequest $request)
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
            $this->sendError($exception->getMessage(), $exception->getCode());
        }
    }
}
