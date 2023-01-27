<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TragedySet;
use App\Models\TragedyRule;
use App\Models\TragedyRole;
use App\Models\Incident;
use App\Models\Character;
use App\Models\CharacterAbility;
use DB;

class InitializeMasterData extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $masterData = json_decode(file_get_contents(database_path('seeders/data/master_data.json')));

        Character::truncate();
        CharacterAbility::truncate();
        foreach($masterData->charaMaster as $code => $val) {
            $chara = Character::create([
                "code" => $code,
                "start_board_id" => $val->start_board_id,
                "keep_out_board_ids" => $val->keep_out_board_ids ?? '',
                "chara_attrs" => $val->chara_attrs,
                "anxiety_critical" => $val->anxiety_critical,
            ]);
            $order = 1;
            foreach ($val->abilities as $ab) {
                CharacterAbility::create([
                    "character_id" => $chara->id,
                    "is_ability" => $ab->is_ability ?? false,
                    "is_one_time_only" => $ab->is_one_time_only ?? false,
                    "heart" => $ab->heart ?? null,
                    "detail_code" => "${code}-${order}",
                ]);
                $order++;
            }
        }

        TragedyRole::truncate();
        TragedyRole::create([
            'code' => 'Person',
            'hostility_type' => 0,
            'is_immortality' => false,
            'max_count' => null,
        ]);
        foreach($masterData->roleMaster as $code => $val) {
            $role = TragedyRole::create([
                'code' => $code,
                'hostility_type' => $val->hostility_type,
                'is_immortality' => $val->is_immortality,
                'max_count' => $val->max_count ?? null,
            ]);
        }

        DB::table('tragedy_set_rule')->truncate();
        DB::table('tragedy_set_incident')->truncate();
        DB::table('tragedy_rule_role')->truncate();

        TragedySet::truncate();
        TragedyRule::truncate();
        Incident::truncate();
        foreach($masterData->setMaster as $setData) {
            $set = TragedySet::create([
                'abbreviation' => $setData->setName,
            ]);

            $order = 1;
            foreach ($setData->rules as $ruleData) {
                $rule = TragedyRule::where(['code' => $ruleData->ruleName])->first();
                if (empty($rule)) {
                    $rule = TragedyRule::create([
                        'code' => $ruleData->ruleName,
                        'is_y' => $ruleData->isRuleY,
                    ]);

                    foreach($ruleData->roles as $role) {
                        $roleId = TragedyRole::where('code', $role)->pluck('id');
                        $rule->roles()->attach($roleId);
                    }
                }

                $set->rules()->attach($rule->id, compact('order'));

                $order++;
            }

            foreach ($setData->incidents as $incidentName) {
                $incident = Incident::firstOrCreate(['code' => $incidentName]);
                $set->incidents()->attach($incident->id);
            }
        }

        Incident::whereIn('code', [
            'AwakeningOfTheCurse',
            'TheNightOfMadness',
            'ApocalypseOfTheDead',
            'SpewingOfFilth',
        ])->update(['is_crowd' => 1]);
    }
}
