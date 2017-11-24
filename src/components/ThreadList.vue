<template>
  <v-list subheader dense>
    <v-subheader class="opacity-7">
      <v-list-tile-content>
        <v-list-tile-title>Threads</v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-btn icon dark small @click="formVisible = !formVisible">
          <v-icon>add</v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-subheader>
    <v-slide-y-transition>
      <form v-if="formVisible" @submit.prevent="addThread">
        <v-card-text>
          <v-text-field
            v-model="subject"
            id="subject-box"
            label="Subject"
            :error-messages="errors.collect('subject')"
            v-validate="'required'"
            data-vv-name="subject"
            type="text"
            required
          ></v-text-field>
          <v-text-field
            v-model="description"
            multiLine
            label="Description"
            :error-messages="errors.collect('description')"
            v-validate="'required'"
            data-vv-name="description"
            type="text"
            required
          ></v-text-field>
        </v-card-text>
        <v-card-actions class="mt-3">
          <v-btn type="submit" color="primary" block :loading="addingThread">Create</v-btn>
        </v-card-actions>
      </form>
    </v-slide-y-transition>
    <v-list v-if="!formVisible" class="thread-list">
      <v-list-tile @click="false" v-for="thread in threads" :key="thread.getSlug()" class="thread-list-item">
        <v-list-tile-content>
          <v-list-tile-title>
            {{thread.getSubject()}}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-list>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'thread-list',
    created() {
      this.fetchThreads({team: this.currentTeam.getSlug(), channel: this.channelSlug});
    },
    watch: {
      formVisible() {
        if (this.formVisible) {
          setTimeout(() => {
            document.getElementById('subject-box').focus();
          }, 100);
        }
      },
    },
    data() {
      return {
        formVisible: false,
        subject: '',
        description: '',
      };
    },
    computed: {
      ...mapGetters({
        currentTeam: 'currentTeam',
        threads: 'allThreads',
        addingThread: 'creatingThread',
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
      ...mapActions([
        'fetchThreads',
        'createThread',
      ]),
      addThread() {
        this.createThread({
          subject: this.subject,
          description: this.description,
          team: this.currentTeam.getSlug(),
          channel: this.currentChannel.getSlug(),
        }).then(() => {
          this.subject = '';
          this.description = '';
          this.formVisible = false;
        });
      },
    },
  };
</script>
