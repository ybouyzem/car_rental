<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\hash;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Employee $employee)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        //
    }

    public function employersNumber(){
        $emplyersNumber=DB::table('employees')->count();
        return $emplyersNumber;
    }

    public function allEmployers(){


        $employers = DB::table('employees')
    ->whereNotIn('employees.id', function ($query) {
        $query->select('admins.id_employee')
            ->from('admins')
            ->join('employees', 'employees.id', '=', 'admins.id_employee');
    })
    ->get();

        return(view('employers',compact('employers')));
    }

    public function addEmployer(Request $request){
        $employer=new Employee();

        $employer->nom=$request->input('nom');
        $employer->prenom=$request->input('prenom');
        $employer->cin=$request->input('cin');
        $employer->numero_post=$request->input('numero_post');
        $employer->libelle_post=$request->input('libelle_post');

        $employer->save();
        return redirect()->back()->with('success', 'employer added successfully.');


    }

    public function deleteEmployer($id){
        $employer = Employee::find($id);
        if (!$employer) {
            // Handle client not found error
            return redirect()->back()->with('error', 'employer not found.');
        }

        // Delete the Employee from the database
        $employer->delete();
        // Redirect back to the previous page with a success message
        return redirect()->back()->with('success', 'Employer deleted successfully.');
    }

    public function modifyEmployer(Request $request, $id_employer){
        DB::table('employees')
        ->where('id', $id_employer)
        ->update([
            'nom'=>$request->input('nom'),
            'prenom'=>$request->input('prenom'),
            'cin'=>$request->input('cin'),
            'numero_post'=>$request->input('numero_post'),
            'libelle_post'=>$request->input('libelle_post'),
        ]);
        return redirect()->back()->with('success', 'Employer modified successfully.');
    }


    public function allAdmins(){
        $admins = DB::table('admins')
        ->select('admins.id as id_admin', 'admins.*', 'employees.*')
        ->join('employees', 'employees.id', '=', 'admins.id_employee')
        ->get();

        return (view('admins',compact('admins')));
    }

    public function addAdmin(Request $request){
        $admin=new Admin();
        $employer=new Employee();


        $employer->nom=$request->input('nom');
        $employer->prenom=$request->input('prenom');
        $employer->cin=$request->input('cin');
        $employer->numero_post=$request->input('numero_post');
        $employer->libelle_post=$request->input('libelle_post');
        $employer->save();


        $result = DB::selectOne("SELECT id FROM employees WHERE id = LAST_INSERT_ID()");
        $id_employer = $result->id;
        $admin->id_employee=$id_employer;
        $admin->email=$request->input('email');
        // $admin->password=Crypt::encrypt($request->input('password'));
        $admin->password= Hash::make($request->input('password'));

        $admin->save();

        return redirect()->back()->with('success', 'employer added successfully.');
    }

        public function modifyAdmin(Request $request,$id_admin) {
            $id = DB::table('admins')
            ->select('admins.id_employee')
            ->where('admins.id', '=', $id_admin)
            ->get();
            $id_employer = $id[0]->id_employee;


            DB::table('admins')
            ->where('id', $id_admin)
            ->update([
                'email'=>$request->input('email'),
                'password'=>$request->input('password'),
            ]);

            DB::table('employees')
            ->where('id', $id_employer)
            ->update([
                'nom'=>$request->input('nom'),
                'prenom'=>$request->input('prenom'),
                'cin'=>$request->input('cin'),
                'numero_post'=>$request->input('numero_post'),
                'libelle_post'=>$request->input('libelle_post'),
            ]);

            return redirect()->back()->with('success', 'car modified successfully.');
        }

}
