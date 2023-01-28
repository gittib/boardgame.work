<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class Character extends Model
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
    public function abilities() {
        return $this->hasMany(CharacterAbility::class)->orderBy('id');
    }

    // attribute
    public function getNameAttribute() {
        $code = $this->code;
        return __("tragedy_master.chara_name.${code}");
    }

    public function getCharaAttrsArrayAttribute(): Collection {
        return collect(explode(',', $this->chara_attrs));
    }

    public function getCharaAttrNamesArrayAttribute(): Collection {
        return $this->charaAttrsArray->map(fn($i) => __("tragedy_master.chara_attr.$i"));
    }
}
