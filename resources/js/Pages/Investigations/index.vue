<template>
  <app>
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-chip class="ma-2 nameStyle" color="teal" text-color="white">
            <v-avatar left>
              <v-icon>mdi mdi-hospital</v-icon>
            </v-avatar>
            <span>{{patient.Name}}</span>
          </v-chip>
        </v-col>
        <v-col cols="5"></v-col>
        <v-col cols="3">
          <v-chip class="ma-2 nameStyle" color="teal" text-color="white">
            <v-avatar left>
              <v-icon>mdi mdi-stethoscope</v-icon>
            </v-avatar>
            <span>{{patient.PNumber}}</span>
          </v-chip>
        </v-col>
        <v-col cols="12">
          <v-stepper @change="changeSteps" :non-linear='non_linear'>
            <v-stepper-header>
              <v-stepper-step :editable='non_linear' :complete='!non_linear' step="Ad">on Admission</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :editable='non_linear' :complete='!non_linear' v-if="days >= 3" step="3rd">3rd Day</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step v-if="days >= 7" :editable='non_linear' :complete='!non_linear' step="7th">7th Day</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step v-if="days >= 14" :editable='non_linear' :complete='!non_linear' step="14th">14th Day</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step v-if="days >= 28" :editable='non_linear' :complete='!non_linear' step="28th">28th Day</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step editable step="Dis">Discharge</v-stepper-step>
            </v-stepper-header>
            <v-stepper-items v-for="step in steps" :key="step">
              <v-stepper-content :step="step">
                <v-dialog v-model="dialog" hide-overlay persistent width="300">
                  <v-card color="primary" dark>
                    <v-card-text>
                      Please stand by
                      <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                    </v-card-text>
                  </v-card>
                </v-dialog>
                <stepsContainer v-if="loaded"
                  :step="step"
                  :InvestigationsData="InvestigationsData"
                  :patientid="patient.id"
                />
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-col>
      </v-row>
    </v-container>
  </app>
</template>

<script>
import app from "../../layouts/app";
import stepsContainer from "./components/steps";
import axios from "axios";
import auth from "../../utils/Auth";

export default {
  name: "Investigations",
  components: {
    app,
    stepsContainer
  },
  props: ["patient", "days"],
  data() {
    return {
      dialog: false,
      loaded : false,
      non_linear:true,
      steps: ["Ad", "3rd", "7th", "14th", "28th", "Dis"],
      InvestigationsData: {
        Urea: "",
        Creatinine: "",
        Na: "",
        K: "",
        Hb: "",
        Platelets: "",
        TotalWBCs: "",
        Lymphocytes: "",
        Neutrophils: "",
        Monocytes: "",
        ESR: "",
        CRP: "",
        Ddimer: "",
        Cardiactroponin: "",
        SGOT: "",
        SGPT: "",
        SAlbumin: "",
        INR: "",
        ECG: {
          Rhythm: "",
          Twave: "",
          CorrectedQt: "",
          Arrhythmias: ""
        },
        Echocardiography: {
          LVID: "",
          RV: "",
          EF: "",
          RSWMA: "",
          Thrombus: "",
          PericardialEffusion: ""
        },
        HrHolter24: "",
        CXR: "",
        CTChest: "",
        Complications: "",
        DateofDischarge: "",
        DischargeStatus: "",
        MedicationsAtDischarge: {
          Hydroxychloroquine: "",
          Azithromycin: "",
          Antiviral: "",
          OtherAntibiotics: "",
          Antipyretic: "",
          OtheriInfo: ""
        }
      }
    };
  },
  methods: {
    changeSteps: function(step) {
      this.step = step;
      this.getData(step, this.patient.id);
    },
    getData: function(step, patient_id) {
        this.dialog= true;
        this.loaded= false;
      axios
        .get(`/investigation/show/${step}/${patient_id}`)
        .then(res => {
          if (res.data.status) {
            this.InvestigationsData = res.data.data.investigations;
          } else {
            this.InvestigationsData = {
              Urea: "",
              Creatinine: "",
              Na: "",
              K: "",
              Hb: "",
              Platelets: "",
              TotalWBCs: "",
              Lymphocytes: "",
              Neutrophils: "",
              Monocytes: "",
              ESR: "",
              CRP: "",
              Ddimer: "",
              Cardiactroponin: "",
              SGOT: "",
              SGPT: "",
              SAlbumin: "",
              INR: "",
              ECG: {
                Rhythm: "",
                Twave: "",
                CorrectedQt: "",
                Arrhythmias: ""
              },
              Echocardiography: {
                LVID: "",
                RV: "",
                EF: "",
                RSWMA: "",
                Thrombus: "",
                PericardialEffusion: ""
              },
              HrHolter24: "",
              CXR: "",
              CTChest: "",
              Complications: "",
              DateofDischarge: "",
              DischargeStatus: "",
              MedicationsAtDischarge: {
                Hydroxychloroquine: "",
                Azithromycin: "",
                Antiviral: "",
                OtherAntibiotics: "",
                Antipyretic: "",
                OtheriInfo: ""
              }
            };
          }
        this.dialog= false;
        this.loaded= true;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created (){
      auth('user');
      axios
        .get(`/investigation/show/Dis/${this.patient.id}`)
        .then(res => {
          if(res.data.status)
          {
              this.non_linear=false;
          }

        })
        .catch(err => {
          console.log(err);
        });
  }
};
</script>

<style >
.nameStyle {
  width: 100%;
}
.nameStyle span {
  margin: 0 auto;
}
</style>
