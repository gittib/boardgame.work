<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Scenario extends Model
{
    use SoftDeletes;
    protected $guarded = ['id'];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $appends = [
    ];

    // relations
    public function writer() {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function set() {
        return $this->belongsTo(TragedySet::class, 'set_id');
    }

    public function characters() {
        return $this->hasMany(ScenarioCharacter::class);
    }
    public function incidents() {
        return $this->hasMany(ScenarioIncident::class);
    }

    // attribute
    public function getDifficultNameAttribute():string {
        return __('tragedy_master.difficulty.'.$this->difficulty);
    }

    public function getDifficultStarAttribute():string {
        $s = '';
        for ($i = 1; $i <= 8; $i++) {
            $s .= $i <= $this->difficulty ? '★' : '☆';
        }
        return $s;
    }

    public function getRuleYAttribute(): ?TragedyRule {
        return $this->set->rules->firstWhere('id', $this->rule_y_id);
    }
    public function getRuleX1Attribute(): ?TragedyRule {
        return $this->set->rules->firstWhere('id', $this->rule_x1_id);
    }
    public function getRuleX2Attribute(): ?TragedyRule {
        return $this->set->rules->firstWhere('id', $this->rule_x2_id);
    }
}
