<?php

namespace Tests\Feature;

use App\Models\Character;
use Tests\TestCase;

class ModelCharacterTest extends TestCase
{
    /**
     * @dataProvider attrProvider
     */
    public function test_has_attr(string $attrSet, string $attr): void
    {
        $chara = new Character([
            'chara_attrs' => $attrSet,
        ]);
        $isStrExists = in_array($attr, explode(',', $attrSet));
        $isAttrExists = $chara->hasAttr($attr);
        $this->assertSame($isStrExists, $isAttrExists);
    }

    public static function attrProvider()
    {
        $attrs = [
            'adult',
            'animal',
            'artifact',
            'boy',
            'female',
            'fiction',
            'girl',
            'male',
            'sister',
            'student',
            'tree',
        ];
        $attrSets = [
            "adult,female",
            "adult,male",
            "animal",
            "artifact",
            "boy",
            "boy,student",
            "female,adult",
            "fiction,female",
            "girl",
            "girl,sister",
            "girl,student",
            "male,adult",
            "male,female",
            "student,boy",
            "tree",
        ];
        $ret = [];
        foreach($attrSets as $set) {
            foreach($attrs as $attr) {
                $ret[$set.'-'.$attr] = [$set, $attr];
            }
        }
        return $ret;
    }

    /**
     * @dataProvider sexAttrProvider
     */
    public function test_sex_attr_check(string $attrSet, string $sex): void
    {
        $chara = new Character([
            'chara_attrs' => $attrSet,
        ]);
        $this->assertSame($chara->sex, $sex);
    }

    public static function sexAttrProvider()
    {
        return collect([
            ["adult,female", "f"],
            ["adult,male", "m"],
            ["animal", "x"],
            ["artifact", "x"],
            ["boy", "m"],
            ["boy,student", "m"],
            ["female,adult", "f"],
            ["fiction,female", "f"],
            ["girl", "f"],
            ["girl,sister", "f"],
            ["girl,student", "f"],
            ["male,adult", "m"],
            ["male,female", "b"],
            ["student,boy", "m"],
            ["tree", "x"],
        ])->mapWithKeys(fn($it) => [
            $it[0] => $it,
        ]);
    }
}
