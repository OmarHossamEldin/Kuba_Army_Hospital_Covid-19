<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/login','UserController@loginForm')->name('login.form');

Route::get('/User', 'UserController@index')->name('Users');

Route::post('/login-page', 'UserController@login')->name('login');

Route::get('/User/create', 'UserController@create')->name('User.create');

Route::get('/','UserController@dashboard')->name('dashboard');

Route::get('/patient/create','PatientController@create')->name('Patient.create');

Route::get('/patient/{patient}/investigation', 'InvestigationController@investigation')->name('Investigation.create');

Route::get('/report', 'PatientController@patientReport')->name('Patients.Reports');

Route::get('/report/{patient}', 'InvestigationController@report')->name('PatientInvestigation.Print');

Route::get('/patient', 'PatientController@index')->name('Patients');

Route::get('/investigation/show/{step}/{patient_id}', 'InvestigationController@show')->name('PatientInvestigation.Steps');

Route::get('/patient/{patient}/edit', 'PatientController@edit')->name('Patient.update');


Route::group(['middleware' => ['auth:api']], function () {

Route::post('/User', 'UserController@store')->name('User.store');

Route::post('/patient', 'PatientController@store')->name('Patient.store');

Route::post('/investigation', 'InvestigationController@store')->name('Investigation.store');

Route::post('/patient/search','PatientController@search')->name('Patients.Search');

});
