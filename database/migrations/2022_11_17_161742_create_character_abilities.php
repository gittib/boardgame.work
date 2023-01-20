<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCharacterAbilities extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('character_abilities', function (Blueprint $table) {
            $table->id()->comment('キャラクター能力マスタ');
            $table->timestamp("created_at")->useCurrent();
            $table->timestamp("updated_at")->useCurrent();
            $table->softDeletes();

            $table->unsignedBigInteger('character_id')->comment('キャラクターマスタID');
            $table->boolean('is_ability')->default(0)->comment('特性かどうか');
            $table->boolean('is_one_time_only')->default(0)->comment('ループ１回制限かどうか');
            $table->integer('heart')->nullable()->comment('必要な友好カウンター数');
            $table->string('detail_code')->unique()->comment('能力詳細コード');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('character_abilities');
    }
}
