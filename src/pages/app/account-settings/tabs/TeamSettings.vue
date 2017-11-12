<template>
<div id="account-settings-personal-info">
    <v-container>
      <div>
        <v-list three-line subheader class="no-background">
 <form>
   <table width=50% >
      <tr>
        <td>
          <lable>Name</lable>
        </td>
        <v-spacer></v-spacer>
        <td><v-text-field label="Name"
            v-validate="'required'">Name</v-text-field>
        </td>
      </tr>
      <tr>
        <td>
          <lable>Description</lable>
        </td>
        <v-spacer></v-spacer>
        <td><v-text-field label="Description for your team"
            v-validate="'required'">description of your team</v-text-field>
        </td>
      </tr>
   </table>
 </form>
        </v-list>
      </div>
    </v-container>
    <v-list three-line class="no-background">
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-switch color="primary" v-model="privacy"></v-switch>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Private</v-list-tile-title>
              <v-list-tile-sub-title>
                Enable to make the team private
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
    </v-list>
</div>
</template>
