<template>
  <div>
    <top :InvestigationsDetails="InvestigationsData" />
    <center :InvestigationsDetails='InvestigationsData' />
    <bottom :stepCo="step" :InvestigationsDetails='InvestigationsData' />
    <v-container>
        <v-row>
            <v-col cols='5'>

            </v-col>
            <v-col cols='2'>
                <v-btn rounded color="success" @click='saveData' dark>Save</v-btn>
            </v-col>
        </v-row>
    </v-container>

  </div>
</template>


<script>
import top from "./top";
import center from "./center";
import bottom from "./bottom";
import axios from "axios";

export default {
  name: "stepsContainer",
  components: {
    top,
    center,
    bottom
  },
  props: ["step",'InvestigationsData','patientid'],
  data() {
    return {

    };
  },
  methods: {
    saveData: function() {
      this.InvestigationsData.Step=this.step; // key for saving steps
      let token = this.$cookie.get("user-token");
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      axios
        .post(
          "/investigation",
          {
            patient_id:this.patientid,
            investigations:this.InvestigationsData,
            step : this.step
          },
          config
        )
        .then(res => {
            this.$swal({icon:'success',text:'Investigation Saved'});
        });
    },

  },
  mounted(){
      this.getData();
  },
};
</script>

<style>
.BoundriesArea {
  border: 2px solid #ccc;
  margin: 15px;
}
</style>
