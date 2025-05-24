<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Cookie;

class LanguageController extends Controller
{
    public function trans(Request $request) {
        Cookie::queue(config('define.cookie.key.applocale'), $request->lang ?? config('app.fallback_locale'), 60*24*90);
        return back();
    }
}
