<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Carbon;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();
        DB::table('admins')->insert([
            [
                'id_employee' => 49,
                'email' => strtolower(Str::random(10)).'@admin.com',
                'password' => Hash::make('12345678'),
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id_employee' => 50,
                'email' => strtolower(Str::random(10)).'@admin.com',
                'password' => Hash::make('adminadmin'),
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);
    }
}
