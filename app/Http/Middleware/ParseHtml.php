<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ParseHtml
{
    /**
     * parse html with tidy
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        $tidy = new \tidy;
        $tidy->parseString($response->getContent(), [
            'indent' => true,
            'wrap' => 200,
            'drop-empty-elements' => false,
            'mute-id' => true,
        ], 'utf8');
        $tidy->cleanRepair();

        return response($tidy, $response->status(), $response->headers->all());
    }
}
