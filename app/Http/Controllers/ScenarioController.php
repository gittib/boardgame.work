<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Scenario;
use Auth;

class ScenarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $scenarios = Scenario::where('is_open', 1)->paginate(100);
        return view('scenario.index', compact('scenarios'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $scenario = Scenario::findOrFail($id);

        if (!$scenario->is_open) {
            abort_unless($scenario->user_id == Auth::id(), 404);
        }

        return view('scenario.show', compact('scenario'));
    }
}
