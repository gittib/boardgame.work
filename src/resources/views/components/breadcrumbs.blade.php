@props([
    'pageType',
    'scenario' => null,
])
<?php
$breads ??= (new \App\Utils\BreadcrumbGenerator)->getBreadcrumbs($pageType, compact('scenario'));

$json = [
    "@context" => "http://schema.org",
    "@type" => "BreadcrumbList",
    "itemListElement" => [],
];
$loopIteration = 1;
foreach($breads as $val) {
    $json['itemListElement'][] = [
        '@type' => 'ListItem',
        'position' => $loopIteration,
        'name' => $val['label'],
        'item' =>  $val['url'],
    ];
    $loopIteration++;
}
?>
<ol class="breadcrumb">
    @foreach($breads as $val)
        <li>{{ $loop->last ? $val['label'] : html()->a($val['url'], $val['label']) }}</li>
    @endforeach
</ol>

@pushOnce('stack_headers')
<script type="application/ld+json">@json($json)</script>
@endPushOnce
