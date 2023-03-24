<?php

namespace App\Http\Store\Requests\Sell;

use Illuminate\Foundation\Http\FormRequest;

class StoreSellerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'brand_name' => 'required|string|max:255|unique:stores,name',
            'phone' => 'required|string|max:20',
            'company_register' => 'required|numeric',
            'district_id' => 'required|numeric',
            'street' => 'required|string|max:255',
            'building' => 'required|string|max:255',
            'what_store_sells' => 'required|string|max:255',
            'social_media' => 'nullable|string|max:255',
        ];
    }
}
