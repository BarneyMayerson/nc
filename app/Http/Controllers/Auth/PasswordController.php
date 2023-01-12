<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;

class PasswordController extends Controller
{
    public function update()
    {
        $validated = request()->validate([
            'current_password' => 'required|current_password',
            'password' => 'required|confirmed|min:6|regex:/^\S*$/u',
        ]);

        request()->user()->update([
            'password' => bcrypt($validated['password'])
        ]);
    }
}
