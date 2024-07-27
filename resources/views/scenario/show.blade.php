<?php
$isPreview ??= false;
$isQuiz ??= $scenario->is_quiz;
$bodyClass = 'scenario-show';

$charasInBoard = [
    1001 => [],
    1002 => [],
    1003 => [],
    1004 => [],
    1099 => [],
];

if (!$isPreview) {
    $thisUrl = route('scenario.show', ['scenario' => $scenario->id]);
} else {
    $thisUrl = route('my-scenario.preview');
}
?>
@extends('layouts.layout')

@section('title', $isPreview ? __('プレビュー') : __('惨劇脚本 :set', ['set' => $scenario->setName]))

@section('body_class', $bodyClass)

@section('bread')
@if($isQuiz)
@include('layouts.bread', ['breads' => [
    __('TOP') => route('top.index'),
    __('指針クイズ一覧') => route('scenario.quiz-index'),
    __('惨劇脚本 :set', ['set' => $scenario->setName]) => $thisUrl,
]])
@else
@include('layouts.bread', ['breads' => [
    __('TOP') => route('top.index'),
    __('脚本一覧') => route('scenario.index'),
    __('惨劇脚本 :set', ['set' => $scenario->setName]) => $thisUrl,
]])
@endif
@endsection

@section('contents')
<div class="title_wrapper">
    <h1>@lang('惨劇脚本 :set', ['set' => $scenario->setName])</h1>

    @if(!empty($scenario->set->summary_qr_url))
    <div class="summary_qr">
        <div class="img_wrapper">
            <img src="{{ $scenario->set->summary_qr_url }}">
        </div>
        <span>Summary</span>
    </div>
    @endif
</div>

<div class="@if($isQuiz) scenario_quiz @endif">
    <div class="font_size_adjust">
        <input class="js-font_size_adjust" type="range" min=10 max=100 value=16>
        <button class="close">✕</button>
    </div>

    <div class="public_sheet">
        <h2>@lang('公開シート')</h2>
        <table class="summary mx-center">
            <tr>
                <th>@lang('惨劇セット')</th>
                <td>{{ $scenario->setName }}</td>
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

        <div class="incident_list_wrapper">
            <h3 class="mt-20">@lang('事件')</h3>
            <table class="incident_list mx-center">
                <tr>
                    <th>@lang('日付')</th>
                    <th>@lang('事件予定')</th>
                </tr>
                @for($d = 1 ; $d <= $scenario->days ; $d++)
                <?php $incident = $scenario->incidents->firstWhere('day', $d); ?>
                <tr>
                    <td class="day">{{ $d }}</td>
                    <td class="name">{{ $incident?->publicName ?? '' }}</td>
                </tr>
                @endfor
            </table>

            <a class="incident_explain" href="javascript:void(0)">@lang('事件効果を確認')</a>
        </div>
    </div>

    <div class="button_wrapper private_toggle_button_wrapper">
        <div class="button js-show_private_sheet" data-dialog_message="@lang('非公開シートを表示します。よろしいですか？')">@lang('非公開シートを表示')</div>
        <div class="button js-hide_private_sheet">@lang('非公開シートを隠す')</div>
    </div>

    <div class="private_sheet_wrapper">
        @if(!empty($scenario->invalidConditions))
        <div class="invalid_conditions_wrapper">
            <div>@lang('messages.invalid_conditions')</div>
            <ul>
                @foreach($scenario->invalidConditions as $condition)
                <li>{{ $condition }}</li>
                @endforeach
            </ul>
        </div>
        @endif

        <h2>@lang('非公開シート')</h2>

        <div class="writer_wrapper">

            @if(!empty($scenario->writer))
            <div class="writer">@lang('作者： :writer', ['writer' => e($scenario->writer->name)])</div>
            @endif

            <div class="private_sheet">

                <h3 class="scenario_title"><span>{{ $scenario->title }}</span></h3>
                <div class="difficulty">@lang('難易度')：<span class="difficult_name">{{ $scenario->difficultName }}</span><span>{{ $scenario->difficultStar }}</span></div>

                <table class="summary mx-center mt-16 mb-16">
                    <tr>
                        <th>@lang('ルールY')</th>
                        <td>{{ $scenario->ruleY->name }}</td>
                    </tr>
                    <tr>
                        <th>@lang('ルールX1')</th>
                        <td>
                            <span>{{ $scenario->ruleX1->name }}</span>
                            @if($scenario->ruleX1?->code == 'Crazy-Truth')
                                <span class="crazy_rule_y"><br>({{ $scenario->crazyRuleY?->name }})</span>
                            @endif
                        </td>
                    </tr>
                    @if($scenario->set->hasRuleX2)
                    <tr>
                        <th>@lang('ルールX2')</th>
                        <td>
                            <span>{{ $scenario->ruleX2->name }}</span>
                            @if($scenario->ruleX2?->code == 'Crazy-Truth')
                                <span class="crazy_rule_y"><br>({{ $scenario->crazyRuleY?->name }})</span>
                            @endif
                        </td>
                    </tr>
                    @endif
                </table>

                <div class="character_list_wrapper">
                    <p class="item_name">@lang('登場人物')<span class="people_count">@lang('(:n人)', ['n' => $scenario->characters->count()])</span></p>
                    <table class="character_list">
                        <tr>
                            <th>@lang('人物')</th>
                            <th>@lang('役職')</th>
                            <th>@lang('特記')</th>
                        </tr>
                        @foreach($scenario->characters as $chara)
                        <?php $charasInBoard[$chara->character->initial_board_code][] = $chara->character->name; ?>
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
                                <span>{{ __($chara->note) }}</span>
                            </td>
                        </tr>
                        @endforeach
                    </table>
                </div>

                <div class="incident_list_wrapper">
                    <p class="item_name">@lang('事件一覧')</p>
                    <table class="incident_list mx-center">
                        <tr>
                            <th>@lang('日付')</th>
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

            <div class="initial_board_wrapper">
                <h3>@lang('キャラクター初期配置')</h3>
                <table>
                    <tr>
                        <td><p>@lang('tragedy_master.board_name.1002')</p>
                            <span class="inline_block_wrapper charas_in_board_wrapper">
                            @foreach($charasInBoard[1002] as $charaName)
                                <span>{{ $charaName }}</span>
                            @endforeach
                            </span>
                        </td>
                        <td><p>@lang('tragedy_master.board_name.1001')</p>
                            <span class="inline_block_wrapper charas_in_board_wrapper">
                            @foreach($charasInBoard[1001] as $charaName)
                                <span>{{ $charaName }}</span>
                            @endforeach
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td><p>@lang('tragedy_master.board_name.1003')</p>
                            <span class="inline_block_wrapper charas_in_board_wrapper">
                            @foreach($charasInBoard[1003] as $charaName)
                                <span>{{ $charaName }}</span>
                            @endforeach
                            </span>
                        </td>
                        <td><p>@lang('tragedy_master.board_name.1004')</p>
                            <span class="inline_block_wrapper charas_in_board_wrapper">
                            @foreach($charasInBoard[1004] as $charaName)
                                <span>{{ $charaName }}</span>
                            @endforeach
                            </span>
                        </td>
                    </tr>
                </table>
                @if(!empty($charasInBoard[1099]))
                <div class="others"><p>@lang('tragedy_master.board_name.1099')</p>
                    <span class="inline_block_wrapper charas_in_board_wrapper">
                    @foreach($charasInBoard[1099] as $charaName)
                        <span>{{ $charaName }}</span>
                    @endforeach
                    </span>
                </div>
                @endif
                <a class="hide_initial_board_wrapper" href="javascript:void(0);">@lang('キャラクター初期配置を隠す')</a>
            </div>
            <a class="show_initial_board_wrapper" href="javascript:void(0);">@lang('キャラクター初期配置を表示')</a>
        </div>

        <dl>
            <dt>@lang('脚本の特徴')</dt>
            <dd class="feature"><div>{!! nl2br(e($scenario->feature ?: __('まだ記載がありません。'))) !!}</div></dd>

            @if(!empty($scenario->story))
            <dt>@lang('ストーリー')</dt>
            <dd class="story"><div>{!! nl2br(e($scenario->story)) !!}</div></dd>
            @endif

            <dt>@lang('脚本家への指針')</dt>
            <dd class="advice"><div class="content">{!! nl2br(e($scenario->advice ?: __('まだ記載がありません。'))) !!}</div></dd>
        </dl>
    </div>

    @if(!$isPreview)
    @auth
    <div class="reaction_wrapper">
        <form action="{{ route('scenario.like', $scenario->id) }}" method="post">
            <p class="like_button @if($scenario->likes->contains(Auth::user())) liked @endif">
                <img class="not_liked js-like_button" src="{{ Res::ver('/images/heart.png') }}">
                <img class="liked js-like_button" src="{{ Res::ver('/images/red_heart.png') }}">
                <span class="js-count">{{ $scenario->likes->count() }}</span>
            </p>
        </form>
        <form action="{{ route('scenario.bookmark', $scenario->id) }}" method="post">
            <p class="bookmark_button @if($scenario->bookmarks->contains(Auth::user())) bookmarked @endif">
                <a class="bookmarked js-bookmark_button" href="javascript:void(0);">@lang('ブックマーク済み')</a>
                <a class="not_bookmarked js-bookmark_button" href="javascript:void(0);">@lang('ブックマークする')</a>
            </p>
        </form>
    </div>
    @else
    <div class="reaction_wrapper">
        <p class="like_button js-please_login" data-msg="@lang('いいねをつけるには、まずログインしてください。')">
            <img class="not_liked" src="{{ Res::ver('/images/heart.png') }}">
            <span class="js-count">{{ $scenario->likes->count() }}</span>
        </p>
        <p class="bookmark_button js-please_login" data-msg="@lang('ブックマークするには、まずログインしてください。')">
            <a class="not_bookmarked" href="javascript:void(0);">@lang('ブックマークする')</a>
        </p>
    </div>
    @endauth
    @endif

    <div class="mb-40">
        @if(!$isPreview && $scenario->user_id == Auth::id())
        <div class="writer_menu">
            <p class="title">@lang('製作者専用欄')</p>
            <p>@lang('この枠内は、脚本の製作者本人だけに表示されます。')</p>
            <div class="open_status">
            @if($scenario->is_open)
                <p class="title public">@lang('公開状態：公開中')</p>
                <p>@lang('この脚本は誰でも見ることができます。')</p>
            @else
                <p class="title private">@lang('公開状態：非公開')</p>
                <p>@lang('この脚本は製作者本人しか見ることができません。')</p>
            @endif
            </div>
            <a href="{{ route('my-scenario.edit', ['my_scenario' => $scenario->id]) }}">
                <p class="button">@lang('脚本を編集する')</p>
            </a>
        </div>
        @endif
    </div>
</div>

@if($isPreview)
<div class="preview_close">
    <p onclick="window.close();">@lang('プレビューを閉じる')</p>
</div>
@endif

@if($isQuiz)
<div id="quiz-strings_wrapper" style="display:none;">
    <p id="quiz-confirm_to_show_hint">@lang('ヒント：___LABEL___を表示しますか？')</p>
    <p id="quiz-hint_label">@lang('ヒント：___LABEL___を表示')</p>
    <p id="quiz-confirm_to_show_answer">@lang('答えを表示しますか？')</p>
    <p id="quiz-answer_label">@lang('答えを表示')</p>

    <p id="quiz-label_title">@lang('脚本タイトル')</p>
    <p id="quiz-label_diff">@lang('難易度')</p>
    <p id="quiz-label_feature">@lang('脚本の特徴')</p>
    <p id="quiz-label_story">@lang('ストーリー')</p>
</div>
@endif

@endsection

@section('popups')
@include('parts.popups.incident_explain', ['incidents' => $incidentsData])
@endsection

@section('additional_scripts')
<script>
@if($isPreview)
$('a').attr('href', 'javascript:void(0);');
@endif

@if($isQuiz)
{{-- 指針クイズの場合は最初から非公開シートを表示する --}}
$('.private_sheet_wrapper').addClass('showing');
$('.js-hide_private_sheet').show();
$('.js-show_private_sheet').hide();
@endif
</script>
@endsection
