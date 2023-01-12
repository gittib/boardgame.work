<?php
//
// 開発・テスト用のURL一覧ページ
//

if (!config('app.debug')) {
    header('Not Found', true, 404);
    exit;
}
$routes = collect(Route::getRoutes()->get())->map(function($route) {
    $uri = $route->uri();
    if (!Str::startsWith($uri, '/')) {
        $uri = '/'.$uri;
    }

    if ($route->getDomain()) {
        $url = '//' . $route->getDomain() . $uri;
    } else {
        $url = config('app.url') . $uri;
    }

    $name = ($route->getName() ?? '');
    $uses = $route->getAction()['uses'];
    $uses = is_string($uses) ? $uses : get_class($uses);
    $methods = $route->methods;
    $view = $route->defaults['view'] ?? '';
    $middleware = $route->middleware();
    $middleware = is_array($middleware) ? implode(',', $middleware) : $middleware;
    return (object)compact('name', 'methods', 'url', 'uses', 'view', 'middleware');
});
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>【{{ config('app.env') }}】{{ __('messages.service_name') }} URLリスト</title>
<style>
table {
    font-size: 11px;
}
th,td {
    padding: 2px;
    border: solid 1px darkgrey;
    white-space: nowrap;
}
tr.get_ng {
    background-color: gray;
}
td.name {
    background-color: white;
}
</style>
</head>
<body>
GETでアクセスできないルートは暗く網掛けしてます。
<table>
<thead>
    <tr>
        <th>name</th>
        <th>mtd</th>
        <th class="url">url</th>
        <th>controller</th>
        <th>view</th>
        <th class="middleware">middleware</th>
    </tr>
</thead>
<tbody>
@foreach ($routes as $route)
<tr class=" @if(!in_array('GET', $route->methods)) get_ng @endif">
    <td class="name">{{ $route->name }}</td>
    <td class="method" onclick="alert('対応メソッド： {{ implode(',', $route->methods) }}');">
        @if(count($route->methods) >= 7) ANY
        @elseif(count($route->methods) >= 2) {{ $route->methods[0] }}...
        @else {{ $route->methods[0] }}
        @endif
    </td>
    <td class="url">
        <a href="{{ $route->url }}">{{ $route->url }}</a>
    </td>
    <td>{{ $route->uses }}</td>
    <td>{{ $route->view }}</td>
    <td class="middleware">{{ $route->middleware }}</td>
</tr>
@endforeach
</tbody>
</table>
</body>
</html>
