<?php
namespace App\Utils;

use App\Enums\PageType;
use App\Models\Scenario;

class BreadcrumbGenerator {
    public function setLastList(PageType $pageType) {
        \Cookie::queue('last_visit_list', $pageType->value, 60*24*180);
    }

    public function getBreadcrumbs(PageType $pageType, array $params = []) {
        $lastVisitPage = PageType::tryFrom(request()->cookie('last_visit_list'));
        switch($pageType) {
        case PageType::Top:
            return [
                [
                    'label' => __('TOP'),
                    'url' => route('top.index'),
                ],
            ];
        case PageType::About:
            $breads = $this->getBreadcrumbs(PageType::Top, $params);
            $breads[] = [
                'label' => __('惨劇RoopeR脚本データベースについて'),
                'url' => route('top.about'),
            ];
            return $breads;
        case PageType::ScenarioList:
            $breads = $this->getBreadcrumbs(PageType::Top, $params);
            $breads[] = [
                'label' => __('脚本一覧'),
                'url' => route('scenario.index'),
            ];
            return $breads;
        case PageType::PublishedScenarioList:
            $breads = $this->getBreadcrumbs(PageType::Top, $params);
            $breads[] = [
                'label' => __('新着脚本一覧'),
                'url' => route('scenario.published-index'),
            ];
            return $breads;
        case PageType::QuizList:
            $breads = $this->getBreadcrumbs(PageType::Top, $params);
            $breads[] = [
                'label' => __('指針クイズ一覧'),
                'url' => route('scenario.quiz-index'),
            ];
            return $breads;
        case PageType::MyPage:
            $breads = $this->getBreadcrumbs(PageType::Top, $params);
            $breads[] = [
                'label' => __('マイページ'),
                'url' => route('my-scenario.index'),
            ];
            return $breads;
        case PageType::Bookmarks:
            $breads = $this->getBreadcrumbs(PageType::MyPage, $params);
            $breads[] = [
                'label' => __('ブックマーク一覧'),
                'url' => route('my-scenario.bookmarks'),
            ];
            return $breads;
        case PageType::CreateScenario:
            $scenario = $params['scenario'] ?? new Scenario;
            if (!empty($lastVisitPage)) {
                $breads = $this->getBreadcrumbs($lastVisitPage, $params);
            } else {
                $breads = $this->getBreadcrumbs(PageType::MyPage, $params);
            }
            if (!empty($scenario->id)) {
                $breads[] = [
                    'label' => __('惨劇脚本 :set', ['set' => $scenario->setName]),
                    'url' => route('scenario.show', ['scenario' => $scenario->id]),
                ];
            }
            $breads[] = [
                'label' => __('脚本作成'),
                'url' => route('my-scenario.create'),
            ];
            return $breads;
        case PageType::Scenario:
            $scenario = $params['scenario'] ?? new Scenario;
            if (!empty($lastVisitPage)) {
                $breads = $this->getBreadcrumbs($lastVisitPage, $params);
            } else if ($scenario->is_quiz) {
                $breads = $this->getBreadcrumbs(PageType::QuizList, $params);
            } else {
                $breads = $this->getBreadcrumbs(PageType::ScenarioList, $params);
            }
            $breads[] = [
                'label' => __('惨劇脚本 :set', ['set' => $scenario->setName]),
                'url' => route('scenario.show', ['scenario' => $scenario->id]),
            ];
            return $breads;
        case PageType::ScenarioPreview:
            $scenario = $params['scenario'] ?? new Scenario;
            if ($scenario->is_quiz) {
                $breads = $this->getBreadcrumbs(PageType::QuizList, $params);
            } else {
                $breads = $this->getBreadcrumbs(PageType::ScenarioList, $params);
            }
            $breads[] = [
                'label' => __('惨劇脚本 :set', ['set' => $scenario->setName]),
                'url' => route('my-scenario.preview', ['scenario' => $scenario->id]),
            ];
            return $breads;
        }
    }
}
