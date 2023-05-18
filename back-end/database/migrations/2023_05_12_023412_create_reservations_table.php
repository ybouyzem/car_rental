<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('id_voiture')->constrained('voitures')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('id_client')->constrained('clients')->onDelete('cascade')->onUpdate('cascade');
            $table->datetime('location');
            $table->datetime('retour');
            $table->datetime('prolongation')->nullable();
            $table->timestamp('reservation_verifie_le')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
