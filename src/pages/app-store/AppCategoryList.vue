<template>
  <div>
  <v-list subheader dense>
    <v-subheader>Hand Picked</v-subheader>
    <v-list-tile :to="{ name: 'app-list', params: { category: categorySlug} }" v-for="(category, categorySlug) in handPickedCategories" :key="categorySlug">
      <v-list-tile-action>
        <v-icon>{{category.icon}}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>
            {{category.name}}
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
  <v-list subheader dense>
    <v-subheader>Categories</v-subheader>
    <v-list-tile :to="{ name: 'app-list', params: { category: categorySlug} }" v-for="(category, categorySlug) in allCategories" :key="category.name">
      <v-list-tile-action>
        <v-icon>{{category.icon}}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{category.name}}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'app-category-list',
    created() {
      this.fetchAppCategories();
      this.fetchHandPickedCategories();
    },
    data() {
      return {
        //
      };
    },
    computed: {
      ...mapGetters({
        allCategories: 'allAppCategories',
        handPickedCategories: 'allHandPickedCategories',
      }),
    },
    methods: {
      ...mapActions([
        'fetchAppCategories',
        'fetchHandPickedCategories',
      ]),
    },
  };
</script>
