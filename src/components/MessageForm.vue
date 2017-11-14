<template>
  <div style="padding-left:500px">
    <input type ="text" placeholder="Enter message here..." v-model="newMessage" @keyup.enter.stop="addMessage">
    </div>
</template>


<script>
  import {mapActions} from 'vuex';

  export default {
    name: 'message-form',
    data() {
      return {
        formVisible: false,
        newMessage: '',
      };
    },
    computed: {
      messageSlug() {
        return 'message1';
      },
    },
    methods: {
      ...mapActions([
        'createMessage',
      ]),
      addMessage() {
        this.createMessage({
          slug: 'Message4',
          message: {
            name: 'ronak',
            text: this.newMessage,
          },
        });
      },
    },
  };
</script>
