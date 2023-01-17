<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LanguageController extends Controller
{
    public function trans(Request $request, $lang) {
        session(['applocale' => $lang ?? config('app.fallback_locale')]);
        return back();
    }
}
