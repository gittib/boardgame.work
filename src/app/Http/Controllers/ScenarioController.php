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

        $scenarios = $query->paginate(config('define.scenarios_per_page'))->appends($request->query());
        return view('scenario.index', compact('scenarios', 'canonicalUrl'));
    }
    public function quizIndex(Request $request)
    {
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

        $scenarios = $query->paginate(config('define.scenarios_per_page'))->appends($request->query());
        $isQuiz = true;
        return view('scenario.quiz_index', compact('scenarios', 'isQuiz'));
    }
    public function publishedIndex(Request $request)
    {
        $scenarios = Scenario::with([
            'writer',
            'set',
            'likes',
        ])->whereOpen()
            ->orderByDesc('opened_at')
            ->orderByDesc('id')
            ->limit(config('define.scenarios_per_page'))
            ->get();

        $canonicalUrl = route('scenario.published-index');
        return view('scenario.published_index', compact('scenarios', 'canonicalUrl'));
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

    public function lastListUpdate(Request $request) {
        switch($request->pageType) {
        case PageType::ScenarioList->value:
            (new BreadcrumbGenerator)->setLastList(PageType::ScenarioList);
            break;
        case PageType::PublishedScenarioList->value:
            (new BreadcrumbGenerator)->setLastList(PageType::PublishedScenarioList);
            break;
        case PageType::QuizList->value:
            (new BreadcrumbGenerator)->setLastList(PageType::QuizList);
            break;
        case PageType::MyPage->value:
            (new BreadcrumbGenerator)->setLastList(PageType::MyPage);
            break;
        case PageType::Bookmarks->value:
            (new BreadcrumbGenerator)->setLastList(PageType::Bookmarks);
            break;
        default:
            return [
                'result' => 'NG',
                'pageType' => $request->pageType,
            ];
        }
        return [
            'result' => 'OK',
        ];
    }
}
