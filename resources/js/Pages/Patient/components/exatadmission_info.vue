<template>
  <v-form>
    <v-container class="BoundriesArea">
      <v-row>
        <v-col cols="12">
          <h2>Ex. At admission:-</h2>
        </v-col>
        <v-col cols="4">
          <v-text-field v-model="exAtAdmissionDetails.Pulse" solo label="Pulse" append-icon="/min"></v-text-field>
        </v-col>
        <v-col cols="8">
          <v-radio-group v-model="exAtAdmissionDetails.Regularity" row>
            <v-radio value="Regular" label="Regular"></v-radio>
            <v-radio value="Irregular" label="Irregular"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="4">
          <v-text-field v-model="exAtAdmissionDetails.BP" solo label="BP" append-icon="/"></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field v-model="exAtAdmissionDetails.Temp" solo label="Temp"></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="exAtAdmissionDetails.RespRate"
            solo
            label="Resp.Rate"
            append-icon="/min"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="exAtAdmissionDetails.Chestauscultations"
            solo
            label="Chest auscultations"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <p>Manifestations Of HF</p>
          <v-radio-group @change="ifYes" v-model="exAtAdmissionDetails.ManifestationsofHF" row>
            <v-radio label="Yes" value="Yes"></v-radio>
            <v-radio label="No" value="No"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="exAtAdmissionDetails.ManifestationsDetails"
            :class="{ NotActive: isNotActive }"
            label="If Yes"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "exAtAdmission",
  props: ["exAtAdmissionDetails"],
  data() {
    return {
      isNotActive: true
    };
  },
  methods: {
    ifYes: function() {
      console.log(this.exAtAdmissionDetails.ManifestationsofHF);
      if (this.exAtAdmissionDetails.ManifestationsofHF == "Yes")
        this.isNotActive = false;
      else this.isNotActive = true;
    }
  }
};
</script>

<style scoped>
.NotActive {
  display: none;
}
</style>