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
        Schema::connection('mysql_for_migration')->table('scenarios', function (Blueprint $table) {
            $table->boolean('is_preview')->default(false)->after('is_open')->comment('trueの場合、プレビューとして一時保存されている脚本');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::connection('mysql_for_migration')->table('scenarios', function (Blueprint $table) {
            $table->dropColumn('is_preview');
        });
    }
};
