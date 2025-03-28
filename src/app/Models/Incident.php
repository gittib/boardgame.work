<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Incident extends Model
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
    public function sets() {
        return $this->belongsToMany(TragedySet::class, 'tragedy_set_incident');
    }

    // attribute
    public function getNameAttribute() {
        $code = $this->attributes['code'];
        return __("tragedy_master.incident.{$code}.name");
    }

    public function getNoteAttribute() {
        $code = $this->attributes['code'];
        return __("tragedy_master.incident.{$code}.note");
    }

    public function getIsSpecialAttribute():bool {
        if ($this->is_crowd) return true;
        return false;
    }
}
