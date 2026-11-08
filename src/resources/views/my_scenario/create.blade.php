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


$characterList = collect($helper->inputVal('scenario_chara') ?? $scenario->characters)
    ->map(fn($it, $index) => [
        ...(is_array($it) ? $it : $it->toArray()),
        'errors' => $errors->first('scenario_chara.'.$index.'.*'),
    ]);

?>
@extends('layouts.layout')

@section('title', __('惨劇脚本作成 :set', ['set' => $set->name]))

@section('body_class', $bodyClass)

@section('bread')
<x-breadcrumbs :pageType=\App\Enums\PageType::CreateScenario :scenario=$scenario />
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
        {{ html()->hidden()->name('set_id')->value($set->id) }}
        <dl class="summary_setting">
            <dt>@lang('ルールY')</dt>
            <dd>
                <div class="select_wrapper {{ $helper->errClass('rule_y_id') }}">
                    {{ html()->select('rule_y_id', $ruleYs)
                        ->value($helper->inputVal('rule_y_id') ?? $scenario->rule_y_id)
                    }}
                </div>
            </dd>
            <dt>@lang('ルールX1')</dt>
            <dd>
                <div class="select_wrapper {{ $helper->errClass('rule_x1_id') }}">
                    {{ html()->select('rule_x1_id', $ruleXs)
                        ->value($helper->inputVal('rule_x1_id') ?? $scenario->rule_x1_id)
                        ->class('rule_x')
                        ->data('rule_x')
                    }}
                </div>
            </dd>
            @if($set->hasRuleX2)
            <dt>@lang('ルールX2')</dt>
            <dd>
                <div class="select_wrapper {{ $helper->errClass('rule_x2_id') }}">
                    {{ html()->select('rule_x2_id', $ruleXs)
                        ->value($helper->inputVal('rule_x2_id') ?? $scenario->rule_x2_id)
                        ->class('rule_x')
                        ->data('rule_x')
                    }}
                </div>
            </dd>
            @endif
            @if(!empty($crazyTruthId))
            <dt class="for_crazy_truth" data-for_crazy_truth>@lang(':rule用ルールY', ['rule' => __('tragedy_master.rule_name.Crazy-Truth')])</dt>
            <dd class="for_crazy_truth" data-for_crazy_truth>
                <div class="select_wrapper {{ $helper->errClass('crazy_rule_y_id') }}">
                    {{ html()->select('crazy_rule_y_id', $ruleYs)
                        ->value($helper->inputVal('crazy_rule_y_id') ?? $scenario->crazy_rule_y_id)
                    }}
                </div>
                <p id="crazy_truth_rule_id" class="hidden" data-rule_id="{{ $crazyTruthId }}"></p>
            </dd>
            @endif
            <dt>@lang('ループ数')</dt>
            <dd>
                <div class="select_wrapper {{ $helper->errClass('loops') }}">
                    {{ html()->select('loops', $loopSelect)
                        ->value($helper->inputVal('loops') ?? $scenario->loops)
                    }}
                </div>
            </dd>
            <dt>@lang('日数')</dt>
            <dd>
                <div class="select_wrapper {{ $helper->errClass('days') }}">
                    {{ html()->select('days', $daySelect)
                        ->value($helper->inputVal('days') ?? $scenario->days)
                    }}
                </div>
            </dd>
            <dt>@lang('難易度')</dt>
            <dd>
                <div class="select_wrapper {{ $helper->errClass('difficulty') }}">
                    {{ html()->select('difficulty', $aDifficulty)
                        ->value($helper->inputVal('difficulty') ?? $scenario->difficulty)
                    }}
                </div>
            </dd>
            <dt>@lang('プラス脚本')</dt>
            <dd class="plus_setting">
                <label class="checkbox_wrapper">
                    {{ html()->checkbox()
                        ->name('is_plus')
                        ->value(1)
                        ->checked($helper->inputVal('is_plus') ?? $scenario->is_plus)
                    }}
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
                                {{ html()->select('scenario_chara[][character_id]', $charaSelect)
                                    ->value($ch->character_id)
                                    ->data('list_name', 'scenario_chara')
                                    ->data('key_name', 'character_id')
                                }}
                            </span>
                            <span class="select_wrapper">
                                {{ html()->select('scenario_chara[][role_id]', $roleSelect)
                                    ->value($ch->role_id)
                                    ->data('list_name', 'scenario_chara')
                                    ->data('key_name', 'role_id')
                                }}
                            </span>
                            <span class="label_and_input_wrapper">
                                <span class="label_name">@lang('特記事項')</span>
                                <input value="{{ __($ch->note) }}" data-list_name="scenario_chara" data-key_name="note">
                            </span>
                            <div class="button" data-chara_delete_button>@lang('このキャラを削除')</div>
                        </div>
                        <div class="error_order_console">
                            <p class="error_message" data-error_message></p>
                            <div class="order_console">
                                <button class="button" type="button" data-up>@lang('上へ↑')</button>
                                <button class="button" type="button" data-down>@lang('下へ↓')</button>
                            </div>
                        </div>
                    </li>
                    @endforeach
                </ul>
                <div class="button" data-chara_add_button>@lang('キャラ追加')</div>
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
                                    {{ html()->select('scenario_incident['.$i.'][incident_id]', $incidentSelect)
                                        ->value($selectedIncidentId)
                                        ->placeholder('')
                                        ->data('name', 'incident_id')
                                        ->class('incident')
                                    }}
                                </span>
                            </div>
                            <div>
                                <span class="label">@lang('犯人')：</span>
                                <span class="select_wrapper">
                                    {{ html()->select('scenario_incident['.$i.'][character_id]', $isCrowd ? __('tragedy_master.board_name') : $charaSelect)
                                        ->value($criminalCharacterId)
                                        ->placeholder('')
                                        ->data('name', 'character_id')
                                        ->class('criminal')
                                    }}
                                </span>
                            </div>
                            @if($set->hasFalsifiedIncidents)
                            <div>
                                <span class="label_and_input_wrapper">
                                    <span class="label_name">@lang('偽装事件の公開名')</span>
                                    <input class="incident_note" data-name="special_note" name="scenario_incident[{{$i}}][special_note]" value="{{ $helper->inputVal("scenario_incident.$i.special_note") ?? $incidentOnDb->public_name_input }}">
                                </span>
                            </div>
                            @endif
                        </div>
                        <div data-incident_error_wrapper>
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
                {{ html()->text()
                    ->name('title')
                    ->value($helper->inputVal('title') ?? $scenario->title)
                }}
            </dd>
            <dt>@lang('公開用ひとことコメント')</dt>
            <dd class="public_message">
                {{ html()->text()
                    ->name('public_message')
                    ->value($helper->inputVal('public_message') ?? $scenario->public_message)
                }}
                @error('public_message')
                <p class="is-error">{{ $errors->first('public_message') }}</p>
                @enderror
                <p>※@lang('このコメントは脚本一覧で公開されます。20文字以内が推奨です。')</p>
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
                        {{ html()->checkbox()
                            ->name('is_open')
                            ->value(1)
                            ->checked($helper->inputVal('is_open') ?? $scenario->is_open)
                        }}
                        @lang('脚本を公開する')
                    </label>
                    <div data-js_loaded="not_yet">
                        <p class="is-error" data-error_message="open_without_advice_error">@lang('脚本を公開する場合は、タイトルと脚本の特徴と脚本家への指針を記入して下さい。')</p>
                    </div>
                </li>
                <li>
                    <label class="checkbox_wrapper">
                        {{ html()->checkbox()
                            ->name('is_quiz')
                            ->value(1)
                            ->checked($helper->inputVal('is_quiz') ?? $scenario->is_quiz)
                        }}
                        @lang('脚本家への指針クイズにする')
                    </label><br>
                    <a href="javascript:void(0);" class="js-what_is_quiz">@lang('脚本家への指針クイズとは？')</a>
                    <p id="what_is_quiz" class="hidden">
                        @lang('messages.what_is_advice_quiz')<br>
                        @lang('messages.show_only_quiz_list')
                    </p>
                </li>
            </ul>
        </div>
        <div class="fixed_footer_console" data-js_loaded="not_yet">
            <div class="submit_button_wrapper">
                <div class="button submit_button" data-target="preview" data-action="{{ route('my-scenario.preview') }}">
                    @lang('プレビュー')
                </div>
                <div class="button submit_button"
                    data-register_button
                    data-action="{{ $isEdit ? route('my-scenario.update', ['my_scenario' => $scenario->id]) : route('my-scenario.store') }}">
                    @lang('登録')
                </div>
            </div>
        </div>
    </form>
</div>
<div class="clone_base hidden">
    <select data-crowd_criminal_list_html>
        <option class="js-crowd_criminal_list_html"></option>
        @foreach(__('tragedy_master.board_name') as $key => $boardName)
        <option class="js-crowd_criminal_list_html" value="{{ $key }}">@lang(':boardの群像', ['board' => $boardName])</option>
        @endforeach
    </select>
</div>

<script>
const INCIDENT_CRIMINAL_MISMATCH_MESSAGE = "@lang('犯人と事件はセットで指定してください')";
const CHARA_DELETE_CONFIRM_MESSAGE = "@lang('___CHARA___を削除します。よろしいですか？')";
const CROWD_INCIDENT_IDS = {{ $set->incidents->where('is_crowd', 1)->pluck('id') }};
</script>
@endsection

@section('additional_scripts')
<script>
(function() {
    const charaNameMaster = {};
    $('select[data-list_name="scenario_chara"][data-key_name="character_id"] option').each(function() {
        const $opt = $(this);
        charaNameMaster[$opt.val()] = $opt.text().trim();
    });
    const crowdCriminalListHtml = $('.clone_base [data-crowd_criminal_list_html] > option');
    const crowdCriminalIds = [...document.querySelectorAll('[data-crowd_criminal_list_html] > option')]
        .map(it => Number(it.getAttribute('value'))).filter(it => it);

    let characterList = @json($characterList);
    const incidentList = {};
    $('.incident_wrapper[data-day]').each(function() {
        const $li = $(this);
        const day = Number($li.attr('data-day'));
        incidentList[day] = {
            incident_id: $li.find('select[data-name=incident_id]').val(),
            character_id: $li.find('select[data-name=character_id]').val(),
            special_note: $li.find('input[data-name=special_note]').val(),
        };
    });
    console.log(incidentList);

    // キャラクター設定UIの表示制御
    const characterRowHtml = (() => {
        const $dom = $('.scenario_character_list .character_row').clone();
        $dom.removeClass('is-error');
        return $dom[0].outerHTML;
    })();
    $('.scenario_character_list').on('change input keyup keydown', '[data-index] select,input', function() {
        const $self = $(this);
        const index = $self.closest('[data-index]').attr('data-index') - 1;
        characterList[index][$self.attr('data-key_name')] = $self.val();
    });
    $('.scenario_character_list').on('change blur', '[data-index] select,input', function() {
        updateCharacterListDom();
    });
    $('[data-chara_add_button]').on('click', function() {
        characterList.push({
            character_id: 1,
            role_id: 1,
            note: null,
        });
        updateCharacterListDom();
    });
    $('.scenario_character_list').on('click', '.character_row [data-chara_delete_button]', async function() {
        const $self = $(this);
        const charaName = $self.closest('.character_row').find('select[data-key_name=character_id] option:selected').text();
        const msg = CHARA_DELETE_CONFIRM_MESSAGE.replace('___CHARA___', charaName);
        if ($('.character_row').length > 1) {
            const {result} = await myConfirm(msg);
            if (result == 'ok') {
                const index = $self.closest('[data-index]').attr('data-index') - 1;
                characterList.splice(index, 1);
                updateCharacterListDom();
            }
        }
    });
    $('.scenario_character_list').on('click', '.character_row [data-up]', function() {
        const $self = $(this);
        const index = Number($self.closest('[data-index]').attr('data-index')) - 1;
        const t = characterList[index-1];
        if (!t) return;
        characterList[index-1] = characterList[index];
        characterList[index] = t;
        updateCharacterListDom();
    });
    $('.scenario_character_list').on('click', '.character_row [data-down]', function() {
        const $self = $(this);
        const index = Number($self.closest('[data-index]').attr('data-index')) - 1;
        const t = characterList[index+1];
        if (!t) return;
        characterList[index+1] = characterList[index];
        characterList[index] = t;
        updateCharacterListDom();
    });
    const firstCharacterId = Object.keys(charaNameMaster)[0];
    const firstCharacterName = Object.values(charaNameMaster)[0];
    const personRoleId = Number($('.character_row select[data-key_name=role_id] > option:first').val());
    function updateCharacterListDom() {
        characterList = Object.values(characterList).filter(it => it).map(it => ({
            ...it,
            character_id: Number(it.character_id) || firstCharacterId,
            character_name: charaNameMaster[Number(it.character_id)] || firstCharacterName,
            role_id: Number(it.role_id) || personRoleId,
            errors: null,
        }));

        // キャラ重複チェック
        const duplicateCharaIds = characterList.map(it => it.character_id).filter((item, index, self) => {
            // 自身と同じ項目が自身のindexより先に出現しているなら重複
            return self.indexOf(item) !== index;
        });
        characterList = characterList.map(it => ({
            ...it,
            errors: duplicateCharaIds.includes(it.character_id) ? 'キャラクター重複' : null,
        }));

        const $list = $('.scenario_character_list');
        $list.empty();
        let index = 1;
        characterList.forEach(ch => {
            const $row = $(characterRowHtml);
            $row.attr('data-index', index);
            if (ch.errors) {
                $row.addClass('is-error');
                $row.find('[data-error_message]').text(ch.errors);
            } else {
                $row.find('[data-error_message]').text('');
            }
            if (index == 1) $row.find('[data-up]').attr('disabled', 'disabled');
            if (index == characterList.length) $row.find('[data-down]').attr('disabled', 'disabled');
            if (characterList.length <= 1) $row.find('[data-chara_delete_button]').attr('disabled', 'disabled');
            $row.find('[data-list_name][data-key_name]').each(function() {
                const $dom = $(this);
                const keyName = $dom.attr('data-key_name');
                $dom.attr('name', `${$dom.attr('data-list_name')}[${index}][${keyName}]`);
                $dom.val(ch[keyName]);
            });
            $list.append($row);
            index++;
        });
        updateCriminalSelect();
        switchCrazyTruthSetting();
    }

    // 事件設定UIの表示制御
    $('[name=days]').on('change click', function() {
        updateCriminalSelect();
    });
    $('.scenario_incident_list').on('change input', 'li[data-day] select', function() {
        const $self = $(this);
        const day = Number($self.closest('[data-day]').attr('data-day'));
        const name = $self.attr('data-name');
        incidentList[day][name] = $self.val();
    });
    $('.scenario_incident_list').on('change', 'li[data-day] [data-name]', function() {
        setTimeout(() => {
            updateCriminalSelect();
        }, 1);
    });
    function updateCriminalSelect() {
        const days = Number($('[name=days]').val());

        // 日ごとの事件設定の補正とエラー判定を行う
        for (let i = 1 ; i <= 8 ; i++) {
            incidentList[i].errors = null;
        }
        for (i = 1 ; i <= days ; i++) {
            const incidentId = Number(incidentList[i].incident_id);
            const criminalCharaId = Number(incidentList[i].character_id);
            if (CROWD_INCIDENT_IDS.includes(incidentId)) {
                if (!crowdCriminalIds.includes(criminalCharaId)) {
                    // 群像事件なのに普通のキャラクターが犯人になってるのでクリアする
                    incidentList[i].character_id = null;
                }
            } else if (!characterList.some(it => it.character_id == criminalCharaId)) {
                // キャラクターリストに含まれないキャラIDなのでクリアする
                incidentList[i].character_id = null;
            }

            if (!!incidentList[i].character_id != !!incidentList[i].incident_id) {
                // 事件と犯人の片方だけが設定されているのはNG
                incidentList[i].errors = INCIDENT_CRIMINAL_MISMATCH_MESSAGE;
            }
        }

        // 事件設定のセレクトボックスを構築する
        const criminalListHtml = '<option></option>' + characterList.map(it => `<option value="${it.character_id}">${it.character_name}</option>`);
        $('select.criminal').each(function() {
            const $select = $(this);
            const day = Number($select.closest('[data-day]').attr('data-day'));
            const $selectIncident = $select.closest('.incident_wrapper').find('select.incident');
            const incidentId = Number(incidentList[day].incident_id);

            const charaId = incidentList[day].character_id;
            if (CROWD_INCIDENT_IDS.includes(incidentId)) {
                $select.html(crowdCriminalListHtml.clone());
            } else {
                $select.html(criminalListHtml);
            }
            $select.val(charaId);
        });

        // エラーがあれば表示する
        $(`.scenario_incident_list li`).hide();
        for (i = 1 ; i <= days ; i++) {
            $(`.scenario_incident_list li[data-day=${i}]`).show();
            const $errorWrapper = $(`.scenario_incident_list li[data-day=${i}] [data-incident_error_wrapper]`);
            $errorWrapper.empty();
            if (incidentList[i].errors) {
                $errorWrapper.append(`<p class="is-error">${incidentList[i].errors}</p>`);
            }
        }
        disableIfErrorHas();
    }

    // 狂った真実の追加設定UIの制御
    $('select[data-rule_x]').on('change', function() {
        switchCrazyTruthSetting();
    });
    const crazyTruthId = Number($('#crazy_truth_rule_id').attr('data-rule_id'));
    function switchCrazyTruthSetting() {
        if (!crazyTruthId) return;
        let includedCrazyTruth = false;
        $('select[data-rule_x]').each(function() {
            if (Number($(this).val()) == crazyTruthId) includedCrazyTruth = true;
        });
        $('[data-for_crazy_truth]').attr('data-for_crazy_truth', includedCrazyTruth ? 'selected' : 'none');
    }

    // タイトル、脚本の特徴、脚本家への指針が未入力の脚本は公開させない
    $('[name=title],[name=feature],[name=advice]').on('input keydown keyup', function() {
        checkAdviceInputIfOpen();
    });
    $('[name=is_open]').on('change click', function() {
        checkAdviceInputIfOpen();
    });
    let isOpenWithoutAdvice = false;
    function checkAdviceInputIfOpen() {
        isOpenWithoutAdvice = false;
        if ($('[name=is_open]').prop('checked')) {
            isOpenWithoutAdvice = [
                'title',
                'feature',
                'advice',
            ].some(it => !$(`[name=${it}]`).val());
        }
        $("[data-error_message=open_without_advice_error]")
            .css('display', isOpenWithoutAdvice ? 'block' : 'none');
        disableIfErrorHas();
    }

    // バリデーションエラーになる入力状態の場合、登録ボタンを無効化する
    function disableIfErrorHas() {
        const hasErrors = (() => {
            if (characterList.some(it => it.errors)) return true;
            if (Object.values(incidentList).some(it => it.errors)) return true;
            if (isOpenWithoutAdvice) return true;
            return false;
        })();
        $('[data-register_button]').attr('disabled', hasErrors ? 'disabled' : null);
    }

    document.addEventListener("DOMContentLoaded", (event) => {
        updateCharacterListDom();
        switchCrazyTruthSetting();
        checkAdviceInputIfOpen();
        $('[data-js_loaded="not_yet"]').attr('data-js_loaded', 'done');
    });
})();
</script>
@endsection
