<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EnqueteController extends Controller
{
    public function index() {
        return view('enquete.index');
    }

    public function create() {
        return view('enquete.create');
    }

    public function store(Request $request) {
        return redirect()->route('enquete.index');
    }
}
