<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FileManagerController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/files/upload', [FileManagerController::class, 'upload']);
Route::delete('/files/{file}', [FileManagerController::class, 'delete']);
Route::get('/files/{file}/download', [FileManagerController::class, 'download']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
