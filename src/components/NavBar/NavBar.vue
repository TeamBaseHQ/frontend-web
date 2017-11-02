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
