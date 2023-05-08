<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/

Artisan::command('views:update', function () {
    $currentDate = Carbon::yesterday('Africa/Cairo')->format('Y-m-d');
    $this->comment('Updating views at ' . $currentDate);
    \App\Http\Product\Jobs\CountProductDailyViewsSummaryJob::dispatch();
})->describe('Update Product Views Summary');
