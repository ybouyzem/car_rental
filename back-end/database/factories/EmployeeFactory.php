<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Employee>
 */
class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $jobTitles = ['Software Engineer', 'Web Developer', 'Data Analyst', 'Marketing Manager', 'Graphic Designer'];
        return [
            'nom' => fake()->lastName(),
            'prenom' => fake()->firstName(),
            'cin' => 'NE'.fake()->unique()->randomNumber(5),
            'numero_post' => fake()->randomNumber(3),
            'libelle_post' => fake()->randomElement($jobTitles),
        ];
    }
}
