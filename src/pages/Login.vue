<template>
  <v-app id="home-page" class="home-page">
    <main>
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <div class="login-box">
              <v-card class="mt-4 pa-3 full-width">
                <div class="login-box-header pa-3">
                  <router-link to="/">
                    <img src="../assets/logos/logo-type-dark-grey.svg" width="80px">
                  </router-link>
                  <div class="mt-2 grey--text">
                    Log In to your Account
                  </div>
                </div>
                <form @submit.prevent="logIn">
                  <v-card-text>
                    <v-text-field
                      v-model="email"
                      label="Email"
                      :error-messages="errors.collect('email')"
                      v-validate="'required|email'"
                      data-vv-name="email"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="password"
                      label="Password"
                      :error-messages="errors.collect('password')"
                      v-validate="'required'"
                      data-vv-name="password"
                      required
                      type="password"
                    ></v-text-field>
                  </v-card-text>
                  <v-card-actions class="mt-3">
                    <v-btn type="submit" color="primary" block :loading="loading">Log In</v-btn>
                  </v-card-actions>
                </form>
              </v-card>
            </div>
          </v-layout>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
  import AuthService from '../services/AuthService';

  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: '',
        loading: false,
      };
    },
    methods: {
      logIn() {
        this.loading = true;
        this.$validator.validateAll()
          .then(this.fetchAccessToken);
      },
      fetchAccessToken() {
        return AuthService.getUserAccessToken(this.email, this.password)
          .then(() => {
            this.loading = false;
            this.router.push({name: 'app'});
          });
      },
    },
  };
</script>
