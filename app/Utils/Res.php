<?php
namespace App\Utils;

class Res {
    public static function ver($path) {
        $tmp = parse_url($path);

        $publicPath = public_path(ltrim($tmp['path'], '/'));
        if (!file_exists($publicPath)) {
            assert(false, 'file not found: '.$publicPath);
            return $path;
        }

        $path = $tmp['path'];
        $query = empty($tmp['query']) ? '' : $tmp['query'].'&';
        return "${path}?${query}v=" . filemtime($publicPath);
    }
}
