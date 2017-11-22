<template>
  <div id="team-base" class="team-base full-height">
    <SideBar></SideBar>
    <main class="team-base-inner full-height">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import SideBar from '../../../components/SideBar';

  export default {
    name: 'TeamBase',
    components: {
      SideBar,
    },
    created() {
      this.fetchCurrentUser();
      this.fetchCurrentTeam(this.teamSlug);
    },
    computed: {
      ...mapGetters({
        allTeams: 'allTeams',
        teamsAreLoading: 'teamsAreLoading',
        addingTeam: 'addingTeam',
        team: 'currentTeam',
      }),
      teamSlug() {
        return this.$route.params.teamSlug;
      },
    },
    methods: {
      ...mapActions([
        'fetchCurrentTeam',
      ]),
    },
  };
</script>
