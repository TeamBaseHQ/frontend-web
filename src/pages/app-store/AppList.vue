<template>
  <v-container class="pa-5">
    <v-layout row>
      <v-flex lg12 md12 sm12 xs12>
        <h4>{{this.categories.name}}</h4>
        <p class="opacity-7">{{this.categories.Description}}</p>
      </v-flex>
    </v-layout>
    <v-layout row class="mt-3">
      <v-flex>
        <v-card>
          <v-list two-lines>
            <v-list-tile :to="{ name: 'app-store-details', params: { appSlug: slug } }"
                         v-for="(app, slug) in allAppsByCategory" :key="app.name">
              <v-list-tile-action>
                <v-list-tile-avatar size="36px">
                  <img :src="app.image" alt="logo">
                </v-list-tile-avatar>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{app.name}}</v-list-tile-title>
              </v-list-tile-content>
              <!-- <v-divider></v-divider> -->
              <v-icon>keyboard_arrow_right</v-icon>
            </v-list-tile>
            <!-- <v-divider></v-divider> -->
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
