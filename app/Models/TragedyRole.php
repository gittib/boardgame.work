<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class TragedyRole extends Model
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
        return $this->belongsToMany(TragedyRule::class, 'tragedy_rule_role');
    }

    // attribute
    public function getNameAttribute() {
        $code = $this->attributes['code'];
        return __("tragedy_master.role.{$code}.name");
    }

    public function getNoteAttribute() {
        $code = $this->attributes['code'];
        return __("tragedy_master.role.{$code}.note");
    }

    public function getIsPersonAttribute():bool {
        return $this->code == 'Person';
    }

    /** 友好無視を持っているか */
    public function getIsHostilityAttribute():bool {
        return in_array($this->hostility_type, [1, 2, 3]);
    }

    /** 特殊な友好無視を持っているか */
    public function getIsSpecialHostilityAttribute():bool {
        return in_array($this->hostility_type, [2, 3]);
    }
}
