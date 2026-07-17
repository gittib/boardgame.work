<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Scenario as ScenarioResource;
use App\Models\Scenario;
use Auth;
use Illuminate\Http\Request;

class ScenarioController extends Controller
{
    public function index(Request $request)
    {
        $scenariosPerPage = 50;
        $scenarios = Scenario::with('incidents.criminal', 'set.rules.roles')
            ->where('is_preview', false)
            ->whereOpen()
            ->paginate($scenariosPerPage);

        return [
            'cachedAt' => (int)(microtime(true) * 1000.0),
            'scenarios' => ScenarioResource::collection($scenarios),
        ];
    }

    public function show($id)
    {
        $scenario = Scenario::with('incidents.criminal', 'set.rules.roles')
            ->where('is_preview', false)
            ->whereOpen()
            ->findOrFail($id);

        return new ScenarioResource($scenario);
    }
}
