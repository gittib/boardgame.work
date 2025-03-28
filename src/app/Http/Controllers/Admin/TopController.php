<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Scenario;
use Illuminate\Http\Request;

class TopController extends Controller
{
    public function index(Request $request)
    {
        $scenario = Scenario::orderByDesc('updated_at')->first();
        return view('admin.index', compact('scenario'));
    }
}
