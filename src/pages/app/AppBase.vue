<template>
  <v-app id="app-base" class="app-page app-base" :dark="isDarkMode">
    <SideBar></SideBar>
    <NavBar></NavBar>
    <category-list></category-list>
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
  import CategoryList from '../../components/CategoryList';

  export default {
    name: 'AppBase',
    components: {
      NavBar,
      SideBar,
      CategoryList,
    },
    created() {
      //
    },
  };
</script>
