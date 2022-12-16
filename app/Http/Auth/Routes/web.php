<?php


use App\Http\Auth\Controllers\EmailVerificationNotificationController;
use App\Http\Auth\Controllers\SocialiteController;
use App\Http\Auth\Controllers\AuthenticatedSessionController;
use App\Http\Auth\Controllers\NewPasswordController;
use App\Http\Auth\Controllers\PasswordResetLinkController;
use App\Http\Auth\Controllers\RegisteredUserController;
use App\Http\Auth\Controllers\VerifyEmailController;
use App\Http\User\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->middleware('auth')
    ->name('logout');

Route::get('/third-party-login', [SocialiteController::class, 'getUserFromToken'])->name('third-party-login');


//Route::get('login', [LoginController::class, 'view'])->name('client.login');
//Route::post('login', LoginController::class)->name('client.postLogin');
//Route::get('signup', [RegisterController::class, 'view'])->name('client.signup');
//Route::post('signup', RegisterController::class)->name('client.postSignup');
//
//Route::get('logout', LogoutController::class)->name('client.logout');
//
//Route::get('forget', [ForgetPasswordController::class, 'view'])->name('client.forget.password');
//
//Route::get('new-password', [ResetPasswordController::class, 'view'])->name('client.new.password');
//Route::post('forget', ForgetPasswordController::class)->name('client.forget.password.sent.link');
//
//Route::get('new-password', [ResetPasswordController::class, 'view'])->name('client.new.password');
//Route::post('new-password', ResetPasswordController::class)->name('client.post.new.password');


Route::get('auth/redirect/google', [SocialiteController::class, 'oauthProviderRedirect'])->name('client.social.login');
Route::get('auth/callback/google', [SocialiteController::class, 'oauthProviderCallBack'])->name('client.social.callback');
