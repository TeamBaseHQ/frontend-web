import BaseService from './BaseService';
import Auth from '../lib/Auth';

export default class AuthService extends BaseService {
  static getUserAccessToken(email, password) {
    return super.base().getUserAccessToken(email, password).then((accessToken) => {
      Auth.setAccessToken(accessToken);
      return accessToken;
    });
  }

  static getCurrentUser() {
    return super.base()
      .userService()
      .getCurrentUser().then((user) => {
        Auth.setCurrentUser(user);
        return user;
      });
  }

  static logout() {
    Auth.clearAccessToken();
    Auth.clearCurrentUser();
  }
}
