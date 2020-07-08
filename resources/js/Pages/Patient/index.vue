<template>
  <app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>
              <div class="my-2">
                <inertia-link href="/patient/create">
                  <v-btn small color="primary">Add Patient</v-btn>
                </inertia-link>
              </div>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                @keyup="SearchPatient"
              ></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="patients">
              <template v-slot:item.id="{ item }">
                <inertia-link :href="'/patient/'+item.id+'/edit'">
                  <v-btn small color="primary">Edit</v-btn>
                </inertia-link>
                <span class="largeItem">&nbsp;</span>
                <inertia-link :href="'/patient/'+item.id+'/investigation'">
                  <v-btn small color="success">Investigations</v-btn>
                </inertia-link>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </app>
</template>

<script>
import app from "../../layouts/app";
import auth from "../../utils/Auth";
import axios from "axios";

export default {
  name: "patients",
  components: {
    app
  },
  props: ["patients"],
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Number",
          align: "start",
          sortable: true,
          value: "PNumber"
        },
        { text: "Name", value: "Name" },
        { text: "Mobile", value: "mobile" },
        { text: "Age", value: "Age" },
        { text: "Gender", value: "Gender" },
        { text: "Admission Date", value: "AdmissionDate" },
        { text: "Actions", value: "id", align: "center" }
      ]
    };
  },
  methods: {
    SearchPatient: function() {

      let token = this.$cookie.get("user-token");
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      axios
        .post(
          "/patient/search",
          {
            Search: this.search
          },
          config
        )
        .then(res => {
          if (res.data.status) {
              this.patients=res.data.Patient;
          }

        });
    }
  },
  created() {
    auth('user');
  }
};
</script>

<style scoped>
.largeItem {
  font-size: 20px;
}
</style>
