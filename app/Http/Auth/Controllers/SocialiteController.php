<?php

namespace App\Http\Auth\Controllers;

use Application\Controllers\BaseController;
use Domain\User\Models\User;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Laravel\Socialite\Facades\Socialite;
use Support\Enums\ThirdPartyEnums;

class SocialiteController extends BaseController
{
    public function oauthProviderRedirect(): \Symfony\Component\HttpFoundation\RedirectResponse|RedirectResponse
    {
        $scopes = ['profile', 'email'];
        $parameters = ["prompt" => "consent select_account"];
        return Socialite::driver(ThirdPartyEnums::Google)->scopes($scopes)->redirect();
    }

    public function oauthProviderCallBack()
    {
        try {
            $providerUser = Socialite::driver(ThirdPartyEnums::Google)->user();

            if ($providerUser) {
                $user = $this->createOrUpdateUser($providerUser);
                Auth::login($user);
            }

            return Redirect::intended();
        } catch (Exception $exception) {
            DB::rollBack();
            $this->sendError($exception->getMessage());
        }
    }

    public function createOrUpdateUser($providerUser)
    {
        $user = User::where('provider_id', $providerUser->id)->first();

        $data = [
            'provider_id' => $providerUser->id,
            'email' => $providerUser->email,
            'name' => $providerUser->name,
            'password' => $providerUser->email . $providerUser->id,
            'provider_token' => $providerUser->token,
            'provider_refresh_token' => $providerUser->refreshToken,
            'oauth_provider_type' => ThirdPartyEnums::Google,
        ];

        if ($user) {
            $user->update($data);
        } else {
            $user = User::create($data);
        }
        return $user;
    }
}
