<?php
$app_link = '<a href="'.config('define.app_url.android').'">'.__('惨劇RoopeR アプリ').'</a>';
$auther_link = '<a href="'.config('define.auther.url').'">'.__(config('define.auther.name')).'</a>';
?>
@extends('layouts.layout')

@section('body_class', 'top-privacy')

@section('contents')
    <h1>@lang('惨劇RoopeRアプリ') @lang('プライバシーポリシー')</h1>
    <div>@lang('このページは、:app_linkについてのプライバシーポリシーです。', compact('app_link'))</div>
    <ol>
        <li>@lang('惨劇RoopeR アプリ(以下、「本アプリ」)は、BakaFire Party のボードゲーム「惨劇RoopeR」のファンアプリです。')</li>
        <li>@lang('本アプリでは、利用者の個人情報は特に求められません。')</li>
        <li>@lang('利用者が入力したテキスト情報をアプリ内に保存する機能はありますが、保存された情報がネットワークにアップロードされることはありません。また、個人情報やそれに類する情報の入力が想定される入力欄は存在しません。')</li>
        <li>@lang('Push通知や広告なども一切配信されないため、端末を特定する情報も収集、保持することはありません。')</li>
        <li>@lang('本アプリについての問い合わせは、開発者である:auther_linkまでお願いいたします。<br>BakaFire Partyへ、本アプリについて問い合わせる事はできません。', compact('auther_link'))</li>
    </ol>
@endsection
