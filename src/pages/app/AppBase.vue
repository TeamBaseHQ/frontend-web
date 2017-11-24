<template>
  <v-app id="app-base" class="app-page app-base" :dark="isDarkMode">
    <main class="app-main">
      <v-content>
        <router-view></router-view>
      </v-content>
    </main>
  </v-app>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: 'AppBase',
    created() {
      this.fetchCurrentUser();
      this.fetchAllTeams();
    },
    methods: {
      ...mapActions([
        'fetchAllTeams',
      ]),
    },
  };
</script>
