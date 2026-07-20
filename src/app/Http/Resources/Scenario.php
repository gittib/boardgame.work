<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class Scenario extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'publicMessage' => $this->public_message,
            'writer' => $this->writer?->name ?? '？？？？',
            'set' => $this->set?->abbr,
            'isPlus' => (bool)$this->is_plus,
            'difficulty' => $this->difficulty,
            'rule' => [
                $this->ruleY?->name,
                $this->ruleX1?->name,
                $this->ruleX2?->name,
            ],
            'special_rule' => $this->special_rule,
            'loop' => (string)$this->loops, // 無限ループとか数字じゃないケースを想定して文字列とする
            'day' => $this->days,

            // ネストされたリストのリソース化
            'characterList' => ScenarioCharacter::collection($this->whenLoaded('characters', $this->characters ?? [])),
            'incidentList' => ScenarioIncident::collection($this->whenLoaded('incidents', $this->incidents ?? [])),
            'advice' => [
                'summary' => $this->feature,
                'story' => $this->story,
                'detail' => $this->advice,
            ],

            'invalidConditions' => $this->invalidConditions,
        ];
    }

}
