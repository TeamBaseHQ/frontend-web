<template>
  <div class="app-main full-height">
    <v-container fluid fill-height>
      <v-toolbar
        app
        dense
        fixed
        id="app-navbar"
        class="navbar"
      >
        <img src="../../assets/logos/logo-type-dark-grey.svg" height="20px" v-if="!isDarkMode">
        <img src="../../assets/logos/logo-type-white.svg" height="20px" v-if="isDarkMode">
        <v-spacer></v-spacer>
        <account-menu></account-menu>
      </v-toolbar>
      <v-layout justify-center align-center>
        <div class="empty-state" v-if="!teamsAreLoading && !teams.length">
          <img src="../../assets/illustrations/empty-threads.svg" alt="No thread selected." class="empty-state--image">
          <h4 class="empty-state--heading">Aww...You're not a part of any Team :(</h4>
          <h6 class="empty-state--message">Better create your own... ¯\_(ツ)_/¯</h6>
          <p>
            <v-btn color="primary">
              <v-icon left>add</v-icon>
              <span>Create</span>
            </v-btn>
          </p>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import AccountMenu from '../../components/NavBar/AccountMenu';

  export default {
    name: 'app-main',
    components: {
      AccountMenu,
    },
    computed: {
      ...mapGetters({
        teamsAreLoading: 'teamsAreLoading',
        teams: 'allTeams',
        addingTeam: 'addingTeam',
      }),
    },
  };
</script>

