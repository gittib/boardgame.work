<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateScenariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scenarios', function (Blueprint $table) {
            $table->id()->comment('脚本');
            $table->timestamp("created_at")->useCurrent();
            $table->timestamp("updated_at")->useCurrent();
            $table->softDeletes();

            $table->unsignedBigInteger("user_id")->comment('脚本作成者');
            $table->boolean("is_open")->default(0)->comment('公開フラグ');

            $table->unsignedBigInteger("set_id")->nullable()->comment('惨劇セット');
            $table->integer("loops")->comment('ループ数');
            $table->integer("days")->comment('日数');
            $table->string("special_rule")->nullable()->comment('特殊ルール');

            $table->unsignedBigInteger("rule_y_id")->nullable()->comment('ルールY');
            $table->unsignedBigInteger("rule_x1_id")->nullable()->comment('ルールX1');
            $table->unsignedBigInteger("rule_x2_id")->nullable()->comment('ルールX2');

            $table->string("title")->nullable()->comment('タイトル');
            $table->integer("difficulty")->nullable()->comment('難易度');
            $table->text("feature")->nullable()->comment('脚本の特徴');
            $table->text("advice")->nullable()->comment('脚本の回し方');
            $table->json("template")->nullable()->comment('置き方テンプレ');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('scenarios');
    }
}
