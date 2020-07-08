<template>
  <app>
    <v-form>
      <v-container class="BoundriesArea">
        <v-row>
          <v-col cols="12">
            <h2>User Informations:-</h2>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="userData.Name" label="Name" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="userData.UserName" label="User Name" required></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="userData.Password"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show2 ? 'text' : 'password'"
              name="input-10-2"
              label="Password"
              value
              class="input-group--focused"
              prepend-icon="mdi-lock"
              @click:append="show2 = !show2"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-select v-model="userData.Permission" :items="roles" label="Permission"></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-btn @click="saveData" color="primary">save</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </app>
</template>


<script>
import app from "../../layouts/app";
import axios from "axios";
import auth from "../../utils/Auth";

export default {
  name: "user",
  props: ["user"],
  components: {
    app
  },
  data() {
    return {
      userData: {
        Name: "",
        UserName: "",
        Password: "",
        Permission: ""
      },
      show2: false,
      roles: ["user", "admin"]
    };
  },
  methods: {
    saveData: function() {
      let token = this.$cookie.get("user-token");
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      axios
        .post(
          "/User",
          {
            Name: this.userData.Name,
            UserName: this.userData.UserName,
            Password: this.userData.Password,
            Permission:this.userData.Permission
          },
          config
        )
        .then(res => {
          this.$swal({ icon: "success", text: "User Has Been Created" });
        //   window.location.href = "/User";
        });
    }
  },
  created() {
    auth("admin");
  }
};
</script>

<style>
.BoundriesArea {
  border: 2px solid #ccc;
  margin: 15px;
}
</style>
