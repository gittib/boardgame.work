<?php
$bodyClass = 'scenario-index is_quiz';
?>
@extends('layouts.layout')

@section('title', __('脚本家への指針クイズ一覧'))
@section('canonical_url', route('scenario.index'))

@section('body_class', $bodyClass)

@section('bread')
@include('layouts.bread', ['breads' => [
    __('TOP') => route('top.index'),
    __('指針クイズ一覧') => route('scenario.quiz-index'),
]])
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
        <x-list_item.script withTitle=false withDifficult=false :scenario="$scenario" />
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
