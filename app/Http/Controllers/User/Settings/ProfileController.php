<?php

namespace App\Http\Controllers\User\Settings;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Validation\Rule;

class ProfileController extends Controller
{
    public function index() {
        //
    }

    public function update() {
        $attributes = request()-> validate([
            'name' => [
                'required',
                Rule::unique('users', 'name')->ignore(auth()->id()),
            ],
            'email' => [
                'required',
                Rule::unique('users', 'email')->ignore(auth()->id()),
            ]
        ]);

        $user = auth()->user();
        
        $user->update($attributes);
    }
}
