<?php

namespace App\Http\Client\Home\Controllers;

use App\Domain\Product\Services\ProductService;
use App\Http\Category\Resources\CategoryResource;
use App\Http\Category\Services\CategoryService;
use App\Http\Product\Resources\ProductPaginateResource;
use Application\Controllers\BaseController;
use Inertia\Inertia;

class HomeController extends BaseController
{
    public function index()
    {
        return Inertia::render('Client/index', [
            'categories' => CategoryResource::collection((new CategoryService)->getCategoriesChildrenAndThumb()),
        ]);
    }
}
