<?php

namespace App\Domain\Cart\Models\Policies;

use App\Domain\Product\Models\Product;
use Domain\User\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;
use Illuminate\Support\Facades\Auth;

class ProductPolicy
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
     * @param Product $product
     * @return void
     */
    public function view(User $user, Product $product)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param User $user
     * @return bool
     */
    public function create(User $user): bool
    {
        if (Auth::guard('admin')->check()) {
            return true;
        }
        return false;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param User $user
     * @param Product $product
     * @return bool
     */
    public function update(User $user, Product $product): bool
    {
        if (Auth::guard('admin')->check()) {
            return true;
        }
        if ($user->store()->id === $product->store_id) {
            return true;
        }
        return false;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param User $user
     * @param Product $product
     * @return Response|bool
     */
    public function delete(User $user, Product $product): Response|bool
    {
        if (Auth::guard('admin')->check()) {
            return true;
        }
        if ($user->store()->id === $product->store_id) {
            return true;
        }
        return false;

    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param User $user
     * @param Product $product
     * @return Response|bool
     */
    public function restore(User $user, Product $product): Response|bool
    {
        if (Auth::guard('admin')->check()) {
            return true;
        }
        if ($user->store()->id === $product->store_id) {
            return true;
        }
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param User $user
     * @param Product $product
     * @return bool
     */
    public function forceDelete(User $user, Product $product): bool
    {
        if (Auth::guard('admin')->check()) {
            return true;
        }
        if ($user->store()->id === $product->store_id) {
            return true;
        }
        return false;
    }
}
