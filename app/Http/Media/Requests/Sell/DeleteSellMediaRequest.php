<?php

namespace App\Http\Media\Requests\Sell;

use Illuminate\Foundation\Http\FormRequest;

class DeleteSellMediaRequest extends FormRequest
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
            'image_id' => 'required|integer',
            'color_id' => 'required|integer',
        ];
    }
}
