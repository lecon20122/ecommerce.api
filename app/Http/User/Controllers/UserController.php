<?php

namespace App\Http\User\Controllers;

use App\Http\Auth\Resources\UserResource;
use App\Http\User\Requests\LoginRequest;
use App\Http\User\Requests\RegisterRequest;
use Application\Controllers\BaseController;
use Domain\User\Models\User;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends BaseController
{

    public function getUser(): JsonResponse|UserResource
    {
        try {
            return new UserResource(Auth::user());
        } catch (Exception $exception) {
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
        }
    }

    public function index()
    {
        try {
            $users = new UserResource(User::all());
            return Inertia::render('Dashboard/customers/index', [
                'users' => $users
            ]);
        } catch (Exception $exception) {
            $this->sendError($exception->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }
}
