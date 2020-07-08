<template>
  <v-conainter>
    <v-row class="BoundriesArea">
      <v-col cols="3">
        <v-text-field v-model="InvestigationsDetails.Urea" label="urea" required></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="InvestigationsDetails.Creatinine" label="Creatinine" required></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="InvestigationsDetails.Na" label="Na" required></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="InvestigationsDetails.K" label="K" required></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="InvestigationsDetails.Hb" label="Hb" required></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="InvestigationsDetails.Platelets" label="Platelets" required></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="InvestigationsDetails.TotalWBCs" label="Total WBCs" required></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="InvestigationsDetails.Lymphocytes" label="Lymphocytes" required></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="InvestigationsDetails.Neutrophils" label="Neutrophils" required></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="InvestigationsDetails.Monocytes" label="Monocytes" required></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="InvestigationsDetails.ESR" label="ESR" required></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="InvestigationsDetails.CRP" label="CRP" required></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="InvestigationsDetails.Ddimer" label="D. dimer" required></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field
          v-model="InvestigationsDetails.Cardiactroponin"
          label="Cardiac troponin"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="InvestigationsDetails.SGOT" label="SGOT" required></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="InvestigationsDetails.SGPT" label="SGPT" required></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="InvestigationsDetails.SAlbumin" label="S.Albumin" required></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="InvestigationsDetails.INR" label="INR" required></v-text-field>
      </v-col>
    </v-row>
  </v-conainter>
</template>

<script>
export default {
  name: "top",
  props: ["InvestigationsDetails"]
};
</script>

<style>
</style>
