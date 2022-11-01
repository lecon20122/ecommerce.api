<?php

namespace App\Http\Location\Requests;

use App\Domain\Location\Enums\AddressTypeEnums;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class StoreAddressRequest extends FormRequest
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
            'name' => 'string|required|max:255',
            'phone' => 'string|required|max:255',
            'district_id' => 'required|numeric',
            'street' => 'string|required|max:255',
            'building' => 'string|required|max:255',
            'floor' => 'string|required|max:255',
            'apartment_number' => 'string|required|max:255',
            'nearby_landmark' => 'string|required|max:255',
            'type' => [new Enum(AddressTypeEnums::class), 'required'],
        ];
    }
}
