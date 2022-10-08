<?php

namespace App\Http\Admin\Controllers;

use App\Http\Admin\Requests\AdminLoginRequest;
use Application\Controllers\BaseController;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminLoginController extends BaseController
{
    /**
     * @param AdminLoginRequest $request
     * @return RedirectResponse
     */
    public function login(AdminLoginRequest $request): RedirectResponse
    {
        try {
            if (Auth::guard('admin')->attempt($request->validated())) {
                return redirect()->route('dashboard.index');
            }
            return back()->withErrors([
                'email' => 'The provided credentials do not match our records.',
            ])->onlyInput('email');

        } catch (\Exception $exception) {
            return $this->redirectBackWithMessage($exception->getMessage());
        }
    }

    public function view()
    {
        try {
            return Inertia::render('Auth/login');
        } catch (\Throwable $th) {
            return redirect()->back();
        }
    }

    public function logout()
    {
        auth('admin')->logout();
        return redirect(route('admin.getLogin'));
    }
}
