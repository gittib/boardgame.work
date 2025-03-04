<?php

namespace App\Http\Controllers;

use App\Enums\PageType;
use App\Models\Scenario;
use App\Utils\BreadcrumbGenerator;
use Auth;
use Illuminate\Http\Request;

class ScenarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        (new BreadcrumbGenerator)->setLastList(PageType::ScenarioList);
        $query = Scenario::with([
            'writer',
            'set',
            'likes',
        ])->whereOpen()
            ->where('is_quiz', 0)
            ->orderBy('set_id')
            ->orderBy('difficulty')
            ->orderByDesc('id');

        // 検索条件指定
        if (!empty($request->set)) {
            $query->whereHas('set', function($q) use($request) {
                $q->where('tragedy_sets.abbreviation', $request->set);
            });
        }
        if (!empty($request->writer)) {
            $query->where('user_id', $request->writer);
        }
        if (isset($request->dif_min)) {
            $query->where('difficulty', '>=', $request->dif_min);
        }
        if (isset($request->dif_max)) {
            $query->where('difficulty', '<=', $request->dif_max);
        }

        $canonicalUrl = route('scenario.index', ['page' => $request->page == 1 ? null : $request->page]);

        $scenarios = $query->paginate(30)->appends($request->query());
        return view('scenario.index', compact('scenarios', 'canonicalUrl'));
    }
    public function quizIndex(Request $request)
    {
        (new BreadcrumbGenerator)->setLastList(PageType::QuizList);
        $query = Scenario::with([
            'writer',
            'set',
            'likes',
        ])->whereOpen()
            ->where('is_quiz', 1)
            ->orderBy('set_id')
            ->orderByDesc('id');

        // 検索条件指定
        if (!empty($request->set)) {
            $query->whereHas('set', function($q) use($request) {
                $q->where('tragedy_sets.abbreviation', $request->set);
            });
        }

        $scenarios = $query->paginate(30)->appends($request->query());
        $isQuiz = true;
        return view('scenario.quiz_index', compact('scenarios', 'isQuiz'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $scenario = Scenario::with('incidents.criminal', 'set.rules.roles')
            ->where('is_preview', false)
            ->findOrFail($id);

        if (!$scenario->is_open) {
            if (Auth::check()) {
                abort_unless($scenario->user_id == Auth::id(), 403);
            } else {
                session(['url.intended' => route('scenario.show', ['scenario' => $id])]);
                return redirect()->route('login');
            }
        }

        $incidentsData = $scenario->incidents->map(fn($i) => $scenario->set->incidents->first(fn($data) => $data->name == $i->publicName))
            ->filter(fn($it) => !empty($it))
            ->unique();

        return view('scenario.show', compact('scenario', 'incidentsData'));
    }

    public function bookmark(Request $request, $id) {
        $scenario = Scenario::whereVisible()->findOrFail($id);

        Auth::user()->bookmarkScenarios()->toggle([$id]);
        $bookmarked = !empty(Scenario::find($id)->bookmarks()->find(Auth::id()));
        return [
            'result' => 'OK',
            'bookmarked' => $bookmarked,
            'message' => $bookmarked ? __('ブックマークしました') : __('ブックマークを解除しました'),
        ];
    }

    public function like(Request $request, $id) {
        Scenario::whereOpen()->findOrFail($id);
        Auth::user()->likeScenarios()->toggle([$id]);
        return [
            'result' => 'OK',
            'likes' => Scenario::find($id)->likes()->count(),
        ];
    }
}
