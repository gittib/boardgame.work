<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TragedySet;
use App\Models\TragedyRule;
use App\Models\TragedyRole;
use App\Models\Incident;

class InitializeMasterData extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app()->setLocale('ja');
        $masterData = json_decode(file_get_contents(database_path('seeders/data/master_data.json')));

        TragedyRole::truncate();
        foreach($masterData->roleMaster as $code => $val) {
            TragedyRole::create([
                'code' => $code,
                'hostility_type' => $val->hostility_type,
                'is_immortality' => $val->is_immortality,
            ]);
        }

        TragedySet::truncate();
        TragedyRule::truncate();
        Incident::truncate();
        foreach($masterData->setMaster as $setData) {
            $set = TragedySet::create([
                'abbreviation' => $setData->setName,
            ]);

            $order = 1;
            foreach ($setData->rules as $ruleData) {
                $code = $ruleData->ruleName;
                $rule = TragedyRule::firstOrNew(compact('code'));
                $rule->is_y = $ruleData->isRuleY;
                $rule->save();

                $set->rules()->attach($rule->id, compact('order'));

                $roleIds = TragedyRole::whereIn('code', $ruleData->roles)->pluck('id');
                $rule->roles()->attach($roleIds);

                $order++;
            }

            foreach ($setData->incidents as $incidentName) {
                $incident = Incident::firstOrCreate(['code' => $incidentName]);
                $set->incidents()->attach($incident->id);
            }
        }
    }
}
