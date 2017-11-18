<template>
  <v-layout row justify-center>
    <v-dialog scrollable max-width="450px">
      <v-btn color="primary" dark slot="activator">Manage Invitations</v-btn>
      <v-card>
        <v-card-title>Send Invitations</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <form @submit.prevent="sendInvite">
            <v-text-field label="E-mail" :disabled="sendingInvitation" v-model="email" type="email" required></v-text-field>
            <v-btn type="submit" :loading='sendingInvitation' color='primary' small ripple>
              <span>Send</span>
            </v-btn>
          </form>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-text style="height: 300px;">

          <v-progress-circular indeterminate v-if="fetchingInvitations"></v-progress-circular>

          <v-list two-line subheader v-if="!fetchingInvitations">
            <v-subheader>Invites Sent</v-subheader>
            <v-list-tile v-for="(accepted, email) in invites" :key="email">
             <v-list-tile-content>
              <v-list-tile-title >{{ email }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ accepted ? 'Accepted' : 'Pending' }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-btn icon ripple @click="cancelInvite(email)" v-if="!accepted">
              <v-icon>cancel</v-icon>
            </v-btn>
            </v-list-tile>
          </v-list>
        </v-card-text>
        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </v-layout>
</template>


<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'invitations',
    created() {
      this.fetchInvitations('amazon-a');
    },
    data() {
      return {
        email: '',
      };
    },
    computed: {
      ...mapGetters({
        invites: 'allInvitations',
        fetchingInvitations: 'fetchingInvitations',
        sendingInvitation: 'sendingInvitation',
      }),
    },
    methods: {
      ...mapActions([
        'fetchInvitations',
        'sendInvitation',
        'cancelInvitation',
      ]),
      sendInvite() {
        this.sendInvitation(this.email);
      },
      cancelInvite(email) {
        this.cancelInvitation(email);
      },
    },
  };
</script>
