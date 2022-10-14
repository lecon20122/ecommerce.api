<?php

namespace App\Domain\Cart\Models\Policies;

use App\Domain\Cart\Models\Support\Policies\BasePolicy;
use App\Domain\Store\Models\Store;
use Domain\User\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class StorePolicy extends BasePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param User $user
     * @return void
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param User $user
     * @param Store $store
     * @return void
     */
    public function view(User $user, Store $store)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param User $user
     *
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param User $user
     * @param Store $store
     * @return bool
     */
    public function update(User $user, Store $store): bool
    {
        return $user->id === $store->user_id;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param User $user
     * @param Store $store
     * @return bool
     */
    public function delete(User $user, Store $store): bool
    {
        if ($user->id === $store->user_id | auth('admin')->check())
        {
            return true;
        }
        return false;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param User $user
     * @param Store $store
     * @return bool|int
     */
    public function restore(User $user, Store $store): bool|int
    {
        return $user->id === $store->user_id;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param User $user
     * @param Store $store
     * @return bool|int
     */
    public function forceDelete(User $user, Store $store): bool|int
    {
        return $user->id === $store->user_id;
    }
}
