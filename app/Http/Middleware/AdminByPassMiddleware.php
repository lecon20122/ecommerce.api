<?php

namespace App\Http\Middleware;

use App\Domain\Admin\Models\ByPass;
use Closure;
use Illuminate\Http\Request;

class AdminByPassMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        ByPass::query()->where('email', $request->bypass)->firstOrFail();
        return $next($request);
    }
}
