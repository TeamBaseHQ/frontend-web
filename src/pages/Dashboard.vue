<template>
  <v-app id="dashboard" :dark="darkMode">
    <v-navigation-drawer
      app
      :miniVariant="miniVariant"
      v-model="drawer"
    >
      <v-list :dense="!miniVariant">
        <v-list-tile v-if="miniVariant" @click="miniVariant = false">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://logo.clearbit.com/amazon.com?s=128"/>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Amazon</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.native.stop="miniVariant = !miniVariant">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
        <template v-for="(item, i) in items">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="i"
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group v-else-if="item.children" v-model="item.model" no-action>
            <v-list-tile slot="item" @click="">
              <v-list-tile-action>
                <v-icon>{{ item.model ? item.icon : item['icon-alt'] }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click=""
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else @click="">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      app
      dense
      fixed
    >
      <!--<v-toolbar-title class="ml-0 px-3">-->
      <!--<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
      <!--</v-toolbar-title>-->
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-menu
        :close-on-content-click="false"
        :nudge-width="200"
        bottom
        left
        offsetX
        offsetY
        v-model="accountMenu"
        class="account-menu px-3"
      >
        <v-avatar class="white" slot="activator" size="36px">
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" alt="John">
        </v-avatar>
        <v-card>
          <v-list>
            <v-list-tile avatar @click="">
              <v-list-tile-avatar>
                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" alt="John">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>John</v-list-tile-title>
                <v-list-tile-sub-title>Active</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-divider></v-divider>
          <v-list>
            <v-list-tile>
              <v-list-tile-action>
                <v-switch color="primary" v-model="darkMode"></v-switch>
              </v-list-tile-action>
              <v-list-tile-title>Dark Mode</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon>settings</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>Settings</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon>exit_to_app</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>Log out</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-menu>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center class="pa-3">
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-card>
                  <v-card-media
                    src="https://images.unsplash.com/photo-1422360902398-0a91ff2c1a1f?dpr=1&auto=compress,format&fit=crop&w=600&h=&q=80&cs=tinysrgb&crop="
                    height="200px"
                  >
                  </v-card-media>
                  <v-card-title primary-title class="justify-space-between">
                    <div>
                      <div class="headline">Top western road trips</div>
                      <span class="grey--text">1,000 miles of wonder</span>
                    </div>
                    <div>
                      <v-chip>
                        <v-avatar>
                          <img src="https://randomuser.me/api/portraits/men/35.jpg" alt="trevor">
                        </v-avatar>
                        Trevor Hansen
                      </v-chip>
                    </div>
                  </v-card-title>
                  <v-card-actions class="pa-3">
                    <v-btn color="primary">Explore</v-btn>
                    <v-btn>Share</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon @click.native="showCard = !showCard">
                      <v-icon>{{ showCard ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
                    </v-btn>
                  </v-card-actions>
                  <v-slide-y-transition>
                    <v-card-text v-show="showCard">
                      I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                    </v-card-text>
                  </v-slide-y-transition>
                </v-card>
              </v-flex>
            </v-layout>
          </v-layout>
        </v-container>
      </v-content>
    </main>
    <v-btn
      fab
      bottom
      right
      color="pink"
      dark
      fixed
      @click.stop="dialog = !dialog"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" maxWidth="800px">
      <v-card>
        <v-card-title
          class="py-4 title"
        >
          Create contact
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>
              <v-layout align-center>
                <v-avatar size="40px" class="mr-3">
                  <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                  >
                </v-avatar>
                <v-text-field
                  placeholder="Name"
                ></v-text-field>
              </v-layout>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                prepend-icon="business"
                placeholder="Company"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                placeholder="Job title"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="mail"
                placeholder="Email"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                type="tel"
                prepend-icon="phone"
                placeholder="(000) 000 - 0000"
                mask="phone"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="notes"
                placeholder="Notes"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-btn color="primary">More</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      drawer: true,
      showCard: true,
      miniVariant: false,
      darkMode: true,
      accountMenu: true,
      items: [
        {icon: 'contacts', text: 'Contacts'},
        {icon: 'history', text: 'Frequently contacted'},
        {icon: 'content_copy', text: 'Duplicates'},
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Labels',
          model: true,
          children: [
            {icon: 'add', text: 'Create label'},
          ],
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'More',
          model: false,
          children: [
            {text: 'Import'},
            {text: 'Export'},
            {text: 'Print'},
            {text: 'Undo changes'},
            {text: 'Other contacts'},
          ],
        },
        {icon: 'settings', text: 'Settings'},
        {icon: 'chat_bubble', text: 'Send feedback'},
        {icon: 'help', text: 'Help'},
        {icon: 'phonelink', text: 'App downloads'},
        {icon: 'keyboard', text: 'Go to the old version'},
      ],
    }),
    props: {
      source: String,
    },
  };
</script>
