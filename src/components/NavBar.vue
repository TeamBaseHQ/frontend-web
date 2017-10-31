<template>
  <v-toolbar
    app
    dense
    fixed
    id="navbar"
  >
    <v-toolbar-title class="ml-0 px-0">
      <v-toolbar-side-icon @click.stop="toggleSidebar"></v-toolbar-side-icon>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>notifications</v-icon>
    </v-btn>
    <v-menu
      :close-on-content-click="false"
      :nudge-width="200"
      bottom
      left
      offsetX
      offsetY
      v-model="accountMenu"
      class="account-menu px-3"
    >
      <v-avatar class="white" slot="activator" size="36px">
        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" alt="John">
      </v-avatar>
      <v-card>
        <v-list>
          <v-list-tile avatar @click="">
            <v-list-tile-avatar>
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" alt="John">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>John</v-list-tile-title>
              <v-list-tile-sub-title>Active</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-switch color="primary"></v-switch>
            </v-list-tile-action>
            <v-list-tile-title>Dark Mode</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>settings</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Log out</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-menu>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'navbar',
    data() {
      return {
        accountMenu: true,
      };
    },
    methods: {
      toggleSidebar() {
        // TODO
      },
    },
  };
</script>
