<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Auth;

class EffectUnit extends Model
{
    use SoftDeletes;
    protected $guarded = ['id'];

    protected $hidden = [
    ];

    protected $appends = [
    ];

    // relations
    public function effect() {
        return $this->belongsTo(Effect::class, 'effect_id');
    }

    // scope

    // attribute
}
