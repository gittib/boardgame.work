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
        'role',
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

    public function role() {
        return $this->belongsTo(TragedyRole::class, 'role_id');
    }

    // attribute
    public function getNameAttribute(): ?string {
        return $this->character?->name;
    }

    // functions
    public function hasAttr(string $attr): bool {
        return $this->character?->hasAttr($attr) ?? false;
    }
}
