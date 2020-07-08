<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Investigation extends Model
{
    public function user(){
        return $this->belongsTo(User::class);
    }

    public function patient(){
        return $this->belongsTo(Patient::class);
    }

    protected $guarded = [];

    protected $hidden = [
        'patient_id','user_id'
    ];


}
