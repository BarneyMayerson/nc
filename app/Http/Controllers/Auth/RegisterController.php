<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function store()
    {
        request()->validate([
            'name' => 'required|min:3|max:22|unique:users',
            'email' => 'required|email:filter|unique:users',
            'password' => 'required|min:6|regex:/^\S*$/u',
        ]);

        $user = User::create([
            'name' => request('name'),
            'email' => request('email'),
            'password' => bcrypt(request('password')),
        ]);

        auth()->login($user);

        return redirect()->to('home');
    }
}
