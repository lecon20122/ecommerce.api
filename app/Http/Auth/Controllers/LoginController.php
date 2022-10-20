<?php

namespace App\Http\Auth\Controllers;

use App\Http\Auth\Requests\LoginRequest;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class LoginController extends BaseController
{


    /**
     * Display a listing of the resource.
     *
     * @param LoginRequest $request
     * @return RedirectResponse
     */
    public function __invoke(LoginRequest $request): RedirectResponse
    {
        try {
            $request->authenticate();
            $request->session()->regenerate(); //TODO:: Check if regenerating the session after login will make another cart
            return redirect()->intended()->withInput();
        } catch (Exception $exception) {
            return $this->redirectBackWithMessage($exception->getMessage());
        }
    }

    public function view(): Response|RedirectResponse
    {
        try {
            return Inertia::render('Client/auth/login');
        } catch (Exception $exception) {
            return redirect()->back()->with('errors', $exception->getMessage());
        }
    }
}
