<?php

namespace App\Http\Client\Home\Controllers;

use App\Http\Category\Resources\CategoryResource;
use App\Http\Category\Services\CategoryService;
use Application\Controllers\BaseController;
use Inertia\Inertia;

class HomeController extends BaseController
{
    public function index()
    {
//        dd(CategoryResource::collection((new CategoryService)->getCategoriesChildrenAndThumb()));
        return Inertia::render('Client/index', [
            'categories' => CategoryResource::collection((new CategoryService)->getCategoriesChildrenAndThumb())
        ]);
    }
}
