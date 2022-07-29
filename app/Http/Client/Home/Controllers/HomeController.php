<?php

namespace App\Http\Client\Home\Controllers;

use App\Http\Controllers\Controller;
use Application\Controllers\BaseController;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends BaseController
{
    public function index()
    {
        return Inertia::render('Client/index');
    }
}
