import BaseService from './BaseService';

export default class AuthService extends BaseService {
  static getUserAccessToken(email, password) {
    return AuthService.base().getUserAccessToken(email, password);
  }
}
