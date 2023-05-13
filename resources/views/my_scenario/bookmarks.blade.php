<?php
$bodyClass = 'my_scenario-bookmarks';
$bookmarks = Auth::user()->bookmarkScenarios;
?>
@extends('layouts.layout')

@section('title', __('ブックマーク一覧'))

@section('body_class', $bodyClass)

@section('bread')
<li><a href="{{ route('top.index') }}">@lang('TOP')</a></li>
<li><a href="{{ route('my-scenario.index') }}">@lang('マイページ')</a></li>
<li>@lang('ブックマーク一覧')</li>
@endsection

@section('contents')
<h1>@lang('ブックマークした脚本')</h1>
<div class="frame">
    @if($bookmarks->isEmpty())
    <p>@lang('ブックマークした脚本はまだありません。')</p>
    @else
    <ul class="bookmark_scenario_list">
    @foreach($bookmarks as $scenario)
        <li>
            <a href="{{ route('scenario.show', ['scenario' => $scenario->id]) }}">
                [{{ $scenario->id }}]<span class="set_abbr {{ $scenario->set->abbr }}">{{ $scenario->set->abbr }}</span> {{$scenario->title}}
            </a>
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
