<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ContentSecurity
{
    /**
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);
        if ($response->isServerError()) return $response;

        $settings = collect([
            "default-src" => [
                "'self'",
                "data:",
                "https://ka-f.fontawesome.com",
                "https://www.google-analytics.com",
            ],
            "style-src" => [
                "'self'",
                "'unsafe-inline'",
                "https://unpkg.com",
                "https://ka-f.fontawesome.com",
            ],
            "img-src" => [
                "'self'",
                "data:",
                "http://pbs.twimg.com",
            ],
            "script-src" => [
                "'self'",
                "'unsafe-inline'",
                "https://kit.fontawesome.com",
                "https://code.jquery.com",
                "https://www.googletagmanager.com",
            ],
        ]);

        $policy =$settings->map(fn($val, $key) => $key." ".implode(" ", $val))->implode("; ");
        $response->headers->set("Content-Security-Policy", $policy);

        return $response;
    }
}
