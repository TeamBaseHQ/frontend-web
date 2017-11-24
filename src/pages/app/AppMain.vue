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
        <div class="loading-state" v-if="teamsAreLoading">
          <v-progress-circular indeterminate v-bind:size="70" v-bind:width="7" color="grey"></v-progress-circular>
        </div>
        <v-container grid-list-lg class="full-width text-xs-center"
                     v-if="!teamsAreLoading">
          <h1 class="title">Select a Team</h1>
          <v-layout row wrap v-if="teams.length" class="is-flex align-center justify-center">
            <v-flex lg3 md4 sm12 xs12 v-for="team in teams" :key="team.slug">
              <v-card class="text-xs-center">
                <v-card-media :src="loadMedia(team.getPicture(), 'original')" height="100px"></v-card-media>
                <v-card-title primary-title>
                  <div class="full-width">
                    <div class="headline">{{team.getName()}}</div>
                    <span class="grey--text">{{team.getDescription()}}</span>
                  </div>
                </v-card-title>
                <v-card-actions class="full-width">
                  <v-btn small block outline color="grey"
                         :to="{name: 'team-dashboard', params: {teamSlug: team.getSlug()}}">
                    <span>Dashboard</span>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
          <div class="empty-state" v-if="!teams.length">
            <img src="../../assets/illustrations/empty-threads.svg" alt="No thread selected."
                 class="empty-state--image">
            <h4 class="empty-state--heading">Aww...You're not a part of any Team :(</h4>
            <h6 class="empty-state--message">Better create your own... ¯\_(ツ)_/¯</h6>
            <p>
              <v-btn color="primary">
                <v-icon left>add</v-icon>
                <span>Create</span>
              </v-btn>
            </p>
          </div>
        </v-container>
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
    methods: {
      //
    },
  };
</script>

