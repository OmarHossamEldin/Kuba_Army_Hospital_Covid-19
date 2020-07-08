<template>
  <v-form>
    <v-container class="BoundriesArea">
      <v-row>
        <v-col cols="6">
          <h2>1st Naso/Pharyngeal Swab:-</h2> 
        </v-col>
        <v-col cols="6">
           <h2 class="h2style">2nd Naso/Pharyngeal Swab:-</h2>
        </v-col>
        <v-col cols="6">
          <v-radio-group v-model="NasoPharyngealSwabDetails1.Status" row>
            <v-radio label="Negative" value="Negative"></v-radio>
            <v-radio label="Positive" value="Positive"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="6">
          <v-radio-group v-model="NasoPharyngealSwabDetails2.Status" row>
            <v-radio label="Negative" value="Negative"></v-radio>
            <v-radio label="Positive" value="Positive"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "NasoPharyngealSwab",
  props: ["NasoPharyngealSwabDetails1", "NasoPharyngealSwabDetails2"]
};
</script>

<style scoped>
    .h2style{
      display: inline;
    }
</style>