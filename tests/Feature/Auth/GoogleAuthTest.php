<?php

namespace Tests\Feature\Auth;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Socialite\Facades\Socialite;
use Support\Enums\ThirdPartyEnums;
use Tests\TestCase;

class GoogleAuthTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function a_user_can_redirect_to_google_auth()
    {
        $this->get(route('auth.provider-redirect', [
            'provider' => ThirdPartyEnums::Google,
        ]))->assertStatus(302);
    }

    public function google_callback_have_user_info()
    {
        Socialite::shouldReceive('driver->fields->scopes->user')->andReturns(['id','token']);

    }
}
