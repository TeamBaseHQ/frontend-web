<template>
  <div class="alert">
    <h1 class="title">Verified Users</h1>
    <ul v-if="users && users.length">
      <li v-for="user in users">{{user.name}}</li>
    </ul>
    <br>
    Name: <input v-model="name">
    <br>
    Verified: <input type="checkbox" v-model="verified">
    <br>
    <button @click="addUser">Add</button>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'message',
    data() {
      return {
        name: '',
        verified: true,
      };
    },
    computed: {
      ...mapGetters({
        users: 'verifiedUsers',
      }),
    },
    methods: {
      ...mapActions({}),
      addUser() {
        this.$store.dispatch('addUser', {
          name: this.name,
          verified: this.verified,
        }).then(() => {
          this.name = '';
          this.verified = false;
        });
      },
    },
  };
</script>

<style>
</style>
