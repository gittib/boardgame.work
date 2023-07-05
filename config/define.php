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


    'basic_auth' => [
        'name' => env('BASIC_AUTH_NAME'),
        'password' => env('BASIC_AUTH_PASSWORD'),
    ],

    'app_url' => [
        'android' => 'https://play.google.com/store/apps/details?id=work.boardgame.sangeki_rooper',
    ],
];
