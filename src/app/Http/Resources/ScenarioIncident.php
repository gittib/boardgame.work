<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ScenarioIncident extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name,
            'publicName' => $this->publicName,
            'day' => $this->day,
            'criminal' => $this->criminalNameStr,
            'note' => $this->note,
        ];
    }
}
