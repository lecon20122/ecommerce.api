<?php

namespace App\Http\Auth\Controllers;

use App\Http\Auth\Requests\ForgetPasswordRequest;
use Application\Controllers\BaseController;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use JetBrains\PhpStorm\ArrayShape;

class ForgetPasswordController extends BaseController
{
    /**
     * @throws ValidationException
     */
    #[ArrayShape(['status' => "mixed"])] public function __invoke(ForgetPasswordRequest $request): RedirectResponse
    {
        $status = Password::sendResetLink($request->only('email'));

        if ($status == Password::RESET_LINK_SENT) {
            return $this->webMessage('Password reset link has been sent!');
        }

        throw ValidationException::withMessages([
            'email' => [trans($status)]
        ]);
    }

    public function view(): Response
    {
        return Inertia::render('Client/auth/resetPassword');
    }
}
