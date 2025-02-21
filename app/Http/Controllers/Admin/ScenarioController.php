<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Scenario;
use Illuminate\Http\Request;

class ScenarioController extends Controller
{
    public function updated(Request $request)
    {
        $scenarios = Scenario::with([
            'writer',
            'set',
            'likes',
        ])
        ->orderByDesc('updated_at')
        ->limit(10)
        ->get();
        return view('admin.scenario.updated', compact('scenarios'));
    }
}
