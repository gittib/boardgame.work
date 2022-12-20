<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class ScenarioIncident extends Model
{
    protected $guarded = ['id'];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    protected $with = [
        'incident',
    ];

    protected $appends = [
    ];

    // relations
    public function scenario() {
        return $this->belongsTo(Scenario::class);
    }

    public function criminal() {
        return $this->belongsTo(ScenarioCharacter::class, 'scenario_character_id');
    }

    public function incident() {
        return $this->belongsTo(Incident::class);
    }

    // attribute
    public function getNameAttribute(): string {
        return $this->incident->name;
    }

    /** 公開シートでの事件名 */
    public function getPublicNameAttribute(): string {
        if ($this->incident->code == 'FalsifiedIncidents') {
            return $this->special_note ?? $this->name;
        }
        return $this->name;
    }
}
