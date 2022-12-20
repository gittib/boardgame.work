<?php
?>
@extends('layouts.layout')

@section('title', __('惨劇脚本 :set', ['set' => $scenario->set->name]))

@section('body_class', 'scenario-show')

@section('contents')
<h1>@lang('惨劇脚本 :set', ['set' => $scenario->set->name])</h1>

<div class="">
    <div class="public_sheet">
        <h2>@lang('公開シート')</h2>
        <table class="summary mx-center">
            <tr>
                <th>@lang('惨劇セット')</th>
                <td>{{ $scenario->set->name }}</td>
            </tr>
            <tr>
                <th>@lang('ループ数')</th>
                <td>@lang(':loopsループ', ['loops' => $scenario->loops])</td>
            </tr>
            <tr>
                <th>@lang('日数')</th>
                <td>@lang(':days日', ['days' => $scenario->days])</td>
            </tr>
        </table>

        <h3>@lang('事件')</h3>
        <table class="incident_list mx-center">
            <tr>
                <th>@lang('日数')</th>
                <th>@lang('事件')</th>
            </tr>
            @for($d = 1 ; $d <= $scenario->days ; $d++)
            <?php $incident = $scenario->incidents->firstWhere('day', $d); ?>
            <tr>
                <td class="day">{{ $d }}</td>
                <td>
                @if(!empty($incident))
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    {{ $incident->publicName }}
                @endif
                </td>
            </tr>
            @endfor
        </table>
    </div>

    <div class="button_wrapper mt-20">
        <div class="button js-show_private_sheet">@lang('非公開シートを表示')</div>
        <div class="button js-hide_private_sheet">@lang('非公開シートを隠す')</div>
    </div>

    <div class="private_sheet">
        <h2>@lang('非公開シート')</h2>
        <div class="character_list_wrapper">
            <table class="character_list">
                <tr>
                    <th>@lang('キャラクター')</th>
                    <th>@lang('役職')</th>
                    <th>@lang('特記')</th>
                </tr>
                @foreach($scenario->characters as $chara)
                <tr>
                    <td class="name">{{ $chara->character->name }}</td>
                    <td class="role">
                        <span>
                            {!! $chara->role->hostility_type_html !!}
                            {!! $chara->role->immortality_html !!}
                            {{ $chara->role->name }}
                        </span>
                    </td>
                    <td class="note">
                        <span>
                            <span>{{ $chara->special_note }}</span>
                            <span>{{ $chara->note }}</span>
                        </span>
                    </td>
                </tr>
                @endforeach
            </table>
        </div>

        <dl>
            <dt>@lang('脚本の特徴')</dt>
            <dd>{!! nl2br(e($scenario->feature ?: __('まだ記載がありません。'))) !!}</dd>
            <dt>@lang('脚本家への指針')</dt>
            <dd>{!! nl2br(e($scenario->advice ?: __('まだ記載がありません。'))) !!}</dd>
        </dl>
    </div>

    @if($scenario->user_id == Auth::id())
    <div class="mt-40">
        <a href="{{ route('my-scenario.edit', ['my_scenario' => $scenario->id]) }}">
            <p class="button">@lang('脚本を編集する')</p>
        </a>
    </div>
    @endif
</div>
@endsection

@section('additional_scripts')
<script>
$('.js-show_private_sheet').on('click', () => {
    if (confirm("@lang('非公開シートを表示します。よろしいですか？')")) {
        $('.private_sheet').show();
        $('.js-hide_private_sheet').show();
        $('.js-show_private_sheet').hide();
    }
});
$('.js-hide_private_sheet').on('click', () => {
    $('.private_sheet').hide();
    $('.js-hide_private_sheet').hide();
    $('.js-show_private_sheet').show();
});
</script>
@endsection
