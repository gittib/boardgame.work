<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable, SoftDeletes;

    protected $guarded = ['id'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
        'password',
        'remember_token',
        'twitter_id',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function scenarios() {
        return $this->hasMany(Scenario::class)->with('set');
    }

    public function bookmarkScenarios() {
        return $this->belongsToMany(Scenario::class, 'bookmark_scenario')->whereVisible()->with('set');
    }

    public function likeScenarios() {
        return $this->belongsToMany(Scenario::class, 'like_scenario')->whereVisible()->with('set');
    }

    /** このサイトに脚本を投稿している人で絞り込み */
    public function scopeWhereHasScenario(Builder $query): Builder {
        return $query->whereHas('scenarios', function(Builder $q) {
            $q->whereVisible();
        });
    }
}
