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
$('.js-create_scenario_button').on('click', () => {
    openPopup('js-popup-select_set');
});
</script>
@endsection
