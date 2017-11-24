<template>
  <v-navigation-drawer
    app
    v-model="sidebarVisibility"
    permanent
    disable-route-watcher
    width="300"
    clipped
    class="threads-bar"
    id="threads-bar"
    :floating="isDarkMode"
    v-if="currentChannel"
  >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title class="opacity-7">{{currentChannel.getName()}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>

    <thread-list v-if="currentChannel"></thread-list>

  </v-navigation-drawer>

</template>

<script>
  import {mapGetters} from 'vuex';
  import ThreadList from '../../../components/ThreadList';

  export default {
    components: {ThreadList},
    name: 'channel-threads',
    created() {
      //
    },
    watch: {
      currentTeam() {
        //
      },
    },
    data() {
      return {
        formVisible: false,
        name: '',
      };
    },
    computed: {
      ...mapGetters({
        currentTeam: 'currentTeam',
      }),
      channelSlug() {
        return this.$route.params.channelSlug;
      },
      currentChannel() {
        return this.$store.getters.currentChannel(this.channelSlug);
      },
      sidebarVisibility() {
        return true;
      },
    },
    methods: {
      //
    },
  };
</script>
