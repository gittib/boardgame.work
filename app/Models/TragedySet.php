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

    /** 偽装事件を含むかどうか */
    public function getHasFalsifiedIncidentsAttribute():bool {
        return !empty($this->incidents->first(fn($i) => $i->code == 'FalsifiedIncidents'));
    }

    public function getRolesAttribute() {
        $roles = $this->rules->reduce(fn($roles, $rule) => ($roles ?? collect())->concat($rule->roles))->unique('id');
        $fragments = TragedyRole::where('code', 'Fragments')->firstOrFail();
        if (empty($roles->first(fn($r) => $r->id == $fragments->id))) {
            $roles[] = $fragments;
        }
        return $roles;
    }

    public function getRuleYsAttribute() {
        return $this->rules->filter(fn($r) => $r->is_y);
    }
    public function getRuleXsAttribute() {
        return $this->rules->filter(fn($r) => !$r->is_y);
    }
}
