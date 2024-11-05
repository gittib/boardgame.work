<?php

use App\Models\Effect;
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
        Schema::connection('mysql_for_migration')->create('effect_units', function (Blueprint $table) {
            $table->id()->comment('ゲーム中のイベントで処理される効果単位');
            $table->timestamp("created_at")->useCurrent();
            $table->timestamp("updated_at")->useCurrent();
            $table->softDeletes();

            $table->foreignIdFor(Effect::class)->comment('効果単位を取りまとめる効果ID')->constrained()->onUpdate('cascade')->onDelete('cascade');

            $table->integer('effect_type')->comment('効果種別');
            $table->string('target')->nullable()->comment('効果対象');
            $table->string('param1')->nullable()->comment('付帯情報1');
            $table->string('param2')->nullable()->comment('付帯情報2');
            $table->string('param3')->nullable()->comment('付帯情報3');
            $table->json('other_params')->nullable()->comment('さらなる付帯情報');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::connection('mysql_for_migration')->dropIfExists('effect_units');
    }
};
