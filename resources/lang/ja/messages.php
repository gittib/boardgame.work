<?php

return [
    'alert' => [
        'scenario' => [
            'store' => '脚本を作成しました。',
            'update' => '脚本を編集しました。',
        ],
    ],

    'loop_day_summary' => '<span class="loop">:loops</span>ループ<span class="day">:days</span>日',

    'are_you_writer' => [
        'notice' => 'これより先のページは、不用意に閲覧するとネタバレになる可能性があります。<br>つきましては、以下の問題にお答えください。これらが分かるくらい惨劇RoopeRに精通している方のみ、閲覧いただけます。',

        'questions' => [
            [
                'q' => 'Basic Tragdy Χにおいて、友好無視を持つ役職は最大で何人にまで割り振れる？（イレギュラーやコピーキャット等、特殊な特性を持つキャラクターは登場しないものとします）',
                'answers' => [ '1人', '2人', '3人', '4人', '5人', '6人', ],
                'correct' => 2,
            ], [
                'q' => '次のうち、First Stepsに存在しない役職は？',
                'answers' => [ 'クロマク', 'カルティスト', 'ウィッチ', 'フレンド', ],
                'correct' => 2,
            ],
        ],
    ],
];
