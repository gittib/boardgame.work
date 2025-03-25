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
            $table->string('public_message')->nullable()->after('advice')->comment('公開用コメント');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::connection('mysql_for_migration')->table('scenarios', function (Blueprint $table) {
            $table->dropColumn('public_message');
        });
    }
};
