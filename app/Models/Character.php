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

    public function getInitialBoardCodeAttribute():int {
        if (in_array($this->code, ['Divinity', 'TransferStudent',])) {
            // 神格と転校生は初期状態で盤面にいないので特殊扱い
            return 1099;
        }
        switch($this->start_board_id) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 99:
                return 1000+$this->start_board_id;
        }
        assert(false, 'ここには来ないはず');
        return 1099;
    }

    public function getCharaAttrsArrayAttribute(): Collection {
        return collect(explode(',', $this->chara_attrs));
    }

    public function getCharaAttrNamesArrayAttribute(): Collection {
        return $this->charaAttrsArray->map(fn($i) => __("tragedy_master.chara_attr.$i"));
    }

    /** m:男、 f:女、 x:どちらでもない、 b:どちらでもある */
    public function getSexAttribute(): string {
        $isMale = false;
        $isFemale = false;
        foreach($this->charaAttrsArray as $val) {
            if ($val == 'male' || $val == 'boy') $isMale = true;
            if ($val == 'female' || $val == 'girl') $isFemale = true;
        }

        if ($isMale && $isFemale) return 'b';
        else if ($isMale) return 'm';
        else if ($isFemale) return 'f';
        else return 'x';
    }
}
