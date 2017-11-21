<template>
  <div>
     <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-flex xs6 sm6 md3 offset-xs3 offset-lg4>
        <v-list-tile-avatar size="150px" style="width:100%">
            <img :src="appDetails.image" alt="logo" style="width:150px" >
        </v-list-tile-avatar>
        </v-flex>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{appDetails.name}}</h3>
            <div>{{appDetails.description}}</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>

  </div>


</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'app-store-details',
    created() {
      this.fetchAppDetails(this.appSlug);
    },
    computed: {
      ...mapGetters({
        appDetails: 'currentApp',
      }),
      appSlug() {
        return this.$route.params.appSlug;
      },
    },
    watch: {
      $route() {
        this.fetchAppDetails(this.appSlug);
      },
    },
    methods: {
      ...mapActions([
        'fetchAppDetails',
      ]),
    },
  };
</script>
