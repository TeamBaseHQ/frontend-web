<template>
  <v-menu
    :close-on-content-click="false"
    offsetY
    transition="slide-y-transition"
    bottom
    v-model="teamMenu"
    class="team-menu px-2"
  >
    <div slot="activator" class="is-flex align-center justify-space-between">
      <v-avatar class="white" size="32px">
        <img src="https://logo.clearbit.com/amazon.com?s=128"/>
      </v-avatar>
      <span>Amazon</span>
      <v-icon>arrow_drop_down</v-icon>
    </div>
    <v-card>
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="text-xs-right">Team Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>person_add</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="text-xs-right">Add Members to Team</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list subheader>
        <v-subheader>
          <v-list-tile-content>
            <v-list-tile-title>Teams</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn :loading="addingTeam" icon dark small @click="addTeam">
              <v-icon>add</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-subheader>
        <v-list-tile avatar @click="" v-for="team in teams" :key="team.name">
          <v-list-tile-avatar>
            <img :src="team.logo" />
          </v-list-tile-avatar>
          <v-list-tile-content>
             <v-list-tile-title>{{team.name}}</v-list-tile-title>
            <v-list-tile-sub-title>{{team.unreadmsgs}} Messages</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

       <!-- <v-list-tile avatar @click="">
          <v-list-tile-avatar>
            <img src=/>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Facebook</v-list-tile-title>
            <v-list-tile-sub-title>10+ messages</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>-->
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'navbar-team-menu',
    created() {
      this.fetchTeams();
    },
    data() {
      return {
        teamMenu: false,
      };
    },
    computed: {
      ...mapGetters({
        teams: 'allTeams',
        addingTeam: 'addingTeam',
      }),
    },
    methods: {
      ...mapActions([
        'fetchTeams',
        'createTeam',
      ]),
      addTeam() {
        this.createTeam({
          slug: 'google',
          team: {
            name: 'Google',
            logo: 'https://logo.clearbit.com/google.com?s=128',
            unreadmsgs: '13+',
          },
        });
      },
    },
  };
</script>
