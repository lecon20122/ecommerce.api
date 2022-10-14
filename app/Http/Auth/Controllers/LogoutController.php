<?php

namespace App\Http\Auth\Controllers;

use Application\Controllers\BaseController;
use Domain\Auth\Traits\HasLogout;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

class LogoutController extends BaseController
{
    use HasLogout;

    /**
     * Store a newly created resource in storage.
     *
     * @return RedirectResponse
     */
    public function __invoke(): RedirectResponse
    {
        try {
            Auth::logout();
            return redirect()->back();
        } catch (Exception $exception) {
            $this->redirectBackWithMessage($exception->getMessage());
        }
    }
}
