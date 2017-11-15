<template>
  <v-list subheader dense>
    <v-subheader>
      <v-list-tile-content>
        <v-list-tile-title>Channels</v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-btn icon dark small @click="addChannel">
          <v-icon>add</v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-subheader>
    <v-list-tile @click="" v-for="channel in channels" :key="channel.name">
      <v-list-tile-action>
        <v-icon color="green">stop</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{channel.name}}</v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <span class="jewel">0</span>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';


  export default {
    name: 'channel-list',
    created() {
      this.fetchChannels();
    },
    data() {
      return {
        formVisible: false,
        name: '',
      };
    },
    computed: {
      ...mapGetters({
        channels: 'allChannels',
      }),
    },
    methods: {
      ...mapActions([
        'fetchChannels',
        'createChannel',
      ]),
      addChannel() {
        this.createChannel({
          slug: 'dev',
          channel: {
            name: 'Sales',
            color: 'amber',
          },
        });
      },
    },
  };
</script>
