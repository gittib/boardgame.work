<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SkywayController extends Controller
{
    public function token()
    {
        $jsPath = resource_path('bin/generateSkywayAuthToken.mjs');
        $appId = config('define.skyway.app_id');
        $secret = config('define.skyway.secret_key');
        $token = shell_exec("node {$jsPath} {$appId} {$secret}");
        $token = rtrim($token);

        return [
            'token' => $token,
        ];
    }
}
