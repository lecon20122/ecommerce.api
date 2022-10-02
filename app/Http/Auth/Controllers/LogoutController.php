<?php

namespace App\Http\Auth\Controllers;

use Application\Controllers\BaseController;
use Domain\Auth\Traits\HasLogout;
use Domain\User\Models\User;
use Exception;
use Faker\Provider\Base;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

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
            $this->webMessage($exception->getMessage());
        }
    }
}
