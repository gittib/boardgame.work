<?php
$bodyClass = 'scenario-index';
?>
@extends('layouts.layout')

@section('title', __('惨劇脚本一覧'))
@section('canonical_url', route('scenario.index'))

@section('body_class', $bodyClass)

@section('bread')
<li><a href="{{ route('top.index') }}">@lang('TOP')</a></li>
<li>@lang('脚本一覧')</li>
@endsection

@section('contents')
<h1>@lang('惨劇脚本一覧')</h1>

<div class="">

<!-- TODO: 検索条件を表示 -->

    <div class="button_wrapper">
        <p class="button js-narrow_set">@lang('惨劇セットで絞り込む')</p>
    </div>

    <div class="button_wrapper">
        <div class="button js-show_title">@lang('脚本名を表示')</div>
        <div class="button js-hide_title">@lang('脚本名を隠す')</div>
    </div>

    <ul class="scenario_list">
        @foreach($scenarios as $scenario)
        <li>
            <div class="row id_wrapper">
                <a href="{{ route('scenario.show', ['scenario' => $scenario->id])}}">
                    @lang('脚本')[{{ $scenario->id }}]
                </a>
                <span class="writer">@lang('作者：:writer', ['writer' => e($scenario->writer?->name)])</span>
            </div>
            <div class="title">
                <a href="{{ route('scenario.show', ['scenario' => $scenario->id])}}">
                    {{ $scenario->title }}
                </a>
            </div>
            <div class="row summary_wrapper">
                <span class="abbr_wrapper">
                    <span class="set_abbr {{ $scenario->set?->abbr }}">{{ $scenario->set?->abbr }}</span>
                </span>
                <span class="loop_day_summary">@lang('messages.loop_day_summary', ['loops' => $scenario->loops, 'days' => $scenario->days])</span>
                <span class="difficult">@lang('難易度'):<span class="difficult_name">{{ $scenario->difficult_name }}</span> {{ $scenario->difficult_star }}</span>
                <span class="like">
                    @if($scenario->likes->contains(Auth::id()))
                    <img src="{{ Res::ver('/images/red_heart.png') }}">
                    @else
                    <img src="{{ Res::ver('/images/heart.png') }}">
                    @endif
                    {{ $scenario->likes->count() }}
                </span>
            </div>
        </li>
        @endforeach
    </ul>

    @include('parts.paginator', ['items' => $scenarios])

</div>
<div style="display:none;">
    <p id="js-show_title_confirm_message">@lang('脚本名を見るとネタバレになるかも知れませんが、表示してもよろしいですか？')</p>
    <form id="narrow_form">
        {{ Form::hidden('page', 1) }}
        {{ Form::hidden('set_abbr') }}
    </form>
</div>
@endsection

@section('popups')
@include('parts.popups.select_set')
@endsection

@section('additional_scripts')
<script>
$('.js-show_title').on('click', async () => {
    const {result} = await myConfirm($('#js-show_title_confirm_message').html());
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
$('.js-narrow_set').on('click', async () => {
    const res = await openPopup('js-popup-select_set');
    $('[name=set_abbr]').val(res.info);
    $('#narrow_form').submit();
});
</script>
@endsection
