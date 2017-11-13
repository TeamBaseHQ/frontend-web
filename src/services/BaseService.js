import {Base, BaseApp} from 'base-javascript-sdk';
import ENV from '../env';

export default class BaseService {
  static base() {
    if (BaseService.baseInstance instanceof Base) {
      return BaseService.baseInstance;
    }

    BaseService.baseInstance = new Base(new BaseApp(ENV.client_id, ENV.client_secret, ENV.api_url));
    return BaseService.baseInstance;
  }

  static getData(response) {
    if (response) {
      return response.data ? response.data.data : null;
    }

    return response;
  }
}
