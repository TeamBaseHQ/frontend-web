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
            <v-btn :loading="addingTeam" icon small @click="addTeam">
              <v-icon>add</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-subheader>
        <v-list-tile avatar @click="goToTeam(team.getSlug())" v-for="team in teams" :key="team.name">
          <v-list-tile-avatar>
            <img src="http://placehold.it/40x40"/>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{team.getName()}}</v-list-tile-title>
            <!--<v-list-tile-sub-title>2 Messages</v-list-tile-sub-title>-->
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-menu>
</template>
//
<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'navbar-team-menu',
    created() {
      //
    },
    data() {
      return {
        teamMenu: false,
      };
    },
    computed: {
      ...mapGetters({
        teamsAreLoading: 'teamsAreLoading',
        teams: 'allTeams',
        addingTeam: 'addingTeam',
      }),
    },
    methods: {
      ...mapActions([
        'createTeam',
      ]),
      goToTeam(slug) {
        this.$router.push({name: 'team-dashboard', params: {teamSlug: slug}});
      },
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
