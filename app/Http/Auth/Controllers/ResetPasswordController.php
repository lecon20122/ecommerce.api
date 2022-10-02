<?php

namespace App\Http\Auth\Controllers;

use App\Http\Auth\Requests\ResetPasswordRequest;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class ResetPasswordController extends BaseController
{
    public function __invoke(ResetPasswordRequest $request): RedirectResponse
    {
        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->forceFill([
                    'password' => $password
                ])->setRememberToken(Str::random(60));

                $user->save();

                event(new PasswordReset($user));
            }
        );

//        if ($status == Password::PASSWORD_RESET) {
//            return response([
//                'message' => 'Password reset successfully'
//            ]);
//        }

        return $status === Password::PASSWORD_RESET
            ? redirect()->route('client.login')->with(['message' => 'Password reset successfully'])
            : back()->withErrors(['email' => [__($status)]]);
    }

    public function view(): Response|RedirectResponse
    {
        try {
            return Inertia::render('Client/auth/newPassword');
        } catch (Exception $exception) {
            return redirect()->back()->with('errors', $exception->getMessage());
        }
    }
}
