<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use App\Models\TragedySet;
use App\Models\TragedyRule;
use App\Models\TragedyRole;
use App\Models\Character;
use App\Models\Incident;
use App\Models\Scenario;
use App\Models\ScenarioCharacter;
use App\Models\ScenarioIncident;
use App\Http\Requests\PostScenario;
use Auth;
use DB;
use Exception;
use Throwable;
use Str;

class MyScenarioController extends Controller
{
    /**
     * 自分のシナリオ一覧
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sets = TragedySet::get();
        $scenarios = Auth::user()->scenarios()
            ->with('likes')
            ->orderBy('set_id')
            ->orderBy('id')
            ->paginate(100)
            ->appends(request()->query());
        return view('my_scenario.index', compact('sets', 'scenarios'));
    }

    /**
     * 自分のシナリオ作成
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $set = TragedySet::with('rules.roles')->where('abbreviation', $request->set)->firstOrFail();
        $charas = Character::get();
        $scenario = new Scenario([
            'set_id' => $set->id,
        ]);
        $scenario->characters = collect([
            new ScenarioCharacter
        ]);
        return view('my_scenario.create', compact('set', 'charas', 'scenario'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PostScenario $request)
    {
        $scenario = new Scenario;

        $this->storeScenario($scenario, $request);

        return redirect()->route('scenario.show', ['scenario' => $scenario->id])->with([
            'flush_message' => __('messages.alert.scenario.store'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $scenario = Scenario::where('user_id', Auth::id())->findOrFail($id);
        $set = $scenario->set;
        $charas = Character::get();
        if ($scenario->characters->isEmpty()) {
            $scenario->characters = collect([
                new ScenarioCharacter
            ]);
        }
        return view('my_scenario.create', compact('set', 'charas', 'scenario'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PostScenario $request, $id)
    {
        $scenario = Scenario::where('user_id', Auth::id())->findOrFail($id);

        $this->storeScenario($scenario, $request);

        return redirect()->route('scenario.show', ['scenario' => $scenario->id])->with([
            'flush_message' => __('messages.alert.scenario.update'),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * ペンスキーの惨劇RoopeR脚本部屋に登録した自作脚本データをこちらのサイトへインポートする
     */
    public function storeFromJson(Request $request)
    {
        $request->validate([
            'scenario_json' => 'required|file',
        ]);

        $jsonData = json_decode($request->scenario_json->get());
        if ($jsonData->thisIs != 'sangekiRoopeR') return back();

        try {
            DB::transaction(function() use($jsonData) {
                foreach($jsonData->scenarioList as $data) {

                    // jsonデータから脚本を登録
                    $set = TragedySet::where('abbreviation', $data->set)->firstOrFail();
                    $scenario = Scenario::firstOrNew([
                        'user_id' => Auth::id(),
                        'import_hash' => $data->hash,
                    ]);
                    $scenario->set_id = $set->id;
                    $scenario->loops = $data->loop;
                    $scenario->days = $data->day;
                    $scenario->difficulty = $data->difficulty ?: 0;
                    $scenario->title = $data->title;
                    $scenario->advice = $data->advice;
                    $scenario->feature = $data->note;
                    $scenario->is_open = false;
                    if (!empty($data->specialRule)) {
                        $scenario->special_rule = $data->specialRule;
                    }

                    // ルールの紐づけ

                    // とりあえずバグらないように適当なルールIDで初期化しておく
                    $scenario->rule_y_id = $set->ruleYs->first()->id;
                    $scenario->rule_x1_id = $set->ruleXs->first()->id;
                    if ($set->hasRuleX2) {
                        $scenario->rule_x2_id = $set->ruleXs->first()->id;
                    }

                    foreach($set->rules as $rule) {
                        $ruleName = trim($rule->name);
                        if (trim($data->ruleY) == $ruleName) {
                            $scenario->rule_y_id = $rule->id;
                        }

                        if (trim($data->ruleX1) == $ruleName) {
                            $scenario->rule_x1_id = $rule->id;
                        }

                        if (trim($data->ruleX2 ?? '') == $ruleName) {
                            $scenario->rule_x2_id = $rule->id;
                        }
                    }

                    if (Str::startsWith($data->ruleX1, '不定因子')) {
                        if ($data->set == 'BTX') {
                            $scenario->rule_x1_id = $set->rules->where('code', 'indefinite-factor-kai')->first()->id;
                        } else {
                            $scenario->rule_x1_id = $set->rules->where('code', 'Indefinite-Factor-kai-kai')->first()->id;
                        }
                    } else if (Str::startsWith($data->ruleX1, '世界線を')) {
                        $scenario->rule_x1_id = TragedyRule::where('code', 'Beyond-the-World-Line')->first()->id;
                    }

                    if (Str::startsWith($data->ruleX2 ?? null, '不定因子')) {
                        if ($data->set == 'BTX') {
                            $scenario->rule_x2_id = $set->rules->where('code', 'indefinite-factor-kai')->first()->id;
                        } else {
                            $scenario->rule_x2_id = $set->rules->where('code', 'Indefinite-Factor-kai-kai')->first()->id;
                        }
                    } else if (Str::startsWith($data->ruleX2 ?? null, '世界線を')) {
                        $scenario->rule_x2_id = TragedyRule::where('code', 'Beyond-the-World-Line')->first()->id;
                    }

                    $scenario->save();

                    // キャラの登録
                    $charaNames = collect(__('tragedy_master.chara_name'))->mapWithKeys(fn($name, $code) => [trim($name) => $code]);
                    $roleNames = collect(__('tragedy_master.role'))->mapWithKeys(fn($val, $code) => [trim($val['name']) => $code]);
                    $scenarioCharas = collect();
                    foreach($data->characters as $chara) {
                        if (empty($chara->name) || !isset($chara->role) || !isset($chara->note)) {
                            throw new Exception('invalid chara data');
                        }

                        $name = strtoupper(trim($chara->name));
                        $name = str_replace([' ', '　', ], '', $name);
                        $name = preg_replace('/A.?I.?/', 'A.I.', $name);
                        $name = str_replace('?', '？', $name);
                        $charaCode = $charaNames[$name] ?? null;

                        $role = trim($chara->role) ?: __('tragedy_master.role.Person.name');
                        $role = str_replace([' ', '　', ], '', $role);
                        $role = str_replace('/', '／', $role);
                        $roleCode = $roleNames[$role] ?? null;

                        if (!empty($charaCode) && !empty($roleCode)) {
                            $sch = ScenarioCharacter::create([
                                'scenario_id' => $scenario->id,
                                'character_id' => Character::where('code', $charaCode)->first()->id,
                                'role_id' => TragedyRole::where('code', $roleCode)->first()->id,
                                'note' => $chara->note,
                            ]);
                            $scenarioCharas[] = $sch;
                        }
                    }

                    //  事件の登録
                    $incidentNames = collect(__('tragedy_master.incident'))->mapWithKeys(fn($val, $code) => [trim($val['name']) => $code]);
                    foreach($data->incidents as $inc) {
                        if (empty($inc->day) || empty($inc->name) || empty($inc->criminal)) {
                            throw new Exception('invalid incident data');
                        }

                        $name = trim($inc->name);
                        $name = str_replace([' ', '　', ], '', $name);
                        $incCode = $incidentNames[$name] ?? null;

                        $criminal = trim($inc->criminal);
                        $criminal = str_replace([' ', '　', ], '', $criminal);
                        $scenario_character_id = $scenarioCharas->filter(fn($c) => $c->name == $criminal)?->first()?->id;

                        if (!empty($incCode) && !empty($scenario_character_id)) {
                            ScenarioIncident::create([
                                'scenario_id' => $scenario->id,
                                'day' => $inc->day,
                                'incident_id' => Incident::where('code', $incCode)->first()->id,
                                'scenario_character_id' => $scenario_character_id,
                            ]);
                        }
                    }
                }
            });
        } catch(Throwable $ignore) {
            // 想定外のファイルを投げられたら、一切処理せずに戻る
            return back();
        }

        return back();
    }

    public function preview(Request $request)
    {
        $scenario = new Scenario();
        $scenario = $this->setScenarioDataFromRequest($scenario, $request);

        $scenario->characters = collect();
        foreach ($request->scenario_chara as $chara) {
            $scenario->characters[] = new ScenarioCharacter([
                'character_id' => $chara['character_id'] ?? null,
                'role_id' => $chara['role_id'] ?? null,
                'note' => $chara['note'] ?? null,
            ]);
        }

        $scenario->incidents = collect();
        foreach ($request->scenario_incident as $day => $incident) {
            if (!empty($incident['incident_id']) && !empty($incident['character_id'])) {
                $scenarioChara = $scenario->characters->firstWhere('character_id', $incident['character_id']);
                if (!empty($scenarioChara) || $this->isCrowd($incident['incident_id'])) {
                    $tmp = new ScenarioIncident([
                        'day' => $day,
                        'incident_id' => $incident['incident_id'],
                        'special_note' => $incident['special_note'] ?? null,
                    ]);
                    $tmp->criminal_name = Character::find($incident['character_id'])?->name ?? __(':boardの群像', ['board' => __('tragedy_master.board_name.'.$incident['character_id'])]);
                    $scenario->incidents[] = $tmp;
                }
            }
        }

        $isPreview = true;
        return view('scenario.show', compact('scenario', 'isPreview'));
    }

    public function bookmarks() {
        $sets = TragedySet::get();
        $bookmarks = Auth::user()->bookmarkScenarios()
            ->with('likes', 'writer')
            ->orderBy('set_id')
            ->orderBy('id', 'desc')
            ->paginate(100)
            ->appends(request()->query());

        return view('my_scenario.bookmarks', compact('sets', 'bookmarks'));
    }

    private function storeScenario(Scenario $scenario, Request $request) {
        DB::transaction(function() use($scenario, $request) {
            $errors = [];

            $scenario = $this->setScenarioDataFromRequest($scenario, $request);
            $scenario->save();

            // キャラの特記にテリトリーとか手先の初期配置を入れられたとき、多言語対応できるようにする
            $lang = session('applocale') ?: config('app.fallback_locale');
            $transFilePath = resource_path("lang/$lang.json");
            if (file_exists($transFilePath)) {
                $aTrans = collect(json_decode(file_get_contents($transFilePath), true))
                    ->mapWithKeys(fn($val, $key) => [strtolower($val) => $key])
                    ->toArray();
            } else {
                $aTrans = [];
            }

            $scenario->characters()->delete();
            foreach ($request->scenario_chara as $chara) {
                if (!empty($aTrans[strtolower($chara['note'])])) {
                    $chara['note'] = $aTrans[$chara['note']];
                }

                $scenario->characters()->save(new ScenarioCharacter([
                    'character_id' => $chara['character_id'],
                    'role_id' => $chara['role_id'],
                    'note' => $chara['note'] ?? null,
                ]));
            }

            $scenario->incidents()->delete();
            foreach ($request->scenario_incident as $day => $incident) {
                // 最終日よりあとの日にちの事件設定は無視する
                if ($day > $request->days) break;

                if (!empty($incident['incident_id']) && !empty($incident['character_id'])) {

                    if (!empty($incident['special_note'])) {
                        // 偽装事件公開名の入力内容をコードに変換し、多言語対応できるようにする
                        $aIncidents = __('tragedy_master.incident');
                        foreach ($aIncidents as $code => $aIncident) {
                            if ($aIncident['name'] == $incident['special_note']) {
                                $incident['special_note'] = $code;
                                break;
                            }
                        }
                    }

                    if ($this->isCrowd($incident['incident_id'])) {
                        // 群像事件はボードが犯人
                        if (in_array($incident['character_id'], $this->boardIds)) {
                            $scenario->incidents()->save(new ScenarioIncident([
                                'day' => $day,
                                'incident_id' => $incident['incident_id'],
                                'scenario_character_id' => $incident['character_id'],
                                'special_note' => $incident['special_note'] ?? null,
                            ]));
                        } else {
                            assert(false, '群像事件だけど犯人設定がおかしい');
                        }
                    } else {
                        // 普通の事件は登場人物が犯人
                        $scenarioChara = $scenario->characters->firstWhere('character_id', $incident['character_id']);
                        if (!empty($scenarioChara)) {
                            $scenario->incidents()->save(new ScenarioIncident([
                                'day' => $day,
                                'incident_id' => $incident['incident_id'],
                                'scenario_character_id' => $scenarioChara->id,
                                'special_note' => $incident['special_note'] ?? null,
                            ]));
                        } else {
                            assert(false, '通常の事件だけど犯人設定がおかしい');
                        }
                    }
                } else if (!empty($incident['incident_id']) || !empty($incident['character_id'])) {
                    // 事件と犯人のうち片方だけ設定しているパターンはNG
                    $errors["scenario_incident.$day.incident_id"] = __('事件と犯人はセットで指定してください');
                }
            }

            if (!empty($errors)) {
                throw ValidationException::withMessages($errors);
            }
        });
    }

    private function setScenarioDataFromRequest(Scenario $scenario, Request $request): Scenario {
        $scenario->user_id = Auth::id();
        $scenario->set_id = $request->set_id;
        $scenario->rule_y_id = $request->rule_y_id;
        $scenario->rule_x1_id = $request->rule_x1_id;
        $scenario->rule_x2_id = $request->rule_x2_id;
        $scenario->crazy_rule_y_id = $request->crazy_rule_y_id;
        $scenario->loops = $request->loops;
        $scenario->days = $request->days;
        $scenario->difficulty = $request->difficulty;
        $scenario->special_rule = $request->special_rule;
        $scenario->title = $request->title;
        $scenario->feature = $request->feature;
        $scenario->story = $request->story;
        $scenario->advice = $request->advice;
        $scenario->is_open = isset($request->is_open);
        $scenario->is_quiz = isset($request->is_quiz);
        $scenario->is_plus = isset($request->is_plus);
        return $scenario;
    }

    private $boardIds = [ 1001, 1002, 1003, 1004, 1099, ];
    private $crowdIncidentIds = null;
    private function isCrowd($incident_id):bool {
        if (empty($this->crowdIncidentIds)) {
            $this->crowdIncidentIds = Incident::where('is_crowd', true)->pluck('id');
        }
        return $this->crowdIncidentIds->contains($incident_id);
    }
}
