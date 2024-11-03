<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Auth;

class Game extends Model
{
    use SoftDeletes;
    protected $guarded = ['id'];

    protected $hidden = [
    ];

    protected $appends = [
    ];

    protected $casts = [
        'started_at' => 'datetime',
        'ended_at' => 'datetime',
    ];

    // relations
    public function effects() {
        return $this->hasMany(Effect::class);
    }

    //public function likes() {
    //    return $this->belongsToMany(User::class, 'like_scenario');
    //}
    //public function bookmarks() {
    //    return $this->belongsToMany(User::class, 'bookmark_scenario');
    //}

    // scope
    public function scopeWhereStarted($query) {
        return $query->whereNotNull('started_at');
    }

    // attribute
    public function getUrlAttribute(): ?string {
        $date = $this->started_at ?? $this->created_at;
        if (empty($date) || empty($this->id)) return null;
        return route('game.show', [
            'year' => $date->year,
            'month' => $date->month,
            'day' => $date->day,
            'game' => $this->id,
        ]);
    }
}
