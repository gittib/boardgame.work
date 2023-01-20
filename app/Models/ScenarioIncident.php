<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Str;

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

    public function criminal() {
        return $this->belongsTo(ScenarioCharacter::class, 'scenario_character_id');
    }

    public function incident() {
        return $this->belongsTo(Incident::class);
    }

    // attribute
    public function getNameAttribute(): string {
        return $this->incident->name;
    }

    /** 公開シートでの事件名 */
    public function getPublicNameAttribute(): string {
        if ($this->incident->code == 'FalsifiedIncidents' && !empty($this->special_note)) {
            $s = __('tragedy_master.incident.'.$this->special_note.'.name');
            if (Str::startsWith($s, 'tragedy_master')) {
                return $this->special_note;
            } else {
                return $s;
            }
        }
        return $this->name;
    }

    /**
     * 編集画面でのspecial_note入力値
     * special_noteは普通に文字列入力させるが、DB上ではIncidnet->codeの値で持つ。
     * 合致する翻訳文言がない場合はそのままの文言で持つ
     */
    public function getPublicNameInputAttribute(): ?string {
        if (empty($this->special_note)) return '';
        $s = __('tragedy_master.incident.'.$this->special_note.'.name');
        if (Str::startsWith($s, 'tragedy_master')) {
            return $this->special_note;
        } else {
            return $s;
        }
    }

    /**
     * 犯人名を返す
     * 群像事件の場合を考慮する
     */
    public function getcriminalNameStrAttribute(): string {
        if (!empty($this->criminal_name)) {
            return $this->criminal_name;
        }
        if ($this->incident?->is_crowd) {
            $boardName = __('tragedy_master.board_name.'.$this->scenario_character_id);
            return __(':boardの群像', ['board' => $boardName]);
        } else {
            return $this->criminal?->name;
        }
    }
}
