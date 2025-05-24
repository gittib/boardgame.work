<?php

return [
    'cloud_front_url' => trim(env('AWS_CLOUD_FRONT_URL', env('APP_URL')), ' /') . env('PATH_PREFIX', '/'),

    'file_storage_root' => 'uploaded/',
    'put_file_prefix' => env('PUT_FILE_PREFIX', ''),
    'temp_file_prefix' => 'laravel-' . env('APP_ENV', 'local') . '-',

    'thumbnail_size' => [
        'width' => 512,
        'height' => 512,
    ],

    'cookie' => [
        'key' => [
            'applocale' => 'applocale',
            'last_visit_list' => 'last_visit_list',
            'browser_id_hash' => 'usautkn',
        ],
    ],


    'basic_auth' => [
        'name' => env('BASIC_AUTH_NAME'),
        'password' => env('BASIC_AUTH_PASSWORD'),
    ],

    'app_url' => [
        'android' => 'https://play.google.com/store/apps/details?id=work.boardgame.sangeki_rooper',
    ],

    'rei_url' => 'https://main-bakafire.ssl-lolipop.jp/rooper/10th/rei.html',

    'auther' => [
        'name' => 'ペンスキー',
        'url' => 'https://x.com/gittib_gittib',
    ],
];
