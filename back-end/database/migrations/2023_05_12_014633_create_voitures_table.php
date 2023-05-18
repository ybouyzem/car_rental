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
        Schema::create('voitures', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('id_modele')->constrained('modeles')->onDelete('cascade')->onUpdate('cascade');
            $table->string('matricule', 100)->unique();
            $table->text('image');
            $table->string('statut');
            $table->string('carburant');
            $table->string('boîte_vitesse');
            $table->integer('nombre_places');
            $table->date('date_debut_assurance');
            $table->date('date_fin_assurance');
            $table->float('cout_assurance');
            $table->text('description');
            $table->float('prix_jour');
            $table->float('longitude')->nullable();
            $table->float('latitude')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('voitures');
    }
};
