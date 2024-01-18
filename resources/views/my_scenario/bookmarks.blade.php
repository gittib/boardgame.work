<?php
$bodyClass = 'my_scenario-bookmarks';
$bookmarks = Auth::user()->bookmarkScenarios;
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
    @else
    <ul class="bookmark_scenario_list">
    @foreach($bookmarks as $scenario)
        <li>
            <div class="row id_wrapper">
                <a href="{{ route('scenario.show', ['scenario' => $scenario->id])}}">
                    @lang('脚本')[{{ $scenario->id }}]
                </a>
                <span class="writer">@lang('作者：:writer', ['writer' => e($scenario->writer?->name)])</span>
            </div>
            <div class="title">
                <a href="{{ route('scenario.show', ['scenario' => $scenario->id])}}">
                    {{ $scenario->title }}
                </a>
            </div>
            <div class="row summary_wrapper">
                <span class="abbr_wrapper">
                    <span class="set_abbr {{ $scenario->set?->abbr }}">{{ $scenario->set?->abbr }}</span>
                </span>
                <span class="loop_day_summary">@lang('messages.loop_day_summary', ['loops' => $scenario->loops, 'days' => $scenario->days])</span>
                <span class="difficult">@lang('難易度'):<span class="difficult_name">{{ $scenario->difficult_name }}</span> {{ $scenario->difficult_star }}</span>
                @if($scenario->likes->isNotEmpty())
                <span class="like">
                    @if($scenario->likes->contains(Auth::id()))
                    <img src="{{ Res::ver('/images/red_heart.png') }}">
                    @else
                    <img src="{{ Res::ver('/images/heart.png') }}">
                    @endif
                    {{ $scenario->likes->count() }}
                </span>
                @endif
            </div>
        </li>
    @endforeach
    </ul>
</div>
@endif
@endsection

@section('popups')
@endsection

@section('additional_scripts')
@endsection
