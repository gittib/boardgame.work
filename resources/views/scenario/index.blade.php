<?php
?>
@extends('layouts.layout')

@section('title', __('惨劇脚本一覧'))

@section('body_class', 'scenario-index')

@section('contents')
<h1>@lang('惨劇脚本一覧')</h1>

<div class="">

    <div class="button_wrapper mt-24">
        <div class="button js-show_title">@lang('脚本名を表示')</div>
        <div class="button js-hide_title">@lang('脚本名を隠す')</div>
    </div>

    <ul class="scenario_list">
        @foreach($scenarios as $scenario)
        <li>
            <div class="id">[{{ $scenario->id }}]</div>
            <div class="set {{ optional($scenario->set)->abbr }}">{{ optional($scenario->set)->abbr }}</div>
            <div class="title">{{ $scenario->title }}</div>
            <div class="writer">@lang('作者：:writer', ['writer' => e(optional($scenario->writer)->name)])</div>
        </li>
        @endforeach
    </ul>

</div>
@endsection

@section('additional_scripts')
<script>
$('.js-show_title').on('click', async () => {
    const {result} = await myConfirm("@lang('脚本名を表示します。よろしいですか？')");
    if (result == 'ok') {
        $('ul.scenario_list .title').show();
        $('.js-hide_title').show();
        $('.js-show_title').hide();
    }
});
$('.js-hide_title').on('click', () => {
    $('ul.scenario_list .title').hide();
    $('.js-hide_title').hide();
    $('.js-show_title').show();
});
</script>
@endsection
