<?php
$bodyClass = 'game-show';
?>
@extends('layouts.layout')

@section('viewport_width', '640px')
@section('title', __("ゲーム :game", ['game' => $game->id]))
@section('canonical_url', $game->url)

@section('body_class', $bodyClass)

@section('bread')
@include('layouts.bread', compact('breads'))
@endsection

@section('contents')
game.show
<div style="width: 100%; height: 50px; background-color: blue;"></div>
@endsection

@section('popups')
@endsection

@section('additional_scripts')
@endsection
