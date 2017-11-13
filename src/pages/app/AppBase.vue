<template>
  <v-app id="app-base" class="app-page app-base" :dark="isDarkMode">
    <SideBar></SideBar>
    <NavBar></NavBar>

    <main class="app-main">
      <v-content>
        <router-view></router-view>
      </v-content>
    </main>
  </v-app>
</template>

<script>
  import SideBar from '../../components/SideBar';
  import NavBar from '../../components/NavBar/NavBar';
  import AuthService from '../../services/AuthService';
  import BaseService from '../../services/BaseService';
  import UserService from '../../services/UserService';

  export default {
    name: 'AppBase',
    components: {
      NavBar,
      SideBar,
    },
    created() {
      AuthService.getUserAccessToken('kunalvarma05@gmail.com', 'abcd1234').then((accessToken) => {
        this.$_setAccessToken(accessToken);
        BaseService.base().getApp().setAccessToken(accessToken);
      }).then(() => {
        UserService.find('me').then((user) => {
          this.$_setCurrentUser(user);
        });
      });
    },
  };
</script>
