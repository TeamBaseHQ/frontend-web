import {Base, BaseApp} from 'base-javascript-sdk';
import ENV from '../env';
import Auth from '../lib/Auth';

export default class BaseService {

  static base() {
    // No Instance, yet.
    if (!(BaseService.baseInstance instanceof Base)) {
      const app = new BaseApp(ENV.client_id, ENV.client_secret, ENV.api_url);
      BaseService.baseInstance = new Base(app);
    }

    // Fetch the Access Token
    const accessToken = Auth.getAccessToken();

    // If we have the access token
    if (accessToken) {
      // We'll utilize the token
      BaseService.baseInstance.getApp().setAccessToken(accessToken);
    }

    return BaseService.baseInstance;
  }

  static getData(response) {
    if (response) {
      return response.data ? response.data.data : null;
    }

    return response;
  }
}
