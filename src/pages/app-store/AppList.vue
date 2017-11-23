<template>
  <div>
    <br>
    <h4>{{this.categories.name}}</h4>
    <blockquote>{{this.categories.Description}}</blockquote>
    <v-layout row>
      <v-flex xs12 sm10 offset-sm1>
        <v-card>
          <v-list two-lines>
             <!-- <br> -->
            <!-- <v-divider v-bind:inset="app.inset"></v-divider> -->
            <v-list-tile :to="{ name: 'app-store-details', params: { appSlug: slug } }"
                         v-for="(app, slug) in allAppsByCategory" :key="app.name">
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

  import appsCategory from '../../services/app-store/categories';

  export default {
    name: 'app-list',
    created() {
      this.fetchAppLists(this.categorySlug);
      this.fetchCategories();
    },
    data() {
      return {
        apps: false,
        categories: false,
      };
    },
    watch: {
      $route() {
        this.fetchAppLists(this.categorySlug);
        this.fetchCategories();
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
      fetchCategories() {
        if (appsCategory.all()[this.categorySlug] != null) {
          this.categories = appsCategory.all()[this.categorySlug];
        } else {
          this.categories = appsCategory.handPicked()[this.categorySlug];
        }
      },
    },
  };
</script>
