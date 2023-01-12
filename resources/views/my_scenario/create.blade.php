<?php
assert(!empty($scenario));
assert(!empty($set));
assert(!empty($charas));

$isEdit = isset($scenario->id);
$helper = new App\Utils\InputHelper($errors);
$ruleYs = $set->ruleYs->mapWithKeys(fn($r) => [$r->id => $r->name]);
$ruleXs = $set->ruleXs->mapWithKeys(fn($r) => [$r->id => $r->name]);
$charaSelect = $charas->mapWithKeys(fn($c) => [$c->id => $c->name]);
$roleSelect = App\Models\TragedyRole::where('code', 'Person')->get()->concat($set->roles)->mapWithKeys(fn($r) => [$r->id => $r->name]);
$incidentSelect = $set->incidents->mapWithKeys(fn($i) => [$i->id => $i->name]);
$hasFalsifiedIncidents = !empty($set->incidents->first(fn($i) => $i->code == 'FalsifiedIncidents'));
$aDifficulty = collect(__('tragedy_master.difficulty'))->mapWithKeys(function($d, $key) {
    $star = '';
    for ($i = 1 ; $i <= 8 ; $i++) {
        $star .= $i <= $key ? '★' : '☆';
    }
    return [$key => $star.' '.$d];
});

$isBoard = fn($id) => in_array($id, array_keys(__('tragedy_master.board_name')));
?>
@extends('layouts.layout')

@section('title', __('惨劇脚本作成 :set', ['set' => $set->name]))

@section('body_class', 'my_scenario-create')

@section('bread')
@if($isEdit)
<li><a href="{{ route('top.index') }}">@lang('TOP')</a></li>
<li><a href="{{ route('scenario.index') }}">@lang('脚本一覧')</a></li>
<li><a href="{{ route('scenario.show', ['scenario' => $scenario->id]) }}">@lang('惨劇脚本 :set', ['set' => $scenario->set->name])</a></li>
<li>@lang('脚本作成')</li>
@else
<li><a href="{{ route('top.index') }}">@lang('TOP')</a></li>
<li><a href="{{ route('scenario.index') }}">@lang('脚本一覧')</a></li>
<li>@lang('脚本作成')</li>
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
                    {{ Form::select('rule_x1_id', $ruleXs, $helper->inputVal('rule_x1_id') ?? $scenario->rule_x1_id) }}
                </div>
            </dd>
            @if($set->hasRuleX2)
            <dt>@lang('ルールX2')</dt>
            <dd>
                <div class="select_wrapper {{ $helper->errClass('rule_x2_id') }}">
                    {{ Form::select('rule_x2_id', $ruleXs, $helper->inputVal('rule_x2_id') ?? $scenario->rule_x2_id) }}
                </div>
            </dd>
            @endif
            <dt>@lang('ループ数')</dt>
            <dd>
                <div class="select_wrapper {{ $helper->errClass('loops') }}">
                    {{ Form::selectRange('loops', 1, 8, $helper->inputVal('loops') ?? $scenario->loops) }}
                </div>
            </dd>
            <dt>@lang('日数')</dt>
            <dd>
                <div class="select_wrapper {{ $helper->errClass('days') }}">
                    {{ Form::selectRange('days', 1, 8, $helper->inputVal('days') ?? $scenario->days) }}
                </div>
            </dd>
            <dt>@lang('難易度')</dt>
            <dd>
                <div class="select_wrapper {{ $helper->errClass('difficulty') }}">
                    {{ Form::select('difficulty', $aDifficulty, $helper->inputVal('difficulty') ?? $scenario->difficulty) }}
                </div>
            </dd>
        </dl>
        <dl>
            <dt>@lang('特殊ルール')</dt>
            <dd class="scenario_text">
                <div class="input_wrapper">
                    <textarea name="special_rule">{{ $helper->inputVal('special_rule') ?? $scenario->special_rule }}</textarea>
                </div>
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
                                <input value="{{ $ch->note }}" data-list_name="scenario_chara" data-key_name="note">
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
                    <li class="inline_block_wrapper incident_wrapper" data-day="{{ $i }}">
                        <span>@lang(':day日目', ['day' => $i])</span>
                        <span class="select_wrapper">
                            {{ Form::select('scenario_incident['.$i.'][incident_id]', $incidentSelect, $selectedIncidentId,
                                ['placeholder' => '', 'class' => 'incident']) }}
                        </span>
                        <span>
                            @lang('犯人')：
                            <span class="select_wrapper">
                                {{ Form::select('scenario_incident['.$i.'][character_id]', $isCrowd ? __('tragedy_master.board_name') : $charaSelect,
                                    $criminalCharacterId, ['placeholder' => '', 'class' => 'criminal']) }}
                            </span>
                        </span>
                        @if($hasFalsifiedIncidents)
                        <span class="label_and_input_wrapper">
                            <span class="label_name">@lang('偽装事件の公開名')</span>
                            <input name="scenario_incident[{{$i}}][special_note]" value="{{ $helper->inputVal("scenario_incident.$i.special_note") ?? $incidentOnDb->public_name_input }}">
                        </span>
                        @endif
                        <span class="label_and_input_wrapper">
                            <span class="label_name">@lang('特記事項')</span>
                            <input name="scenario_incident[{{$i}}][note]" value="{{ $helper->inputVal("scenario_incident.$i.note") ?? $incidentOnDb->note }}">
                        </span>
                        @error("scenario_incident.$i.*")
                        <p class="is-error">{{ $errors->first("scenario_incident.$i.*") }}</p>
                        @enderror
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
            <dt>@lang('脚本家への指針')</dt>
            <dd class="scenario_text">
                <div class="input_wrapper">
                    <textarea name="advice">{{ $helper->inputVal('advice') ?? $scenario->advice }}</textarea>
                </div>
            </dd>
        </dl>
        <div class="submit_button_wrapper">
            <label class="checkbox_wrapper">
                {{ Form::checkbox('is_open', 1, $helper->inputVal('is_open') ?? $scenario->is_open) }}
                @lang('脚本を公開する')
            </label>
            <div class="button submit_button" data-target="preview" data-action="{{ route('my-scenario.preview') }}">
                @lang('プレビュー')
            </div>
            <div class="button submit_button" data-action="{{ $isEdit ? route('my-scenario.update', ['my_scenario' => $scenario->id]) : route('my-scenario.store') }}">
                @lang('登録')
            </div>
        </div>
    </form>
</div>
<div class="clone_base" style="display:none;">
    <option class="js-crowd_criminal_list_html"></option>
    @foreach(__('tragedy_master.board_name') as $key => $boardName)
    <option class="js-crowd_criminal_list_html" value="{{ $key }}">@lang(':boardの群像', ['board' => $boardName])</option>
    @endforeach
</div>

<script>
const CHARA_DELETE_CONFIRM_MESSAGE = "@lang('___CHARA___を削除します。よろしいですか？')";
const CROWD_INCIDENT_IDS = {{ $set->incidents->where('is_crowd', 1)->pluck('id') }};
</script>
@endsection

@section('additional_scripts')
@endsection
