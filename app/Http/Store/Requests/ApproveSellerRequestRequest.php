<?php

namespace App\Http\Store\Requests;

use App\Support\Enums\RolesEnum;
use Illuminate\Foundation\Http\FormRequest;

class ApproveSellerRequestRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return  auth('admin')->check()
            && auth('admin')->user()->hasRole(RolesEnum::SUPER_ADMIN->value);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'id' => 'required|integer|exists:seller_requests,id',
        ];
    }
}
