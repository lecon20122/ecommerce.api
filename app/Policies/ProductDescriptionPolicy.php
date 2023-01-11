<?php

namespace App\Policies;

use App\Domain\Admin\Models\Admin;
use App\Domain\Product\Models\ProductDescription;
use Domain\User\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;
use Illuminate\Support\Facades\Auth;

class ProductDescriptionPolicy
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
     * @param ProductDescription $productDescription
     * @return Response|bool
     */
    public function view(User $user, ProductDescription $productDescription)
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

    }

    /**
     * Determine whether the user can update the model.
     *
     * @param User|Admin $user
     * @param ProductDescription $productDescription
     * @return Response|bool
     */
    public function update(User|Admin $user, ProductDescription $productDescription): Response|bool
    {
        if (Auth::guard('admin')->check()) {
            return true;
        }

        return $user->isOwner($productDescription->product()->first()->store_id);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param Admin|User $user
     * @param ProductDescription $productDescription
     * @return Response|bool
     */
    public function delete(Admin|User $user, ProductDescription $productDescription): Response|bool
    {
        if (Auth::guard('admin')->check()) {
            return true;
        }

        return $user->isOwner($productDescription->product()->first()->store_id);
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param User $user
     * @param ProductDescription $productDescription
     * @return Response|bool
     */
    public function restore(User $user, ProductDescription $productDescription)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param User $user
     * @param ProductDescription $productDescription
     * @return Response|bool
     */
    public function forceDelete(User $user, ProductDescription $productDescription)
    {
        //
    }
}
