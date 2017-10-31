<template>
  <v-app id="app-base" class="app-page app-base" :dark="darkMode">
    <NavBar></NavBar>
    <SideBar></SideBar>

    <div class="app-main">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
  import NavBar from '../../components/NavBar';
  import SideBar from '../../components/SideBar';

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
