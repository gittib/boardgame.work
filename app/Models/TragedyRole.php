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

    private const DIA_HTML = '<span class="dia">♢</span>';
    private const BLACK_DIA_HTML = '<span class="dia black">♦</span>';
    private const HEART_HTML = '<i class="fa-regular fa-heart"></i>';
    private const BREAK_HEART_HTML = '<i class="fas fa-heart-broken"></i>';
    private const STAR_HTML = '<i class="fa-regular fa-star"></i>';
    private const BLACK_STAR_HTML = '<i class="fa-solid fa-star"></i>';

    // relations
    public function rules() {
        return $this->belongsToMany(TragedyRule::class, 'tragedy_rule_role');
    }

    // attribute
    public function getNameAttribute() {
        $code = $this->attributes['code'];
        return __("tragedy_master.role.${code}.name");
    }

    public function getNoteAttribute() {
        $code = $this->attributes['code'];
        return __("tragedy_master.role.${code}.note");
    }

    public function getHostilityTypeHtmlAttribute():string {
        switch ($this->hostility_type) {
            case 1: // 友好無視
                return self::DIA_HTML.self::BREAK_HEART_HTML;
            case 2: // 絶対友好無視
                return self::BLACK_DIA_HTML.self::BREAK_HEART_HTML;
            case 3: // 傀儡友好無視
                return self::BLACK_DIA_HTML.self::BREAK_HEART_HTML;
            default: // その他
                return self::DIA_HTML.self::HEART_HTML;
        }
    }

    public function getImmortalityHtmlAttribute():string {
        if ($this->is_immortality) {
            return self::BLACK_STAR_HTML;
        } else {
            return self::STAR_HTML;
        }
    }

    public function getIsPersonAttribute():bool {
        return $this->code == 'Person';
    }
}
