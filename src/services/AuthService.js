import BaseService from './BaseService';

export default class AuthService extends BaseService {
  static getUserAccessToken(email, password) {
    return super.base().getUserAccessToken(email, password);
  }
}
