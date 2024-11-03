<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::connection('mysql_for_migration')->create('games', function (Blueprint $table) {
            $table->id()->comment('ゲームログ');
            $table->timestamp("created_at")->useCurrent();
            $table->timestamp("updated_at")->useCurrent();
            $table->softDeletes();

            $table->unsignedBigInteger("scenario_id")->nullable()->comment('脚本');
            $table->timestamp("started_at")->nullable()->index()->comment('ゲーム開始日時');
            $table->timestamp("ended_at")->nullable()->comment('ゲーム終了日時');
            $table->json("game_state")->nullable()->comment('最新のゲーム状態');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::connection('mysql_for_migration')->dropIfExists('games');
    }
};
