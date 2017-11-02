<template>
  <v-navigation-drawer
    app
    v-model="sidebarVisibility"
    persistent
    disable-route-watcher
    enable-resize-watcher
    width="250"
    clipped
    class="sidebar"
    id="sidebar"
  >
    <v-list dense class="my-2">
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon color="blue">inbox</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>All Threads</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon color="amber">star_border</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Starred</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list subheader dense>
      <v-subheader>
        <v-list-tile-content>
          <v-list-tile-title>Channels</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn icon dark small>
            <v-icon>add</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-subheader>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon color="green">stop</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>design</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <span class="jewel">14</span>
        </v-list-tile-action>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon color="pink">stop</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>development</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <span class="jewel">5</span>
        </v-list-tile-action>
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
