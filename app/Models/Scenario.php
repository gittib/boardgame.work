<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Scenario extends Model
{
    use SoftDeletes;
    protected $guarded = ['id'];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $appends = [
    ];

    // relations
    public function writer() {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function set() {
        return $this->belongsTo(TragedySet::class, 'set_id');
    }

    public function characters() {
        return $this->hasMany(ScenarioCharacter::class);
    }
    public function incidents() {
        return $this->hasMany(ScenarioIncident::class);
    }

    // attribute
    public function getDifficultNameAttribute():string {
        return __('tragedy_master.difficulty.'.$this->difficulty);
    }

    public function getDifficultStarAttribute():string {
        $s = '';
        for ($i = 1; $i <= 8; $i++) {
            $s .= $i <= $this->difficulty ? '★' : '☆';
        }
        return $s;
    }

    public function getRuleYAttribute(): ?TragedyRule {
        return $this->set->rules->firstWhere('id', $this->rule_y_id);
    }
    public function getRuleX1Attribute(): ?TragedyRule {
        return $this->set->rules->firstWhere('id', $this->rule_x1_id);
    }
    public function getRuleX2Attribute(): ?TragedyRule {
        return $this->set->rules->firstWhere('id', $this->rule_x2_id);
    }

    public function getInvalidConditionsAttribute():array {
        $errors = []; // エラーがあればこの変数に突っ込んでいく

        // 脚本で採用すべき役職の人数を確認
        $roles = $this->ruleY?->roles ?? collect();
        $roles = $roles->concat($this->ruleX1?->roles ?? collect());
        $roles = $roles->concat($this->ruleX2?->roles ?? collect());
        $roleCounter = $roles->groupBy('code')->mapWithKeys(fn($a) => [
            $a->first()->id => [
                'count' => min($a->count(), ($a->first()->max_count ?? 100)),
                'code' => $a->first()->code,
                'name' => $a->first()->name,
                'picked' => 0,
            ]
        ])->toArray();

        // 脚本で実際に採用されてる人数をカウント
        $irregularRoleId = null;
        $copyCatRoleId = null;
        foreach($this->characters as $chara) {
            if ($chara->character->code == 'Irregular') {
                // イレギュラーは判定ロジックが全然別
                $irregularRoleId = $chara->role_id;
                if ($chara->role->code == 'Person') {
                    $errors[] = __(':nameに:roleが配役されています', ['name' => __('tragedy_master.chara_name.Irregular'), 'role' => __('tragedy_master.role.Person.name')]);
                } else if (!empty($roleCounter[$chara->role_id])) {
                    $errors[] = __(':nameに通常の役職が配役されています', ['name' => __('tragedy_master.chara_name.Irregular')]);
                }
            } else if ($chara->character->code == 'CopyCat') {
                // コピーキャットはあとから判定する
                $copyCatRoleId = $chara->role_id;
            } else {
                if (!empty($roleCounter[$chara->role_id])) {
                    $roleCounter[$chara->role_id]['picked']++;
                } else {
                    $roleCounter[$chara->role_id] = [
                        'count' => 0,
                        'code' => $chara->role->code,
                        'name' => $chara->role->name,
                        'picked' => 1,
                    ];
                }
            }
        }

        // 過不足のある役職を確認
        foreach ($roleCounter as $val) {
            $val = (object)$val;
            if ($val->code == 'Person') continue;
            if ($val->picked < $val->count) {
                $errors[] = __(':roleが:diff人足りません。', ['role' => $val->name, 'diff' => $val->count - $val->picked]);
            } else if ($val->picked > $val->count) {
                $errors[] = __(':roleが:diff人多すぎます。', ['role' => $val->name, 'diff' => $val->picked - $val->count]);
            }
        }

        // コピーキャットが他の人の役職をコピーしてるか確認
        if (!empty($copyCatRoleId)) {
            $othersCnt = ($roleCounter[$copyCatRoleId] ?? ['picked' => 0])['picked'];
            if ($othersCnt <= 0 && $copyCatRoleId != $irregularRoleId) {
                $errors[] = __(':nameが他の登場人物の役職をコピーしていません。', ['name' => __('tragedy_master.chara_name.CopyCat')]);
            }
        }

        return $errors;
    }
}
