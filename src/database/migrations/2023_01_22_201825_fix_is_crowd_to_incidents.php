<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Incident;

class FixIsCrowdToIncidents extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Incident::whereIn('code', [
            'AwakeningOfTheCurse',
            'TheNightOfMadness',
            'ApocalypseOfTheDead',
            'SpewingOfFilth',
        ])->update(['is_crowd' => 1]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
    }
}
