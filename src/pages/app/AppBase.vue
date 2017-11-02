<template>
  <v-app id="app-base" class="app-page app-base" :dark="darkMode">
    <SideBar></SideBar>
    <NavBar></NavBar>
    <div class="app-main">
      <router-view></router-view>
    </div>
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
