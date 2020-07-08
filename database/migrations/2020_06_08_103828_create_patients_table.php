<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->string('Name');
            $table->string('PNumber');
            $table->bigInteger('user_id')->unsigned()->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('set null');
            $table->integer('Age');
            $table->string('Gender');
            $table->string('mobile');
            $table->date('AdmissionDate');
            $table->text('Complaint');
            $table->text('PastHistory');
            $table->text('HistoryOfCardiacDisease');
            $table->text('ExAtAdmission');
            $table->text('PreviousMedications');
            $table->text('NasoPharynealSwab1');
            $table->text('NasoPharynealSwab2')->nullable();
            $table->text('Procedures');
            $table->text('CurrentMedications');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patients');
    }
}
