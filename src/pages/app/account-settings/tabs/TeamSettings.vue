<template>
 <div id="account-settings-personal-info">
    <v-container>
      <div>
         <v-list three-line subheader class="no-background">
            <form>
              <v-container fluid grid-list-lg px-0>
                  <v-layout row wrap>
                    <v-flex lg6 md6>
                      <v-list-tile-title>Name</v-list-tile-title>
                      <v-text-field label="Name" >Name</v-text-field>
                    </v-flex>
                    <v-flex lg6 md6>
                      <v-list-tile-title>Description</v-list-tile-title>
                      <v-text-field label="Description">Description</v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex lg6 md6>
                      <v-list-tile avatar>
                        <v-list-tile-action>
                          <v-switch color="primary" v-model="privateTeam"></v-switch>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Private Team</v-list-tile-title>
                          <v-list-tile-sub-title>
                            Enable to make team Private
                          </v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-flex>
                    <v-flex lg6 md6>
                      <v-btn color="primary">
                        Save
                      </v-btn>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex lg6 md6>
                      <v-text-field value="http://baseapp.io/xyz" readonly label="Invitation Link" >Invitation Link</v-text-field>
                    </v-flex>
                    <v-flex lg6 md6>
                    <invitations></invitations>
                    </v-flex>
                  </v-layout>
              </v-container>
            </form>
         </v-list>
       </div>
     </v-container>

  </div>
 </template>

<script>
  import Invitations from '../../../../components/Teams/Invitations';

  export default {
    name: 'account-settings-team-settings',
    components: {
      Invitations,
    },
    data() {
      return {
        privateTeam: false,
        sendInvite: false,
      };
    },
  };
</script>
