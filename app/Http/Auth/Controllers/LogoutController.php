<?php

namespace App\Http\Auth\Controllers;

use Application\Controllers\BaseController;
use Domain\Auth\Traits\HasLogout;
use Domain\User\Models\User;
use Faker\Provider\Base;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LogoutController extends BaseController
{
    use HasLogout;
    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function __invoke(Request $request)
    {
        try {
            return $this->logout($request);
        } catch (\Exception $exception) {
            $this->sendError($exception->getMessage());
        }
    }
}
