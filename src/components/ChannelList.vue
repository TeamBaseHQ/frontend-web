<template>
  <div class="channel-list">
    <aside class="menu">
      <p class="menu-label">
        Channels
        <button class="button is-secondary is-pulled-right" @click="showForm = !showForm">
          <span v-if="!showForm">Create</span>
          <span v-if="showForm">Cancel</span>
        </button>
      </p>

      <create-channel-form v-if="showForm"></create-channel-form>

      <p v-if="isLoading">
        Loading channels...
      </p>
      <ul class="menu-list" v-if="!isLoading">
        <li class="channel-item" v-for="channel in allChannels" :key="channel.name">
          <a class="channel-link">
            <span class="channel-color tag" :style="'background:' + channel.color"></span>
            <span class="channel-label">{{channel.name}}</span>
          </a>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import CreateChannelForm from '@/components/CreateChannelForm';

  export default {
    name: 'channel-list',
    created() {
      this.fetchChannels();
    },
    data() {
      return {
        showForm: false,
      };
    },
    components: {
      CreateChannelForm,
    },
    computed: {
      ...mapGetters([
        'allChannels',
        'isLoading',
      ]),
    },

    methods: {
      ...mapActions([
        'fetchChannels',
      ]),
    },
  };
</script>
