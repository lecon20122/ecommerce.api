<?php

namespace App\Http\Auth\Controllers;

use App\Http\Auth\Requests\ProviderAuthTokenRequest;
use App\Http\Auth\Resources\UserResource;
use Application\Controllers\BaseController;
use Domain\User\Models\User;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
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

    /**
     * @param ProviderAuthTokenRequest $request
     * @return UserResource|JsonResponse
     */
    public function getUserFromToken(ProviderAuthTokenRequest $request): UserResource|JsonResponse
    {
        try {
            $user = Socialite::driver($request->validated('provider'))
                ->userFromToken($request->validated('token'));
            Log::info('user' , $user);
            return new UserResource($this->oauthProviderCreateAndLogin($user));
        } catch (Exception $exception) {
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
        }
    }

    public function oauthProviderCreateAndLogin($providerUser)
    {
        try {
            if ($providerUser) {
                $user = $this->createOrUpdateUser($providerUser);
                Auth::login($user);
            }

            return $user;
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
