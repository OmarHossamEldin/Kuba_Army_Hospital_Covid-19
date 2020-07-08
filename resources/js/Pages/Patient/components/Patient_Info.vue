<template>
  <v-form >
    <v-container class="BoundriesArea">
      <v-row>
        <v-col cols=12>
             <h2>Patient Informations:-</h2>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="patientDetails.p_name" label="Name" required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="patientDetails.p_number" label="Patient Number" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="patientDetails.p_age" label="Patient Age" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-select v-model="patientDetails.p_gender" :items="items" label="Patient Gender"></v-select>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="patientDetails.p_mobile" label="Patient Mobile" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
            <DatePicker label = "Admission Date" :dateInput="patientDetails.p_admission" @dateChanged="dateChanged"/>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import DatePicker from '../../../utils/DatePicker';
export default {
  name:'Patient',
  props: ["patientDetails"],
  components:{
      DatePicker,
  },
  data: () => ({
    items: ["Male", "Female"],
    dateInput: '',
  }),
  methods: {
      dateChanged:function(date){
          this.patientDetails.p_admission = date;
      }
  },
  computed(){
      this.dateInput = this.patientDetails.p_admission;
  }
};
</script>

<style scoped>
    .datePicker{
        flex: 1 1 auto;
        line-height: 20px;
            padding: 8px 0;
            max-width: 100%;
            min-width: 0;
            width: 100%;box-shadow: none;
            margin-top: 14px;
            border-bottom: 1px solid #a7a7a7;
    }
    .datePicker:hover{
        border-bottom: 1px solid #212121;
    }
    .datePicker:focus{
        border: 0px 0px 1px #1565C0;

    }
</style>
