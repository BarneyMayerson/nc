<?php

namespace App\Http\Controllers\User\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function index() {
        $user = auth()->user();

        return Inertia::render('User/Settings/Profile');
    }

    public function update() {
        $attributes = request()-> validate([
            'name' => [
                'required',
                Rule::unique('users', 'name')->ignore(auth()->id()),
            ],
            'email' => [
                'required',
                'email:filter',
                Rule::unique('users', 'email')->ignore(auth()->id()),
            ]
        ]);

        $user = auth()->user();
        $user->update($attributes);

        return to_route('settings.profile.edit')
            ->with('success', 'Profile has been updated.');
    }
}
