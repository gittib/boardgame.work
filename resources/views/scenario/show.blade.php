<?php
?>
@extends('layouts.layout')

@section('title', __('惨劇脚本 :set', ['set' => $scenario->set->name]))

@section('body_class', 'scenario-show')

@section('contents')
<h1>@lang('惨劇脚本 :set', ['set' => $scenario->set->name])</h1>

<div class="">
    <div class="public_sheet">
        <h2>@lang('公開シート')</h2>
        <table>
            <tr>
                <th>@lang('惨劇セット')</th>
                <td>{{ $scenario->set->name }}</td>
            </tr>
            <tr>
                <th>@lang('ループ数')</th>
                <td>@lang(':loopsループ', ['loops' => $scenario->loops])</td>
            </tr>
            <tr>
                <th>@lang('日数')</th>
                <td>@lang(':days日', ['days' => $scenario->days])</td>
            </tr>
        </table>
    </div>

    <div class="button_wrapper">
        <div class="button">@lang('非公開シートを表示')</div>
    </div>

    <div class="private_sheet">
        <h2>@lang('非公開シート')</h2>
        <table>
            <tr>
                <th>@lang('キャラクター')</th>
                <th>@lang('役職')</th>
                <th>@lang('特記')</th>
            </tr>
            @foreach($scenario->characters as $chara)
            <tr>
                <td>{{ $chara->character->name }}</td>
                <td>{{ $chara->role->name }}</td>
                <td>
                    <span>{{ $chara->special_note }}</span>
                    <span>{{ $chara->note }}</span>
                </td>
            </tr>
            @endforeach
        </table>
    </div>
</div>
@endsection

@section('additional_scripts')
@endsection
