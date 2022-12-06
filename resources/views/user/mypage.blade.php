<?php
$sets = $sets->mapWithKeys(fn($s) => [$s->abbr => $s->name]);
?>
@extends('layouts.layout')

@section('title', __('マイページ'))

@section('contents')
    <a href="{{ route('tragedy-set.index') }}">惨劇セット一覧</a>

    <form action="{{ route('my-scenario.create') }}">
        <div class="select_wrapper">
            {{ Form::select('set', $sets) }}
        </div>

        <div class="button_wrapper">
            <div class="button submit_button">
                @lang('脚本作成開始')
            </div>
        </div>
    </form>
@endsection
