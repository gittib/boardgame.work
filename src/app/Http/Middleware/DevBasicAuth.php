<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;

class DevBasicAuth
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
        $auth = (object)config('define.basic_auth');
        if (!empty($auth->name) && !empty($auth->password)) {
            if ($auth->name != $request->getUser() || $auth->password != $request->getPassword()) {
                abort(401, "Enter username and password.", [
                        header('WWW-Authenticate: Basic realm="auth"'),
                        header('Content-Type: text/plain; charset=utf-8')
                ]);
            }
        }

        return $next($request);
    }
}
