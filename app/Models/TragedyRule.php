<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class TragedyRule extends Model
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
    public function roles() {
        return $this->belongsToMany(TragedyRole::class, 'tragedy_rule_role');
    }

    // attribute
    public function getNameAttribute() {
        return __('tragedy_master.rule_name.' . $this->attributes['code']);
    }
}
