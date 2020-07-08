<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <table border class="report">
          <thead>
            <tr>
              <td class="patientinfoFront">Patient Name</td>
              <td>{{patient.Name}}</td>
              <td class="patientinfoFront">Patient No.</td>
              <td>{{patient.PNumber}}</td>
            </tr>
            <tr>
              <td class="patientinfoFront">Patient Age</td>
              <td>{{patient.Age}}</td>
              <td class="patientinfoFront">Patient Gender</td>
              <td>{{patient.Gender}}</td>
            </tr>
            <tr>
              <td class="patientinfoFront">Date of admission</td>
              <td>{{patient.AdmissionDate}}</td>
              <td class="patientinfoFront">Patient Mobile</td>
              <td>{{patient.mobile}}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="patientinfoFront">Complaint</td>
              <td>
                <h6
                  v-for="complaint in Object.entries(patient.Complaint)"
                  :key="complaint"
                >{{complaint[1] == true? complaint[0] : ""}}</h6>
              </td>
              <td class="patientinfoFront">Onset of complaint</td>
              <td>{{patient.Complaint.Onsetofcomplaint}}</td>
            </tr>
            <tr>
              <td class="patientinfoFront">Past History</td>
              <td>
                <h6
                  v-for="pastHistory in Object.entries(patient.PastHistory)"
                  :key="pastHistory"
                >{{pastHistory[1] == true? pastHistory[0] : ""}}</h6>
              </td>
              <td class="patientinfoFront">Past History notifications</td>
              <td>{{patient.PastHistory.PHNotifications}}</td>
            </tr>
            <tr>
              <td class="patientinfoFront">History of cardiac disease</td>
              <td>
                <h6
                  v-for="HocDisease in Object.entries(patient.HistoryOfCardiacDisease)"
                  :key="HocDisease"
                >{{HocDisease[1] == true? HocDisease[0] : ""}}</h6>
              </td>
              <td class="patientinfoFront">Cardiac disease notifications</td>
              <td>{{patient.HistoryOfCardiacDisease.CDnotifications}}</td>
            </tr>
            <tr>
              <td class="patientinfoFront">Ex. At admission</td>
              <td class="MergedStyle" colspan="3">
                <v-row>
                  <v-col cols="7">
                    <label>Pulse = {{patient.ExAtAdmission.Pulse}}/min</label>
                    <br />
                    <label>BP = {{patient.ExAtAdmission.BP}}</label>
                    <br />
                    <label>Resp. Rate = {{patient.ExAtAdmission.RespRate}}/min</label>
                    <br />
                    <label>Chest auscultations: {{patient.ExAtAdmission.Chestauscultations}}</label>
                    <br />
                    <label>Manifestations of HF .... {{patient.ExAtAdmission.ManifestationsofHF}}</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label
                      v-if="patient.ExAtAdmission.ManifestationsofHF == 'Yes'"
                    >({{patient.ExAtAdmission.ManifestationsDetails}})</label>
                    <br />
                  </v-col>
                  <v-col cols="5">
                    <label>{{patient.ExAtAdmission.Regularity}}</label>
                    <br />
                    <label>Temp = {{patient.ExAtAdmission.Temp}}</label>
                    <br />
                  </v-col>
                </v-row>
              </td>
            </tr>
            <tr>
              <td class="patientinfoFront">Previous Medications</td>
              <td>
                <h6
                  v-for="PrevMed in Object.entries(patient.PreviousMedications)"
                  :key="PrevMed"
                >{{PrevMed[1] == true? PrevMed[0] : ""}}</h6>
              </td>
              <td class="patientinfoFront">Other Previous Medications</td>
              <td>{{patient.PreviousMedications.Others}}</td>
            </tr>
            <tr>
              <td class="patientinfoFront">1st Naso/pharyngeal swab</td>
              <td>{{patient.NasoPharynealSwab1.Status}}</td>
              <td class="patientinfoFront">2nd Naso/pharyngeal swab</td>
              <td>{{patient.NasoPharynealSwab2.Status}}</td>
            </tr>
            <tr>
              <td class="patientinfoFront">Procedures</td>
              <td>
                <label>ICU Admission : {{patient.Procedures.ICUadmission}}</label>
                <br />
                <label>Nasal Oxygen : {{patient.Procedures.NasalOxygen}}</label>
                <br />
              </td>
              <td class="patientinfoFront">Procedures</td>
              <td>
                <label>CPAP : {{patient.Procedures.CPAP}}</label>
                <br />
                <label>Mechanical ventilation : {{patient.Procedures.MechanicalVentilation}}</label>
                <br />
              </td>
            </tr>
            <tr>
              <td class="patientinfoFront">Current Medications</td>
              <td>
                <h6
                  v-for="CurrMed in Object.entries(patient.CurrentMedications)"
                  :key="CurrMed"
                >{{CurrMed[1] == true? CurrMed[0] : ""}}</h6>
              </td>
              <td class="patientinfoFront">Other Current Medications</td>
              <td>{{patient.CurrentMedications.Others}}</td>
            </tr>
          </tbody>
        </table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Report-Front",
  props: ["patient"]
};
</script>

<style scoped>
.report {
  border: 2px solid rgb(0, 0, 0);
  width: 100%;
  height: auto;
  min-height: 500px;
}
.report thead,
tbody tr {
  text-align: center;
}
.patientinfoFront {
  font-weight: bold;
    padding: 20px;
    background-color: #cccccc;

}

.MergedStyle {
  text-align: left;
  padding-left: 15px;
}
</style>
