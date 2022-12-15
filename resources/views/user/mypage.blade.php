<?php
?>
@extends('layouts.layout')

@section('title', __('マイページ'))

@section('contents')
    <a href="{{ route('tragedy-set.index') }}">惨劇セット一覧</a>

    <div class="button_wrapper">
        <div class="button js-create_scenario_button">
            @lang('脚本作成開始')
        </div>
    </div>
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
