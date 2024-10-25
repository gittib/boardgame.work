<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Auth;

class Scenario extends Model
{
    use SoftDeletes;
    protected $guarded = ['id'];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
        'rule_y_id',
        'rule_x1_id',
        'rule_x2_id',
        'import_hash',
    ];

    protected $appends = [
        'rule_y',
        'rule_x1',
        'rule_x2',
        'crazy_rule_y',
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

    public function likes() {
        return $this->belongsToMany(User::class, 'like_scenario');
    }
    public function bookmarks() {
        return $this->belongsToMany(User::class, 'bookmark_scenario');
    }

    // scope
    public function scopeWhereOpen($query) {
        return $query->where('is_open', true)
            ->where('is_preview', false);
    }

    public function scopeWhereVisible($query) {
        return $query->where(function($q) {
            $q->where('scenarios.is_open', true);
            if (Auth::check()) {
                $q->orWhere('scenarios.user_id', Auth::id());
            }
        });
    }

    // attribute
    public function getSetNameAttribute():string {
        if ($this->is_plus) {
            return ($this->set?->name ?? '') . '＋';
        } else {
            return $this->set?->name;
        }
    }

    public function getSetAbbrAttribute():string {
        if ($this->is_plus) {
            return ($this->set?->abbr ?? '') . '＋';
        } else {
            return $this->set?->abbr;
        }
    }

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
        return $this->set?->rules?->firstWhere('id', $this->rule_y_id);
    }
    public function getRuleX1Attribute(): ?TragedyRule {
        return $this->set?->rules?->firstWhere('id', $this->rule_x1_id);
    }
    public function getRuleX2Attribute(): ?TragedyRule {
        return $this->set?->rules?->firstWhere('id', $this->rule_x2_id);
    }

    /** 狂った真実で指定されているルールY */
    public function getCrazyRuleYAttribute(): ?TragedyRule {
        if (empty($this->crazy_rule_y_id)) return null;
        if (in_array('Crazy-Truth', [$this->ruleX1?->code, $this->ruleX2?->code])) {
            return $this->set?->rules?->firstWhere('id', $this->crazy_rule_y_id);
        }
        return null;
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
        if (empty($this->calcedInvalidConditions)) {
            $this->calcedInvalidConditions = $this->getInvalidConditions();
        }
        return $this->calcedInvalidConditions['errors'];
    }
    private function getInvalidConditions():array {
        $errors = []; // エラーがあればこの変数に突っ込んでいく

        if ($this->rule_x1_id == $this->rule_x2_id) {
            $errors[] = __('ルールXが重複しています。');
        }

        // 脚本で採用すべき役職の人数を確認
        $roles = $this->ruleY?->roles ?? collect();
        $roles = $roles->concat($this->ruleX1?->roles ?? collect());
        $roles = $roles->concat($this->ruleX2?->roles ?? collect());
        $roleCounter = $roles->groupBy('code')->mapWithKeys(fn($it) => [
            $it->first()->id => [
                'count' => min($it->count(), ($it->first()->max_count ?? 100)),
                'code' => $it->first()->code,
                'name' => $it->first()->name,
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
            if ($chara->character?->code == 'Irregular') {
                // イレギュラーは判定ロジックが全然別
                $irregularRoleId = $chara->role_id;
                if ($chara->role?->code == 'Person') {
                    $errors[] = __(':nameに:roleが配役されています', ['name' => __('tragedy_master.chara_name.Irregular'), 'role' => __('tragedy_master.role.Person.name')]);
                } else if (!empty($roleCounter[$chara->role_id])) {
                    $errors[] = __(':nameに通常の役職が配役されています', ['name' => __('tragedy_master.chara_name.Irregular')]);
                }
            } else if ($chara->character?->code == 'CopyCat') {
                // コピーキャットはあとから判定する
                $copyCatRoleId = $chara->role_id;
            } else {
                if ($chara->character?->code == 'AI') {
                    // AIがパーソンは禁止
                    if ($chara->role?->code == 'Person') {
                        $errors[] = __(':nameに:roleが配役されています', ['name' => __('tragedy_master.chara_name.AI'), 'role' => __('tragedy_master.role.Person.name')]);
                    }
                }

                if (!empty($roleCounter[$chara->role_id])) {
                    $roleCounter[$chara->role_id]['picked']++;
                } else {
                    $roleCounter[$chara->role_id] = [
                        'count' => 0,
                        'code' => $chara->role?->code,
                        'name' => $chara->role?->name,
                        'picked' => 1,
                    ];
                }
            }

            // ルールによる役職の縛り違反をチェック
            if ($chara->role?->code == 'KeyPerson') {
                if (!empty($this->girl_key_rule)) {
                    // キーパーソンを少女にしなければならないルールが採用されている場合、少女でないキーパーソンはNG
                    if (!$chara->hasAttr('girl')) {
                        $errors[] = __('「:rule」が採用されていますが、:roleが:attrではありません。', [
                            'rule' => $this->girl_key_rule?->name,
                            'role' => __('tragedy_master.role.KeyPerson.name'),
                            'attr' => __('tragedy_master.chara_attr.girl'),
                        ]);
                    }
                }
                if ($this->ruleY?->code == 'Noble-Blood') {
                    $keySex = $chara->character?->sex;
                }
            } else if ($chara->role?->code == 'Vampire') {
                if ($this->ruleY?->code == 'Noble-Blood') {
                    $vampSex = $chara->character?->sex;
                }
            } else if ($chara->role?->code == 'Ninja') {
                if ($this->hasRule('Battle-of-the-Han')) {
                    // 「漢の戦い」が採用されている場合、男性でないニンジャはNG
                    if (!$chara->hasAttr('male')) {
                        $errors[] = __('「:rule」が採用されていますが、:roleが:attrではありません。', [
                            'rule' => $this->ruleY?->name,
                            'role' => __('tragedy_master.role.Ninja.name'),
                            'attr' => __('tragedy_master.chara_attr.male'),
                        ]);
                    }
                }
            } else if ($chara->role?->code == 'Fragments') {
                if ($this->hasRule('World-of-Rebellion')) {
                    // 「叛逆の世界」が採用されている場合、少女でないフラグメントはNG
                    if (!$chara->hasAttr('girl')) {
                        $errors[] = __('「:rule」が採用されていますが、:roleが:attrではありません。', [
                            'rule' => $this->ruleY?->name,
                            'role' => __('tragedy_master.role.Fragments.name'),
                            'attr' => __('tragedy_master.chara_attr.girl'),
                        ]);
                    }
                }
            } else if ($chara->role?->code == 'Alice') {
                if ($this->hasRule('Alice-in-Mirrorland')) {
                    // 「鏡の国のアリス」が採用されている場合、少女でないアリスはNG
                    if (!$chara->hasAttr('girl')) {
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
                $myIncident = $this->incidents->first(function($it) use($chara) {
                    if (!empty($it->scenario_character_id)) {
                        return $it->scenario_character_id == $chara->id;
                    } else {
                        return $it->criminal_name == $chara->name;
                    }
                });
                if (empty($myIncident)) {
                    $errors[] = __(':charaに:roleが配役されていますが、事件の犯人になっていません。', [
                        'chara' => $chara->character?->name,
                        'role' => $chara->role?->name,
                    ]);
                }
            } else if (in_array($chara->role?->code, $notCriminalRoles)) {
                $myIncident = $this->incidents->first(function($it) use($chara) {
                    if (!empty($it->scenario_character_id)) {
                        return $it->scenario_character_id == $chara->id;
                    } else {
                        return $it->criminal_name == $chara->name;
                    }
                });
                if (!empty($myIncident)) {
                    $errors[] = __(':charaに:roleが配役されていますが、:roleは事件の犯人になれません。', [
                        'chara' => $chara->character?->name,
                        'role' => $chara->role?->name,
                    ]);
                }
            }
        }

        // 過不足のある役職を確認
        $roleCounter = $this->fixRoleCountByLyingSecret($roleCounter);
        foreach ($roleCounter as $val) {
            $val = (object)$val;
            if ($val->code == 'Person') continue;

            if ($val->code == 'SerialKiller' && $this->set?->abbr == 'LL') {
                // Last Liarのみ、シリアルキラーは1人制限
                if ($val->count > 1) $val->count = 1;
            }

            if (!empty($val->SecretLyingInvalid)) {
                // 嘘憑きの秘密入れてシークレットがいないのに、追加役職が設定されてない
                $errors[] = __('「:rule」が採用されていますが、:roleがいない場合の追加役職が採用されていません。', [
                    'rule' => __('tragedy_master.rule_name.The-Secret-of-Lying-Possession'),
                    'role' => __('tragedy_master.role.Secret.name'),
                ]);
            } else if ($val->picked < $val->count) {
                if ($val->code == 'Minus' && $this->hasRule('The-Worst-Retired-Book')) {
                    // 最低の却本が採用されている場合、マイナスは足りなくてもいい
                } else {
                    $errors[] = __(':roleが:diff人足りません。', ['role' => $val->name, 'diff' => $val->count - $val->picked]);
                }
            } else if ($val->picked > $val->count) {
                if ($val->code == 'Fragments' && $this->set?->isPlusSupport && $this->is_plus && $val->picked == 1) {
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

        if ($this->hasRule('The-one-that-proclaims-destruction')) {
            // 滅亡を謳うものがあったら、自殺を採用してるかチェック
            $suicide = $this->incidents->first(fn($it) => $it->incident?->code == 'suicide');
            if (empty($suicide)) {
                $errors[] = __('「:rule」が採用されていますが、:elementが採用されていません。', [
                    'rule' => __('tragedy_master.rule_name.The-one-that-proclaims-destruction'),
                    'element' => __('tragedy_master.incident.suicide.name'),
                ]);
            }
        } else if ($this->hasRule('Crazy-Truth')) {
            // 狂った真実があったら、情報屋を採用してるかチェック
            $informant = $this->characters->first(fn($it) => $it->character?->code == 'Informant');
            if (empty($informant)) {
                $errors[] = __('「:rule」が採用されていますが、:elementが採用されていません。', [
                    'rule' => __('tragedy_master.rule_name.Crazy-Truth'),
                    'element' => __('tragedy_master.chara_name.Informant'),
                ]);
            }
        }

        return [
            'errors' => $errors,
            'checked' => true,
        ];
    }

    /** 嘘憑きの秘密による役職構成変更のチェック */
    private function fixRoleCountByLyingSecret(array $roleCounter):array {
        if (!in_array('The-Secret-of-Lying-Possession', [$this->ruleX1?->code, $this->ruleX2?->code])) return $roleCounter; // 嘘憑きの秘密が採用されてない

        $roles = $this->set?->roles;
        $roleId = (object)[
            'Secret' => $roles?->firstWhere('code', 'Secret')?->id,
            'Killer' => $roles?->firstWhere('code', 'Killer')?->id,
            'Kromak' => $roles?->firstWhere('code', 'Kromak')?->id,
            'Fragments' => $roles?->firstWhere('code', 'Fragments')?->id,
        ];

        if (!empty($roleCounter[$roleId->Secret]['count'])) return $roleCounter; // シークレットがいるなら役職構成に変更はない

        if (!empty($roleCounter[$roleId->Killer]) && $roleCounter[$roleId->Killer]['picked'] > $roleCounter[$roleId->Killer]['count']) {
            // キラーが追加されてる
            $roleCounter[$roleId->Killer]['count']++;
        } else if (!empty($roleCounter[$roleId->Kromak]) && $roleCounter[$roleId->Kromak]['picked'] > $roleCounter[$roleId->Kromak]['count']) {
            // クロマクが追加されてる
            $roleCounter[$roleId->Kromak]['count']++;
        } else if (!empty($roleCounter[$roleId->Fragments]) && $roleCounter[$roleId->Fragments]['picked'] > $roleCounter[$roleId->Fragments]['count']) {
            // フラグメントが追加されてる
            $roleCounter[$roleId->Fragments]['count']++;
        } else {
            // 誰も追加されてないので、嘘憑きの秘密に違反しているフラグを設定する
            $roleCounter[$roleId->Fragments] ??= [
                'count' => 0,
                'code' => 'Fragments',
                'name' => __('tragedy_master.role.Fragments.name'),
                'picked' => 0,
            ];
            $roleCounter[$roleId->Fragments]['SecretLyingInvalid'] = true;
        }

        return $roleCounter;
    }

    /** 指定したルールが採用されているか確認する */
    private function hasRule(string $ruleCode): bool {
        if (empty($ruleCode)) return false;
        if ($this->ruleY?->code == $ruleCode) return true;
        if ($this->ruleX1?->code == $ruleCode) return true;
        if ($this->ruleX2?->code == $ruleCode) return true;
        return false;
    }
}
