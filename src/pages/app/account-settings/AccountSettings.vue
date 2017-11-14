<template>
  <div>
    <v-toolbar flat class="transparent">
      <v-toolbar-title>Account Settings</v-toolbar-title>
    </v-toolbar>
    <v-tabs class="account-settings-tabs" v-model="currentTab">
      <v-tabs-bar class="account-settings-bar" :class="{ 'is-dark': isDarkMode }">
        <v-tabs-item ripple :to="{ name: 'account-settings' }" href="account-settings-personal-info">
          Personal Info
        </v-tabs-item>
        <v-tabs-item ripple :to="{ name: 'account-settings-notifications' }" href="account-settings-notifications">
          Notifications
        </v-tabs-item>
        <v-tabs-item ripple :to="{ name: 'account-settings-team-settings' }" href="account-settings-team-settings">
          Team Settings
        </v-tabs-item>
        <v-tabs-slider color="primary"></v-tabs-slider>
      </v-tabs-bar>
      <router-view></router-view>
    </v-tabs>
  </div>
</template>

<script>
  export default {
    name: 'account-settings',
    created() {
      this.currentTab = this.$route.name;
    },
    data() {
      return {
        currentTab: 'account-settings-personal-info',
      };
    },
  };
</script>
