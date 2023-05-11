<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('admins')->insert([
            [
                'id_employee' => 49,
                'email' => strtolower(Str::random(10)).'@admin.com',
                'password' => hash::make('adminadmin'),
            ],
            [
                'id_employee' => 50,
                'email' => strtolower(Str::random(10)).'@admin.com',
                'password' => hash::make('adminadmin'),
            ],
        ]);
    }
}
