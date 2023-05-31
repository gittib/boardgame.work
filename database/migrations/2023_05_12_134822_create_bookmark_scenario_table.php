<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBookmarkScenarioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('mysql_for_migration')->create('bookmark_scenario', function (Blueprint $table) {
            $table->id()->comment('ブックマークした脚本');
            $table->timestamp("created_at")->useCurrent();
            $table->timestamp("updated_at")->useCurrent();

            $table->unsignedBigInteger("user_id")->comment('ユーザー');
            $table->unsignedBigInteger("scenario_id")->comment('脚本');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('mysql_for_migration')->dropIfExists('bookmark_scenario');
    }
}
