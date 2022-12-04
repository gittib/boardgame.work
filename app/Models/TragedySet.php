<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class TragedySet extends Model
{
    use SoftDeletes;
    protected $guarded = ['id'];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $appends = [
        'name',
    ];

    // relations
    public function rules() {
        return $this->belongsToMany(TragedyRule::class, 'tragedy_set_rule')->orderBy('tragedy_set_rule.order');
    }

    public function incidents() {
        return $this->belongsToMany(Incident::class, 'tragedy_set_incident');
    }

    // attribute
    public function getAbbrAttribute() {
        return $this->abbreviation;
    }

    public function getNameAttribute() {
        return __('tragedy_master.set_name.' . $this->abbr);
    }

    public function getHasRuleX2Attribute() {
        switch($this->abbr) {
        case 'FS':
            return false;
        default:
            return true;
        }
    }

    public function getRolesAttribute() {
        return $this->rules->reduce(fn($roles, $rule) => ($roles ?? collect())->concat($rule->roles))->unique('id');
    }

    public function getRuleYsAttribute() {
        return $this->rules->filter(fn($r) => $r->is_y);
    }
    public function getRuleXsAttribute() {
        return $this->rules->filter(fn($r) => !$r->is_y);
    }
}
