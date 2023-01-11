<?php

namespace App\Policies;

use App\Domain\Inventory\Models\Stock;
use Domain\User\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class StockPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \Domain\User\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \Domain\User\Models\User  $user
     * @param  \App\Domain\Inventory\Models\Stock  $stock
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, Stock $stock)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \Domain\User\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \Domain\User\Models\User  $user
     * @param  \App\Domain\Inventory\Models\Stock  $stock
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, Stock $stock)
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \Domain\User\Models\User  $user
     * @param  \App\Domain\Inventory\Models\Stock  $stock
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, Stock $stock)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \Domain\User\Models\User  $user
     * @param  \App\Domain\Inventory\Models\Stock  $stock
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, Stock $stock)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \Domain\User\Models\User  $user
     * @param  \App\Domain\Inventory\Models\Stock  $stock
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, Stock $stock)
    {
        //
    }
}
