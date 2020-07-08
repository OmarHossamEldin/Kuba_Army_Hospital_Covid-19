<template>
  <app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>
              <div class="my-2">
                <inertia-link href="/User/create">
                  <v-btn small color="primary">Add User</v-btn>
                </inertia-link>
              </div>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
            items-per-page = "5"
            :headers="headers"
            :items="Users"
            :search="search"
            >
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </app>
</template>


<script>
import app from "../../layouts/app";
import axios from "axios";
import auth from '../../utils/Auth'

export default {
  name: "users",
  props:['Users'],
  components: {
    app,
  },
  data() {
      return {
          search: "",
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: true,
          value: "id"
        },
        { text: "Name", value: "name" },
        { text: "Username", value: "username" },
        { text: "Actions", value: "", align: "center"}
      ]
      }
  },

created() {
    auth('admin');
},

};
</script>

<style>
.BoundriesArea {
  border: 2px solid #ccc;
  margin: 15px;
}
</style>
