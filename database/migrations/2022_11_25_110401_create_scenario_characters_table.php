<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateScenarioCharactersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scenario_characters', function (Blueprint $table) {
            $table->id()->comment('脚本-キャラクター');
            $table->timestamp("created_at")->useCurrent();
            $table->timestamp("updated_at")->useCurrent();

            $table->unsignedBigInteger("scenario_id")->comment('脚本');
            $table->unsignedBigInteger("character_id")->comment('キャラクター');
            $table->unsignedBigInteger("role_id")->comment('役職');
            $table->string("the_name")->nullable()->comment('同一キャラを複数採用するなど、脚本で特別に名前を設定する時用');
            $table->string("special_note")->nullable()->comment('大物のテリトリーや従者の初期配置など、キャラ固有の特記事項');
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
        Schema::dropIfExists('scenario_characters');
    }
}
