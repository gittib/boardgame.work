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
    public function index(Request $request)
    {
        $query = Scenario::with([
            'writer',
            'set',
            'likes',
        ])->where('is_open', 1)
            ->orderBy('set_id')
            ->orderBy('difficulty')
            ->orderBy('id');

        // 検索条件指定
        if (!empty($request->set_abbr)) {
            $query->whereHas('set', function($q) use($request) {
                $q->where('tragedy_sets.abbreviation', $request->set_abbr);
            });
        }

        $scenarios = $query->paginate(30);
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
        $scenario = Scenario::with([
            'incidents.criminal',
        ])->findOrFail($id);

        if (!$scenario->is_open) {
            if (Auth::check()) {
                abort_unless($scenario->user_id == Auth::id(), 403);
            } else {
                session(['url.intended' => route('scenario.show', ['scenario' => $id])]);
                return redirect()->route('login');
            }
        }

        return view('scenario.show', compact('scenario'));
    }

    public function bookmark(Request $request, $id) {
        Scenario::where('is_open', 1)->findOrFail($id);
        Auth::user()->bookmarkScenarios()->toggle([$id]);
        $bookmarked = !empty(Scenario::find($id)->bookmarks()->find(Auth::id()));
        return [
            'result' => 'OK',
            'bookmarked' => $bookmarked,
            'message' => $bookmarked ? __('ブックマークしました') : __('ブックマークを解除しました'),
        ];
    }

    public function like(Request $request, $id) {
        Scenario::where('is_open', 1)->findOrFail($id);
        Auth::user()->likeScenarios()->toggle([$id]);
        return [
            'result' => 'OK',
            'likes' => Scenario::find($id)->likes()->count(),
        ];
    }
}
