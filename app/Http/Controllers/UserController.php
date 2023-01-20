<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TragedySet;
use Auth;

class UserController extends Controller
{
    public function mypage(Request $request) {
        $sets = TragedySet::get();
        return view('user.mypage', compact('sets'));
    }
}
