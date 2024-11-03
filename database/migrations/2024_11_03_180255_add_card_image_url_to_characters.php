<?php

use App\Models\Character;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Database\Seeders\SetCharacterImageUrl;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::connection('mysql_for_migration')->table('characters', function (Blueprint $table) {
            $table->string('card_image_url')->nullable()->comment('カード画像URL');
        });

        (new SetCharacterImageUrl)->run();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::connection('mysql_for_migration')->table('characters', function (Blueprint $table) {
            $table->dropColumn('card_image_url');
        });
    }
};
