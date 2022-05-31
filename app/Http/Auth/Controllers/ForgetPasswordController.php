<?php

namespace App\Http\Auth\Controllers;

use App\Http\Auth\Requests\ForgetPasswordRequest;
use Application\Controllers\BaseController;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;

class ForgetPasswordController extends BaseController
{
    public function __invoke(ForgetPasswordRequest $request)
    {
        $status = Password::sendResetLink($request->only('email'));

        if ($status == Password::RESET_LINK_SENT) {
            return [
                'status' => __($status),
            ];
        }

        throw ValidationException::withMessages([
            'email' => [trans($status)]
        ]);
    }
}
