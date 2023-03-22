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
use Support\Enums\ThirdPartyEnums;
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

            if (ByPass::query()->where('email', $user->email)->exists()) {
                $this->updateOrCreateAdmin($user);
                return redirect()->route('dashboard.index');
            } else {
                return redirect('')
            }
        } catch (Exception $exception) {
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndRedirectBack($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
        }
    }


    public function updateOrCreateAdmin($providerUser)
    {
        $user = Admin::query()->where('provider_id', $providerUser->id)->first();

        if ($user) {
            Auth::guard('admin')->login($user);
        } else {
            $this->register($providerUser);
        }
    }

    public function register($providerUser)
    {
        $data = [
            'provider_id' => $providerUser->id,
            'email' => $providerUser->email,
            'name' => $providerUser->name,
            'password' => $providerUser->email . $providerUser->id,
        ];

        $user = Admin::create($data);

        if ($user) Auth::guard('admin')->login($user);
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
