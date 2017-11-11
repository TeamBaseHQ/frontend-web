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
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <div class="navbar-items hidden-sm-and-down">
      <v-btn flat small :to="{ name: 'app' }" exact>
        <v-icon class="hidden-lg-and-up">list</v-icon>
        <v-icon class="hidden-md-and-down" left>list</v-icon>
        <span class="hidden-md-and-down">Channels</span>
      </v-btn>
      <v-btn flat small>
        <v-icon class="hidden-lg-and-up">comment</v-icon>
        <v-icon class="hidden-md-and-down" left>comment</v-icon>
        <span class="hidden-md-and-down">Conversations</span>
      </v-btn>
      <v-btn flat small>
        <v-icon class="hidden-lg-and-up">people</v-icon>
        <v-icon class="hidden-md-and-down" left>people</v-icon>
        <span class="hidden-md-and-down">Team</span>
      </v-btn>
      <v-btn flat small>
        <v-icon class="hidden-lg-and-up">folder</v-icon>
        <v-icon class="hidden-md-and-down" left>folder</v-icon>
        <span class="hidden-md-and-down">Files</span>
      </v-btn>
      <v-btn flat small>
        <v-icon class="hidden-lg-and-up">search</v-icon>
        <v-icon class="hidden-md-and-down" left>search</v-icon>
        <span class="hidden-md-and-down">Search</span>
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
