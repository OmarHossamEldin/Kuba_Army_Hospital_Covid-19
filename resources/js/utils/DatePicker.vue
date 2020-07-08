<template>
  <div>
    <v-menu
      v-model="fromDateMenu"
      :close-on-content-click="false"
      :nudge-right="40"
      lazy
      transition="scale-transition"
      offset-y
      full-width
      max-width="290px"
      min-width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          :label="label"
          readonly
          :value="dateInput"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        locale="en-in"
        v-model="dateInput"
        no-title
        @input="fromDateMenu = false"
        @change="ChangeDate"
      ></v-date-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
    props:['label','dateInput'],
     methods: {
        ChangeDate:function(date){
            this.$emit('dateChanged',date)
        },
    },
  computed: {
      fromDateDisp() {
        return this.dateInput;
        // format date, apply validations, etc. Example below.
        // return this.fromDateVal ? this.formatDate(this.fromDateVal) : "";
      }
    },


};
</script>
