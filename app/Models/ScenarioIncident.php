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

    public function incident() {
        return $this->belongsTo(Incident::class);
    }

    // attribute
    public function getNameAttribute() {
        return $this->incident->name;
    }
}
