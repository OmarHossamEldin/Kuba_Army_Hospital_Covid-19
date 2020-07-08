<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
        <template v-for="item in items">


          <inertia-link v-if=" role=='user' && item.role != 'admin' || role == 'admin' " class="linkStyle" :key="item.text" :href= "item.url">
            <v-list-item >
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </inertia-link>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 400px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">Case Report For COVID-19 Patients</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-chip
      class="ma-2"
      color="primary"
      label
    >
      <v-icon left>mdi-account-circle-outline</v-icon>
      {{username}}
    </v-chip>
      <v-btn @click="logout" icon>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container  fluid>
        <v-row align="left" justify="left">
          <slot></slot>
        </v-row>
      </v-container>
    </v-content>
    <inertia-link href="/patient/create">
      <v-btn bottom color="pink" dark fab fixed right>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </inertia-link>
  </v-app>
</template>

<script>

export default {
  props: {
    source: String
  },
  data: () => ({
    username : '',
    role : '',
    drawer: null,
    items: [
      { icon: "mdi-account-multiple", text: "Patients", url:"/patient" },
      { icon: "mdi mdi-printer", text: "Reports", url:"/report" },
      { icon: "mdi-account-key", text: "Users" , url:"/User" , role:"admin" }
    ]
  }),
  created() {
      let user = JSON.parse(this.$cookie.get('user'))
      this.username = user.name;
      this.role = user.role;
  },

  methods: {
      logout: function(){
          this.$cookie.delete('user');
          this.$cookie.delete('user-token');
          window.location.href = "/login"
      }
  },
};


</script>

<style>
  .linkStyle{
    text-decoration: none;
  }
  .v-form{
      width: 100%;
  }
</style>
