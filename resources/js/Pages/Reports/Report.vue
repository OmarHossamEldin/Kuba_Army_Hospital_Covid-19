<template>
  <app>
    <v-container id='printMe' class="ReportsTable" >
      <h3  class="headerStyle">Case Report Form for COVID-19 Patients</h3>
      <front id="printMeFront" :patient="patient" />
      <back id="printMeBack" :investigations="investigations" />
    </v-container>
    <v-btn small color="primary" @click="print">Print Report</v-btn>
  </app>
</template>

<script>
import app from "../../layouts/app";
import front from "./components/front";
import back from "./components/back";
import auth from "../../utils/Auth";

export default {
  name: "Report",
  components: {
    app,
    front,
    back
  },
  props: ["patient", "investigations"],
   methods: {
    print () {
      // Pass the element id here
      this.$htmlToPaper('printMe');
    }
  },
  created() {
    auth('user');
},
};
</script>

<style scoped>
.headerStyle {
  margin: 0 auto;
  text-align: center;
  text-decoration: underline;
  font-weight: bold;
}
</style>
