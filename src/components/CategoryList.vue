<template>
    <div style="padding-left:500px;padding-top:50px">
      <v-list-tile @click="false" v-for="appcategory in appcategories" :key="appcategory.name">
      <v-list-tile-content>
        <v-list-tile-title>{{appcategory.name}}</v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-content>
        <v-list-tile-title>{{appcategory.icon}}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    </div>
</template>



<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'appcategory-list',
    created() {
      this.fetchAppCategories(this.appcategorySlug);
    },
    data() {
      return {
        formVisible: false,
      };
    },
    computed: {
      ...mapGetters({
        appcategories: 'allAppCategories',
      }),
      appcategorySlug() {
        return 'appcategory1';
      },
    },
    methods: {
      ...mapActions([
        'fetchAppCategories',
      ]),
    },
  };
</script>
