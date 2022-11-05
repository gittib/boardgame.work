<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Auth;
use Str;

class Media extends Model
{
    use SoftDeletes;
    protected $guarded = ['id'];

    protected $keyType = 'string';
    public $incrementing = false;

    /**
     * モデルの「起動」メソッド
     *
     * @return void
     */
    protected static function booted()
    {
        static::registerEventListeners();
    }

    /** イベント設定 */
    private static function registerEventListeners() {
        static::creating(function ($media) {
            if (!empty($media->id)) $media->id = Str::uuid();
            if (Auth::check()) $media->user_id = Auth::id();
        });
    }
}
