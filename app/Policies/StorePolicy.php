<?php

namespace App\Policies;

use App\Domain\Store\Models\Store;
use Domain\User\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

class StorePolicy
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
     * @param User $user
     * @param  \App\Store  $store
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
     * @return Response|bool
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param User $user
     * @param  Store $store
     * @return bool
     */
    public function update(User $user, Store $store)
    {
        if ($user->id === $store->user_id) {
            return true;
        }
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param User $user
     * @param  Store $store
     * @return bool
     */
    public function delete(User $user, Store $store)
    {
        if ($user->id === $store->user_id) {
            return true;
        }
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param User $user
     * @param  Store  $store
     * @return void
     */
    public function restore(User $user, Store $store)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param User $user
     * @param  \App\Store  $store
     * @return void
     */
    public function forceDelete(User $user, Store $store)
    {
        //
    }
}
