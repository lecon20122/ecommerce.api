<?php

namespace App\Http\User\Controllers;

use App\Http\Auth\Resources\UserResource;
use App\Http\User\Requests\LoginRequest;
use App\Http\User\Requests\RegisterRequest;
use Application\Controllers\BaseController;
use Domain\User\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

class UserController extends BaseController
{
    public function index()
    {
        try {
            $users =  new UserResource(User::paginate(15));
            // dd($users);
            // return response()->json($users);
            return Inertia::render('Dashboard/customers/index' , [
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
