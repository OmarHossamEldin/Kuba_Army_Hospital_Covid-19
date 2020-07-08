<template>
  <v-form>
    <v-container class="BoundriesArea">
      <v-row>
        <v-col cols="12">
          <h2>Current Medications:-</h2>
        </v-col>
        <v-col cols="3">
          <v-switch
            v-model="CurrentMedicationsDetails.Hydroxychloroquine"
            label="Hydroxychloroquine"
          ></v-switch>
        </v-col>
        <v-col cols="3">
          <v-switch v-model="CurrentMedicationsDetails.Azithromycin" label="Azithromycin"></v-switch>
        </v-col>
        <v-col cols="3">
          <v-switch v-model="CurrentMedicationsDetails.Antiviral" label="Antiviral"></v-switch>
        </v-col>
        <v-col cols="3">
          <v-switch v-model="CurrentMedicationsDetails.OtherAntibiotics" label="Other Antibiotics"></v-switch>
        </v-col>
        <v-col cols="3">
          <v-switch v-model="CurrentMedicationsDetails.Antipyretic" label="Antipyretic"></v-switch>
        </v-col>

        <v-col cols="3">
          <v-switch @change="chooseOthers" label="Others"></v-switch>
        </v-col>
        <v-col cols="6">
          <v-text-field
            :class="{isOtherNotSelectedClass:isOtherNotSelected}"
            v-model="CurrentMedicationsDetails.Others"
            label="Other Medications"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "CurrentMedications",
  props: ["CurrentMedicationsDetails"],
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
        CurrentMedicationsDetails.Others = "";
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