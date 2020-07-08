<template>
  <v-container v-if="investigations">
    <v-row>
      <v-col cols="12">
        <table border class="report">
          <thead >
            <tr>
              <th class="patientinfo">Investigations</th>
              <th class="patientinfo">Admission</th>
              <th class="patientinfo">3rd Day</th>
              <th class="patientinfo">7th Day</th>
              <th class="patientinfo">14th Day</th>
              <th class="patientinfo">28th Day</th>
              <th class="patientinfo">Discharge</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="patientinfo" >urea</td>
              <td v-for="step in steps" :key="step">
                 <label>{{investigations.hasOwnProperty(step) ? investigations[step].Urea : ""}}</label>
              </td>

            </tr>
            <tr>
              <td class="patientinfo">Creatinine</td>
              <td v-for="step in steps" :key="step">
                 <label>{{investigations.hasOwnProperty(step) ? investigations[step].Creatinine : ""}}</label>
              </td>
            </tr>
            <tr>
              <td class="patientinfo">Na</td>
              <td v-for="step in steps" :key="step">
                 <label>{{investigations.hasOwnProperty(step) ? investigations[step].Na : ""}}</label>
              </td>
            </tr>
            <tr>
              <td class="patientinfo">K</td>
              <td v-for="step in steps" :key="step">
                 <label>{{investigations.hasOwnProperty(step) ? investigations[step].K : ""}}</label>
              </td>
            </tr>
            <tr>
              <td class="patientinfo">Hb</td>
              <td v-for="step in steps" :key="step">
                 <label>{{investigations.hasOwnProperty(step) ? investigations[step].Hb : ""}}</label>
              </td>
            </tr>
            <tr>
              <td class="patientinfo">Platelets</td>
              <td v-for="step in steps" :key="step">
                 <label>{{investigations.hasOwnProperty(step) ? investigations[step].Platelets : ""}}</label>
              </td>
            </tr>
            <tr>
              <td class="patientinfo">Total WBCs</td>
              <td v-for="step in steps" :key="step">
                 <label>{{investigations.hasOwnProperty(step) ? investigations[step].TotalWBCs : ""}}</label>
              </td>
            </tr>
            <tr>
              <td class="patientinfo">Lymphocytes</td>
              <td v-for="step in steps" :key="step">
                 <label>{{investigations.hasOwnProperty(step) ? investigations[step].Lymphocytes : ""}}</label>
              </td>
            </tr>
            <tr>
              <td class="patientinfo">Neutrophils</td>
              <td v-for="step in steps" :key="step">
                 <label>{{investigations.hasOwnProperty(step) ? investigations[step].Neutrophils : ""}}</label>
              </td>
            </tr>
            <tr>
              <td class="patientinfo">Monocytes</td>
              <td v-for="step in steps" :key="step">
                 <label>{{investigations.hasOwnProperty(step) ? investigations[step].Monocytes : ""}}</label>
              </td>
            </tr>
            <tr>
              <td class="patientinfo">ESR</td>
              <td v-for="step in steps" :key="step">
                 <label>{{investigations.hasOwnProperty(step) ? investigations[step].ESR : ""}}</label>
              </td>
            </tr>
            <tr>
              <td class="patientinfo">CRP</td>
              <td v-for="step in steps" :key="step">
                 <label>{{investigations.hasOwnProperty(step) ? investigations[step].CRP : ""}}</label>
              </td>
            </tr>
            <tr>
              <td class="patientinfo">D.dimer</td>
              <td v-for="step in steps" :key="step">
                 <label>{{investigations.hasOwnProperty(step) ? investigations[step].Ddimer : ""}}</label>
              </td>
            </tr>
            <tr>
              <td class="patientinfo">Cardiac troponin</td>
              <td v-for="step in steps" :key="step">
                 <label>{{investigations.hasOwnProperty(step) ? investigations[step].Cardiactroponin : ""}}</label>
              </td>
            </tr>
            <tr>
              <td class="patientinfo">SGOT</td>
              <td v-for="step in steps" :key="step">
                 <label>{{investigations.hasOwnProperty(step) ? investigations[step].SGOT : ""}}</label>
              </td>
            </tr>
            <tr>
              <td class="patientinfo">SGPT</td>
              <td v-for="step in steps" :key="step">
                 <label>{{investigations.hasOwnProperty(step) ? investigations[step].SGPT : ""}}</label>
              </td>
            </tr>
            <tr>
              <td class="patientinfo">S.Albumin</td>
              <td v-for="step in steps" :key="step">
                 <label>{{investigations.hasOwnProperty(step) ? investigations[step].SAlbumin : ""}}</label>
              </td>
            </tr>
            <tr>
              <td class="patientinfo">INR</td>
              <td v-for="step in steps" :key="step">
                 <label>{{investigations.hasOwnProperty(step) ? investigations[step].INR : ""}}</label>
              </td>
            </tr>
            <tr>
              <td class="patientinfo">ECG</td>
              <td v-for="(step) in customSteps" :key="step" class="MergedStyle" colspan="2">

                <v-row >
                  <v-col cols="12">
                 <label>Rhythm: {{investigations.hasOwnProperty(step) ? investigations[step].ECG.Rhythm : ""}}</label>
                    <br />
                    <label>QRS: {{investigations.hasOwnProperty(step) ? investigations[step].ECG.QRS : ""}}</label>
                    <br />
                    <label>T wave: {{investigations.hasOwnProperty(step) ? investigations[step].ECG.Twave : ""}}</label>
                    <br />
                    <label>Corrected QT: {{investigations.hasOwnProperty(step) ? investigations[step].ECG.CorrectedQt : ""}} msec</label>
                    <br />
                    <label>Arrhythmias: {{investigations.hasOwnProperty(step) ? investigations[step].ECG.Arrhythmias : ""}}</label>
                  </v-col>
                </v-row>
              </td>

            </tr>
            <tr>
              <td class="patientinfo">Echocardiography</td>
              <td v-for="(step) in customSteps" :key="step" class="MergedStyle" colspan="2">
                <v-row>
                  <v-col cols="12">
                    <label>LVID: {{investigations.hasOwnProperty(step) ? investigations[step].Echocardiography.LVID : ""}}</label>
                    <br />
                    <label>RV: {{investigations.hasOwnProperty(step) ? investigations[step].Echocardiography.RV : ""}}</label>
                    <br />
                    <label>EF: {{investigations.hasOwnProperty(step) ? investigations[step].Echocardiography.EF : ""}} %</label>
                    <br />
                    <label>RSWMA: {{investigations.hasOwnProperty(step) ? investigations[step].Echocardiography.RSWMA : ""}}</label>
                    <br />
                    <label>Thrombus: {{investigations.hasOwnProperty(step) ? investigations[step].Echocardiography.Thrombus : ""}}</label>
                    <br />
                    <label>Pericardial effusion: {{investigations.hasOwnProperty(step) ? investigations[step].Echocardiography.PericardialEffusion : ""}}</label>
                  </v-col>
                </v-row>
              </td>
            </tr>
            <tr>
              <td class="patientinfo">24 Holter</td>
              <td v-for="step in steps" :key="step">
                 <label>{{investigations.hasOwnProperty(step) ? investigations[step].HrHolter24 : ""}}</label>
              </td>
            </tr>
            <tr>
              <td class="patientinfo">CXR</td>
              <td v-for="step in steps" :key="step">
                 <label>{{investigations.hasOwnProperty(step) ? investigations[step].CXR : ""}}</label>
              </td>
            </tr>
            <tr>
              <td class="patientinfo">CT chest</td>
              <td v-for="step in steps" :key="step">
                 <label>{{investigations.hasOwnProperty(step) ? investigations[step].CTChest : ""}}</label>
              </td>
            </tr>
            <tr>
              <td class="patientinfo">Complications</td>
              <td v-for="(step) in customSteps" :key="step" colspan="2">
                  {{investigations.hasOwnProperty(step) ? investigations[step].Complications : ""}}
              </td>

            </tr>
            <tr>
              <td class="patientinfo">Date of Discharge</td>
              <td colspan="6">
                  {{investigations.hasOwnProperty('Dis') ? investigations['Dis'].DateofDischarge : ""}}
              </td>
            </tr>
            <tr>
              <td class="patientinfo">Discharge Status</td>
              <td colspan="6">
                {{investigations.hasOwnProperty('Dis') ? investigations['Dis'].DischargeStatus : ""}}
              </td>
            </tr>
            <tr>
              <td class="patientinfo">Medications at Discharge</td>
              <td class="MergedStyle" colspan="3">
                <v-row>
                  <v-col v-if="investigations.hasOwnProperty('Dis')" cols="12">
                    <h6 class="centerData" v-for="MedAtDis in Object.entries(investigations['Dis'].MedicationsAtDischarge)" :key="MedAtDis">
                        {{MedAtDis[1] == true ?MedAtDis[0] : ""}}
                    </h6>
                  </v-col>
                </v-row>
              </td>
              <td class="MergedStyle" colspan="3">
                <v-row>
                  <v-col v-if="investigations.hasOwnProperty('Dis')" cols="12">
                    <h6 class="centerData">{{investigations['Dis'].MedicationsAtDischarge.OtheriInfo}}</h6>
                  </v-col>
                </v-row>
              </td>
            </tr>
          </tbody>
        </table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name:'Report-Back',

    props:['investigations'],

    data() {
        return {
            steps: ['Ad','3rd','7th','14th','28th','Dis'],
            customSteps : ['Ad','7th','Dis']
        }
    },
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
tbody tr,
.centerData {
  text-align: center;
}
.patientinfo {
  font-weight: bold;
    background-color: #cccccc;

}

.MergedStyle {
  text-align: left;
  padding-left: 15px;
}

</style>

