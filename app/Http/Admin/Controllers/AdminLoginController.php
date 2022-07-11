<?php

namespace App\Http\Admin\Controllers;

use App\Domain\Admin\Models\Admin;
use App\Http\Admin\Requests\AdminLoginRequest;
use App\Http\Auth\Resources\UserResource;
use Application\Controllers\BaseController;
use Domain\Auth\Traits\HasLogin;
use Illuminate\Http\JsonResponse;

class AdminLoginController extends BaseController
{
    use HasLogin;

    /**
     * @param AdminLoginRequest $request
     * @return JsonResponse
     */
    public function __invoke(AdminLoginRequest $request): JsonResponse
    {
        try {
            return $this->login($request, 'admin');
        } catch (\Exception $exception) {
            return response()->json($exception->getMessage());
        }
    }

    public function verify()
    {
        try {
            return new UserResource(auth('admin')->user());
        } catch (\Exception $exception) {
            return response()->json($exception->getMessage());
        }
    }
}
