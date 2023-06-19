<?php
$bodyClass = 'scenario-index is_quiz';
?>
@extends('layouts.layout')

@section('title', __('惨劇脚本一覧'))
@section('canonical_url', route('scenario.index'))

@section('body_class', $bodyClass)

@section('bread')
<li><a href="{{ route('top.index') }}">@lang('TOP')</a></li>
<li>@lang('指針クイズ一覧')</li>
@endsection

@section('contents')
<h1>@lang('脚本家への指針クイズ一覧')</h1>
<div class="what_is_this">
    <p class="title">@lang('脚本家への指針クイズとは？')</p>
    <p>
        @lang('messages.what_is_advice_quiz')
        @lang('messages.what_is_advice_quiz_more')
    </p>
</div>

<div class="">

    <div class="button_wrapper">
        <p class="button js-narrow_set">@lang('惨劇セットで絞り込む')</p>
    </div>

    <ul class="scenario_list">
        @forelse($scenarios as $scenario)
        <li>
            <div class="row id_wrapper">
                <a href="{{ route('scenario.show', ['scenario' => $scenario->id])}}">
                    @lang('指針クイズ')[{{ $scenario->id }}]
                </a>
                <span class="writer">@lang('作者：:writer', ['writer' => e($scenario->writer?->name)])</span>
            </div>
            <div class="row summary_wrapper">
                <span class="abbr_wrapper">
                    <span class="set_abbr {{ $scenario->set?->abbr }}">{{ $scenario->set?->abbr }}</span>
                </span>
                <span class="loop_day_summary">@lang('messages.loop_day_summary', ['loops' => $scenario->loops, 'days' => $scenario->days])</span>
                <span class="like">
                    @if($scenario->likes->contains(Auth::id()))
                    <img src="{{ Res::ver('/images/red_heart.png') }}">
                    @else
                    <img src="{{ Res::ver('/images/heart.png') }}">
                    @endif
                    <span class="like_count">
                    @if($scenario->likes->isNotEmpty())
                        {{ $scenario->likes->count() }}
                    @endif
                    </span>
                </span>
            </div>
        </li>
        @empty
        <li class="not_found">@lang('該当する脚本はありませんでした。')</li>
        @endforelse
    </ul>

    @include('parts.paginator', ['items' => $scenarios])

</div>
<div style="display:none;">
    <form id="narrow_form">
        {{ Form::hidden('page', 1) }}
        {{ Form::hidden('set') }}
    </form>
</div>
@endsection

@section('popups')
@include('parts.popups.select_set')
@endsection

@section('additional_scripts')
<script>
$('.js-narrow_set').on('click', async () => {
    const res = await openPopup('js-popup-select_set');
    if (res.result == 'ok') {
        $('[name=set]').val(res.info);
        $('#narrow_form').submit();
    }
});
</script>
@endsection
