<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class BrowserId
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
        $cookieKey = config('define.cookie.key.browser_id_hash');
        $browserId = \Cookie::get($cookieKey) ?: (now()->format('YmdHis-') . \Str::uuid());
        \Cookie::queue($cookieKey, $browserId, 60*24*30*12);
        return $next($request);
    }
}
