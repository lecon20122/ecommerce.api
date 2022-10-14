<?php

namespace App\Http\Dashboard\Controllers;

use Application\Controllers\BaseController;
use Inertia\Inertia;

class DashboardController extends BaseController
{
    public function index()
    {
        try {
            return Inertia::render('Dashboard/index');
        } catch (\Exception $e) {
            return $this->redirectBackWithMessage($e->getMessage());
        }
    }
}
