<?php

namespace App\Http\Product\Requests;

use App\Support\Enums\ValidationRuleEnums;
use Illuminate\Foundation\Http\FormRequest;

class StoreCategoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return auth('admin')->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'ar' => 'required|unique:categories,title',
            'en' => 'required|unique:categories,title',
            'order' => ValidationRuleEnums::NULLABLE_NUMERIC->value,
            'parent_id' => 'nullable',
            'images' => 'nullable',
            'images.*' => 'mimes:jpg,webp,png,jpeg|max:2048',
            'opposite_category_id' => 'nullable|integer|exists:categories,id',
        ];
    }
}
