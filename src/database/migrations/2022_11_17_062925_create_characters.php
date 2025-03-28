<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCharacters extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('mysql_for_migration')->create('characters', function (Blueprint $table) {
            $table->id()->comment('キャラクターマスタ');
            $table->timestamp("created_at")->useCurrent();
            $table->timestamp("updated_at")->useCurrent();
            $table->softDeletes();

            $table->string('code')->unique()->comment('キャラクターコード');
            $table->integer('start_board_id')->comment('初期配置ボード');
            $table->string('keep_out_board_ids')->comment('進入禁止ボード。カンマ区切りで記載');
            $table->string('chara_attrs')->comment('キャラクター属性(男女、学生、大人など)。カンマ区切りで記載');
            $table->integer('anxiety_critical')->comment('不安臨界');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('mysql_for_migration')->dropIfExists('characters');
    }
}
