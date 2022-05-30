<?php

namespace App\Http\Auth\Controllers;

use Application\Controllers\BaseController;
use Domain\User\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Laravel\Socialite\Facades\Socialite;
use Support\Enums\ThirdPartyEnums;

class SocialiteController extends BaseController
{
    public function oauthProviderRedirect(string $provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function oauthProviderCallBack(string $provider)
    {
        try {
            $providerUser = Socialite::driver($provider)->stateless()->user();
            // dd($providerUser);
            DB::beginTransaction();
            $user = $this->createOrUpdateUser($providerUser);
            DB::commit();
            return $this->ok([
                'user' => $user,
                'token' => $user->createToken($user->email, ['customer'])->plainTextToken,
            ]);
        } catch (\Exception $exception) {
            DB::rollBack();
            $this->sendError($exception->getMessage());
        }
    }

    public function createOrUpdateUser($providerUser)
    {
        $data = [
            'provider_id' => $providerUser->id,
            'email' => $providerUser->email,
            'name' => $providerUser->name,
            'password' => $providerUser->email . $providerUser->id,
            'provider_token' => $providerUser->token,
            'provider_refresh_token' => $providerUser->refreshToken,
            'oauth_provider_type' => ThirdPartyEnums::Google,
        ];

        $user = User::where('provider_id', $providerUser->id)->first();
        if ($user) {
            User::where('provider_id', $providerUser->id)->first()->update($data);
            $user->refresh();
        } else {
            $user = User::create($data);
        }
        return $user;
    }
}
