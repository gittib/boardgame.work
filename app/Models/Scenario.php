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

    /** キーパーソンを少女にしなければならないルールが採用されていれば、それを返す */
    public function getGirlKeyRuleAttribute(): ?TragedyRule {
        $aRuleY = ['Sign-me-up', 'World-of-Rebellion'];
        $aRuleX = ['The-Girl-with-the-Key'];
        if (in_array($this->ruleY?->code, $aRuleY)) {
            return $this->ruleY;
        }
        if (in_array($this->ruleX1?->code, $aRuleX)) {
            return $this->ruleX1;
        }
        if (in_array($this->ruleX2?->code, $aRuleX)) {
            return $this->ruleX2;
        }
        return null;
    }

    /** 脚本の役職構成にエラーがないか確認する */
    public function getInvalidConditionsAttribute():array {
        $errors = []; // エラーがあればこの変数に突っ込んでいく

        if ($this->rule_x1_id == $this->rule_x2_id) {
            $errors[] = __('ルールXが重複しています。');
        }

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

        // 脚本で実際に採用されてる人数をカウント。ついでに個別で判定できるものもチェックする
        $criminalRoles = ['Fool', 'Twin', 'Zettisha', 'Hitohashira', 'Joker', ]; // 犯人にならなければならない役職
        $notCriminalRoles = ['Maytantei', ]; // 犯人にならない役職
        $irregularRoleId = null; // イレギュラーの役職
        $copyCatRoleId = null; // コピーキャットの役職
        $vampSex = null; // ヴァンパイアの性別
        $keySex = null; // キーパーソンの性別
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
                if ($chara->character->code == 'AI') {
                    // AIがパーソンは禁止
                    if ($chara->role->code == 'Person') {
                        $errors[] = __(':nameに:roleが配役されています', ['name' => __('tragedy_master.chara_name.AI'), 'role' => __('tragedy_master.role.Person.name')]);
                    }
                }

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

            // ルールによる役職の縛り違反をチェック
            if ($chara->role?->code == 'KeyPerson') {
                if (!empty($this->girl_key_rule)) {
                    // キーパーソンを少女にしなければならないルールが採用されている場合、少女でないキーパーソンはNG
                    if (empty($chara->character->chara_attrs_array->first(fn($i) => $i == 'girl'))) {
                        $errors[] = __('「:rule」が採用されていますが、:roleが:attrではありません。', [
                            'rule' => $this->girl_key_rule->name,
                            'role' => __('tragedy_master.role.KeyPerson.name'),
                            'attr' => __('tragedy_master.chara_attr.girl'),
                        ]);
                    }
                }
                if ($this->ruleY?->code == 'Noble-Blood') {
                    $keySex = $chara->character->sex;
                }
            } else if ($chara->role?->code == 'Vampire') {
                if ($this->ruleY?->code == 'Noble-Blood') {
                    $vampSex = $chara->character->sex;
                }
            } else if ($chara->role?->code == 'Ninja') {
                if ($this->ruleY?->code == 'Battle-of-the-Han') {
                    // 「漢の戦い」が採用されている場合、男性でないニンジャはNG
                    if (empty($chara->character->chara_attrs_array->first(fn($i) => $i == 'male'))) {
                        $errors[] = __('「:rule」が採用されていますが、:roleが:attrではありません。', [
                            'rule' => $this->ruleY?->name,
                            'role' => __('tragedy_master.role.Ninja.name'),
                            'attr' => __('tragedy_master.chara_attr.male'),
                        ]);
                    }
                }
            } else if ($chara->role?->code == 'Fragments') {
                if ($this->ruleY?->code == 'World-of-Rebellion') {
                    // 「叛逆の世界」が採用されている場合、少女でないフラグメントはNG
                    if (empty($chara->character->chara_attrs_array->first(fn($i) => $i == 'girl'))) {
                        $errors[] = __('「:rule」が採用されていますが、:roleが:attrではありません。', [
                            'rule' => $this->ruleY?->name,
                            'role' => __('tragedy_master.role.KeyPerson.name'),
                            'attr' => __('tragedy_master.chara_attr.girl'),
                        ]);
                    }
                }
            } else if ($chara->role?->code == 'Alice') {
                if ($this->ruleX1?->code == 'Alice-in-Mirrorland' || $this->ruleX2?->code == 'Alice-in-Mirrorland') {
                    // 「鏡の国のアリス」が採用されている場合、少女でないアリスはNG
                    if (empty($chara->character->chara_attrs_array->first(fn($i) => $i == 'girl'))) {
                        $rule = ($this->ruleX1?->code == 'Alice-in-Mirrorland') ? $this->ruleX1 : $this->ruleX2;
                        $errors[] = __('「:rule」が採用されていますが、:roleが:attrではありません。', [
                            'rule' => $rule->name,
                            'role' => __('tragedy_master.role.Alice.name'),
                            'attr' => __('tragedy_master.chara_attr.girl'),
                        ]);
                    }
                }
            }

            // 役職による事件の犯人設定が正しいか確認
            if (in_array($chara->role?->code, $criminalRoles)) {
                $i = $this->incidents->first(function($i) use($chara) {
                    if (!empty($i->scenario_character_id)) {
                        return $i->scenario_character_id == $chara->id;
                    } else {
                        return $i->criminal_name == $chara->name;
                    }
                });
                if (empty($i)) {
                    $errors[] = __(':charaに:roleが配役されていますが、事件の犯人になっていません。', [
                        'chara' => $chara->character?->name,
                        'role' => $chara->role?->name,
                    ]);
                }
            } else if (in_array($chara->role?->code, $notCriminalRoles)) {
                $i = $this->incidents->first(function($i) use($chara) {
                    if (!empty($i->scenario_character_id)) {
                        return $i->scenario_character_id == $chara->id;
                    } else {
                        return $i->criminal_name == $chara->name;
                    }
                });
                if (!empty($i)) {
                    $errors[] = __(':charaに:roleが配役されていますが、:roleは事件の犯人になれません。', [
                        'chara' => $chara->character?->name,
                        'role' => $chara->role?->name,
                    ]);
                }
            }
        }

        // 過不足のある役職を確認
        foreach ($roleCounter as $val) {
            $val = (object)$val;
            if ($val->code == 'Person') continue;
            if ($val->picked < $val->count) {
                if ($val->code == 'Minus' && $this->ruleX1?->code == 'The-Worst-Retired-Book') {
                    // 最低の却本が採用されている場合、マイナスは足りなくてもいい
                } else {
                    $errors[] = __(':roleが:diff人足りません。', ['role' => $val->name, 'diff' => $val->count - $val->picked]);
                }
            } else if ($val->picked > $val->count) {

                // TODO: 嘘憑きの秘密が採用されててシークレットがいない場合の判定

                if ($val->code == 'Fragments' && $this->set->isPlusSupport && $val->picked == 1) {
                    // プラス拡張の場合、フラグメントを一人入れても入れなくてもいいので、ここはエラーじゃない
                } else {
                    $errors[] = __(':roleが:diff人多すぎます。', ['role' => $val->name, 'diff' => $val->picked - $val->count]);
                }
            }
        }

        // コピーキャットが他の人の役職をコピーしてるか確認
        if (!empty($copyCatRoleId)) {
            $othersCnt = ($roleCounter[$copyCatRoleId] ?? ['picked' => 0])['picked'];
            if ($othersCnt <= 0 && $copyCatRoleId != $irregularRoleId) {
                $errors[] = __(':nameが他の登場人物の役職をコピーしていません。', ['name' => __('tragedy_master.chara_name.CopyCat')]);
            }
        }

        if ($vampSex && $keySex) {
            // ヴァンパイアとキーパーソンが異性かどうか確認
            if ($vampSex == 'x') {
                $errors[] = __('「:rule」が採用されていますが、:roleの性別が不正です。', [
                    'rule' => __('tragedy_master.rule_name.Noble-Blood'),
                    'role' => __('tragedy_master.role.Vampire.name'),
                ]);
            }
            if ($keySex == 'x') {
                $errors[] = __('「:rule」が採用されていますが、:roleの性別が不正です。', [
                    'rule' => __('tragedy_master.rule_name.Noble-Blood'),
                    'role' => __('tragedy_master.role.KeyPerson.name'),
                ]);
            }
            if ($vampSex == $keySex) {
                $errors[] = __('「:rule」が採用されていますが、:rolevと:rolekが同性です。', [
                    'rule' => __('tragedy_master.rule_name.Noble-Blood'),
                    'rolev' => __('tragedy_master.role.Vampire.name'),
                    'rolek' => __('tragedy_master.role.KeyPerson.name'),
                ]);
            }
        }

        if ($this->ruleX1?->code == 'The-one-that-proclaims-destruction' || $this->ruleX2?->code == 'The-one-that-proclaims-destruction') {
            // 滅亡を謳うものがあったら、自殺を採用してるかチェック
            $i = $this->incidents->first(fn($i) => $i->code == 'suicide');
            if (empty($i)) {
                $errors[] = __('「:rule」が採用されていますが、:elementが採用されていません。', [
                    'rule' => __('tragedy_master.rule_name.The-one-that-proclaims-destruction'),
                    'element' => __('tragedy_master.incident.suicide.name'),
                ]);
            }
        } else if ($this->ruleX1?->code == 'Crazy-Truth' || $this->ruleX2?->code == 'Crazy-Truth') {
            // 狂った真実があったら、情報屋を採用してるかチェック
            $c = $this->characters->first(fn($c) => $c->character->code == 'Informant');
            if (empty($c)) {
                $errors[] = __('「:rule」が採用されていますが、:elementが採用されていません。', [
                    'rule' => __('tragedy_master.rule_name.Crazy-Truth'),
                    'element' => __('tragedy_master.chara_name.Informant'),
                ]);
            }
        }

        return $errors;
    }
}
