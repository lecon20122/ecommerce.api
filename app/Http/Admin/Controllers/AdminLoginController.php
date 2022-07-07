<?php

namespace App\Http\Admin\Controllers;

use App\Domain\Admin\Models\Admin;
use App\Http\Admin\Requests\AdminLoginRequest;
use Application\Controllers\BaseController;
use Domain\Auth\Traits\HasLogin;

class AdminLoginController extends BaseController
{
    use HasLogin;

    public function __invoke(AdminLoginRequest $request)
    {
        try {
            $user = Admin::where('email', $request->email)->first();
            return $this->login($user, $request->validated('password'), $user->password);
        } catch (\Exception $exception) {
            return response()->json($exception->getMessage());
        }
    }
}
