<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\CarbonImmutable;

class GameController extends Controller
{
    public function index($year = null, $month = null, $day = null) {
        if ($year == 0 && $year !== null) {
            return redirect()->route('game.index');
        } else if ($month == 0 && $month !== null) {
            return redirect()->route('game.index', compact('year'));
        } else if ($day == 0 && $day !== null) {
            return redirect()->route('game.index', compact('year', 'month'));
        }

        if ($month >= 100 || $day >= 100) {
            logger('月日に100以上の数値はNG');
            return redirect()->route('game.index', compact('year'));
        }

        if (empty($year)) {
            // yearが未指定なので全範囲
            $startDate = CarbonImmutable::create(2024, 1, 1, 0, 0, 0);
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
        dd([$year, $month, $day, $startDate->__toString(), $endDate->__toString(), $canonicalUrl, $title]);

        // TODO startDate,endDateからGameリストを取得

        return view('game.index');
    }
}
