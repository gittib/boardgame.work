<?php

$hashes = [
    'gitti' => '$2y$10$z9PvCXyyS1k0dFtXNFB.oewAU30f6/VgUEV1dgbn7YCFf2RWuwOK6',
];

$hash = $hashes[$_SERVER['PHP_AUTH_USER']] ?? '$2y$10$EaPHMWR/jclksCUNqufHNewC2kAXwK.OklEwi4CeesoTfMHzTGy7e';

if (password_verify($_SERVER['PHP_AUTH_PW'], $hash)) {
    require(__DIR__.'/../app/adminer-4.8.1.php');
} else {
    // 初回時または認証が失敗したとき
    header('WWW-Authenticate: Basic realm="Enter username and password."');
    header('Content-Type: text/plain; charset=utf-8');
    exit('このページを見るにはログインが必要です');
}
