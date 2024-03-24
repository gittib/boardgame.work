<?php
$bodyClass = 'scenario-index';
?>
@extends('layouts.layout')

@section('title', __('惨劇脚本一覧'))
@section('canonical_url', route('scenario.index'))

@section('body_class', $bodyClass)

@section('bread')
@include('layouts.bread', ['breads' => [
    __('TOP') => route('top.index'),
    __('脚本一覧') => route('scenario.index'),
]])
@endsection

@section('contents')
<h1>@lang('惨劇脚本一覧')</h1>

<div class="">

{{-- TODO: 検索条件を表示 --}}

    <div class="button_wrapper">
        <p class="button js-narrow_set">@lang('惨劇セットで絞り込む')</p>
    </div>

    <div class="button_wrapper">
        <div class="button js-show_title">@lang('脚本名を表示')</div>
        <div class="button js-hide_title">@lang('脚本名を隠す')</div>
    </div>

    <ul class="scenario_list">
        @forelse($scenarios as $scenario)
        <x-list_item.script :scenario="$scenario" />
        @empty
        <li class="not_found">@lang('該当する脚本はありませんでした。')</li>
        @endforelse
    </ul>

    <x-paginator_link :paginator="$scenarios" />

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
@include('parts.popups.search_scenario')
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
    const res = await openPopup('js-popup-search_scenario');
});
</script>
@endsection
