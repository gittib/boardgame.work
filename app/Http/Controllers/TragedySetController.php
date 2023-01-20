<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TragedySet;
use Auth;

class TragedySetController extends Controller
{
    public function index(Request $request) {
        $sets = TragedySet::get();
        return view('tragedy_set.index', compact('sets'));
    }

    public function show(Request $request, $id) {
        $set = TragedySet::findOrFail($id);
        return view('tragedy_set.show', compact('set'));
    }
}
