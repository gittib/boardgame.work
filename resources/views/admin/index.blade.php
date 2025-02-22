<?php
$bodyClass = 'admin-index';
?>
@extends('layouts.layout')

@section('title', '管理画面TOP')

@section('body_class', $bodyClass)

@push('stack_headers')
<style>
.admin-index .top_menu > li {
    margin-top: 1em;
}
.admin-index .top_menu .last_updated_scenario {
    display: flex;
    flex-wrap: wrap;
    column-gap: 6px;
    border: solid 1px;
    padding: 4px;
}
</style>
@endpush

@section('contents')
<h1>管理画面TOP</h1>

<ul class="top_menu">
    <li>
        <a href="{{ route('admin.scenario.updated') }}">
            <p>脚本更新状況</p>
            @if(!empty($scenario))
            <div class="last_updated_scenario">
                <p>[{{ $scenario->id }}]</p>
                <p>{{ $scenario->set->abbr }}</p>
                <p>{{ $scenario->writer?->name }}</p>
                <p>更新：{{ $scenario->updated_at->format('Y/m/d H:i:s') }}</p>
                <p>作成：{{ $scenario->created_at->format('Y/m/d H:i:s') }}</p>
            </div>
            @endif
        </a>
    </li>
</ul>
@endsection

@section('additional_scripts')
@endsection
