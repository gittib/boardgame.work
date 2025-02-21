<?php
$bodyClass = 'admin-scenario-updated';
?>
@extends('layouts.layout')

@section('title', '脚本更新状況')

@section('body_class', $bodyClass)

@section('contents')
<h1>脚本更新状況</h1>

<div class="">
    <ul class="scenario_list">
        @foreach($scenarios as $scenario)
        <li>
            <p>[{{ $scenario->id }}]</p>
            <p>{{ $scenario->set->abbr }}</p>
            <p>{{ $scenario->writer?->name }}</p>
            <p>更新：{{ $scenario->updated_at->format('Y/m/d H:i:s') }}</p>
            <p>作成：{{ $scenario->created_at->format('Y/m/d H:i:s') }}</p>
        </li>
        @endforeach
    </ul>
</div>
@endsection

@section('additional_scripts')
@endsection
