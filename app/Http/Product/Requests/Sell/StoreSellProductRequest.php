<?php

namespace App\Http\Product\Requests\Sell;

use App\Rules\Boolean;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreSellProductRequest extends FormRequest
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
            'title' => 'required|array',
            'title.ar' => 'required|string|max:255',
            'title.en' => 'required|string|max:255',
            'price' => 'required|numeric|min:0,max:1000000',
            'color_id' => 'required|integer',
            'category_id' => 'required|numeric',
            'unisex' => ['required', new Boolean],
            "sizes" => 'array|nullable',
            'images' => 'required|array',
            'images.*' => [
                'mimes:jpg,webp,png|max:2048',
                Rule::dimensions()
                    ->minWidth(600)
                    ->maxWidth(2000)
            ],
            // 'main_image' => [
            //     'mimes:jpg,webp,png|max:2048',
            //     Rule::dimensions()
            //         ->minWidth(600)
            //         ->maxWidth(2000)
            // ],
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Title is required',
            'title.ar.required' => 'Arabic title is required',
            'title.en.required' => 'English title is required',
            'title.ar.max' => 'Arabic title must be less than 255 characters',
            'title.en.max' => 'English title must be less than 255 characters',
            'price.required' => 'Price is required',
            'price.numeric' => 'Price must be a number',
            'price.min' => 'Price must be greater than 0',
            'price.max' => 'Price must be less than 1000000',
            'color_id.required' => 'Color is required',
            'color_id.integer' => 'Color must be an integer',
            'category_id.required' => 'Category is required',
            'category_id.numeric' => 'Category must be a number',
            'unisex.required' => 'Unisex is required',
            'unisex.boolean' => 'Unisex must be a boolean',
            'sizes.array' => 'Sizes must be an array',
            'images.required' => 'Images are required',
            'images.array' => 'Images must be an array',
            'images.*.mimes' => 'Images must be jpg, webp or png',
            'images.*.max' => 'Images must be less than 2MB',
            'images.*.dimensions' => 'Images must be within 600px width to 2000px width',
        ];
    }
}
