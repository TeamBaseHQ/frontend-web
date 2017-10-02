<template>
  <div class="app-base">
    <sidebar></sidebar>

    <div class="app-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Sidebar from '../../components/Sidebar';

  export default {
    name: 'AppBase',
    components: {
      Sidebar,
    },
  };
</script>
