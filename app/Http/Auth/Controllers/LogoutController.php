<?php

namespace App\Http\Auth\Controllers;

use Application\Controllers\BaseController;
use Domain\User\Models\User;
use Faker\Provider\Base;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LogoutController extends BaseController
{
    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function __invoke(): JsonResponse
    {
        try {
            DB::beginTransaction();
            auth()->user()->tokens()->delete();
            DB::commit();
            if (auth()->user()->tokens->isNotEmpty()) {
                return $this->sendError('something went wrong');
            }
            return $this->sendSuccess('user logged out successfully');
        } catch (\Exception $exception) {
            DB::rollBack();
            $this->sendError($exception->getMessage(), $exception->getCode());
        }
    }
}
