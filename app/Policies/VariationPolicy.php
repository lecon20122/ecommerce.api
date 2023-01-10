<?php

namespace App\Policies;

use App\Domain\Admin\Models\Admin;
use App\Domain\Variation\Models\Variation;
use Domain\User\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;
use Illuminate\Support\Facades\Auth;

class VariationPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param User $user
     * @return Response|bool
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param User|Admin $user
     * @param Variation $variation
     * @return bool
     */
    public function view(User|Admin $user, Variation $variation)
    {
        if (Auth::guard('admin')->check()) {
            return true;
        }

        return $user->isOwner($variation->store_id);
    }

    /**
     * Determine whether the user can create models.
     *
     * @param User $user
     * @return bool
     */
    public function create(User $user)
    {
        return false;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param User|Admin $user
     * @param Variation $variation
     * @return mixed
     */
    public function update(User|Admin $user, Variation $variation): mixed
    {
        if (Auth::guard('admin')->check()) {
            return true;
        }

        return $user->isOwner($variation->store_id) ? true : abort(403);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param User|Admin $user
     * @param Variation $variation
     * @return bool
     */
    public function delete(User|Admin $user, Variation $variation): bool
    {
        if (Auth::guard('admin')->check()) {
            return true;
        }

        return $user->isOwner($variation->store_id);
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param User|Admin $user
     * @param Variation $variation
     * @return Response|bool
     */
    public function restore(User|Admin $user, Variation $variation)
    {
        if (Auth::guard('admin')->check()) {
            return true;
        }
        if ($user->store()->id === $variation->store_id) {
            return true;
        }
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param User|Admin $user
     * @param Variation $variation
     * @return Response|bool
     */
    public function forceDelete(User|Admin $user, Variation $variation)
    {
        if (Auth::guard('admin')->check()) {
            return true;
        }
        if ($user->store()->id === $variation->store_id) {
            return true;
        }
        return false;
    }
}
