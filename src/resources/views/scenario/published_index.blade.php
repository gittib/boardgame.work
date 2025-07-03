<?php
$bodyClass = 'scenario-index is_new';
?>
@extends('layouts.layout')

@section('title', __('新着脚本一覧'))
@section('canonical_url', $canonicalUrl)

@section('body_class', $bodyClass)

@section('bread')
<x-breadcrumbs :pageType=\App\Enums\PageType::PublishedScenarioList />
@endsection

@section('contents')
<h1>@lang('新着脚本一覧')</h1>
<div class="what_is_this">
    <p>
        @lang('最近公開された脚本を公開された順に表示しています。')
    </p>
</div>

<div class="">
    <ul class="scenario_list">
        @forelse($scenarios as $scenario)
        <x-list_item.script :type="$scenario->is_quiz ? '指針クイズ' : '脚本'" :scenario="$scenario" />
        @empty
        <li class="not_found">@lang('該当する脚本はありませんでした。')</li>
        @endforelse
    </ul>
</div>
<div style="display:none;">
    <form id="narrow_form">
        {{ html()->hidden()->name('page')->value(1) }}
        {{ html()->hidden()->name('set') }}
    </form>
</div>
@endsection

@section('popups')
@include('parts.popups.select_set')
@endsection

@section('additional_scripts')
<x-update_last_list :pageType=\App\Enums\PageType::PublishedScenarioList />
@endsection
