<template>
  <div>
    <message-list></message-list>
    <message-form></message-form>
  </div>
</template>

<script>

import MessageForm from '@/components/MessageForm';
import MessageList from '@/components/MessageList';

export default {
  name: 'message',
  components: {
    MessageForm,
    MessageList,
  },
};
</script>
