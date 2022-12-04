<?php
?>
@extends('layouts.layout')

@section('title', __('惨劇脚本 :set', ['set' => $scenario->set->name]))

@section('contents')
<h2>@lang('惨劇脚本 :set', ['set' => $scenario->set->name])</h2>

<div class="">
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
    <table>
        @foreach($scenario->characters as $chara)
        <tr>
            <td>{{ $chara->character->name }}</td>
            <td>{{ $chara->role->name }}</td>
        </tr>
        @endforeach
    </table>
</div>
@endsection

@section('additional_scripts')
@endsection
