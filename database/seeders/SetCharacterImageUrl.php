<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Character;

class SetCharacterImageUrl extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $masterData = json_decode(file_get_contents(database_path('seeders/data/master_data.json')));

        foreach($masterData->charaMaster as $code => $val) {
            Character::where('code', $code)->update([
                'card_image_url' => $val->card_image_url ?? null,
            ]);
        }
    }
}
