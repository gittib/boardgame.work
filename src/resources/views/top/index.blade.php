<?php
$trLink = html()->a(__('messages.official_url'), __('惨劇RoopeR'))->target('_blank');
$aboutLink = html()->a(route('top.about'), __('詳しくはこちら'));
$oldSiteLink = html()->a('http://www.boardgame.work/sangeki/', __('こちら'))->target('_blank');
?>
@extends('layouts.layout')

@section('body_class', 'top-index')

@section('contents')
    <h1>@lang('惨劇RoopeR脚本データベース')</h1>
    <p class="inline_block_wrapper">@lang('messages.what_is_this', compact('trLink', 'aboutLink'))</p>
    <ul class="top_menu">
        <li><a href="{{ route('scenario.index') }}">@lang('脚本一覧')</a></li>
        <li><a href="{{ route('my_page') }}">@lang('脚本を作る')</a></li>
        <li class="new_open">
            <h3>@lang('新着脚本')</h3>
            <div>
                <div>@lang('messages.new_open_scenario.summary', ['count' => config('define.scenarios_per_page')])</div>
                @if(!empty($latestScenario))
                    <span>
                        <span class="notify">！</span>
                        @lang('messages.new_open_scenario.notice', [
                            'writer' => __($latestScenario->writer?->name),
                            'scenarioNo' => $latestScenario->id,
                            'url' => route('scenario.show', $latestScenario->id),
                            'set' => __($latestScenario->set->name),
                            'type' => __($latestScenario->is_quiz ? '指針クイズ' : '脚本'),
                        ])
                    </span>
                @endif
                <a class="see_more" href="{{ route('scenario.published-index') }}">@lang('新着脚本をもっと見る')</a>
            </div>
        </li>
        <li>
            <h3>@lang('脚本家への指針クイズ')</h3>
            <p>
                <span>@lang('messages.what_is_advice_quiz')</span>
                <a href="{{ route('scenario.quiz-index') }}">@lang('指針クイズで遊ぶ')</a>
            </p>
        </li>
        <li>
            <h3>@lang('Androidアプリのご紹介')</h3>
            <p class="inline_block_wrapper">
                <span>@lang('messages.now_on_display_app')</span>
                <a href="{{ config('define.app_url.android') }}">@lang('Google Play を開く')</a>
            </p>
        </li>
        <li>
            <h4>@lang('旧脚本サイト')</h4>
            @lang('旧サイトをご利用の方は:linkからどうぞ。', ['link' => $oldSiteLink])
        </li>
    </ul>
@endsection
