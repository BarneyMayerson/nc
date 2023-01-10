<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewPasswordController extends Controller
{
    public function create()
    {
        return Inertia::render('Auth/ResetPassword', [
            'email' => request('email'),
            'token' => request()->route('token'),
        ]);
    }
}
