<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class VoitureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $randomLetter = chr(rand(65, 90));
        $cars = [
            // 1 - Ford Focus 2021 ST-Line
            [
                'id_modele' => 1,
                'matricule' => fake()->randomNumber(5) . $randomLetter . fake()->randomNumber(2),
                'image' => 'Ford_Focus.png',
                'statut' => 'Available',
                'carburant' => 'Essence',
                'boîte_vitesse' => 'Manual',
                'nombre_places' => 5,
                'date_debut_assurance' => fake()->dateTimeBetween('-1 year', 'now')->format('Y-m-d'),
                'date_fin_assurance' => fake()->dateTimeBetween('now', '+1 year')->format('Y-m-d'),
                'cout_assurance' => fake()->randomFloat(2, 500, 2000),
                'description' => fake()->sentence,
                'prix_jour' => fake()->randomFloat(2, 2000, 3500),
            ],
            // 2 - Chevrolet Corvette 2022 Stingray Z06
            [
                'id_modele' => 2,
                'matricule' => fake()->randomNumber(5) . $randomLetter . fake()->randomNumber(2),
                'image' => 'Chevrolet_Corvette.png',
                'statut' => 'Available',
                'carburant' => 'Diesel',
                'boîte_vitesse' => 'Automatic',
                'nombre_places' => 2,
                'date_debut_assurance' => fake()->dateTimeBetween('-1 year', 'now')->format('Y-m-d'),
                'date_fin_assurance' => fake()->dateTimeBetween('now', '+1 year')->format('Y-m-d'),
                'cout_assurance' => fake()->randomFloat(2, 500, 2000),
                'description' => fake()->sentence,
                'prix_jour' => fake()->randomFloat(2, 2000, 3500),
            ],
            // 3 - Toyota Camry 2022 TRD
            [
                'id_modele' => 3,
                'matricule' => fake()->randomNumber(5) . $randomLetter . fake()->randomNumber(2),
                'image' => 'Toyota_Camry.png',
                'statut' => 'Available',
                'carburant' => 'Essence',
                'boîte_vitesse' => 'Manual',
                'nombre_places' => 5,
                'date_debut_assurance' => fake()->dateTimeBetween('-1 year', 'now')->format('Y-m-d'),
                'date_fin_assurance' => fake()->dateTimeBetween('now', '+1 year')->format('Y-m-d'),
                'cout_assurance' => fake()->randomFloat(2, 500, 2000),
                'description' => fake()->sentence,
                'prix_jour' => fake()->randomFloat(2, 2000, 3500),
            ],
            // 4 - Hyundai Elantra 2022 Hybrid
            [
                'id_modele' => 4,
                'matricule' => fake()->randomNumber(5) . $randomLetter . fake()->randomNumber(2),
                'image' => 'Hyundai_Elantra.png',
                'statut' => 'Available',
                'carburant' => 'Essence',
                'boîte_vitesse' => 'Manual',
                'nombre_places' => 5,
                'date_debut_assurance' => fake()->dateTimeBetween('-1 year', 'now')->format('Y-m-d'),
                'date_fin_assurance' => fake()->dateTimeBetween('now', '+1 year')->format('Y-m-d'),
                'cout_assurance' => fake()->randomFloat(2, 500, 2000),
                'description' => fake()->sentence,
                'prix_jour' => fake()->randomFloat(2, 2000, 3500),
            ],
            // 5 - BMW X7 2021 M50i
            [
                'id_modele' => 5,
                'matricule' => fake()->randomNumber(5) . $randomLetter . fake()->randomNumber(2),
                'image' => 'BMW_X7.png',
                'statut' => 'Malfunction',
                'carburant' => 'Essence',
                'boîte_vitesse' => 'Automatic',
                'nombre_places' => 5,
                'date_debut_assurance' => fake()->dateTimeBetween('-1 year', 'now')->format('Y-m-d'),
                'date_fin_assurance' => fake()->dateTimeBetween('now', '+1 year')->format('Y-m-d'),
                'cout_assurance' => fake()->randomFloat(2, 500, 2000),
                'description' => fake()->sentence,
                'prix_jour' => fake()->randomFloat(2, 2000, 3500),
            ],
            // 6 - Lamborghini Urus 2023 Evo
            [
                'id_modele' => 6,
                'matricule' => fake()->randomNumber(5) . $randomLetter . fake()->randomNumber(2),
                'image' => 'Lamborghini_Urus.png',
                'statut' => 'Available',
                'carburant' => 'Essence',
                'boîte_vitesse' => 'Manual',
                'nombre_places' => 5,
                'date_debut_assurance' => fake()->dateTimeBetween('-1 year', 'now')->format('Y-m-d'),
                'date_fin_assurance' => fake()->dateTimeBetween('now', '+1 year')->format('Y-m-d'),
                'cout_assurance' => fake()->randomFloat(2, 500, 2000),
                'description' => fake()->sentence,
                'prix_jour' => fake()->randomFloat(2, 2000, 3500),
            ],
            // 7 - Nissan Kicks (P15) 2021 SR
            [
                'id_modele' => 7,
                'matricule' => fake()->randomNumber(5) . $randomLetter . fake()->randomNumber(2),
                'image' => 'Nissan_Kicks__P15.png',
                'statut' => 'Rented',
                'carburant' => 'Essence',
                'boîte_vitesse' => 'Manual',
                'nombre_places' => 5,
                'date_debut_assurance' => fake()->dateTimeBetween('-1 year', 'now')->format('Y-m-d'),
                'date_fin_assurance' => fake()->dateTimeBetween('now', '+1 year')->format('Y-m-d'),
                'cout_assurance' => fake()->randomFloat(2, 500, 2000),
                'description' => fake()->sentence,
                'prix_jour' => fake()->randomFloat(2, 2000, 3500),
            ],
            // 8 - Jaguar XJ 2020
            [
                'id_modele' => 8,
                'matricule' => fake()->randomNumber(5) . $randomLetter . fake()->randomNumber(2),
                'image' => 'Jaguar_XJ.png',
                'statut' => 'Available',
                'carburant' => 'Essence',
                'boîte_vitesse' => 'Automatic',
                'nombre_places' => 5,
                'date_debut_assurance' => fake()->dateTimeBetween('-1 year', 'now')->format('Y-m-d'),
                'date_fin_assurance' => fake()->dateTimeBetween('now', '+1 year')->format('Y-m-d'),
                'cout_assurance' => fake()->randomFloat(2, 500, 2000),
                'description' => fake()->sentence,
                'prix_jour' => fake()->randomFloat(2, 2000, 3500),
            ],
            // 9 - Mercedes-Benz C-Class 2021 Sedan
            [
                'id_modele' => 9,
                'matricule' => fake()->randomNumber(5) . $randomLetter . fake()->randomNumber(2),
                'image' => 'Mercedes-Benz_C-Class.png',
                'statut' => 'Available',
                'carburant' => 'Diesel',
                'boîte_vitesse' => 'Manual',
                'nombre_places' => 5,
                'date_debut_assurance' => fake()->dateTimeBetween('-1 year', 'now')->format('Y-m-d'),
                'date_fin_assurance' => fake()->dateTimeBetween('now', '+1 year')->format('Y-m-d'),
                'cout_assurance' => fake()->randomFloat(2, 500, 2000),
                'description' => fake()->sentence,
                'prix_jour' => fake()->randomFloat(2, 2000, 3500),
            ],
            // 10 - Ford Focus 2019 Active X
            [
                'id_modele' => 10,
                'matricule' => fake()->randomNumber(5) . $randomLetter . fake()->randomNumber(2),
                'image' => 'Ford_Focus.png',
                'statut' => 'Available',
                'carburant' => 'Essence',
                'boîte_vitesse' => 'Manual',
                'nombre_places' => 5,
                'date_debut_assurance' => fake()->dateTimeBetween('-1 year', 'now')->format('Y-m-d'),
                'date_fin_assurance' => fake()->dateTimeBetween('now', '+1 year')->format('Y-m-d'),
                'cout_assurance' => fake()->randomFloat(2, 500, 2000),
                'description' => fake()->sentence,
                'prix_jour' => fake()->randomFloat(2, 2000, 3500),
            ],
            // 11 - Audi A6 2021 Sedan
            [
                'id_modele' => 11,
                'matricule' => fake()->randomNumber(5) . $randomLetter . fake()->randomNumber(2),
                'image' => 'Audi_A6.png',
                'statut' => 'Available',
                'carburant' => 'Essence',
                'boîte_vitesse' => 'Manual',
                'nombre_places' => 5,
                'date_debut_assurance' => fake()->dateTimeBetween('-1 year', 'now')->format('Y-m-d'),
                'date_fin_assurance' => fake()->dateTimeBetween('now', '+1 year')->format('Y-m-d'),
                'cout_assurance' => fake()->randomFloat(2, 500, 2000),
                'description' => fake()->sentence,
                'prix_jour' => fake()->randomFloat(2, 2000, 3500),
            ],
            // 12 - Mercedes-Benz C-Class 2022 Wagon
            [
                'id_modele' => 12,
                'matricule' => fake()->randomNumber(5) . $randomLetter . fake()->randomNumber(2),
                'image' => 'Mercedes-Benz_C-Class.png',
                'statut' => 'Malfunction',
                'carburant' => 'Diesel',
                'boîte_vitesse' => 'Automatic',
                'nombre_places' => 5,
                'date_debut_assurance' => fake()->dateTimeBetween('-1 year', 'now')->format('Y-m-d'),
                'date_fin_assurance' => fake()->dateTimeBetween('now', '+1 year')->format('Y-m-d'),
                'cout_assurance' => fake()->randomFloat(2, 500, 2000),
                'description' => fake()->sentence,
                'prix_jour' => fake()->randomFloat(2, 2000, 3500),
            ],
            // 13 - Audi A6 2022 e-tron
            [
                'id_modele' => 13,
                'matricule' => fake()->randomNumber(5) . $randomLetter . fake()->randomNumber(2),
                'image' => 'Audi_A6.png',
                'statut' => 'Available',
                'carburant' => 'Essence',
                'boîte_vitesse' => 'Manual',
                'nombre_places' => 5,
                'date_debut_assurance' => fake()->dateTimeBetween('-1 year', 'now')->format('Y-m-d'),
                'date_fin_assurance' => fake()->dateTimeBetween('now', '+1 year')->format('Y-m-d'),
                'cout_assurance' => fake()->randomFloat(2, 500, 2000),
                'description' => fake()->sentence,
                'prix_jour' => fake()->randomFloat(2, 2000, 3500),
            ],
            // 14 - Nissan Kicks (P15) 2022 e-Power
            [
                'id_modele' => 14,
                'matricule' => fake()->randomNumber(5) . $randomLetter . fake()->randomNumber(2),
                'image' => 'Nissan_Kicks__P15.png',
                'statut' => 'Available',
                'carburant' => 'Essence',
                'boîte_vitesse' => 'Automatic',
                'nombre_places' => 5,
                'date_debut_assurance' => fake()->dateTimeBetween('-1 year', 'now')->format('Y-m-d'),
                'date_fin_assurance' => fake()->dateTimeBetween('now', '+1 year')->format('Y-m-d'),
                'cout_assurance' => fake()->randomFloat(2, 500, 2000),
                'description' => fake()->sentence,
                'prix_jour' => fake()->randomFloat(2, 2000, 3500),
            ],
            // 15 - Toyota Camry 2021 Hybrid
            [
                'id_modele' => 15,
                'matricule' => fake()->randomNumber(5) . $randomLetter . fake()->randomNumber(2),
                'image' => 'Toyota_Camry.png',
                'statut' => 'Available',
                'carburant' => 'Diesel',
                'boîte_vitesse' => 'Manual',
                'nombre_places' => 5,
                'date_debut_assurance' => fake()->dateTimeBetween('-1 year', 'now')->format('Y-m-d'),
                'date_fin_assurance' => fake()->dateTimeBetween('now', '+1 year')->format('Y-m-d'),
                'cout_assurance' => fake()->randomFloat(2, 500, 2000),
                'description' => fake()->sentence,
                'prix_jour' => fake()->randomFloat(2, 2000, 3500),
            ],
            // 16 - BMW X7 2022 Alpina XB7
            [
                'id_modele' => 16,
                'matricule' => fake()->randomNumber(5) . $randomLetter . fake()->randomNumber(2),
                'image' => 'BMW_X7.png',
                'statut' => 'Malfunction',
                'carburant' => 'Diesel',
                'boîte_vitesse' => 'Manual',
                'nombre_places' => 5,
                'date_debut_assurance' => fake()->dateTimeBetween('-1 year', 'now')->format('Y-m-d'),
                'date_fin_assurance' => fake()->dateTimeBetween('now', '+1 year')->format('Y-m-d'),
                'cout_assurance' => fake()->randomFloat(2, 500, 2000),
                'description' => fake()->sentence,
                'prix_jour' => fake()->randomFloat(2, 2000, 3500),
            ],
            // 17 - Chevrolet Corvette 2023 Zora
            [
                'id_modele' => 17,
                'matricule' => fake()->randomNumber(5) . $randomLetter . fake()->randomNumber(2),
                'image' => 'Chevrolet_Corvette.png',
                'statut' => 'Rented',
                'carburant' => 'Diesel',
                'boîte_vitesse' => 'Automatic',
                'nombre_places' => 2,
                'date_debut_assurance' => fake()->dateTimeBetween('-1 year', 'now')->format('Y-m-d'),
                'date_fin_assurance' => fake()->dateTimeBetween('now', '+1 year')->format('Y-m-d'),
                'cout_assurance' => fake()->randomFloat(2, 500, 2000),
                'description' => fake()->sentence,
                'prix_jour' => fake()->randomFloat(2, 2000, 3500),
            ],
            // 18 - Hyundai Elantra 2021 SE
            [
                'id_modele' => 18,
                'matricule' => fake()->randomNumber(5) . $randomLetter . fake()->randomNumber(2),
                'image' => 'Hyundai_Elantra.png',
                'statut' => 'Available',
                'carburant' => 'Diesel',
                'boîte_vitesse' => 'Manual',
                'nombre_places' => 5,
                'date_debut_assurance' => fake()->dateTimeBetween('-1 year', 'now')->format('Y-m-d'),
                'date_fin_assurance' => fake()->dateTimeBetween('now', '+1 year')->format('Y-m-d'),
                'cout_assurance' => fake()->randomFloat(2, 500, 2000),
                'description' => fake()->sentence,
                'prix_jour' => fake()->randomFloat(2, 2000, 3500),
            ],
            // 19 - Ford Focus 2020 RS
            [
                'id_modele' => 19,
                'matricule' => fake()->randomNumber(5) . $randomLetter . fake()->randomNumber(2),
                'image' => 'Ford_Focus.png',
                'statut' => 'Available',
                'carburant' => 'Essence',
                'boîte_vitesse' => 'Manual',
                'nombre_places' => 5,
                'date_debut_assurance' => fake()->dateTimeBetween('-1 year', 'now')->format('Y-m-d'),
                'date_fin_assurance' => fake()->dateTimeBetween('now', '+1 year')->format('Y-m-d'),
                'cout_assurance' => fake()->randomFloat(2, 500, 2000),
                'description' => fake()->sentence,
                'prix_jour' => fake()->randomFloat(2, 2000, 3500),
            ],
            // 20 - Lamborghini Urus 2021 Pearl Capsule
            [
                'id_modele' => 20,
                'matricule' => fake()->randomNumber(5) . $randomLetter . fake()->randomNumber(2),
                'image' => 'Lamborghini_Urus.png',
                'statut' => 'Available',
                'carburant' => 'Diesel',
                'boîte_vitesse' => 'Automatic',
                'nombre_places' => 5,
                'date_debut_assurance' => fake()->dateTimeBetween('-1 year', 'now')->format('Y-m-d'),
                'date_fin_assurance' => fake()->dateTimeBetween('now', '+1 year')->format('Y-m-d'),
                'cout_assurance' => fake()->randomFloat(2, 500, 2000),
                'description' => fake()->sentence,
                'prix_jour' => fake()->randomFloat(2, 2000, 3500),
            ],
        ];

        foreach ($cars as $car) {
            $imagePath = 'public/cars_pics/' . $car['image'];

            // Store the image file
            $storedPath = Storage::putFile('public/images', $imagePath);

            // Update the image path in the $cars array
            $car['image'] = Storage::url($storedPath);
        }



        // DB::table('voitures')->truncate();
        DB::table('voitures')->insert($cars);
    }
}
