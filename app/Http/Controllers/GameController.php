<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Carbon\CarbonImmutable;
use Illuminate\Http\Request;

class GameController extends Controller
{
    private const GAMES_PER_PAGE = 30;

    public function index($year = null, $month = null, $day = null) {
        if ($year == 0 && $year !== null) {
            return redirect()->route('game.index');
        } else if ($month == 0 && $month !== null) {
            return redirect()->route('game.index', compact('year'));
        } else if ($day == 0 && $day !== null) {
            return redirect()->route('game.index', compact('year', 'month'));
        }

        if ($month >= 100 || $day >= 100) {
            // 月日に100以上の数値はNG
            return redirect()->route('game.index', compact('year'));
        }

        if (empty($year)) {
            // yearが未指定なので全範囲
            $startDate = CarbonImmutable::create(2023, 1, 1, 0, 0, 0);
            $endDate = CarbonImmutable::create(null, 12, 31, 23, 59, 59);
            $canonicalUrl = route('game.index');
            $title = __("これまでに行われたゲーム一覧");
        } else if (empty($month)) {
            // monthが未指定なので１年範囲
            $startDate = CarbonImmutable::create($year, 1, 1, 0, 0, 0);
            $endDate = CarbonImmutable::create($year, 12, 31, 23, 59, 59);
            $canonicalUrl = route('game.index', [
                'year' => $startDate->year,
            ]);
            $title = __(":year年に行われたゲーム一覧", [
                'year' => $startDate->year,
            ]);
            if ($startDate->year != $year) {
                return redirect($canonicalUrl);
            }
        } else if (empty($day)) {
            // dayが未指定なので１ヶ月範囲
            $startDate = CarbonImmutable::create($year, $month, 1, 0, 0, 0);
            $endDate = CarbonImmutable::create($year, $month, $startDate->endOfMonth()->day, 23, 59, 59);
            $canonicalUrl = route('game.index', [
                'year' => $startDate->year,
                'month' => $startDate->month,
            ]);
            $title = __(":year年:month月に行われたゲーム一覧", [
                'year' => $startDate->year,
                'month' => $startDate->month,
            ]);
            if ($startDate->year != $year || $startDate->month != $month) {
                return redirect($canonicalUrl);
            }
        } else {
            // dayまで指定されてるので１日範囲
            $startDate = CarbonImmutable::create($year, $month, $day, 0, 0, 0);
            $endDate = CarbonImmutable::create($year, $month, $day, 23, 59, 59);
            $canonicalUrl = route('game.index', [
                'year' => $startDate->year,
                'month' => $startDate->month,
                'day' => $startDate->day,
            ]);
            $title = __(":year年:month月:day日に行われたゲーム一覧", [
                'year' => $startDate->year,
                'month' => $startDate->month,
                'day' => $startDate->day,
            ]);
            if ($startDate->year != $year || $startDate->month != $month || $startDate->day != $day) {
                return redirect($canonicalUrl);
            }
        }

        $breads = $this->getBreads($year, $month, $day, null);
        $subPageLinks = $this->getSubPageLinks($year, $month, $day, $startDate, $endDate);

        // startDate,endDateからGameリストを取得
        $games = Game::whereBetween('started_at', [$startDate, $endDate])->simplePaginate(self::GAMES_PER_PAGE);

        return view('game.index', compact('breads', 'title', 'canonicalUrl', 'games', 'subPageLinks'));
    }

    public function show($year, $month, $day, Game $game) {
        $date = $game->started_at ?? $game->created_at;
        if ($year != $date->year || $month != $date->month || $day != $date->day) {
            return redirect($game->url);
        }
        $breads = $this->getBreads($date->year, $date->month, $date->day, $game);
        return view('game.show', compact('breads', 'game'));
    }

    private function getBreads($year, $month, $day, ?Game $game): array {
        $breads = [
            __('TOP') => route('top.index'),
        ];

        // 全範囲のパンくず
        $breads[__("ゲーム一覧")] = route('game.index');

        if (!empty($year)) {
            // year指定があるので１年範囲のパンくず
            $startDate = CarbonImmutable::create($year, 1, 1, 0, 0, 0);
            $url = route('game.index', [
                'year' => $startDate->year,
            ]);
            $title = __(":year年", ['year' => $startDate->year]);
            $breads[$title] = $url;

            if (!empty($month)) {
                // month指定があるので１ヶ月範囲のパンくず
                $startDate = CarbonImmutable::create($year, $month, 1, 0, 0, 0);
                $url = route('game.index', [
                    'year' => $startDate->year,
                    'month' => $startDate->month,
                ]);
                $title = __(":month月", ['month' => $startDate->month]);
                $breads[$title] = $url;

                if (!empty($day)) {
                    // dayまで指定されてるので１日範囲のパンくず
                    $startDate = CarbonImmutable::create($year, $month, $day, 0, 0, 0);
                    $url = route('game.index', [
                        'year' => $startDate->year,
                        'month' => $startDate->month,
                        'day' => $startDate->day,
                    ]);
                    $title = __(":day日", ['day' => $startDate->day]);
                    $breads[$title] = $url;

                    if (!empty($game)) {
                        // 詳細ページ用パンくず
                        $title = __("ゲーム :game", ['game' => $game->id]);
                        $breads[$title] = $game->url;
                    }
                }
            }
        }

        return $breads;
    }

    /** 下層リンクのURLを準備 */
    private function getSubPageLinks($year, $month, $day, $startDate, $endDate): array {
        $subPageLinks = [];
        if (empty($year)) {
            // 全期間の一覧では年で絞り込むリンクを出す
            $minStartedAt = Game::min('started_at');
            $maxStartedAt = Game::max('started_at');
            for ($y = $minStartedAt->year ; $y <= $maxStartedAt->year ; $y++) {
                $subPageLinks[__(':year年', ['year' => $y])] = route('game.index', [
                    'year' => $y,
                ]);
            }
        } else if (empty($month)) {
            // 年の一覧では月で絞り込むリンクを出す
            $allGames = Game::whereBetween('started_at', [$startDate, $endDate])
                ->orderBy('started_at')
                ->get();
            $months = $allGames->map(fn($it) => $it->started_at->month)->unique();
            foreach ($months as $m) {
                $subPageLinks[__(':month月', ['month' => $m])] = route('game.index', [
                    'year' => $firstStarted->year,
                    'month' => $m,
                ]);
            }
        } else if (empty($day)) {
            // 月の一覧では日で絞り込むリンクを出す
            $allGames = Game::whereBetween('started_at', [$startDate, $endDate])
                ->orderBy('started_at')
                ->get();
            $days = $allGames->map(fn($it) => $it->started_at->day)->unique();
            foreach ($days as $d) {
                $subPageLinks[__(':day日', ['day' => $d])] = route('game.index', [
                    'year' => $firstStarted->year,
                    'month' => $firstStarted->month,
                    'day' => $d,
                ]);
            }
        }
        return $subPageLinks;
    }
}
