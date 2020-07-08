<?php

namespace App\Http\Controllers;

use App\Investigation;
use Illuminate\Http\Request;
use App\Patient;
use Inertia\Inertia;

class InvestigationController extends Controller
{
    public function investigation(Patient $patient)
    {
        // dd($patient);
        $admissionDate = strtotime($patient->AdmissionDate);
        $now = strtotime(date("Y/m/d"));
        $days = (($now - $admissionDate) / 60 / 60 / 24);
        return Inertia::render('Investigations/index', [
            'patient' => $patient,
            'days' => $days
        ]);
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'patient_id' => 'required',
            'investigations' => 'required',
            'step' => 'required',
        ]);

        if($validatedData['step'] == 'Ad'){
            $in = Investigation::where(['step'=>'3rd','user_id'=>auth()->user()->id])->first();
            if($in){
                $in['investigations'] = unserialize($in['investigations']);
                $invest = $in['investigations'];
                $invest['ECG'] = $validatedData['investigations']['ECG'];
                $invest['Echocardiography'] = $validatedData['investigations']['Echocardiography'];
                $invest['Complications'] = $validatedData['investigations']['Complications'];
                $in['investigations'] = serialize($invest);
                $in->save();
            }
        }

        else if($validatedData['step'] == '3rd'){
            $in = Investigation::where(['step'=>'Ad','user_id'=>auth()->user()->id])->first();
            if($in){
                $in['investigations'] = unserialize($in['investigations']);
                $invest = $in['investigations'];
                $invest['ECG'] = $validatedData['investigations']['ECG'];
                $invest['Echocardiography'] = $validatedData['investigations']['Echocardiography'];
                $invest['Complications'] = $validatedData['investigations']['Complications'];
                $in['investigations'] = serialize($invest);
                $in->save();
            }
        }

        else if($validatedData['step'] == '7th'){
            $in = Investigation::where(['step'=>'14th','user_id'=>auth()->user()->id])->first();
            if($in){
                $in['investigations'] = unserialize($in['investigations']);
                $invest = $in['investigations'];
                $invest['ECG'] = $validatedData['investigations']['ECG'];
                $invest['Echocardiography'] = $validatedData['investigations']['Echocardiography'];
                $invest['Complications'] = $validatedData['investigations']['Complications'];
                $in['investigations'] = serialize($invest);
                $in->save();
            }
        }

        else if($validatedData['step'] == '14th'){
            $in = Investigation::where(['step'=>'7th','user_id'=>auth()->user()->id])->first();
            if($in){
                $in['investigations'] = unserialize($in['investigations']);
                $invest = $in['investigations'];
                $invest['ECG'] = $validatedData['investigations']['ECG'];
                $invest['Echocardiography'] = $validatedData['investigations']['Echocardiography'];
                $invest['Complications'] = $validatedData['investigations']['Complications'];
                $in['investigations'] = serialize($invest);
                $in->save();
            }
        }

        else if($validatedData['step'] == '28th'){
            $in = Investigation::where(['step'=>'Dis','user_id'=>auth()->user()->id])->first();
            if($in){
                $in['investigations'] = unserialize($in['investigations']);
                $invest = $in['investigations'];
                $invest['ECG'] = $validatedData['investigations']['ECG'];
                $invest['Echocardiography'] = $validatedData['investigations']['Echocardiography'];
                $invest['Complications'] = $validatedData['investigations']['Complications'];
                $in['investigations'] = serialize($invest);
                $in->save();
            }
        }

        else if($validatedData['step'] == 'Dis'){
            $in = Investigation::where(['step'=>'28th','user_id'=>auth()->user()->id])->first();
            if($in){
                $in['investigations'] = unserialize($in['investigations']);
                $invest = $in['investigations'];
                $invest['ECG'] = $validatedData['investigations']['ECG'];
                $invest['Echocardiography'] = $validatedData['investigations']['Echocardiography'];
                $invest['Complications'] = $validatedData['investigations']['Complications'];
                $in['investigations'] = serialize($invest);
                $in->save();
            }
        }
        $validatedData['investigations'] = serialize($validatedData['investigations']);
        $validatedData['user_id'] = auth()->user()->id;
        $investigations = Investigation::updateOrCreate(['patient_id' => $validatedData['patient_id'], 'step' => $validatedData['step']], $validatedData);
        if ($investigations)
            return response()->json(['status' => true, 'data' => $investigations], 201);

        return response()->json(['status' => false], 200);
    }
    public function show($step, $patient_id)
    {
        $investigation = Investigation::where(['step' => $step, 'patient_id' => $patient_id])->first();

        if ($investigation) {
            $investigation['investigations'] = unserialize($investigation['investigations']);
            return response()->json(['status' => true, 'data' => $investigation], 200);
        }
        return response()->json(['status' => false], 200);
    }
    public function report(Patient $patient)
    {
        $investigations = Investigation::where('patient_id',$patient->id)->get()->keyBy('step');

        foreach ($investigations as $key => $investigation) {
            $investigations[$key] = unserialize($investigation['investigations']) ;
        }
        $patient['Complaint'] = unserialize($patient['Complaint']);
        $patient['PastHistory'] = unserialize($patient['PastHistory']);
        $patient['HistoryOfCardiacDisease'] = unserialize($patient['HistoryOfCardiacDisease']);
        $patient['ExAtAdmission'] = unserialize($patient['ExAtAdmission']);
        $patient['PreviousMedications'] = unserialize($patient['PreviousMedications']);
        $patient['NasoPharynealSwab1'] = unserialize($patient['NasoPharynealSwab1']);
        $patient['NasoPharynealSwab2'] = unserialize($patient['NasoPharynealSwab2']);
        $patient['Procedures'] = unserialize($patient['Procedures']);
        $patient['CurrentMedications'] = unserialize($patient['CurrentMedications']);

        return Inertia::render('Reports/Report',[
            'patient'=>$patient,
            'investigations' =>$investigations
        ]);
    }
}
