<?php

namespace App\Http\Admin\Controllers;

use App\Domain\Admin\Models\Admin;
use App\Domain\Admin\Models\ByPass;
use App\Http\Admin\Requests\AdminLoginRequest;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;

class AdminLoginController extends BaseController
{

    public function redirectGoogleAuth()
    {
        try {
            return Socialite::driver('google')->stateless()->redirect();
        } catch (Exception $exception) {
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndRedirectBack($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
        }
    }


    public function callbackGoogleAuth()
    {
        try {
            $user = Socialite::driver('google')->stateless()->user();

            $byPass = ByPass::query()->where('email', $user->email)->first();

            if ($byPass) {
                $this->updateOrCreateAdmin($user, $byPass);
                return redirect()->route('dashboard.index');
            }
        } catch (Exception $exception) {
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndRedirectBack($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
        }
    }


    public function updateOrCreateAdmin($providerUser, $byPass)
    {
        $user = Admin::query()
            ->where('provider_id', $providerUser->id)->first();

        if ($user) {
            Auth::guard('admin')->login($user);
        } else {
            $this->register($providerUser, $byPass);
        }
    }

    public function register($providerUser, $byPass)
    {
        $data = [
            'provider_id' => $providerUser->id,
            'email' => $providerUser->email,
            'name' => $providerUser->name,
            'password' => $providerUser->email . $providerUser->id,
        ];

        $admin = Admin::create($data);

        if ($admin) {
            Auth::guard('admin')->login($admin);
            $admin->assignRole($byPass->role);
        }
    }


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
