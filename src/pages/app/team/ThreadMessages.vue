<template>
  <div class="thread-messages-page full-height full-width px-3" v-if="currentThread">
    <v-toolbar flat class="transparent">
      <v-list class="pa-0 no-background">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title class="opacity-7">{{currentThread.getSubject()}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <div v-if="messagesAreLoading" class="mt-5">
      <v-progress-circular v-if="messagesAreLoading" indeterminate v-bind:size="60" v-bind:width="6"
                           color="grey"></v-progress-circular>
    </div>
    <v-list three-line id="messages-list">
      <template v-for="message in messages">
        <v-list-tile avatar :key="message.slug" @click="">
          <v-list-tile-avatar>
            <img :src="message.sender.picture.url.thumb" :alt="message.sender.name"/>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              {{message.sender.name}}
            </v-list-tile-title>
            <v-list-tile-sub-title>
              {{message.content}}
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider inset></v-divider>
      </template>
    </v-list>
    <form class="message-form" @submit.prevent="sendMessage" v-if="currentThread && !messagesAreLoading">
      <div class="is-flex align-center justify-space-between">
        <v-text-field
          v-model="content"
          id="content-box"
          label="Enter your message..."
          :error-messages="errors.collect('content')"
          v-validate="'required'"
          data-vv-name="content"
          type="text"
          required
        ></v-text-field>
        <v-btn type="submit" color="primary" block :loading="addingMessage">Send</v-btn>
      </div>
    </form>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'thread-messages',
    created() {
      const channel = window.socket.subscribe(`channel.${this.channelSlug}`);
      channel.bind('message.received', (data) => {
        this.$store.commit('addMessage', data);
      });
    },
    watch: {
      currentThread() {
        this.fetchMessages({
          team: this.currentTeam.getSlug(),
          channel: this.currentChannel.getSlug(),
          thread: this.currentThread.getSlug(),
        }).then(() => {
          //
        });
      },
      messagesAreLoading() {
        if (!this.messagesAreLoading) {
          setTimeout(() => {
            const objDiv = document.getElementById('messages-list');
            objDiv.scrollTop = objDiv.scrollHeight;
          }, 200);
        }
      },
    },
    data() {
      return {
        formVisible: false,
        content: '',
      };
    },
    computed: {
      ...mapGetters({
        currentTeam: 'currentTeam',
        messages: 'allMessages',
        addingMessage: 'addingMessage',
        messagesAreLoading: 'messagesAreLoading',
      }),
      channelSlug() {
        return this.$route.params.channelSlug;
      },
      threadSlug() {
        return this.$route.params.threadSlug;
      },
      currentChannel() {
        return this.$store.getters.currentChannel(this.channelSlug);
      },
      currentThread() {
        return this.$store.getters.currentThread(this.threadSlug);
      },
      sidebarVisibility() {
        return true;
      },
    },
    methods: {
      ...mapActions([
        'fetchMessages',
        'createMessage',
      ]),
      sendMessage() {
        this.createMessage({
          content: this.subject,
          team: this.currentTeam.getSlug(),
          thread: this.currentThread.getSlug(),
          channel: this.currentChannel.getSlug(),
        });
      },
    },
  };
</script>
