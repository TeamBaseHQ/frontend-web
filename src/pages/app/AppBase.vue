<template>
  <v-app id="app-base" class="app-page app-base" :dark="isDarkMode">
    <NavBar></NavBar>
    <main class="app-main">
      <v-content>
        <router-view></router-view>
      </v-content>
    </main>
  </v-app>
</template>

<script>
  import NavBar from '../../components/NavBar/NavBar';

  export default {
    name: 'AppBase',
    components: {
      NavBar,
    },
    created() {
      this.fetchCurrentUser();
    },
  };
</script>
