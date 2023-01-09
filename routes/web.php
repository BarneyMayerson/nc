<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    sleep(1);

    return Inertia::render('Home');
})->name('home');

require __DIR__ . '/auth.php';