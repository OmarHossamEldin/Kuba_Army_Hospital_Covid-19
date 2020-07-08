<template>
  <v-form>
    <v-container class="BoundriesArea">
      <v-row>
        <v-col cols="12">
          <h2>History Of Cardiac Disease:-</h2>
        </v-col>
        <v-col cols="2">
          <v-switch v-model="HOCDDetails.IHD" label="IHD"></v-switch>
        </v-col>
        <v-col cols="2">
          <v-switch v-model="HOCDDetails.HF" label="HF"></v-switch>
        </v-col>
        <v-col cols="2">
          <v-switch v-model="HOCDDetails.Arrhythmia" label="Arrhythmia"></v-switch>
        </v-col>
        <v-col cols="2">
          <v-switch v-model="HOCDDetails.ValvularHD" label="Valvular HD"></v-switch>
        </v-col>
        <v-col cols="2">
          <v-switch v-model="HOCDDetails.CM" label="CM"></v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-textarea v-model="HOCDDetails.CDnotifications" label="Cardiac Disease Notifications"></v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "historyofCardiacDisease",
  props: ["HOCDDetails"]
};
</script>

<style>
</style>