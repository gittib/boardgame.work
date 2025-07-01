<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Scenario;

class TopController extends Controller
{
    public function index() {
        $latestScenario = Scenario::whereOpen()->orderByDesc('opened_at')->first();
        return view('top.index', compact('latestScenario'));
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
