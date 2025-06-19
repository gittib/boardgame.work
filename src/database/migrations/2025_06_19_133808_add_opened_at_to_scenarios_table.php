<?php

use App\Models\Scenario;
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
            $table->datetime('opened_at')->nullable()->after('is_open')->comment('公開日時');
        });
        $scenarios = Scenario::where('is_open', true)->get();
        foreach ($scenarios as $scenario) {
            $scenario->opened_at = $scenario->updated_at;
            $scenario->save();
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::connection('mysql_for_migration')->table('scenarios', function (Blueprint $table) {
            $table->dropColumn('opened_at');
        });
    }
};
