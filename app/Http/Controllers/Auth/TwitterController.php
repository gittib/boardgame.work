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
        return Socialite::driver('twitter')->redirect();
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

        return redirect()->route('top.index');
    }
}
