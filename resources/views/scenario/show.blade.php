<?php
$isPreview ??= false;
?>
@extends('layouts.layout')

@section('title', $isPreview ? __('プレビュー') : __('惨劇脚本 :set', ['set' => $scenario->set->name]))

@section('body_class', 'scenario-show')

@section('bread')
<li><a href="{{ route('top.index') }}">@lang('TOP')</a></li>
<li><a href="{{ route('scenario.index') }}">@lang('脚本一覧')</a></li>
<li>@lang('惨劇脚本 :set', ['set' => $scenario->set->name])</li>
@endsection

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

        <h3 class="mt-20">@lang('特殊ルール')</h3>
        <div class="special_rule_wrapper">
            {!! nl2br(e($scenario->special_rule ?? __('特になし'))) !!}
        </div>

        <h3 class="mt-20">@lang('事件')</h3>
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

    <div class="button_wrapper private_toggle_button_wrapper">
        <div class="button js-show_private_sheet">@lang('非公開シートを表示')</div>
        <div class="button js-hide_private_sheet">@lang('非公開シートを隠す')</div>
    </div>

    <div class="private_sheet_wrapper">
        <h2>@lang('非公開シート')</h2>

        <div class="writer_wrapper">

            @if(!empty($scenario->writer))
            <div class="writer">@lang('作者： :writer', ['writer' => e($scenario->writer->name)])</div>
            @endif

            <div class="private_sheet">

                <h3 class="scenario_title">{{ $scenario->title }}</h3>
                <div class="difficulty">@lang('難易度')：<span class="difficult_name">{{ $scenario->difficultName }}</span>{{ $scenario->difficultStar }}</div>

                <table class="summary mx-center mt-16 mb-16">
                    <tr>
                        <th>@lang('ルールY')</th>
                        <td>{{ $scenario->ruleY->name }}</td>
                    </tr>
                    <tr>
                        <th>@lang('ルールX1')</th>
                        <td>{{ $scenario->ruleX1->name }}</td>
                    </tr>
                    @if($scenario->set->hasRuleX2)
                    <tr>
                        <th>@lang('ルールX2')</th>
                        <td>{{ $scenario->ruleX2->name }}</td>
                    </tr>
                    @endif
                </table>

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
                            <td class="role @if(!$chara->role->isPerson) not-person @endif">
                                <span>
                                    {!! $chara->role->hostility_type_html !!}
                                    {!! $chara->role->immortality_html !!}
                                    {!! str_replace('／', '<br>／', e($chara->role->name)) !!}
                                </span>
                            </td>
                            <td class="note">
                                <span>{{ $chara->note }}</span>
                            </td>
                        </tr>
                        @endforeach
                    </table>
                </div>

                <div class="incident_list_wrapper mt-16">
                    <table class="incident_list mx-center">
                        <tr>
                            <th>@lang('日数')</th>
                            <th>@lang('事件')</th>
                            <th>@lang('犯人')</th>
                        </tr>
                        @foreach($scenario->incidents as $incident)
                        <tr>
                            <td class="day">{{ $incident->day }}</td>
                            <td class="name">{{ $incident->name }}</td>
                            <td class="criminal">{{ $incident->criminal_name_str }}</td>
                        </tr>
                        @endforeach
                    </table>
                </div>
            </div>
        </div>

        <dl>
            <dt>@lang('脚本の特徴')</dt>
            <dd>{!! nl2br(e($scenario->feature ?: __('まだ記載がありません。'))) !!}</dd>
            <dt>@lang('脚本家への指針')</dt>
            <dd>{!! nl2br(e($scenario->advice ?: __('まだ記載がありません。'))) !!}</dd>
        </dl>
    </div>

    <div class="mt-40 mb-40">
        @if(!$isPreview && $scenario->user_id == Auth::id())
        <a href="{{ route('my-scenario.edit', ['my_scenario' => $scenario->id]) }}">
            <p class="button">@lang('脚本を編集する')</p>
        </a>
        @endif
    </div>
</div>

@if($isPreview)
<div class="preview_close">
    <p onclick="window.close();">@lang('プレビューを閉じる')</p>
</div>
@endif

@endsection

@section('additional_scripts')
<script>
$('.js-show_private_sheet').on('click', async () => {
    const {result} = await myConfirm("@lang('非公開シートを表示します。<br>よろしいですか？')");
    if (result == 'ok') {
        $('.private_sheet_wrapper').show();
        $('.js-hide_private_sheet').show();
        $('.js-show_private_sheet').hide();
    }
});
$('.js-hide_private_sheet').on('click', () => {
    $('.private_sheet_wrapper').hide();
    $('.js-hide_private_sheet').hide();
    $('.js-show_private_sheet').show();
});

@if($isPreview)
$('a').attr('href', 'javascript:void(0);');
@endif
</script>
@endsection
