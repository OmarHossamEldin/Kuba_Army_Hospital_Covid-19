<template>
  <app>
    <patientInfo :patientDetails="patientData" />
    <complaintInfo :complaintDetails="complaintData" />
    <pastHistoryInfo :pastHistoryDetails="pastHistoryData" />
    <historyofCardiacDiseaseInfo :HOCDDetails="HOCDData" />
    <exAtAdmissionInfo :exAtAdmissionDetails="exAtAdmissionData" />
    <previousMedicationsInfo :previousMedicationsDetails="previousMedicationsData" />
    <NasoPharyngealSwab
      :NasoPharyngealSwabDetails1="NasoPharyngealSwabData1"
      :NasoPharyngealSwabDetails2="NasoPharyngealSwabData2"
    />
    <Procedures :ProceduresDetails="ProceduresData" />
    <CurrentMedications :CurrentMedicationsDetails="CurrentMedicationsData" />
    <v-row>
      <v-col align="center">
        <div class="my-2">
          <v-btn x-large color="success" @click="saveData" dark>Save</v-btn>
        </div>
      </v-col>
    </v-row>
  </app>
</template>


<script>
import app from "../../layouts/app";
import patientInfo from "./components/Patient_Info";
import complaintInfo from "./components/Complaint_Info";
import pastHistoryInfo from "./components/pastHistory_Info";
import historyofCardiacDiseaseInfo from "./components/historyofCardiacDisease_Info";
import exAtAdmissionInfo from "./components/exatadmission_info";
import previousMedicationsInfo from "./components/previousMedications_info";
import NasoPharyngealSwab from "./components/NasoPharyngealSwab_Info";
import Procedures from "./components/Procedures_Info";
import CurrentMedications from "./components/CurrentMedications_info";
import axios from "axios";
import auth from "../../utils/Auth";

export default {
  name: "patient",
  props: ["patient"],
  components: {
    app,
    patientInfo,
    complaintInfo,
    pastHistoryInfo,
    historyofCardiacDiseaseInfo,
    exAtAdmissionInfo,
    previousMedicationsInfo,
    NasoPharyngealSwab,
    Procedures,
    CurrentMedications
  },
  data() {
    return {
      patientData: {
        p_name: "",
        p_number: "",
        p_age: "",
        p_gender: "",
        p_admission: "",
        p_mobile: ""
      },
      complaintData: {
        Fever: false,
        Sorethroat: false,
        Cough: false,
        Breathlessness: false,
        Muscular: false,
        GITsymptoms: false,
        Onsetofcomplaint: ""
      },
      pastHistoryData: {
        HTN: false,
        DM: false,
        COPD: false,
        Autoimmunedisease: false,
        PHNotifications: ""
      },
      HOCDData: {
        IHD: false,
        HF: false,
        Arrhythmia: false,
        ValvularHD: false,
        CM: false,
        CDnotifications: ""
      },
      exAtAdmissionData: {
        Pulse: "",
        Regularity: false,
        BP: "",
        Temp: "",
        RespRate: "",
        Chestauscultations: "",
        ManifestationsofHF: "",
        ManifestationsDetails: ""
      },
      previousMedicationsData: {
        RAAS: false,
        BBlockers: false,
        Amiodarone: false,
        Sotalol: false,
        OtherAntiarrethmic: false,
        Antiplatelets: false,
        Anticoagulants: false,
        Diuretics: false,
        CaChannelBlockers: false,
        Nitrates: false,
        Digoxin: false,
        Antibiotics: false,
        Others: ""
      },
      NasoPharyngealSwabData1: {
        Status: ""
      },
      NasoPharyngealSwabData2: {
        Status: ""
      },
      ProceduresData: {
        ICUadmission: "",
        NasalOxygen: "",
        CPAP: "",
        MechanicalVentilation: ""
      },
      CurrentMedicationsData: {
        Hydroxychloroquine: false,
        Azithromycin: false,
        Antiviral: false,
        OtherAntibiotics: false,
        Antipyretic: false,
        Others: ""
      },
      editMode : false
    };
  },
  methods: {
    saveData: function() {
      let token = this.$cookie.get("user-token");
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      axios
        .post(
          "/patient",
          {
            Name: this.patientData.p_name,
            PNumber: this.patientData.p_number,
            Age: this.patientData.p_age,
            Gender: this.patientData.p_gender,
            mobile: this.patientData.p_mobile,
            AdmissionDate: this.patientData.p_admission,
            Complaint: this.complaintData,
            PastHistory: this.pastHistoryData,
            HistoryOfCardiacDisease: this.HOCDData,
            ExAtAdmission: this.exAtAdmissionData,
            PreviousMedications: this.previousMedicationsData,
            NasoPharynealSwab1: this.NasoPharyngealSwabData1,
            NasoPharynealSwab2: this.NasoPharyngealSwabData2,
            Procedures: this.ProceduresData,
            CurrentMedications: this.CurrentMedicationsData
          },
          config
        )
        .then(res => {
             if(res.data.status){
                 if(this.editMode){
                     this.$swal({icon:'success',text:'Patient Saved'});
                     window.location.href = "/patient";
                 }
                 else{
                    this.$swal({icon:'success',text:'Patient Saved'});
                    window.location.href = `/patient/${res.data.patient.id}/investigation`;
                 }
             }else
                this.$swal({icon:'error',text:'error!!'});

        });
    }
  },
  created() {
    auth('user');
    if (this.patient) {
        this.editMode = true;
      (this.patientData.p_name = this.patient.Name),
        (this.patientData.p_number = this.patient.PNumber),
        (this.patientData.p_age = this.patient.Age),
        (this.patientData.p_gender = this.patient.Gender),
        (this.patientData.p_mobile = this.patient.mobile),
        (this.patientData.p_admission = this.patient.AdmissionDate),
        (this.complaintData = this.patient.Complaint),
        (this.pastHistoryData = this.patient.PastHistory),
        (this.HOCDData = this.patient.HistoryOfCardiacDisease),
        (this.exAtAdmissionData = this.patient.ExAtAdmission),
        (this.previousMedicationsData = this.patient.PreviousMedications),
        (this.NasoPharyngealSwabData1 = this.patient.NasoPharynealSwab1),
        (this.NasoPharyngealSwabData2 = this.patient.NasoPharynealSwab2),
        (this.ProceduresData = this.patient.Procedures),
        (this.CurrentMedicationsData = this.patient.CurrentMedications);
    }
  }
};
</script>

<style>
.BoundriesArea {
  border: 2px solid #ccc;
  margin: 15px;
}
</style>
