<?php

namespace App\Http\Client\Auth\Controllers;

use App\Http\Auth\Requests\LoginRequest;
use Application\Controllers\Controller;
use Domain\Auth\Traits\HasLogin;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class ClientLoginController extends Controller
{
    use HasLogin;

    public function getLoginPage(): Response|RedirectResponse
    {
        try {
            return Inertia::render('Client/auth/login');
        } catch (Exception $exception) {
            return redirect()->back()->with('errors', $exception->getMessage());
        }
    }

    public function login(LoginRequest $request): bool|RedirectResponse
    {
        try {
            return $this->clientLogin($request);
        } catch (Exception $exception) {
            return redirect()->back()->with('errors', $exception->getMessage());
        }
    }

    public function logout(): RedirectResponse
    {
        try {
            Auth::logout();
            return redirect()->back();
        } catch (Exception $exception) {
            return redirect()->back()->with('errors', $exception->getMessage());
        }
    }
}
