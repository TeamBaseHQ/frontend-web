<template>
  <v-toolbar
    app
    dense
    fixed
    clipped-left
    id="navbar"
    class="navbar"
  >
    <team-menu></team-menu>
    <v-spacer></v-spacer>
    <div>
      <v-btn flat small :to="{ name: 'app' }" exact>
        <v-icon left>list</v-icon>
        <span>Channels</span>
      </v-btn>
      <v-btn flat small>
        <v-icon left>comment</v-icon>
        <span>Conversations</span>
      </v-btn>
      <v-btn flat small>
        <v-icon left>people</v-icon>
        <span>Team</span>
      </v-btn>
      <v-btn flat small>
        <v-icon left>folder</v-icon>
        <span>Files</span>
      </v-btn>
      <v-btn flat small>
        <v-icon left>search</v-icon>
        <span>Search</span>
      </v-btn>
    </div>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>notifications</v-icon>
    </v-btn>
    <account-menu></account-menu>
  </v-toolbar>
</template>

<script>
  import TeamMenu from './TeamMenu';
  import AccountMenu from './AccountMenu';

  export default {
    name: 'navbar',
    components: {
      TeamMenu,
      AccountMenu,
    },
    data() {
      return {
        accountMenu: false,
      };
    },
    methods: {
      toggleSidebar() {
        // TODO
      },
    },
  };
</script>
