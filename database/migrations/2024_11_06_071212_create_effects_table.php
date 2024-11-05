<?php

use App\Models\Game;
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
        Schema::connection('mysql_for_migration')->create('effects', function (Blueprint $table) {
            $table->id()->comment('ゲーム中の効果');
            $table->timestamp("created_at")->useCurrent();
            $table->timestamp("updated_at")->useCurrent();
            $table->softDeletes();

            $table->foreignIdFor(Game::class)->comment('ゲームID')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->string('log_text')->nullable()->comment('ログ表示用テキスト');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::connection('mysql_for_migration')->dropIfExists('effects');
    }
};
