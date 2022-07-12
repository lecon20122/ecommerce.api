<?php

namespace App\Http\Admin\Controllers;

use App\Domain\Admin\Models\Admin;
use App\Http\Admin\Requests\AdminLoginRequest;
use App\Http\Auth\Resources\UserResource;
use Application\Controllers\BaseController;
use Domain\Auth\Traits\HasLogin;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class AdminLoginController extends BaseController
{
    /**
     * @param AdminLoginRequest $request
     * @return JsonResponse
     */
    public function login(AdminLoginRequest $request)
    {
        try {
            if (Auth::guard('admin')->attempt($request->validated())) {
                return redirect(route('dashboard.index'));
            }
        } catch (\Exception $exception) {
            return dd($exception->getMessage());
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
