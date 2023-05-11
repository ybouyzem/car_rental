<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MarqueSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('marques')->insert([
            ['libelle' => 'Mercedes-Benz C-Class'],
            ['libelle' => 'Ford Focus'],
            ['libelle' => 'Lamborghini Urus'],
            ['libelle' => 'Toyota Camry'],
            ['libelle' => 'Audi A6'],
            ['libelle' => 'BMW X7'],
            ['libelle' => 'Hyundai Elantra'],
            ['libelle' => 'Nissan Kicks (P15)'],
            ['libelle' => 'Chevrolet Corvette'],
            ['libelle' => 'Jaguar XJ'],
        ]);
    }
}
