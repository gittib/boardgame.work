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

        foreach($masterData->charaMaster as $code => $val) {
            $chara = Character::firstOrNew(compact('code'));
            $chara->code = $code;
            $chara->start_board_id = $val->start_board_id;
            $chara->keep_out_board_ids = $val->keep_out_board_ids ?? '';
            $chara->chara_attrs = $val->chara_attrs;
            $chara->anxiety_critical = $val->anxiety_critical;
            $chara->save();

            $order = 1;
            foreach ($val->abilities as $ab) {
                $ability = CharacterAbility::firstOrNew([
                    "character_id" => $chara->id,
                    "detail_code" => "{$code}-{$order}",
                ]);
                $ability->character_id = $chara->id;
                $ability->detail_code = "{$code}-{$order}";
                $ability->is_ability = $ab->is_ability ?? false;
                $ability->is_one_time_only = $ab->is_one_time_only ?? false;
                $ability->heart = $ab->heart ?? null;
                $ability->save();

                $order++;
            }
        }

        $personRole = TragedyRole::firstOrNew([
            'code' => 'Person',
        ]);
        $personRole->hostility_type = 0;
        $personRole->is_immortality = false;
        $personRole->max_count = null;
        $personRole->save();

        foreach($masterData->roleMaster as $code => $val) {
            $role = TragedyRole::firstOrNew(compact('code'));
            $role->code = $code;
            $role->hostility_type = $val->hostility_type;
            $role->is_immortality = $val->is_immortality;
            $role->max_count = $val->max_count ?? null;
            $role->save();
        }

        $allRoleIds = TragedyRole::get()->mapWithKeys(fn($it) => [$it->code => $it->id]);

        foreach($masterData->setMaster as $setData) {
            $set = TragedySet::firstOrNew([
                'abbreviation' => $setData->setName,
            ]);
            $set->abbreviation = $setData->setName;
            $set->save();

            $order = 1;
            foreach ($setData->rules as $ruleData) {
                $rule = TragedyRule::firstOrNew(['code' => $ruleData->ruleName]);
                $rule->code = $ruleData->ruleName;
                $rule->is_y = $ruleData->isRuleY;
                $rule->save();
                $rule->refresh();

                $set->rules()->syncWithPivotValues([$rule->id], compact('order'), false);
                $order++;

                $roleIds = collect($ruleData->roles)->map(fn($code) => $allRoleIds[$code] ?? null)->filter(fn($it) => isset($it));
                $rule->roles()->sync($roleIds);
            }

            foreach ($setData->incidents as $incidentCode) {
                $incident = Incident::firstOrCreate(['code' => $incidentCode]);
                $set->incidents()->syncWithoutDetaching([$incident->id]);
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
