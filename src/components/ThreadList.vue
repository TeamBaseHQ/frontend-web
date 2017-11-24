<template>
  <v-list subheader dense>
    <v-subheader>
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
          <v-btn type="submit" color="primary" block :loading="loading">Create</v-btn>
        </v-card-actions>
      </form>
    </v-slide-y-transition>
    <v-list v-if="!formVisible">
      <v-list-tile @click="false" v-for="thread in threads" :key="thread.getSlug()">
        <v-list-tile-action>
          <v-icon color="green">stop</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{thread.getSubject()}}</v-list-tile-title>
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
    data() {
      return {
        formVisible: false,
        subject: '',
        description: '',
        loading: false,
      };
    },
    computed: {
      ...mapGetters({
        currentTeam: 'currentTeam',
        threads: 'allThreads',
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
    },
  };
</script>
