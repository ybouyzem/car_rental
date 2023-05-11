<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // \App\Models\Employee::factory(48)->create();
        DB::table('employees')->insert([
            [
                'nom' => 'Alahyane',
                'prenom' => 'Youssef',
                'cin' => 'NE26849',
                'numero_post' => '117',
                'libelle_post' => 'Web Master',
            ],
            [
                'nom' => 'Bouyzem',
                'prenom' => 'Younes',
                'cin' => 'NE15748',
                'numero_post' => '118',
                'libelle_post' => 'Web Master',
            ],
        ]);
    }
}
