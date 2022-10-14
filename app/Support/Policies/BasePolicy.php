<?php

namespace App\Domain\Cart\Models\Support\Policies;


use Domain\User\Models\User;
use Illuminate\Support\Facades\Auth;

class BasePolicy
{
    /**
     * Perform pre-authorization checks.
     *
     *
     * @param User $user
     * @param string $ability
     * @return bool|void
     */
    public function before(User $user, string $ability)
    {
        if(Auth::guard('admin')->check())
        {
            return true;
        };
    }

}
