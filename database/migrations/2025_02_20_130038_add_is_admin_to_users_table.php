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
        Schema::connection('mysql_for_migration')->table('users', function (Blueprint $table) {
            $table->boolean('is_admin')->default(false)->comment('true:サイト管理者');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::connection('mysql_for_migration')->table('users', function (Blueprint $table) {
            $table->dropColumn('is_admin');
        });
    }
};
