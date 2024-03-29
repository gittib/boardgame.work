<?php
$trLink = '<a href="'.__('messages.official_url').'" target="_blank">'.__('惨劇RoopeR').'</a>';
$oldSiteLink = '<a href="http://www.boardgame.work/sangeki/" target="_blank">'.__('こちら').'</a>';
?>
@extends('layouts.layout')

@section('body_class', 'top-index')

@section('contents')
    <h1>@lang('惨劇RoopeR脚本データベース')</h1>
    <p class="inline_block_wrapper">@lang('messages.what_is_this', ['trlink' => $trLink])</p>
    <ul class="top_menu">
        <li><a href="{{ route('scenario.index') }}">@lang('脚本一覧')</a></li>
        <li><a href="{{ route('my_page') }}">@lang('脚本を作る')</a></li>
        <li>
            <h3>@lang('脚本家への指針クイズ')</h3>
            <p>
                @lang('messages.what_is_advice_quiz')<br>
                <a href="{{ route('scenario.quiz-index') }}">@lang('指針クイズで遊ぶ')</a>
            </p>
        </li>
        <li>
            <h3>@lang('Androidアプリのご紹介')</h3>
            <p class="inline_block_wrapper">
                @lang('messages.now_on_display_app')<br>
                <a href="{{ config('define.app_url.android') }}">@lang('Google Play を開く')</a>
            </p>
        </li>
        <li>
            <h4>@lang('旧脚本サイト')</h4>
            @lang('旧サイトをご利用の方は:linkからどうぞ。', ['link' => $oldSiteLink])
        </li>
    </ul>
@endsection
