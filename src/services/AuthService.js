import BaseService from './BaseService';
import Auth from '../lib/Auth';

export default class AuthService extends BaseService {
  static getUserAccessToken(email, password) {
    return super.base().getUserAccessToken(email, password).then((accessToken) => {
      Auth.setAccessToken(accessToken);
      return accessToken;
    });
  }
}
