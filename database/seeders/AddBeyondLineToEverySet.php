<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TragedySet;
use App\Models\TragedyRule;
use App\Models\Incident;
use DB;

class AddBeyondLineToEverySet extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ruleId = TragedyRule::where('code', 'Beyond-the-World-Line')->firstOrFail()->id;
        $incidentIds = Incident::whereIn('code', ['HopeForTheFuture', 'TheDarknessOfDespair'])->pluck('id');

        $setIds = TragedySet::pluck('id');
        foreach($setIds as $setId) {
            $rel = DB::table('tragedy_set_rule')->where([
                'tragedy_set_id' => $setId,
                'tragedy_rule_id' => $ruleId,
            ])->first();
            if (empty($rel)) {
                $order = DB::table('tragedy_set_rule')
                    ->where('tragedy_set_id', $setId)
                    ->max('order') + 1;
                DB::table('tragedy_set_rule')->insert([
                    'tragedy_set_id' => $setId,
                    'tragedy_rule_id' => $ruleId,
                    'order' => $order,
                ]);
            }

            foreach($incidentIds as $incidentId) {
                $rel = DB::table('tragedy_set_incident')->where([
                    'tragedy_set_id' => $setId,
                    'incident_id' => $incidentId,
                ])->first();
                if (empty($rel)) {
                    DB::table('tragedy_set_incident')->insert([
                        'tragedy_set_id' => $setId,
                        'incident_id' => $incidentId,
                    ]);
                }
            }
        }
    }
}
