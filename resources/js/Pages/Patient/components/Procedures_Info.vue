<template>
  <v-form>
    <v-container class="BoundriesArea">
      <v-row>
        <v-col cols="12">
          <h2>Procedures:-</h2>
        </v-col>
        <v-col cols="6">
          <p>ICU admission</p>
          <v-radio-group v-model="ProceduresDetails.ICUadmission" row>
            <v-radio  label="Yes" value='Yes'></v-radio>
            <v-radio  label="No" value='No'></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="6">
          <p>Nasal Oxygen</p>
          <v-radio-group v-model="ProceduresDetails.NasalOxygen" row>
            <v-radio  label="Yes" value='Yes'></v-radio>
            <v-radio  label="No" value='No'></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="6">
          <p>CPAP</p>
          <v-radio-group v-model="ProceduresDetails.CPAP" row>
            <v-radio  label="Yes" value='Yes'></v-radio>
            <v-radio  label="No" value='No'></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="6">
          <p>Mechanical Ventilation</p>
          <v-radio-group v-model="ProceduresDetails.MechanicalVentilation" row>
            <v-radio  label="Yes" value='Yes'></v-radio>
            <v-radio  label="No" value='No'></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
    name:'Procedures',
    props:['ProceduresDetails']
};
</script>

<style>
</style>