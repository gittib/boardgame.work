<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class UserController extends Controller
{
    public function mypage(Request $request) {
        dd(Auth::user());
    }
}
