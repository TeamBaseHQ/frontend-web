<template>
  <div id="account-settings-notifications">
    <v-container>
      <div>
        <v-subheader class="grey--text darken-1">General</v-subheader>
        <v-list three-line class="no-background">
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-switch color="primary" v-model="notifications"></v-switch>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Notifications</v-list-tile-title>
              <v-list-tile-sub-title>
                Enable/Disable Notifications
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-switch color="primary" v-model="sound"></v-switch>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Sound</v-list-tile-title>
              <v-list-tile-sub-title>Play/Mute notification sound</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <div v-if="notifications">
          <v-divider></v-divider>
          <v-container fluid grid-list-lg px-0>
            <v-subheader class="grey--text darken-1">Advanced</v-subheader>
            <v-layout row wrap>
              <v-flex xs12 sm12 md4 lg4>
                <v-list subheader class="list--four-line no-background">
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Desktop Notifications</v-list-tile-title>
                      <v-list-tile-sub-title>Notify me for...</v-list-tile-sub-title>
                      <v-select
                        label="Desktop Notification"
                        prepend-icon="tv"
                        v-model="desktopNotifications.selected"
                        :items="desktopNotifications.options"
                        single-line
                        item-text="label"
                        item-value="value"
                        return-object
                        :hint="desktopNotifications.selected.hint"
                        persistent-hint
                        required
                      ></v-select>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-flex>
              <v-flex xs12 sm12 md4 lg4>
                <v-list subheader class="list--four-line no-background">
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Mobile Notifications</v-list-tile-title>
                      <v-list-tile-sub-title>Notify me for...</v-list-tile-sub-title>
                      <v-select
                        label="Mobile Notification"
                        prepend-icon="stay_primary_portrait"
                        v-model="mobileNotifications.selected"
                        :items="mobileNotifications.options"
                        single-line
                        item-text="label"
                        item-value="value"
                        return-object
                        :hint="mobileNotifications.selected.hint"
                        persistent-hint
                        required
                      ></v-select>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-flex>
              <v-flex xs12 sm12 md4 lg4>
                <v-list subheader class="list--four-line no-background">
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Email Notifications</v-list-tile-title>
                      <v-list-tile-sub-title>Notify me for...</v-list-tile-sub-title>
                      <v-select
                        label="Mobile Notification"
                        prepend-icon="email"
                        v-model="emailNotifications.selected"
                        :items="emailNotifications.options"
                        single-line
                        item-text="label"
                        item-value="value"
                        return-object
                        :hint="emailNotifications.selected.hint"
                        persistent-hint
                        required
                      ></v-select>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'account-settings-notifications',
    data() {
      return {
        notifications: false,
        sound: true,
        desktopNotifications: {
          selected: {label: 'All', value: 'all'},
          options: [
            {label: 'None', value: 'none', hint: 'You will not receive any notifications.'},
            {label: 'All', value: 'all', hint: 'You will receive all notifications.'},
            {
              label: 'Mentions only',
              value: 'mentions_only',
              hint: 'You will be notified only when you are mentioned.',
            },
            {
              label: 'Direct Messages only',
              value: 'direct_messages_only',
              hint: 'You will be notified only when you receive a direct message.',
            },
          ],
        },
        mobileNotifications: {
          selected: {label: 'All', value: 'all'},
          options: [
            {label: 'None', value: 'none', hint: 'You will not receive any notifications.'},
            {label: 'All', value: 'all', hint: 'You will receive all notifications.'},
            {
              label: 'Mentions only',
              value: 'mentions_only',
              hint: 'You will be notified only when you are mentioned.',
            },
            {
              label: 'Direct Messages only',
              value: 'direct_messages_only',
              hint: 'You will be notified only when you receive a direct message.',
            },
          ],
        },
        emailNotifications: {
          selected: {label: 'All', value: 'all'},
          options: [
            {label: 'None', value: 'none', hint: 'You will not receive any notifications.'},
            {label: 'All', value: 'all', hint: 'You will receive all notifications.'},
            {
              label: 'Mentions only',
              value: 'mentions_only',
              hint: 'You will be notified only when you are mentioned.',
            },
            {
              label: 'Direct Messages only',
              value: 'direct_messages_only',
              hint: 'You will be notified only when you receive a direct message.',
            },
          ],
        },
      };
    },
  };
</script>
