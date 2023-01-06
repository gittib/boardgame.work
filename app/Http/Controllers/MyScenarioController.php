<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TragedySet;
use App\Models\Character;
use App\Models\Scenario;
use App\Models\ScenarioCharacter;
use App\Models\ScenarioIncident;
use App\Http\Requests\PostScenario;
use Auth;
use DB;

class MyScenarioController extends Controller
{
    /**
     * 自分のシナリオ一覧
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $scenarios = Auth::user()->scenarios()->paginate(100);
        return view('my_scenario.index', compact('scenarios'));
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

        return redirect()->route('scenario.show', ['scenario' => $scenario->id])->withMessage([
            'alert_message' => __('messages.alert.scenario.store'),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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

        return redirect()->route('scenario.show', ['scenario' => $scenario->id])->withMessage([
            'alert_message' => __('messages.alert.scenario.store'),
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

    public function preview(Request $request)
    {
        $scenario = new Scenario();
        $scenario->user_id = Auth::id();
        $scenario->set_id = $request->set_id;
        $scenario->rule_y_id = $request->rule_y_id;
        $scenario->rule_x1_id = $request->rule_x1_id;
        $scenario->rule_x2_id = $request->rule_x2_id;
        $scenario->loops = $request->loops;
        $scenario->days = $request->days;
        $scenario->difficulty = $request->difficulty;
        $scenario->title = $request->title;
        $scenario->feature = $request->feature;
        $scenario->advice = $request->advice;
        $scenario->is_open = isset($request->is_open);

        $scenario->characters = collect();
        foreach ($request->scenario_chara as $chara) {
            $scenario->characters[] = new ScenarioCharacter([
                'character_id' => $chara['character_id'] ?? null,
                'role_id' => $chara['role_id'] ?? null,
                'the_name' => $chara['the_name'] ?? null,
                'special_note' => $chara['special_note'] ?? null,
                'note' => $chara['note'] ?? null,
            ]);
        }

        $scenario->incidents = collect();
        foreach ($request->scenario_incident as $day => $incident) {
            if (!empty($incident['incident_id']) && !empty($incident['character_id'])) {
                $scenarioChara = $scenario->characters->firstWhere('character_id', $incident['character_id']);
                if (!empty($scenarioChara)) {
                    $tmp = new ScenarioIncident([
                        'day' => $day,
                        'incident_id' => $incident['incident_id'],
                    ]);
                    $tmp->criminal_name = Character::find($incident['character_id'])?->name;
                    $scenario->incidents[] = $tmp;
                }
            }
        }

        $isPreview = true;
        return view('scenario.show', compact('scenario', 'isPreview'));
    }

    private function storeScenario(Scenario $scenario, Request $request) {
        DB::transaction(function() use($scenario, $request) {
            $scenario->user_id = Auth::id();
            $scenario->set_id = $request->set_id;
            $scenario->rule_y_id = $request->rule_y_id;
            $scenario->rule_x1_id = $request->rule_x1_id;
            $scenario->rule_x2_id = $request->rule_x2_id;
            $scenario->loops = $request->loops;
            $scenario->days = $request->days;
            $scenario->difficulty = $request->difficulty;
            $scenario->title = $request->title;
            $scenario->feature = $request->feature;
            $scenario->advice = $request->advice;
            $scenario->is_open = isset($request->is_open);
            $scenario->save();

            $scenario->characters()->delete();
            foreach ($request->scenario_chara as $chara) {
                $scenario->characters()->save(new ScenarioCharacter([
                    'character_id' => $chara['character_id'],
                    'role_id' => $chara['role_id'],
                    //'the_name' => $chara['the_name'],
                    'special_note' => $chara['special_note'],
                    'note' => $chara['note'],
                ]));
            }

            $scenario->incidents()->delete();
            foreach ($request->scenario_incident as $day => $incident) {
                if (!empty($incident['incident_id']) && !empty($incident['character_id'])) {
                    $scenarioChara = $scenario->characters->firstWhere('character_id', $incident['character_id']);
                    if (!empty($scenarioChara)) {
                        $scenario->incidents()->save(new ScenarioIncident([
                            'day' => $day,
                            'incident_id' => $incident['incident_id'],
                            'scenario_character_id' => $scenarioChara->id,
                        ]));
                    }
                }
            }
        });
    }
}
