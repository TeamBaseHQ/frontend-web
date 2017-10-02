<template>
  <div class="hello">
    <h1 class="title">{{counter}}</h1>

    <button @click="increaseCounter">Add</button>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'hello',
    computed: {
      ...mapGetters({
        counter: 'counter',
      }),
    },
    methods: {
      ...mapActions([
        'increaseCounter',
      ]),
    },
  };
</script>

<style>
</style>
