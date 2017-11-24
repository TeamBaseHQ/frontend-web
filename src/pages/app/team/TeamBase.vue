<template>
  <div id="team-base" class="team-base full-height">
    <SideBar v-if="currentTeam"></SideBar>
    <NavBar v-if="currentTeam"></NavBar>
    <main class="team-base-inner full-height">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import SideBar from '../../../components/SideBar';
  import NavBar from '../../../components/NavBar/NavBar';

  export default {
    name: 'TeamBase',
    components: {
      SideBar,
      NavBar,
    },
    created() {
      this.fetchCurrentTeam(this.teamSlug);
    },
    computed: {
      ...mapGetters({
        allTeams: 'allTeams',
        teamsAreLoading: 'teamsAreLoading',
        addingTeam: 'addingTeam',
        currentTeam: 'currentTeam',
      }),
      teamSlug() {
        return this.$route.params.teamSlug;
      },
    },
    watch: {
      teamSlug() {
        this.fetchCurrentTeam(this.teamSlug);
      },
    },
    methods: {
      ...mapActions([
        'fetchCurrentTeam',
      ]),
    },
  };
</script>
