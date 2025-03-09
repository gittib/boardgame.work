<?php
$bodyClass = 'scenario-index';
?>
@extends('layouts.layout')

@section('title', __('惨劇脚本一覧'))
@section('canonical_url', $canonicalUrl ?? route('scenario.index'))

@section('body_class', $bodyClass)

@section('bread')
<x-breadcrumbs :pageType=\App\Enums\PageType::ScenarioList />
@endsection

@section('contents')
<h1>@lang('惨劇脚本一覧')</h1>

<div class="">

    <x-search_scenario_button />

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

    <x-search_scenario_button />

    <x-paginator_link :paginator="$scenarios" />

</div>
<div style="display:none;">
    <p id="js-show_title_confirm_message">@lang('脚本名を見るとネタバレになるかも知れませんが、表示してもよろしいですか？')</p>
    <form id="narrow_form">
        {{ html()->hidden()->name('page')->value(1) }}
        {{ html()->hidden()->name('set_abbr') }}
    </form>
</div>
<x-scenario_spoiler_alert />
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
</script>
@endsection
