<?php

namespace App\Domain\User\Services;

class UserFavoriteService
{
    public function storeAfterAuthenticated($previousInputs)
    {
        if ($previousInputs) {
            foreach ($previousInputs as $input)
                $this->store($input);
            session()->flash('message', 'success');
            request()->session()->forget('previous_inputs');
        }
    }

    public function store($productId)
    {
        if (isset($productId['product_id']) && auth()->check()) {
            auth('web')->user()->favorites()->toggle([$productId['product_id']]);
        }
    }
}
