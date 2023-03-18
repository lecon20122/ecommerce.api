<?php

namespace App\Http\Auth\Controllers\Sell;

use App\Http\Auth\Requests\ProviderAuthTokenRequest;
use App\Http\Auth\Resources\UserResource;
use Application\Controllers\BaseController;
use Domain\User\Models\User;
use Exception;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Support\Enums\ThirdPartyEnums;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;

class SignInController extends BaseController
{
    public function getUserFromToken(ProviderAuthTokenRequest $request): UserResource|JsonResponse
    {
        try {
            $user = Socialite::driver($request->validated('provider'))
                ->userFromToken($request->validated('token'));
            return new UserResource($this->findStore($user));
        } catch (Exception $exception) {
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
                return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400, $exception->getMessage());
            }
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
        }
    }

    public function findStore($providerUser)
    {
        $user = User::query()->with(
            [
                'store' => function (HasOne $query) {
                    $query->where('approved_at', '!=', null);
                }
            ]
        )->where('provider_id', $providerUser->id)->first();

        if ($user) {
            Auth::login($user);
            return $user;
        } else {
            return $this->register($providerUser);
        }
    }

    public function register($providerUser)
    {
        $data = [
            'provider_id' => $providerUser->id,
            'email' => $providerUser->email,
            'name' => $providerUser->name,
            'password' => $providerUser->email . $providerUser->id,
            'oauth_provider_type' => ThirdPartyEnums::Google,
        ];

        $user = User::create($data);

        if ($user) Auth::login($user);

        return $user;
    }
}
