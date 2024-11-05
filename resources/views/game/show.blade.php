<?php
$bodyClass = 'game-show';
?>
@extends('layouts.layout')

@section('viewport_width', '1280px')
@section('title', __("ゲーム :game", ['game' => $game->id]))
@section('canonical_url', $game->url)

@section('body_class', $bodyClass)

@section('bread')
@include('layouts.bread', compact('breads'))
@endsection

@section('contents')
<div class="game_wrapper">
    <div class="board_wrapper">
        <img class="board hospital" src="/images/tragedy_commons_5th/board/hospital.png">
        <img class="board shrine" src="/images/tragedy_commons_5th/board/shrine.png">
        <img class="data_board" src="/images/tragedy_commons_5th/board/data.png">
        <img class="board city" src="/images/tragedy_commons_5th/board/city.png">
        <img class="board school" src="/images/tragedy_commons_5th/board/school.png">
    </div>
</div>
@endsection

@section('popups')
@endsection

@section('additional_scripts')
@endsection