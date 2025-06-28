<?php
$bodyClass = 'my_scenario-index';
?>
@extends('layouts.layout')

@section('title', __('マイページ'))

@section('body_class', $bodyClass)

@section('bread')
<x-breadcrumbs :pageType=\App\Enums\PageType::MyPage />
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
    <x-list_item.script isMyPage=true :scenario="$scenario" />
@endforeach
</ul>
<x-paginator_link :paginator="$scenarios" />

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
<x-update_last_list :pageType=\App\Enums\PageType::MyPage />
@endsection
