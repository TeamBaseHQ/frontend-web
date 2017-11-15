<template>
  <div>
  <v-list subheader dense>
    <v-subheader>Hand Picked</v-subheader>
    <v-list-tile @click="" v-for="category in handPickedCategories" :key="category.name">
      <v-list-tile-action>
        <v-icon>{{category.icon}}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{category.name}}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
  <v-list subheader dense>
    <v-subheader>Categories</v-subheader>
    <v-list-tile @click="" v-for="category in allCategories" :key="category.name">
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
  import categories from '../../services/app-store/categories';


  export default {
    name: 'app-category-list',
    created() {
      this.fetchAppCategories();
    },
    data() {
      return {
        categories: false,
      };
    },
    computed: {
      handPickedCategories() {
        return this.categories ? this.categories.handPicked() : {};
      },
      allCategories() {
        return this.categories ? this.categories.all() : {};
      },
    },
    methods: {
      fetchAppCategories() {
        setTimeout(() => {
          this.categories = categories;
        }, 2000);
      },
    },
  };
</script>
