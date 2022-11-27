<?php

use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::post('register', [RegisterController::class, 'store'])->name('register');

Route::get('/', function () {
    sleep(2);

    return Inertia::render('Home');
});

Route::get('/settings', function () {
    sleep(2);

    return Inertia::render('Settings');
});
