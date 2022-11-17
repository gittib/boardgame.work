<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTragedyRuleRole extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tragedy_rule_role', function (Blueprint $table) {
            $table->id()->comment('惨劇ルール-役職人数');
            $table->timestamp("created_at")->useCurrent();
            $table->timestamp("updated_at")->useCurrent();

            $table->unsignedBigInteger('tragedy_rule_id')->comment('惨劇ルールマスタID');
            $table->unsignedBigInteger('tragedy_role_id')->comment('役職マスタID');
            $table->integer('people_count')->comment('追加人数');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tragedy_rule_role');
    }
}
