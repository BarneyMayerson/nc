<?php

use App\Http\Controllers\ModalController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('modal', [ModalController::class, 'index'])->name('modal');

require __DIR__ . '/auth.php';