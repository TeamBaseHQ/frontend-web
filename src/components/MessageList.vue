<template>
    <div style="padding-left:500px;padding-top:50px">
      <v-list-tile @click="false" v-for="message in messages" :key="message.name">
      <v-list-tile-content>
        <v-list-tile-title>{{message.name}}</v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-content>
        <v-list-tile-title>{{message.text}}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    </div>
</template>



<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'message-list',
    created() {
      this.fetchMessages(this.messageSlug);
    },
    data() {
      return {
        formVisible: false,
      };
    },
    computed: {
      ...mapGetters({
        messages: 'allMessages',
      }),
      messageSlug() {
        return 'message1';
      },
    },
    methods: {
      ...mapActions([
        'fetchMessages',
      ]),
    },
  };
</script>
