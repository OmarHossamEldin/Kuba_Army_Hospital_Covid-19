<template>
  <v-form>
    <v-container class="BoundriesArea">
      <v-row>
        <v-col cols="12">
          <h2>Previous Medications:-</h2>
        </v-col>
        <v-col cols="3">
          <v-switch v-model="previousMedicationsDetails.RAAS" label="RAAS"></v-switch>
        </v-col>
        <v-col cols="3">
          <v-switch v-model="previousMedicationsDetails.BBlockers" label="BBlockers"></v-switch>
        </v-col>
        <v-col cols="3">
          <v-switch v-model="previousMedicationsDetails.Amiodarone" label="Amiodarone"></v-switch>
        </v-col>
        <v-col cols="3">
          <v-switch v-model="previousMedicationsDetails.Sotalol" label="Sotalol"></v-switch>
        </v-col>
        <v-col cols="3">
          <v-switch
            v-model="previousMedicationsDetails.OtherAntiarrethmic"
            label="OtherAntiarrethmic"
          ></v-switch>
        </v-col>
        <v-col cols="3">
          <v-switch v-model="previousMedicationsDetails.Antiplatelets" label="Antiplatelets"></v-switch>
        </v-col>
        <v-col cols="3">
          <v-switch v-model="previousMedicationsDetails.Anticoagulants" label="Anticoagulants"></v-switch>
        </v-col>
        <v-col cols="3">
          <v-switch v-model="previousMedicationsDetails.Diuretics" label="Diuretics"></v-switch>
        </v-col>
        <v-col cols="3">
          <v-switch
            v-model="previousMedicationsDetails.CaChannelBlockers"
            label="CaChannelBlockers"
          ></v-switch>
        </v-col>
        <v-col cols="3">
          <v-switch v-model="previousMedicationsDetails.Nitrates" label="Nitrates"></v-switch>
        </v-col>
        <v-col cols="3">
          <v-switch v-model="previousMedicationsDetails.Digoxin" label="Digoxin"></v-switch>
        </v-col>
        <v-col cols="3">
          <v-switch v-model="previousMedicationsDetails.Antibiotics" label="Antibiotics"></v-switch>
        </v-col>
        <v-col cols="3">
          <v-switch @change="chooseOthers" label="Others"></v-switch>
        </v-col>
        <v-col cols="8">
          <v-text-field
            :class="{isOtherNotSelectedClass:isOtherNotSelected}"
            v-model="previousMedicationsDetails.Others"
            label="Other Medications"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "PreviousMedications",
  props: ["previousMedicationsDetails"],
  data() {
    return {
      isOtherNotSelected: true
    };
  },
  methods: {
    chooseOthers: function(value) {
      if (value) this.isOtherNotSelected = false;
      else {
        this.isOtherNotSelected = true;
        previousMedicationsDetails.Others = "";
      }
    }
  }
};
</script>

<style scoped>
.isOtherNotSelectedClass {
  display: none;
}

</style>