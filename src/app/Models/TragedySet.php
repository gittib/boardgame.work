<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

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

    public function getHasRuleX2Attribute(): bool {
        switch($this->abbr) {
        case 'FS':
            return false;
        default:
            return true;
        }
    }

    /** 大型拡張「レイ」で追加された拡張ルールが対応しているかどうか */
    public function getIsPlusSupportAttribute(): bool {
        switch($this->abbr) {
        case 'LL':
        case 'AHR':
            return false;
        default:
            return true;
        }
    }

    /** 偽装事件を含むかどうか */
    public function getHasFalsifiedIncidentsAttribute(): bool {
        return !empty($this->incidents->first(fn($i) => $i->code == 'FalsifiedIncidents'));
    }

    public function getRolesAttribute(): Collection {
        $roles = $this->rules->reduce(fn($roles, $rule) => ($roles ?? collect())->concat($rule->roles))->unique('id');
        if ($this->rules->some(fn($it) => $it->code == 'He-Who-Rises-from-the-Grave')) {
            $roles[] = TragedyRole::where('code', 'Zombie')->firstOrFail();
        }

        $fragments = TragedyRole::where('code', 'Fragments')->firstOrFail();
        if (!$roles->some(fn($it) => $it->id == $fragments->id)) {
            $roles[] = $fragments;
        }

        return $roles;
    }

    public function getRuleYsAttribute(): Collection {
        return $this->rules->filter(fn($it) => $it->is_y);
    }
    public function getRuleXsAttribute(): Collection {
        return $this->rules->filter(fn($it) => !$it->is_y);
    }

    public function getSummaryQrUrlAttribute():?string {
        switch($this->abbr) {
        case 'FS':
        case 'BTX':
        case 'MZ':
        case 'MCX':
        case 'HSA':
        case 'WM':
        case 'LL':
        case 'AHR':
            return '/images/qr/'.$this->abbr.'.jpg';
        default:
            return null;
        }
    }
}
