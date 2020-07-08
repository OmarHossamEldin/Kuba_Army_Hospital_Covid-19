<template>
  <v-container>
    <v-row class="BoundriesArea">
      <v-col cols="4">
        <v-text-field v-model="InvestigationsDetails.HrHolter24" label="24 hr Holter"></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field v-model="InvestigationsDetails.CXR" label="CXR"></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field v-model="InvestigationsDetails.CTChest" label="CT chest"></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field v-model="InvestigationsDetails.Complications" label="Complications"></v-text-field>
      </v-col>
      <v-col v-if="stepCo =='Dis'" cols="3">
        <DatePicker label="Date of Discharge" :dateInput="InvestigationsDetails.DateofDischarge" @dateChanged="onDateChanged" />
      </v-col>
      <v-col v-if="stepCo =='Dis'" cols="9">
        <v-text-field v-model="InvestigationsDetails.DischargeStatus" label="Discharge Status"></v-text-field>
      </v-col>
    </v-row>
    <v-row v-if="stepCo =='Dis'" class="BoundriesArea">
      <v-col cols="12">
        <h2>Medications at Discharge:-</h2>
      </v-col>
      <v-col cols="4">
        <v-switch v-model="InvestigationsDetails.MedicationsAtDischarge.Hydroxychloroquine" label="Hydroxychloroquine"></v-switch>
      </v-col>
      <v-col cols="4">
        <v-switch v-model="InvestigationsDetails.MedicationsAtDischarge.Azithromycin" label="Azithromycin"></v-switch>
      </v-col>
      <v-col cols="4">
        <v-switch v-model="InvestigationsDetails.MedicationsAtDischarge.Antiviral" label="Antiviral"></v-switch>
      </v-col>
      <v-col cols="4">
        <v-switch v-model="InvestigationsDetails.MedicationsAtDischarge.OtherAntibiotics" label="Other Antibiotics"></v-switch>
      </v-col>
      <v-col cols="4">
        <v-switch v-model="InvestigationsDetails.MedicationsAtDischarge.Antipyretic" label="Antipyretic"></v-switch>
      </v-col>
      <v-col cols="4">
        <v-switch @change="chooseOthers"  label="Others"></v-switch>
      </v-col>
      <v-col cols="8">
        <v-text-field
          v-model="InvestigationsDetails.MedicationsAtDischarge.OtheriInfo"
          :class="{isOtherNotSelectedClass:isOtherNotSelected}"
          label="Other Medications"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DatePicker from "../../../utils/DatePicker";

export default {
  name: "bottom",
  components: {
    DatePicker
  },
  props: ["stepCo","InvestigationsDetails"],
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
    },
    onDateChanged : function(date){
        this.InvestigationsDetails.DateofDischarge = date;
    }
  }
};
</script>

<style>
.isOtherNotSelectedClass {
  display: none;
}
</style>
