<template>
  <v-menu
    :close-on-content-click="true"
    :nudge-width="200"
    left
    offsetX
    offsetY
    v-model="accountMenu"
    class="account-menu px-3"
  >
    <v-avatar class="grey" slot="activator" size="32px">
      <span v-if="!profilePicture">{{userInitial}}</span>
      <img :src="profilePicture" :alt="$currentUser.name" v-if="profilePicture">
    </v-avatar>
    <v-card>
      <v-list>
        <v-list-tile avatar @click="">
          <v-list-tile-content>
            <v-list-tile-title>{{$currentUser.name}}</v-list-tile-title>
            <v-list-tile-sub-title>Active</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-switch color="primary" v-model="darkMode"></v-switch>
          </v-list-tile-action>
          <v-list-tile-title>Dark Mode</v-list-tile-title>
        </v-list-tile>
        <v-list-tile :to="{ name: 'account-settings' }">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Settings</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="logout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Log out</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
  import AuthService from '../../services/AuthService';

  export default {
    name: 'navbar-account-menu',
    data() {
      return {
        accountMenu: false,
      };
    },
    computed: {
      userInitial() {
        if (this.$currentUser.name) {
          return this.$currentUser.name.charAt(0);
        }
        return '';
      },
      profilePicture() {
        if (this.$currentUser &&
          this.$currentUser.getPicture() &&
          this.$currentUser.getPicture().getUrl('thumb')) {
          return this.$currentUser.getPicture().getUrl('thumb');
        }
        return '';
      },
      darkMode: {
        get() {
          return this.$store.getters.isDarkMode;
        },

        set(value) {
          this.$store.dispatch('toggleDarkMode', value);
        },
      },
    },
    methods: {
      logout() {
        AuthService.logout();
        window.location.reload();
      },
    },
  };
</script>
