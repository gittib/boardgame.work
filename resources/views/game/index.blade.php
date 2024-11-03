<?php
$bodyClass = 'game-index';
$title ??= __("ゲーム一覧");
?>
@extends('layouts.layout')

@section('title', $title)
@if(!empty($canonicalUrl))
@section('canonical_url', $canonicalUrl)
@endif

@section('body_class', $bodyClass)

@section('bread')
@include('layouts.bread', compact('breads'))
@endsection

@section('contents')
game.index
@endsection

@section('popups')
@endsection

@section('additional_scripts')
@endsection
