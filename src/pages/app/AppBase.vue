<template>
  <v-app id="app-base" class="app-page app-base" :dark="darkMode">
    <SideBar></SideBar>
    <NavBar></NavBar>
    
    <main class="app-main">
      <v-content>
        <router-view></router-view>
      </v-content>
    </main>
  </v-app>
</template>

<script>
  import SideBar from '../../components/SideBar';
  import NavBar from '../../components/NavBar/NavBar';

  export default {
    name: 'AppBase',
    components: {
      NavBar,
      SideBar,
    },
    data() {
      return {
        //
      };
    },
    computed: {
      darkMode() {
        return true;
      },
    },
  };
</script>
