<template>
  <div>
    <br>
    <v-layout row>
    <v-flex xs12 sm10 offset-sm1>
    <v-card>
      <v-list two-lines >
        <!-- <br> -->
        <!-- <v-divider v-bind:inset="app.inset"></v-divider> -->
        <v-list-tile :to="{ name: 'app-store-details', params: { app: appSlug} }" v-for="(app, appSlug) in allAppsByCategory" :key="app.name">
          <v-list-tile-action>
            <v-list-tile-avatar>
                <img :src="app.image" alt="logo">
            </v-list-tile-avatar>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{app.name}}</v-list-tile-title>
            <br>
            <v-divider></v-divider>
          </v-list-tile-content>
          <!-- <v-divider></v-divider> -->
          <v-icon>keyboard_arrow_right</v-icon>

        </v-list-tile>
      <!-- <v-divider></v-divider> -->
      </v-list>
    </v-card>
    </v-flex>
    </v-layout>
  </div>
</template>

<script>
 // import apps from '../../services/app-store/apps';
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'app-list',
    created() {
      this.fetchAppLists(this.categorySlug);
    },
    data() {
      return {
        apps: false,
      };
    },
    watch: {
      $route() {
        this.fetchAppLists(this.categorySlug);
      },
    },
    computed: {
      // allAppsByCategory() {
      //   return this.apps ? this.apps.allByCategory(this.categorySlug) : {};
      // },
      categorySlug() {
        return this.$route.params.category;
      },
      ...mapGetters({
        allAppsByCategory: 'appList',
      }),
    },
    methods: {
      ...mapActions([
        'fetchAppLists',
      ]),
    },
  };
</script>
