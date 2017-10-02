<template>
  <div class="channel-list">
    <aside class="menu">
      <p class="menu-label">
        Channels
      </p>
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

  export default {
    name: 'channel-list',
    created() {
      this.fetchChannels();
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
