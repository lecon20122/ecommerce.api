<?php

namespace Domain\Auth\Traits;

use Illuminate\Support\Facades\Auth;

trait HasLogout
{
    /**
     * Logging out the authenticated user
     *
     * @param [type] $request
     * @param [type] $guard
     * @return void
     */
    public function logout($request, $guard)
    {
        auth($guard)->user()->tokens()->delete();
        Auth::guard($guard)->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return $this->sendSuccess('successfully logged out');
    }
}
