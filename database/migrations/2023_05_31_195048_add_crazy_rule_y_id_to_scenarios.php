<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCrazyRuleYIdToScenarios extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('mysql_for_migration')->table('scenarios', function (Blueprint $table) {
            $table->unsignedBigInteger('crazy_rule_y_id')->nullable()->after('feature')->comment('狂った真実用のルールY');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('mysql_for_migration')->table('scenarios', function (Blueprint $table) {
            $table->dropColumn('crazy_rule_y_id');
        });
    }
}
