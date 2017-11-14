<template>
  <div id="account-settings-personal-info">
    <v-container>
      <div>
        <v-list three-line subheader class="no-background">
          <form >
            <v-container fluid grid-list-lg px-0>
            <v-layout row wrap>
              <v-flex lg6 md6>
                <v-list-tile-title>Name</v-list-tile-title>
                <v-text-field label="Name" >Name</v-text-field>
              </v-flex>
              <v-flex lg6 md6>
                <v-list-tile-title>Email</v-list-tile-title>
                <v-text-field label="Your Email Address">Email</v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex lg6 md6>
                <v-list-tile-title>New Password</v-list-tile-title>
                <v-text-field label="Enter New Password">Password</v-text-field>
              </v-flex>
              <v-flex lg6 md6>
                <v-list-tile-title>Confirm Password</v-list-tile-title>
                <v-text-field label="Confirm Password">Confirm Password</v-text-field>
              </v-flex>
            </v-layout>
            <v-btn color="primary">
              Save
            </v-btn>
            </v-container>
          </form>
        </v-list>
      </div>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'account-settings-personal-info',
    data() {
      return {
        //
      };
    },
  };
</script>
