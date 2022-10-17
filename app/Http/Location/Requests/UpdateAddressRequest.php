<?php

namespace App\Http\Location\Requests;

use App\Domain\Location\Enums\AddressTypeEnums;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class UpdateAddressRequest extends FormRequest
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
            'type' => [new Enum(AddressTypeEnums::class), 'nullable'],
            'district_id' => 'nullable|numeric',
            'street' => 'string|nullable|max:255',
            'building' => 'string|nullable|max:255',
            'floor' => 'string|nullable|max:255',
            'apartment_number' => 'string|nullable|max:255',
            'nearby_landmark' => 'string|nullable|max:255',
        ];
    }
}
