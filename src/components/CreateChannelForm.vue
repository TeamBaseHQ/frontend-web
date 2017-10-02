<template>
  <div class="create-channel-form">
    <form>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" v-model="name" type="text" placeholder="Eg: Design, Development, Sales, etc."
                 :disabled="addingChannel">
        </div>
      </div>
      <div class="field">
        <label class="label">Color</label>
        <div class="control">
          <input class="input" v-model="color" type="color" :disabled="addingChannel">
        </div>
      </div>

      <div class="field">
        <button class="button is-primary" type="button" @click="createChannel">
          <span v-if="!addingChannel">Create Channel</span>
          <span v-if="addingChannel">Creating...</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'create-channel-form',
    data() {
      return {
        name: '',
        color: '#333333',
      };
    },
    computed: {
      ...mapGetters([
        'addingChannel',
      ]),
      slug() {
        const random = Math.floor(Math.random() * 50);
        return `${this.name}-${random}`;
      },
    },
    methods: {
      createChannel() {
        const data = {
          slug: this.slug,
          channel: {
            name: this.name,
            color: this.color,
          },
        };

        this.$store.dispatch('createChannel', data).then(() => {
          this.name = '';
        });
      },
    },
  };
</script>
