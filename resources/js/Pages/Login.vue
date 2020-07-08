<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>COVID-19</v-toolbar-title>
                <v-spacer></v-spacer>

              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="username"
                    label="Username"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                  v-model="password"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            label="Password"
            value=""
            class="input-group--focused"
            prepend-icon="mdi-lock"
            @click:append="show2 = !show2"
          ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="login" color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios';
  export default {
    props: {
      source: String,
    },
    data() {
        return {
            show2: false,
            username : '',
            password : '',
        }
    },
    methods: {
        login: function(){
            axios.post('/login-page', {'username':this.username,'password':this.password})
            .then(res=>{
                console.log(res.data);
                if(res.data.status == true){
                    this.$cookie.set('user-token',res.data.token)

                    this.$cookie.set('user',JSON.stringify(res.data.user))
                    window.location.href = "/"
                }
                else
                    alert("data is wrong");
            })
        }
    },
  }
</script>
