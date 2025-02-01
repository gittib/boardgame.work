<?php
namespace App\Utils;

use App\Enums\PageType;
use App\Models\Scenario;

class BreadcrumbGenerator {
    public function setLastList(PageType $pageType) {
        session(['last_list' => $pageType]);
    }

    public function getBreadcrumbs(PageType $pageType, array $params = []) {
        switch($pageType) {
        case PageType::Top:
            return [
                [
                    'label' => __('TOP'),
                    'url' => route('top.index'),
                ],
            ];
        case PageType::ScenarioList:
            $breads = $this->getBreadcrumbs(PageType::Top, $params);
            $breads[] = [
                'label' => __('脚本一覧'),
                'url' => route('scenario.index'),
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
        case PageType::Scenario:
            $scenario = $params['scenario'] ?? new Scenario;
            if (!empty($params['prev'])) {
                $breads = $this->getBreadcrumbs($params['prev'], $params);
            } else if (!empty(session('last_list'))) {
                $breads = $this->getBreadcrumbs(session('last_list'), $params);
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
