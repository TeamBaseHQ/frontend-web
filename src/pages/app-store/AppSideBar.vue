<template>
  <v-navigation-drawer
    app
    v-model="appSideBarVisibility"
    persistent
    disable-route-watcher
    enable-resize-watcher
    clipped
    class="appsidebar"
    id="appsidebar"
    :floating="isDarkMode"

  >
    <app-category-list></app-category-list>
  </v-navigation-drawer>
</template>

<script>
  import AppCategoryList from './AppCategoryList';

  export default {
    name: 'app-side-bar',
    components: {
      AppCategoryList,
    },
    data() {
      return {
        appSideBarVisibility: true,
      };
    },
    computed: {
      //
    },
  };
</script>
