<?php
?>
@extends('layouts.layout')

@section('title', __('マイページ'))

@section('body_class', 'user-mypage')

@section('contents')
    <a href="{{ route('top.index') }}">TOPページ</a><br>

    <div class="header_console button_wrapper">
        <div class="button js-create_scenario_button">
            @lang('脚本作成開始')
        </div>
    </div>

    <ul class="my_scenario_list">
    @foreach(Auth::user()->scenarios as $scenario)
        <li>
            <a href="{{ route('scenario.show', ['scenario' => $scenario->id]) }}">
                [{{ $scenario->id }}]<span class="set_abbr {{ $scenario->set->abbr }}">{{ $scenario->set->abbr }}</span> {{$scenario->title}}
            </a>
        </li>
    @endforeach
    </ul>
@endsection

@section('popups')
@include('parts.popups.select_set')
@endsection

@section('additional_scripts')
<script>
const scenarioCreateUrl = "{{ route('my-scenario.create', ['set' => '___SET___']) }}";
$('.js-create_scenario_button').on('click', async () => {
    const res = await openPopup('js-popup-select_set');
    if (res.result == 'ok' && res.info) {
        location.href = scenarioCreateUrl.replace('___SET___', res.info);
    }
});
</script>
@endsection
