<?php
$isEdit = isset($scenario->id);
$helper = new App\Utils\InputHelper($errors);
$ruleYs = $set->ruleYs->mapWithKeys(fn($r) => [$r->id => $r->name]);
$ruleXs = $set->ruleXs->mapWithKeys(fn($r) => [$r->id => $r->name]);
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
?>
@extends('layouts.layout')

@section('title', __('惨劇脚本作成 :set', ['set' => $set->name]))

@section('contents')
<h2>@lang(':set 脚本作成', ['set' => $set->name])</h2>

<div class="">
    <form action="{{ $isEdit ? route('my-scenario.update', ['my_scenario' => $scenario->id]) : route('my-scenario.store') }}" method="post">
        @csrf
        @if($isEdit) @method('put') @endif
        {{ Form::hidden('set_id', $set->id) }}
        <dl>
            <dt>@lang('ルールY')</dt>
            <dd>
                <div class="select_wrapper">
                    {{ Form::select('rule_y_id', $ruleYs, $helper->inputVal('rule_y_id') ?? $scenario->rule_y_id) }}
                </div>
            </dd>
            <dt>@lang('ルールX1')</dt>
            <dd>
                <div class="select_wrapper">
                    {{ Form::select('rule_x1_id', $ruleXs, $helper->inputVal('rule_x1_id') ?? $scenario->rule_x1_id) }}
                </div>
            </dd>
            @if($set->hasRuleX2)
            <dt>@lang('ルールX2')</dt>
            <dd>
                <div class="select_wrapper">
                    {{ Form::select('rule_x2_id', $ruleXs, $helper->inputVal('rule_x2_id') ?? $scenario->rule_x2_id) }}
                </div>
            </dd>
            @endif
            <dt>@lang('ループ数')</dt>
            <dd>
                <div class="select_wrapper">
                    {{ Form::selectRange('loops', 1, 8, $helper->inputVal('loops') ?? $scenario->loops) }}
                </div>
            </dd>
            <dt>@lang('日数')</dt>
            <dd>
                <div class="select_wrapper">
                    {{ Form::selectRange('days', 1, 8, $helper->inputVal('days') ?? $scenario->days) }}
                </div>
            </dd>
            <dt>@lang('難易度')</dt>
            <dd>
                <div class="select_wrapper">
                    {{ Form::select('difficulty', $aDifficulty, $helper->inputVal('difficulty') ?? $scenario->difficulty) }}
                </div>
            </dd>
            <dt>@lang('キャラクター')</dt>
            <dd>
                <ul class="scenario_character_list">
                    @foreach($helper->inputVal('scenario_chara') ?? $scenario->characters as $ch)
                    <?php if(is_array($ch)) $ch = (object)$ch; ?>
                    <li class="character_row" data-index="{{ $loop->iteration }}">
                        <div>
                            <span class="select_wrapper">
                                {{ Form::select('scenario_chara[][character_id]', $charaSelect, $ch->character_id, [
                                    'data-list_name' => 'scenario_chara',
                                    'data-key_name' => 'character_id'
                                ]) }}
                            </span>
                            <span class="select_wrapper">
                                {{ Form::select('scenario_chara[][role_id]', $roleSelect, $ch->role_id, [
                                    'data-list_name' => 'scenario_chara',
                                    'data-key_name' => 'role_id']) }}
                            </span>
                        </div>
                        <div class="inline_block_wrapper">
                            <span>@lang('キャラ固有の特記事項')<input value="{{ $ch->special_note }}" data-list_name="scenario_chara" data-key_name="special_note" placeholder="@lang('大物のテリトリーなど')"></span>
                            <span>@lang('その他特記事項')<input value="{{ $ch->note }}" data-list_name="scenario_chara" data-key_name="note"></span>
                        </div>
                        <div class="button js-chara_delete_button">@lang('このキャラを削除')</div>
                    </li>
                    @endforeach
                </ul>
                <div class="button js-chara_add_button">@lang('キャラ追加')</div>
            </dd>
            <dt>@lang('事件')</dt>
            <dd>
                <ul class="scenario_incident_list">
                    @for($i = 1 ; $i <= 8 ; $i++)
                    <?php $incidentOnDb = optional($scenario->incidents->firstWhere('day', $i)); ?>
                    <li class="inline_block_wrapper" data-day="{{ $i }}">
                        <span>@lang(':day日目', ['day' => $i])</span>
                        <span class="select_wrapper">
                            {{ Form::select('scenario_incident['.$i.'][incident_id]', $incidentSelect, $helper->inputVal("scenario_incident.$i.incident_id") ?? $incidentOnDb->incident_id, ['placeholder' => '']) }}
                        </span>
                        <span>
                            @lang('犯人')：
                            <span class="select_wrapper">
                                {{ Form::select('scenario_incident['.$i.'][character_id]', $charaSelect,
                                    $helper->inputVal("scenario_incident.$i.character_id") ?? optional($incidentOnDb->criminal)->character_id,
                                ['placeholder' => '']) }}
                            </span>
                        </span>
                    </li>
                    @endfor
                </ul>
            </dd>
        </dl>
        <div class="button_wrapper">
            <div class="">
                <label><input type="checkbox" name="is_open">@lang('脚本を公開する')</label>
            </div>
            <div class="button submit_button">
                @lang('登録')
            </div>
        </div>
    </form>
</div>
@endsection

@section('additional_scripts')
<script>
function setIndexNameToListItems() {
    let idx = 1;
    document.querySelectorAll('[data-index]').forEach(dom => {
        dom.setAttribute('data-index', idx++);
    });
    document.querySelectorAll('[data-index] [data-list_name][data-key_name]').forEach(dom => {
        const name = dom.getAttribute('data-list_name')+'['+dom.closest('[data-index]').getAttribute('data-index')+']['+dom.getAttribute('data-key_name')+']';
        dom.setAttribute('name', name);
    });
}
setIndexNameToListItems();

$('[name=days]').on('change click', function() {
    const d = $(this).val();
    $('.scenario_incident_list > li[data-day]').each(function() {
        const $dom = $(this);
        if ($dom.attr('data-day') <= d) {
            $dom.show();
        } else {
            $dom.hide();
        }
    });
});
$('[name=days]').click();

$('form .submit_button').on('click', function() {
    $(this).closest('form').submit();
});

$('.scenario_character_list').on('click', '.character_row .js-chara_delete_button', function() {
    const $self = $(this);
    if ($('.character_row').length > 1) {
        $self.closest('.character_row').remove();
        setIndexNameToListItems();
    }
});
$('.js-chara_add_button').on('click', function() {
    const $dom = $('.character_row:last').clone();
    $('.scenario_character_list').append($dom);
    setIndexNameToListItems();
});
</script>
@endsection
