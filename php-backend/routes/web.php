<?php

use App\Models\Songs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\phpSongsController;

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

Route::get('/songs', function () {
    return view('songs', ['heading' => 'SONGS', 'songs' => Songs::all()]);
});

Route::get('/hello', function () {
    return response('<h1>Hello World!</h1>', 200);
});

Route::get('/songs/{songID}', function ($songID) {
    return response('Song id: ' . $songID);
})->where('id', '[0-9 a-z A-Z]+'); //regex may be incorrect

Route::get('users', function (Request $request) {
    return $request->name; //http://127.0.0.1:8000/users?name=mikepence
});

Route::get('/genres', [phpSongsController::class, 'getGenres']);

Route::get('/genreCount', [phpSongsController::class, 'getGenreCount']);
