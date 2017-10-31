<template>
  <v-navigation-drawer
    app
    v-model="sidebarVisibility"
    persistent
    disable-route-watcher
    enable-resize-watcher
    id="sidebar"
  >
    <v-list dense>
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img src="https://logo.clearbit.com/amazon.com?s=128"/>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>Amazon</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import ChannelList from './ChannelList';

  export default {
    name: 'sidebar',
    components: {
      ChannelList,
    },
    data() {
      return {
        //
      };
    },
    computed: {
      sidebarVisibility() {
        return true;
      },
    },
  };
</script>
