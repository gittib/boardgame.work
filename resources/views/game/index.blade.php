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
@if(!empty($subPageLinks))
<p>下層ページリンク</p>
<ul>
    @foreach($subPageLinks as $label => $url)
    <li>
        <a href="{{ $url }}">{{ $label }}</a>
    </li>
    @endforeach
</ul>
@endif

<h2>ゲーム一覧</h2>
<ul>
@foreach($games as $game)
<li>
    <a href="{{ $game->url }}">
    Game[{{$game->id}}]
    開始日時：{{ $game->started_at ?? $game->created_at }}
    </a>
</li>
@endforeach
</ul>
@endsection

@section('popups')
@endsection

@section('additional_scripts')
@endsection
