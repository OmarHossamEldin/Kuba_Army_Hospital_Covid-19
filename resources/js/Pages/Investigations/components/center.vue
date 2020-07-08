<template>
  <v-container>
    <v-row class="BoundriesArea">
      <v-col cols="12">
        <h2>ECG:-</h2>
      </v-col>
      <v-col cols="4">
        <v-radio-group v-model="InvestigationsDetails.ECG.Rhythm" row>
          <label  class="ma-2">Rhythm:</label>
          <v-radio value="Sinus" label="Sinus"></v-radio>
          <v-radio value="Irregular" label="Irregular"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="4">
        <v-text-field v-model="InvestigationsDetails.ECG.QRS" label="QRS" required></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field v-model="InvestigationsDetails.ECG.Twave" label="T wave" required></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="InvestigationsDetails.ECG.CorrectedQt" label="Corrected QT" append-icon="msec" required></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="InvestigationsDetails.ECG.Arrhythmias" label="Arrythmias" required></v-text-field>
      </v-col>
    </v-row>
    <v-row class="BoundriesArea">
      <v-col cols="12">
        <h2>Echocardiography:-</h2>
      </v-col>
      <v-col cols="4">
        <v-radio-group v-model="InvestigationsDetails.Echocardiography.LVID" row>
          <label class="ma-2">LVID:</label>
          <v-radio value="Normal" label="Normal"></v-radio>
          <v-radio value="Dilated" label="Dilated"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="4">
       <v-radio-group v-model="InvestigationsDetails.Echocardiography.RV" row>
          <label class="ma-2">RV:</label>
          <v-radio value="Normal" label="Normal"></v-radio>
          <v-radio value="Dilated" label="Dilated"></v-radio>
        </v-radio-group>
      </v-col>
      </v-col>
      <v-col cols="4">
        <v-text-field v-model="InvestigationsDetails.Echocardiography.EF" label="EF" append-icon='%' required></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-radio-group v-model="InvestigationsDetails.Echocardiography.RSWMA" row>
          <label class="ma-2">RSWMA:</label>
          <v-radio value="Present" label="Present"></v-radio>
          <v-radio value="Absent" label="Absent"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="4">
        <v-radio-group v-model="InvestigationsDetails.Echocardiography.Thrombus" row>
          <label class="ma-2">Thrombus:</label>
          <v-radio value="Present" label="Present"></v-radio>
          <v-radio value="Absent" label="Absent"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="6">
        <v-radio-group v-model="InvestigationsDetails.Echocardiography.PericardialEffusion" row>
          <label class="ma-2">Pericardial effusion:</label>
          <v-radio value="Present" label="Present"></v-radio>
          <v-radio value="Absent" label="Absent"></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "center",
  props:['InvestigationsDetails']
};
</script>

<style>
</style>
