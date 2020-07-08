<template>
  <v-form>
    <v-container class="BoundriesArea">
      <v-row>
        <v-col cols="12">
          <h2>Past History:-</h2>
        </v-col>
        <v-col cols="2">
          <v-switch v-model="pastHistoryDetails.HTN" label="HTN"></v-switch>
        </v-col>
        <v-col cols="2">
          <v-switch v-model="pastHistoryDetails.DM" label="DM"></v-switch>
        </v-col>
        <v-col cols="2">
          <v-switch v-model="pastHistoryDetails.COPD" label="COPD"></v-switch>
        </v-col>
        <v-col cols="2">
          <v-switch v-model="pastHistoryDetails.Autoimmunedisease" label="Autoimmunedisease"></v-switch>
          
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-textarea 
            v-model="pastHistoryDetails.PHNotifications"
            label="Past History Notifications"
          ></v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "pastHistory",
  props: ["pastHistoryDetails"]
};
</script>

<style>
</style>