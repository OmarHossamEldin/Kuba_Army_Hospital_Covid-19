<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(){
        $Users = User::get(['id','name','username','created_at']);
        return Inertia::render('User/index',['Users'=>$Users]);
    }
    
    public function create(){
        return Inertia::render('User/create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'Name'=>'required',
            'UserName'=>'required|unique:users',
            'Password'=>'required',
            'Permission'=>'required'
        ]);

        $User = User::create([
                    'name'=>$request->Name,
                    'username'=>$request->UserName,
                    'password'=>bcrypt($request->Pssword),
                    'role'=>$request->Permission
                ]);

        return response()->json(['status'=>true,$User]);
    }
    public function loginForm() {
        return Inertia::render('Login');
    }
    public function login(Request $request)
    {
        $request->validate([
            'username'=>'required',
            'password'=>'required',
        ]);

        if(Auth::attempt(['username' => $request->username, 'password' => $request->password])){
            $user = Auth::user();
            $token = $user->createToken('My Token', [$user->role])->accessToken;
                return response()->json(['status'=>true,'token'=>$token,'user'=>$user]);
        }
        else
            return response()->json(['status'=>false]);

    }
    public function dashboard()
    {
        return Inertia::render('Dashboard');
    }

}
