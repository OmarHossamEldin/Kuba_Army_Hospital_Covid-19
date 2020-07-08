<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Patient;
use Hamcrest\Type\IsString;
use Inertia\Inertia;

class PatientController extends Controller
{
    public function create(){
        return Inertia::render('Patient/create');
    }
    
    public function store(Request $request)
    {
        $validatedData =  $request->validate([
            'Name' => "required",
            'PNumber' => "required",
            'Age' => "required",
            'Gender' => "required",
            'mobile' => "required",
            'AdmissionDate' => "required",
            'Complaint' => "required",
            'PastHistory' => "required",
            'HistoryOfCardiacDisease' => "required",
            'ExAtAdmission' => "required",
            'PreviousMedications' => "required",
            'NasoPharynealSwab1' => "required",
            'NasoPharynealSwab2' => "required",
            'Procedures' => "required",
            'CurrentMedications' => "required",
        ]);

        $validatedData['Complaint'] = serialize($validatedData['Complaint']);
        $validatedData['PastHistory'] = serialize($validatedData['PastHistory']);
        $validatedData['HistoryOfCardiacDisease'] = serialize($validatedData['HistoryOfCardiacDisease']);
        $validatedData['ExAtAdmission'] = serialize($validatedData['ExAtAdmission']);
        $validatedData['PreviousMedications'] = serialize($validatedData['PreviousMedications']);
        $validatedData['NasoPharynealSwab1'] = serialize($validatedData['NasoPharynealSwab1']);
        $validatedData['NasoPharynealSwab2'] = serialize($validatedData['NasoPharynealSwab2']);
        $validatedData['Procedures'] = serialize($validatedData['Procedures']);
        $validatedData['CurrentMedications'] = serialize($validatedData['CurrentMedications']);
        $validatedData['user_id'] = auth()->user()->id;
        $patient = Patient::updateOrCreate(['PNumber' => $validatedData['PNumber']], $validatedData);
        return response()->json(['status' => true, 'patient' => $patient]);
    }

    public function index()
    {
        $patients = Patient::select(['id', 'Name', 'PNumber', 'Age', 'Gender', 'mobile', 'AdmissionDate'])->take(100)->get();
        return Inertia::render('Patient/index', [
            'patients' => $patients
        ]);
    }

    public function edit(Patient $patient)
    {

        $patient['Complaint'] = unserialize($patient['Complaint']);
        $patient['PastHistory'] = unserialize($patient['PastHistory']);
        $patient['HistoryOfCardiacDisease'] = unserialize($patient['HistoryOfCardiacDisease']);
        $patient['ExAtAdmission'] = unserialize($patient['ExAtAdmission']);
        $patient['PreviousMedications'] = unserialize($patient['PreviousMedications']);
        $patient['NasoPharynealSwab1'] = unserialize($patient['NasoPharynealSwab1']);
        $patient['NasoPharynealSwab2'] = unserialize($patient['NasoPharynealSwab2']);
        $patient['Procedures'] = unserialize($patient['Procedures']);
        $patient['CurrentMedications'] = unserialize($patient['CurrentMedications']);
        return Inertia::render('Patient/create', [
            'patient' => $patient
        ]);
    }
    public function patientReport()
    {
        $patients = Patient::get(['id', 'Name', 'PNumber', 'Age', 'Gender', 'mobile', 'AdmissionDate']);
        return Inertia::render('Reports/index', [
            'patients' => $patients
        ]);
    }

    public function search(Request $request)
    {
        $validatedData= $request->validate([
            "Search" =>'required'
        ]);
        !is_numeric($validatedData['Search']) ?
            $Patient=Patient::select('id', 'Name', 'PNumber', 'Age', 'Gender', 'mobile', 'AdmissionDate')->where('Name','like','%'.$validatedData['Search'].'%')->get()
        :
            $Patient=Patient::select('id', 'Name', 'PNumber', 'Age', 'Gender', 'mobile', 'AdmissionDate')->where('PNumber','like','%'.$validatedData['Search'].'%')->get();
        return response()->json(['status'=>true,'Patient'=>$Patient]);
    }
}
