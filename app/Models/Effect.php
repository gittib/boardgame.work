<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Auth;

class Effect extends Model
{
    use SoftDeletes;
    protected $guarded = ['id'];

    protected $hidden = [
    ];

    protected $appends = [
    ];

    // relations
    public function game() {
        return $this->belongsTo(Game::class, 'game_id');
    }

    public function units() {
        return $this->hasMany(EffectUnit::class);
    }

    // scope

    // attribute
}
