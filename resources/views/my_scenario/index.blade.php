<?php
$bodyClass = 'my_scenario-index';
?>
@extends('layouts.layout')

@section('title', __('マイページ'))

@section('body_class', $bodyClass)

@section('bread')
<li><a href="{{ route('top.index') }}">@lang('TOP')</a></li>
<li>@lang('マイページ')</li>
@endsection

@section('contents')
<h1>@lang('マイページ')</h1>
<ul class="links_wrapper">
    <li><a href="{{ route('my-scenario.bookmarks') }}">@lang('ブックマーク一覧')</a></li>
</ul>

<div class="header_console button_wrapper mt-32 mb-32">
    <div class="button js-create_scenario_button" data-scenario_create_url="{{ route('my-scenario.create', ['set' => '___SET___']) }}">
        @lang('脚本作成開始')
    </div>
</div>

<ul class="my_scenario_list">
@foreach($scenarios as $scenario)
    <li>
        <a href="{{ route('scenario.show', ['scenario' => $scenario->id]) }}">
            [{{ $scenario->id }}]<span class="set_abbr {{ $scenario->set->abbr }}">{{ $scenario->set->abbr }}</span>
            @if($scenario->is_quiz) <span class="quiz">Q</span> @endif
            {{$scenario->title}}
        </a>
        @if($scenario->is_open)
            <span class="open">@lang('公開中')</span>
        @endif
        <span class="like">
            @if($scenario->likes->contains(Auth::id()))
            <img src="{{ Res::ver('/images/red_heart.png') }}">
            @else
            <img src="{{ Res::ver('/images/heart.png') }}">
            @endif
            {{ $scenario->likes->count() }}
        </span>
    </li>
@endforeach
</ul>

<form action="{{ route('my-scenario.store_from_json') }}" enctype="multipart/form-data" method="post" class="mt-50">
    @csrf
    @lang('ペンスキーの惨劇RoopeR脚本部屋から自作脚本データを登録')<br>
    <input type="file" name="scenario_json">
    <input type="submit" value="@lang('脚本データを送信')" class="button">
</form>

<div class="button_wrapper mt-40 mb-40">
    <div class="button mx-center js-logout_button" data-url="{{ route('auth.logout') }}" data-message="@lang('ログアウトします。よろしいですか？')">@lang('ログアウト')</div>
</div>
@endsection

@section('popups')
@include('parts.popups.select_set')
@endsection

@section('additional_scripts')
<script>
const scenarioCreateUrl = $('[data-scenario_create_url]').attr('data-scenario_create_url');
$('.js-create_scenario_button').on('click', async () => {
    const res = await openPopup('js-popup-select_set');
    if (res.result == 'ok' && res.info) {
        location.href = scenarioCreateUrl.replace('___SET___', res.info);
    }
});

$('.js-logout_button[data-message][data-url]').on('click', async function() {
    const $self = $(this);
    const res = await myConfirm($self.attr('data-message'));
    if (res.result == 'ok') {
        location.href = $self.attr('data-url');
    }
});
</script>
@endsection
