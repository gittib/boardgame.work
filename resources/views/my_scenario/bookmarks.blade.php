<?php
assert(!empty($bookmarks));
$bodyClass = 'my_scenario-bookmarks';
?>
@extends('layouts.layout')

@section('title', __('ブックマーク一覧'))

@section('body_class', $bodyClass)

@section('bread')
@include('layouts.bread', ['breads' => [
    __('TOP') => route('top.index'),
    __('マイページ') => route('my-scenario.index'),
    __('ブックマーク一覧') => route('my-scenario.bookmarks'),
]])
@endsection

@section('contents')
<h1>@lang('ブックマークした脚本')</h1>
<div class="frame">
    @if($bookmarks->isEmpty())
    <p class="no_bookmarks">@lang('ブックマークした脚本はまだありません。')</p>
    @endif
    <ul class="bookmark_scenario_list">
    @foreach($bookmarks as $scenario)
        <x-list_item.script showTitle=true :scenario="$scenario" />
    @endforeach
    </ul>

    <x-paginator_link :paginator="$bookmarks" />
</div>
@endsection

@section('popups')
@endsection

@section('additional_scripts')
@endsection
