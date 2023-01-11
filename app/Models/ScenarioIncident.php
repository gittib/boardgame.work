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

    /**
     * 犯人名を返す
     * 群像事件の場合を考慮する
     */
    public function getcriminalNameStrAttribute(): string {
        if (!empty($this->criminal_name)) {
            return $this->criminal_name;
        }
        if (!empty($this->criminal?->name)) {
            return $this->criminal?->name;
        }
        $boardName = __('tragedy_master.board_name.'.$this->scenario_character_id);
        return __(':boardの群像', ['board' => $boardName]);
    }
}
