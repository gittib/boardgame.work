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
            <p>{{ $scenario->created_at->format('Y/m/d H:i:s') }} 作成</p>
            <p>{{ $scenario->updated_at->format('Y/m/d H:i:s') }} 更新</p>
            <p>{{ $scenario->writer?->name }}</p>
        </li>
        @endforeach
    </ul>
</div>
@endsection

@section('additional_scripts')
@endsection
