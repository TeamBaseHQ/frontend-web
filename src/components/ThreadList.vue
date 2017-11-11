<template>
  <v-list subheader dense>
    <v-subheader>
      <v-list-tile-content>
        <v-list-tile-title>Threads</v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-btn icon dark small @click="addThread">
          <v-icon>add</v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-subheader>
    <v-list-tile @click="" v-for="thread in threads" :key="thread.name">
      <v-list-tile-action>
        <v-icon color="green">stop</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{thread.name}}</v-list-tile-title>
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
    name: 'thread-list',
    created() {
      this.fetchThreads();
    },
    data() {
      return {
        formVisible: false,
        name: '',
      };
    },
    computed: {
      ...mapGetters({
        threads: 'allThreads',
      }),
    },
    methods: {
      ...mapActions([
        'fetchThreads',
      ]),
      addChannel() {
        this.$set(this.threads, 'createlogo', {
          name: 'createlogo',
          color: 'blue',
        });
      },
    },
  };
</script>
