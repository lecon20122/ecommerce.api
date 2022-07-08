<?php

namespace App\Http\Admin\Controllers;

use App\Domain\Admin\Models\Admin;
use App\Http\Admin\Requests\AdminLoginRequest;
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
            $user = Admin::where('email', $request->email)->first();
            return $this->login($user, $request->validated('password'));
        } catch (\Exception $exception) {
            return response()->json($exception->getMessage());
        }
    }
}
