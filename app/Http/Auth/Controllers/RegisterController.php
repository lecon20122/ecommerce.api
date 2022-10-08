<?php

namespace App\Http\Auth\Controllers;

use App\Http\Auth\Requests\RegisterRequest;
use Application\Controllers\BaseController;
use Domain\User\Models\User;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class RegisterController extends BaseController
{
    /**
     * Show the form for creating a new resource.
     *
     * @param RegisterRequest $request
     * @return RedirectResponse
     */
    public function __invoke(RegisterRequest $request): RedirectResponse
    {
        try {
            DB::beginTransaction();
            $user = User::create($request->validated());
            DB::commit();
            if ($user) {
                Auth::login($user);
                return redirect()->intended()->with('message', 'success');
            } else {
                return back()->withErrors('something went wrong, dont worry we working on it');
            }
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->redirectBackWithMessage($exception->getMessage());
        }


    }

    public function view()
    {
        try {
            return Inertia::render('Client/auth/register');
        } catch (Exception $exception) {
            return redirect()->back()->with('errors', $exception->getMessage());
        }
    }
}
