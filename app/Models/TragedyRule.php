<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class TragedyRule extends Model
{
    use SoftDeletes;
    protected $guarded = ['id'];

    // relations
    public function roles() {
        return $this->belongsToMany(TragedyRole::class, 'tragedy_rule_role')
                    ->withPivot([
                        'people_count',
                    ]);
    }

    // attribute
    public function getNameAttribute() {
        return __('tragedy_master.rule_name.' . $this->attributes['name']);
    }
}
