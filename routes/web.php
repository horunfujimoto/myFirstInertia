<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewsController;

URL::forceScheme('http');

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/news/{id}', [NewsController::class, 'show']);
Route::resource('news', NewsController::class)
    ->except(['store', 'update']);
Route::post('news/create', [NewsController::class, 'store'])
    ->name('news.store');
Route::put('news/{news}/edit', [NewsController::class, 'update'])
    ->name('news.update');