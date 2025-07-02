<?php
namespace App\Enums;

enum PageType: String {
    case Top = 'Top';
    case About = 'About';
    case ScenarioList = 'ScenarioList';
    case MyPage = 'MyPage';
    case Bookmarks = 'Bookmarks';
    case Scenario = 'Scenario';
    case CreateScenario = 'CreateScenario';
    case ScenarioPreview = 'ScenarioPreview';
    case QuizList = 'QuizList';
    case PublishedScenarioList = 'PublishedScenarioList';
}
