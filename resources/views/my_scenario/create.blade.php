<?php
assert(!empty($scenario));
assert(!empty($set));
assert(!empty($charas));

$bodyClass = 'my_scenario-create';

$isEdit = isset($scenario->id);
$helper = new App\Utils\InputHelper($errors);
$ruleYs = $set->ruleYs->mapWithKeys(fn($r) => [$r->id => $r->name]);
$ruleXs = $set->ruleXs->mapWithKeys(fn($r) => [$r->id => $r->name]);
$loopSelect = collect()->range(1, 8)->mapWithKeys(fn($it) => [$it => __(':loopsループ', ['loops' => $it])]);
$daySelect = collect()->range(1, 8)->mapWithKeys(fn($it) => [$it => __(':days日', ['days' => $it])]);
$charaSelect = $charas->mapWithKeys(fn($c) => [$c->id => $c->name]);
$roleSelect = App\Models\TragedyRole::where('code', 'Person')->get()->concat($set->roles)->mapWithKeys(fn($r) => [$r->id => $r->name]);
$incidentSelect = $set->incidents->mapWithKeys(fn($i) => [$i->id => $i->name]);
$aDifficulty = collect(__('tragedy_master.difficulty'))->mapWithKeys(function($d, $key) {
    $star = '';
    for ($i = 1 ; $i <= 8 ; $i++) {
        $star .= $i <= $key ? '★' : '☆';
    }
    return [$key => $star.' '.$d];
});

$isBoard = fn($id) => in_array($id, array_keys(__('tragedy_master.board_name')));

$crazyTruthId = (int)($set->ruleXs->first(fn($it) => $it->code == 'Crazy-Truth')?->id);
?>
@extends('layouts.layout')

@section('title', __('惨劇脚本作成 :set', ['set' => $set->name]))

@section('body_class', $bodyClass)

@section('bread')
@if($isEdit)
@include('layouts.bread', ['breads' => [
    __('TOP') => route('top.index'),
    __('脚本一覧') => route('scenario.index'),
    __('惨劇脚本 :set', ['set' => $scenario->set->name]) => route('scenario.show', ['scenario' => $scenario->id]),
    __('脚本作成') => route('my-scenario.create'),
]])
@else
@include('layouts.bread', ['breads' => [
    __('TOP') => route('top.index'),
    __('マイページ') => route('my-scenario.index'),
    __('脚本作成') => route('my-scenario.create'),
]])
@endif
@endsection

@section('contents')
<h2>@lang(':set 脚本作成', ['set' => $set->name])</h2>

<div class="">
    @if($errors->any())
    <div class="error_summary">
        <b>@lang('入力内容にエラーがありました。以下の点をご確認ください。')</b>
        <ul>
        @foreach(collect($errors->all())->unique() as $message)
            <li>{{ $message }}</li>
        @endforeach
        </ul>
    </div>
    @endif
    <form method="post">
        @csrf
        @if($isEdit) @method('put') @endif
        {{ Form::hidden('set_id', $set->id) }}
        <dl class="summary_setting">
            <dt>@lang('ルールY')</dt>
            <dd>
                <div class="select_wrapper {{ $helper->errClass('rule_y_id') }}">
                    {{ Form::select('rule_y_id', $ruleYs, $helper->inputVal('rule_y_id') ?? $scenario->rule_y_id) }}
                </div>
            </dd>
            <dt>@lang('ルールX1')</dt>
            <dd>
                <div class="select_wrapper {{ $helper->errClass('rule_x1_id') }}">
                    {{ Form::select('rule_x1_id', $ruleXs, $helper->inputVal('rule_x1_id') ?? $scenario->rule_x1_id, ['class' => 'rule_x']) }}
                </div>
            </dd>
            @if($set->hasRuleX2)
            <dt>@lang('ルールX2')</dt>
            <dd>
                <div class="select_wrapper {{ $helper->errClass('rule_x2_id') }}">
                    {{ Form::select('rule_x2_id', $ruleXs, $helper->inputVal('rule_x2_id') ?? $scenario->rule_x2_id, ['class' => 'rule_x']) }}
                </div>
            </dd>
            @endif
            @if(!empty($crazyTruthId))
            <dt class="for_crazy_truth">@lang(':rule用ルールY', ['rule' => __('tragedy_master.rule_name.Crazy-Truth')])</dt>
            <dd class="for_crazy_truth">
                <div class="select_wrapper {{ $helper->errClass('crazy_rule_y_id') }}">
                    {{ Form::select('crazy_rule_y_id', $ruleYs, $helper->inputVal('crazy_rule_y_id') ?? $scenario->crazy_rule_y_id) }}
                </div>
                <p id="crazy_truth_rule_id" class="hidden" data-rule_id="{{ $crazyTruthId }}"></p>
            </dd>
            @endif
            <dt>@lang('ループ数')</dt>
            <dd>
                <div class="select_wrapper {{ $helper->errClass('loops') }}">
                    {{ Form::select('loops', $loopSelect, $helper->inputVal('loops') ?? $scenario->loops) }}
                </div>
            </dd>
            <dt>@lang('日数')</dt>
            <dd>
                <div class="select_wrapper {{ $helper->errClass('days') }}">
                    {{ Form::select('days', $daySelect, $helper->inputVal('days') ?? $scenario->days) }}
                </div>
            </dd>
            <dt>@lang('難易度')</dt>
            <dd>
                <div class="select_wrapper {{ $helper->errClass('difficulty') }}">
                    {{ Form::select('difficulty', $aDifficulty, $helper->inputVal('difficulty') ?? $scenario->difficulty) }}
                </div>
            </dd>
            <dt>@lang('プラス脚本')</dt>
            <dd class="plus_setting">
                <label class="checkbox_wrapper">
                    {{ Form::checkbox('is_plus', 1, $helper->inputVal('is_plus') ?? $scenario->is_plus) }}
                    @lang('プラス脚本にする')
                </label>
                <a href="javascript:void(0);" class="js-what_is_plus">@lang('プラス脚本とは？')</a>
                <span id="what_is_plus_message" class="hidden">@lang('messages.what_is_plus', [
                    'plus_script' => __('プラス脚本'),
                    'rei_url' => config('define.rei_url'),
                    'rei' => __('messages.expansion_rei'),
                    'sekaisen' => __('tragedy_master.rule_name.Beyond-the-World-Line'),
                    'fragment' => __('tragedy_master.role.Fragments.name'),
                    'hope' => __('tragedy_master.incident.HopeForTheFuture.name'),
                    'despair' => __('tragedy_master.incident.TheDarknessOfDespair.name'),
                    'hope_c' => __('希望カウンター'),
                    'despair_c' => __('絶望カウンター'),
                    'll' => __('tragedy_master.set_name.LL'),
                    'ahr' => __('tragedy_master.set_name.AHR'),
                ])</span>
            </dd>
        </dl>
        <dl>
            <dt>@lang('特殊ルール')</dt>
            <dd class="scenario_text">
                <div class="input_wrapper">
                    <textarea name="special_rule">{{ $helper->inputVal('special_rule') ?? $scenario->special_rule }}</textarea>
                </div>
                @error('special_rule')
                <p class="is-error">{{ $errors->first('special_rule') }}</p>
                @enderror
            </dd>
            <dt>@lang('キャラクター')</dt>
            <dd>
                <ul class="scenario_character_list">
                    @foreach($helper->inputVal('scenario_chara') ?? $scenario->characters as $ch)
                    <?php if(is_array($ch)) $ch = (object)$ch; ?>
                    <li class="character_row {{ $helper->errClass('scenario_chara.'.$loop->iteration.'.*') }}" data-index="{{ $loop->iteration }}">
                        <div>
                            <span class="select_wrapper">
                                {{ Form::select('scenario_chara[][character_id]', $charaSelect, $ch->character_id, [
                                    'data-list_name' => 'scenario_chara',
                                    'data-key_name' => 'character_id']) }}
                            </span>
                            <span class="select_wrapper">
                                {{ Form::select('scenario_chara[][role_id]', $roleSelect, $ch->role_id, [
                                    'data-list_name' => 'scenario_chara',
                                    'data-key_name' => 'role_id']) }}
                            </span>
                            <span class="label_and_input_wrapper">
                                <span class="label_name">@lang('特記事項')</span>
                                <input value="{{ __($ch->note) }}" data-list_name="scenario_chara" data-key_name="note">
                            </span>
                            <div class="button js-chara_delete_button">@lang('このキャラを削除')</div>
                        </div>
                    </li>
                    @endforeach
                </ul>
                <div class="button js-chara_add_button">@lang('キャラ追加')</div>
            </dd>
            <dt>@lang('事件')</dt>
            <dd>
                <ul class="scenario_incident_list">
                    @for($i = 1 ; $i <= 8 ; $i++)
                    <?php
                        $incidentOnDb = optional($scenario->incidents->firstWhere('day', $i));
                        $selectedIncidentId = $helper->inputVal("scenario_incident.$i.incident_id") ?? $incidentOnDb->incident_id;
                        $criminalCharacterId = $helper->inputVal("scenario_incident.$i.character_id") ?? $incidentOnDb->criminal?->character_id ?? $incidentOnDb->scenario_character_id;
                        $isCrowd = $set->incidents->firstWhere('id', $selectedIncidentId)?->is_crowd;
                    ?>
                    <li class="incident_wrapper" data-day="{{ $i }}">
                        <div>
                            <div>
                                <span class="label">@lang(':day日目', ['day' => $i])</span>
                                <span class="select_wrapper">
                                    {{ Form::select('scenario_incident['.$i.'][incident_id]', $incidentSelect, $selectedIncidentId,
                                        ['placeholder' => '', 'class' => 'incident']) }}
                                </span>
                            </div>
                            <div>
                                <span class="label">@lang('犯人')：</span>
                                <span class="select_wrapper">
                                    {{ Form::select('scenario_incident['.$i.'][character_id]', $isCrowd ? __('tragedy_master.board_name') : $charaSelect,
                                        $criminalCharacterId, ['placeholder' => '', 'class' => 'criminal']) }}
                                </span>
                            </div>
                            @if($set->hasFalsifiedIncidents)
                            <div>
                                <span class="label_and_input_wrapper">
                                    <span class="label_name">@lang('偽装事件の公開名')</span>
                                    <input class="incident_note" name="scenario_incident[{{$i}}][special_note]" value="{{ $helper->inputVal("scenario_incident.$i.special_note") ?? $incidentOnDb->public_name_input }}">
                                </span>
                            </div>
                        </div>
                        @endif
                        <div>
                            @error("scenario_incident.$i.*")
                            <p class="is-error">{{ $errors->first("scenario_incident.$i.*") }}</p>
                            @enderror
                        </div>
                    </li>
                    @endfor
                </ul>
            </dd>
            <dt>@lang('脚本タイトル')</dt>
            <dd class="scenario_title">
                {{ Form::text('title', $helper->inputVal('title') ?? $scenario->title) }}
            </dd>
            <dt>@lang('脚本の特徴')</dt>
            <dd class="scenario_text">
                <div class="input_wrapper">
                    <textarea name="feature">{{ $helper->inputVal('feature') ?? $scenario->feature }}</textarea>
                </div>
            </dd>
            <dt>@lang('ストーリー')</dt>
            <dd class="scenario_text">
                <div class="input_wrapper">
                    <textarea name="story">{{ $helper->inputVal('story') ?? $scenario->story }}</textarea>
                </div>
            </dd>
            <dt>@lang('脚本家への指針')</dt>
            <dd class="scenario_text">
                <div class="input_wrapper">
                    <textarea name="advice">{{ $helper->inputVal('advice') ?? $scenario->advice }}</textarea>
                </div>
            </dd>
        </dl>
        <div class="scenario_control_wrapper">
            <ul>
                <li>
                    <label class="checkbox_wrapper">
                        {{ Form::checkbox('is_open', 1, $helper->inputVal('is_open') ?? $scenario->is_open) }}
                        @lang('脚本を公開する')
                    </label>
                </li>
                <li>
                    <label class="checkbox_wrapper">
                        {{ Form::checkbox('is_quiz', 1, $helper->inputVal('is_quiz') ?? $scenario->is_quiz) }}
                        @lang('脚本家への指針クイズにする')
                    </label><br>
                    <a href="javascript:void(0);" class="js-what_is_quiz">@lang('脚本家への指針クイズとは？')</a>
                    <p id="what_is_quiz" class="hidden">
                        @lang('messages.what_is_advice_quiz')<br>
                        @lang('messages.show_only_quiz_list')
                    </p>
                </li>
            </ul>
            <div class="fixed_footer_console">
                <div class="submit_button_wrapper">
                    <div class="button submit_button" data-target="preview" data-action="{{ route('my-scenario.preview') }}">
                        @lang('プレビュー')
                    </div>
                    <div class="button submit_button" data-action="{{ $isEdit ? route('my-scenario.update', ['my_scenario' => $scenario->id]) : route('my-scenario.store') }}">
                        @lang('登録')
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>
<div class="clone_base hidden">
    <select>
        <option class="js-crowd_criminal_list_html"></option>
        @foreach(__('tragedy_master.board_name') as $key => $boardName)
        <option class="js-crowd_criminal_list_html" value="{{ $key }}">@lang(':boardの群像', ['board' => $boardName])</option>
        @endforeach
    </select>
</div>

<script>
const CHARA_DELETE_CONFIRM_MESSAGE = "@lang('___CHARA___を削除します。よろしいですか？')";
const CROWD_INCIDENT_IDS = {{ $set->incidents->where('is_crowd', 1)->pluck('id') }};
</script>
@endsection

@section('additional_scripts')
@endsection
