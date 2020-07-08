<template>
  <v-form>
    <v-container class="BoundriesArea">
      <v-row>
        <v-col cols="12">
         <h2>Complaint:-</h2>
        </v-col>
        <v-col cols="2">
          <v-switch v-model="complaintDetails.Fever" label="Fever"></v-switch>
        </v-col>
        <v-col cols="2">
          <v-switch v-model="complaintDetails.Sorethroat" label="Sorethroat"></v-switch>
        </v-col>
        <v-col cols="2">
          <v-switch v-model="complaintDetails.Cough" label="Cough"></v-switch>
        </v-col>
        <v-col cols="2">
          <v-switch v-model="complaintDetails.Breathlessness" label="Breathlessness"></v-switch>
        </v-col>
        <v-col cols="2">
          <v-switch v-model="complaintDetails.Muscular" label="Muscular"></v-switch>
        </v-col>
        <v-col cols="2">
          <v-switch v-model="complaintDetails.GITsymptoms" label="GITsymptoms"></v-switch>
        </v-col>
        
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-textarea v-model="complaintDetails.Onsetofcomplaint" label="Onset of complaint"></v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name:'Complaint',
  props: ["complaintDetails"]
};
</script>