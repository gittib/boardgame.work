<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Str;

class LoginController extends Controller
{
    public function login(Request $request) {
        $ref = $request->headers->get('referer');
        if (Str::of($ref)->startsWith(config('app.url'))) {
            session(['intended_url' => $ref]);
        }

        return view('login.login');
    }

    public function logout(Request $request) {
        Auth::logout();
        return reirect()->route('top.index')->with([
            'flush_message' => 'ログアウトしました',
        ]);
    }
}
