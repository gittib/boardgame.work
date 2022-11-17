<?php
namespace App\Utils;

class Res {
    public static function ver($path) {
        $tmp = parse_url($path);

        $publicPath = public_path(ltrim($tmp['path'], '/'));
        assert(file_exists($publicPath), 'file not found: '.$publicPath);

        $path = $tmp['path'];
        $query = empty($tmp['query']) ? '' : $tmp['query'].'&';
        return "${path}?${query}v=" . filemtime($publicPath);
    }
}
