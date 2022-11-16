<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;

class LoginController extends Controller
{
    public function logout(Request $request) {
        Auth::logout();
        return reirect()->route('top.index')->with([
            'flush_message' => 'ログアウトしました',
        ]);
    }
}
