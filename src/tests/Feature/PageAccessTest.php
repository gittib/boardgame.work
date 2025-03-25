<?php

namespace Tests\Feature;

use App\Http\Middleware\DevBasicAuth;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PageAccessTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();
        $this->withoutMiddleware(DevBasicAuth::class);
    }

    /**
     * @dataProvider routeProvider
     *
     * @return void
     */
    public function test_route($route, $login, $status)
    {
        if ($login) {
            $user = User::find(1);
            $response = $this->actingAs($user)->get(route($route));
        } else {
            $response = $this->get(route($route));
        }
        $response->assertStatus($status);
    }

    public static function routeProvider()
    {
        return collect([
            ['top.index', false, 200],
            ['login', false, 200],
            ['my-scenario.index', true, 200],
            ['my-scenario.bookmarks', true, 200],
            ['scenario.index', false, 200],
            ['scenario.quiz-index', false, 200],
        ])->mapWithKeys(fn($it) => [$it[0] => $it]);
    }

    /**
     * @dataProvider setProvider
     *
     * @return void
     */
    public function test_myscenario_create($set)
    {
        $user = User::find(1);
        $url = route('my-scenario.create', compact('set'));
        $response = $this->actingAs($user)->get($url);
        $response->assertStatus(200);
    }

    public static function setProvider()
    {
        return collect([
            'FS',
            'BTX',
            'MZ',
            'MCX',
            'HSA',
            'WM',
            'LL',
            'AHR',
        ])->mapWithKeys(fn($it) => [strtolower($it) => [$it]]);
    }
}
