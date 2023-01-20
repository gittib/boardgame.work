<?php
?>
@extends('layouts.layout')

@section('title', __('マイページ'))

@section('body_class', 'user-mypage')

@section('bread')
<li><a href="{{ route('top.index') }}">@lang('TOP')</a></li>
<li>@lang('マイページ')</li>
@endsection

@section('contents')
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
            @if($scenario->is_open)
                <span class="open">@lang('公開中')</span>
            @endif
        </li>
    @endforeach
    </ul>

    <form action="{{ route('my-scenario.store_from_json') }}" enctype="multipart/form-data" method="post" class="mt-60">
        @csrf
        @lang('ペンスキーの惨劇RoopeR脚本部屋から自作脚本データを登録')
        <input type="file" name="scenario_json">
        <input type="submit" value="@lang('脚本データを送信')" class="button">
    </form>

    <div class="button_wrapper mt-40 mb-40">
        <div class="button mx-center js-logout_button" data-url="{{ route('auth.logout') }}" data-message="@lang('ログアウトします。よろしいですか？')">@lang('ログアウト')</div>
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
$('.js-logout_button[data-message][data-url]').on('click', async function() {
    const $self = $(this);
    const res = await myConfirm($self.attr('data-message'));
    if (res.result == 'ok') {
        location.href = $self.attr('data-url');
    }
});
</script>
@endsection
