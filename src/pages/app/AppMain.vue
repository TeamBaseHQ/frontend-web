<template>
  <div class="app-main full-height">
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <div class="empty-state">
          <img src="../../assets/illustrations/empty-threads.svg" alt="No thread selected." class="empty-state--image">
          <h4 class="empty-state--heading">No Channel Selected</h4>
          <h6 class="empty-state--message">Select a Channel to list it's Threads</h6>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'app-main',
  };
</script>
