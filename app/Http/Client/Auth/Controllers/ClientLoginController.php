<?php

namespace App\Http\Client\Auth\Controllers;

use App\Http\Auth\Requests\LoginRequest;
use Application\Controllers\Controller;
use Domain\Auth\Traits\HasLogin;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientLoginController extends Controller
{
    use HasLogin;

    public function __invoke()
    {
        try {
            return Inertia::render('Client/auth/login');
        } catch (\Exception $exception) {
            return redirect()->back()->with('errors', $exception->getMessage());
        }
    }
    public function login(LoginRequest $request)
    {
        try {
            return $this->clientLogin($request);
        } catch (\Exception $exception) {
            return redirect()->back()->with('errors', $exception->getMessage());
        }
    }
}
