<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TopController extends Controller
{
    public function index() {
        return view('top.index');
    }

    public function about() {
        $selectedLocale = app()->getLocale();

        // FAQのリッチリザルトは言語設定によらず日本語で表示する
        app()->setLocale('ja');
        $faqs = collect(__('messages.faqs'));
        $markup = [
            '@context' => 'https://schema.org',
            '@type' => 'FAQPage',
            'mainEntity' => [],
        ];
        foreach($faqs->filter(fn($it) => $it['isImportant'] ?? false) as $faq) {
            $markup['mainEntity'][] = [
                '@type' => 'Question',
                'name' => $faq['q'],
                'acceptedAnswer' => [
                    '@type' => 'Answer',
                    'text' => $faq['a'],
                ],
            ];
        }

        app()->setLocale($selectedLocale);
        $faqs = collect(__('messages.faqs'));

        return view('top.about', compact('markup', 'faqs'));
    }
}
