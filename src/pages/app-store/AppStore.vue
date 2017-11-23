<template>
  <v-app id="app-base" class="app-page app-base" :dark="isDarkMode">
    <app-side-bar></app-side-bar>

    <v-toolbar
      app
      dense
      fixed
      clipped-left
      id="navbar"
      class="navbar"
    >
        <img src="../../assets/logos/logo-type-dark-grey.svg" height="20px">
        <v-spacer></v-spacer>

        <v-text-field
          placeholder="Search..."
          single-line
          append-icon="search"
          :append-icon-cb="() => {}"
          hide-details
        ></v-text-field>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-btn flat small >
          <span class="hidden-md-and-down">Browse</span>
        </v-btn>
        <v-btn flat small>
          <span class="hidden-md-and-down">Manage</span>
        </v-btn>
        <v-btn flat small>
          <span class="hidden-md-and-down">Build</span>
        </v-btn>
        <v-btn>Sign in</v-btn>
    </v-toolbar>

    <main class="app-main app-store-main">
      <v-content>
        <router-view></router-view>
      </v-content>
    </main>
  </v-app>

</template>

<script>
  import AppSideBar from './AppSideBar';

  export default {
    name: 'navbar',
    data() {
      return {
        //
      };
    },
    components: {
      AppSideBar,
    },
  };
</script>
