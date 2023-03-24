<?php

namespace App\Http\Admin\Requests;

use App\Support\Enums\RolesEnum;
use Illuminate\Foundation\Http\FormRequest;

class UpdateByPassRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth('admin')->check()
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
            'email' => 'nullable|email|unique:admins,email',
            'role' => 'nullable|in:' . RolesEnum::SUPER_ADMIN->value . ',' . RolesEnum::CUSTOMER_SERVICE->value . ',' . RolesEnum::MARKETING->value,
            'expires_at' => 'nullable|date',
        ];
    }
}
