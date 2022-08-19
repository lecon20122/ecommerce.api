<?php

use App\Http\Client\Home\Controllers\HomeController;
use Illuminate\Support\Facades\Route;


Route::get('/' , [HomeController::class , 'index'])->name('home');
