<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class ScenarioCharacter extends Model
{
    protected $guarded = ['id'];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    protected $with = [
        'character',
    ];

    protected $appends = [
    ];

    // relations
    public function scenario() {
        return $this->belongsTo(Scenario::class);
    }

    public function character() {
        return $this->belongsTo(Character::class);
    }

    // attribute
    public function getNameAttribute() {
        return $this->character->name;
    }
}
