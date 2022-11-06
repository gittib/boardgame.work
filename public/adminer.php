<?php
$t1 = explode("\n", file_get_contents(__DIR__.'/../.env'));
foreach($t1 as $v) {
    $t2 = explode('=', $v);
    if ($t2[0] == 'ADMINER_AUTH_NAME') {
        unset($t2[0]);
        $authName = implode('=', $t2);
    } else if ($t2[0] == 'ADMINER_AUTH_PASSWORD') {
        unset($t2[0]);
        $authPass = implode('=', $t2);
    }
}

if (empty($authName) || empty($authPass)) {
    header("HTTP/1.1 404 Not Found");
    exit('Not Found');
}

if ($authName == $_SERVER['PHP_AUTH_USER'] && $authPass == $_SERVER['PHP_AUTH_PW']) {
    require(__DIR__.'/../app/adminer-4.8.1.php');
} else {
    // 初回時または認証が失敗したとき
    header('WWW-Authenticate: Basic realm="Enter username and password."');
    header('Content-Type: text/plain; charset=utf-8');
    exit('このページを見るにはログインが必要です');
}
