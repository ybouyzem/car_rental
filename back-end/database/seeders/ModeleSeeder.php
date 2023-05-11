<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ModeleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('modeles')->insert([
            [
                'id_marque' => 2,
                'libelle' => '2021 ST-Line',
            ],
            [
                'id_marque' => 9,
                'libelle' => '2022 Stingray Z06',
            ],
            [
                'id_marque' => 4,
                'libelle' => '2022 TRD',
            ],
            [
                'id_marque' => 7,
                'libelle' => '2022 Hybrid',
            ],
            [
                'id_marque' => 6,
                'libelle' => '2021 M50i',
            ],
            [
                'id_marque' => 3,
                'libelle' => '2023 Evo',
            ],
            [
                'id_marque' => 8,
                'libelle' => '2021 SR',
            ],
            [
                'id_marque' => 10,
                'libelle' => '2020',
            ],
            [
                'id_marque' => 1,
                'libelle' => '2021 Sedan',
            ],
            [
                'id_marque' => 2,
                'libelle' => '2019 Active X',
            ],
            [
                'id_marque' => 5,
                'libelle' => '2021 Sedan',
            ],
            [
                'id_marque' => 1,
                'libelle' => '2022 Wagon',
            ],
            [
                'id_marque' => 5,
                'libelle' => '2022 e-tron',
            ],
            [
                'id_marque' => 8,
                'libelle' => '2022 e-Power',
            ],
            [
                'id_marque' => 4,
                'libelle' => '2021 Hybrid',
            ],
            [
                'id_marque' => 6,
                'libelle' => '2022 Alpina XB7',
            ],
            [
                'id_marque' => 9,
                'libelle' => '2023 Zora',
            ],
            [
                'id_marque' => 7,
                'libelle' => '2021 SE',
            ],
            [
                'id_marque' => 2,
                'libelle' => '2020 RS',
            ],
            [
                'id_marque' => 3,
                'libelle' => '2021 Pearl Capsule',
            ],
        ]);
    }
}
