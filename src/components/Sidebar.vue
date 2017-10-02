<template>
  <div class="sidebar">
    <div class="sidebar-panel">
      <channel-list></channel-list>
    </div>
  </div>
</template>

<script>
  import ChannelList from './ChannelList';

  export default {
    name: 'sidebar',
    components: {
      ChannelList,
    },
  };
</script>
