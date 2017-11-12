<template>
  <div id="account-settings-personal-info">
    <v-container>
      <div>
        <v-list three-line subheader class="no-background">
          <form >
            <table width=50% >
              <tr>
                <td>
                  <lable>Name</lable>
                </td>
                <v-spacer></v-spacer>
                <td><v-text-field label="Name"
                v-validate="'required'"></v-text-field></td>
              </tr>
              <tr>
                <td>
                  <lable>Email ID</lable>
                </td>
                <v-spacer></v-spacer>
                <td><v-text-field label="Your Email Address"
                v-validate="'required'"></v-text-field></td>
              </tr>
              <tr>
                <td>
                  <lable>Password</lable>
                </td>
                <v-spacer></v-spacer>
                <td><v-text-field label="New Password"
                v-validate="'required'"></v-text-field></td>
              </tr>
              <tr>
                <td>
                  <lable>Confirm Password</lable>
                </td>
                <v-spacer></v-spacer>
                <td><v-text-field label="Confirm Password"
                v-validate="'required'"></v-text-field></td>
              </tr>
              <tr>
                <td colspan="2">
                  <v-btn @click="submit">submit</v-btn>
                </td>
              </tr>
            </table>

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
