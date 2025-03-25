<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateScenarioIncidentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('mysql_for_migration')->create('scenario_incidents', function (Blueprint $table) {
            $table->id()->comment('脚本-事件');
            $table->timestamp("created_at")->useCurrent();
            $table->timestamp("updated_at")->useCurrent();

            $table->unsignedBigInteger("scenario_id")->comment('脚本');
            $table->integer("day")->comment('事件発生日');
            $table->unsignedBigInteger("incident_id")->comment('事件');
            $table->unsignedBigInteger("scenario_character_id")->comment('犯人');
            $table->string("special_note")->nullable()->comment('事件によって必要な特記事項(偽装事件等)');
            $table->string("note")->nullable()->comment('その他特記事項');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('mysql_for_migration')->dropIfExists('scenario_incidents');
    }
}
