<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIsCrowdToIncidents extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('incidents', function (Blueprint $table) {
            $table->boolean('is_crowd')->default(false)->comment('true:群像事件');
        });

        \DB::table('incidents')->whereIn('code', [
            'ApocalypseOfTheDead',
            'TheNightOfMadness',
            'SpewingOfFilth',
            'AwakeningOfTheCurse',
        ])->update(['is_crowd' => true]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('incidents', function (Blueprint $table) {
            $table->dropColumn('is_crowd');
        });
    }
}
