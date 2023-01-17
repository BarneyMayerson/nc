<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ModalController extends Controller
{
    public function index()
    {
        return Inertia::modal('TryModal')
            ->with([
                'email' => 'test@test.com',
                'name' => 'John Doe',
            ])
            ->baseRoute('home');
    }
}
