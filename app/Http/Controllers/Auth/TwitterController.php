<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Auth;
use Socialite;

class TwitterController extends Controller
{
    public function redirectToProvider(Request $request) {
        if (config('app.env') == 'local') {
            $user = User::firstOrCreate([
                'name' => 'penski-local',
            ]);
            Auth::login($user);
            return redirect()->intended(route('my_page'));
        } else {
            return Socialite::driver('twitter')->redirect();
        }
    }

    public function providerCallback(Request $request) {
        $twitterUser = Socialite::driver('twitter')->user();
        $user = User::firstOrNew([
            'twitter_id' => $twitterUser->id,
        ]);
        $user->name = $twitterUser->name;
        $user->profile_img_url = $twitterUser->avatar;
        $user->save();

        Auth::login($user);

        $url = session()->pull('intended_url');
        if (!empty($url)) {
            return redirect($url);
        } else {
            return redirect()->intended(route('my_page'));
        }
    }
}
