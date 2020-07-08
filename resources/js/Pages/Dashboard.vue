<template>
  <app>

  </app>
</template>


<script>
import app from "../layouts/app";
import auth from '../utils/Auth'
export default {
    name:'Dashboard',
  components: {
    app
  },

created() {
    auth('user');
},
};
</script>

<style lang="stylus" scoped></style>
