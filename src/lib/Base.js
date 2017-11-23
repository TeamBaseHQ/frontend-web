import {Base as BaseOriginal} from 'base-javascript-sdk';
import AuthService from '../services/AuthService';

export default class Base extends BaseOriginal {

  /**
   * Send a get request.
   *
   * @param {string} endpoint
   * @param {Object} params
   *
   * @return {Promise}
   */
  get(endpoint, params) {
    return Base.handleResponse(super.get(endpoint, params));
  }

  /**
   * Send a post request.
   *
   * @param {string} endpoint
   * @param {Object} params
   *
   * @return {Promise}
   */
  post(endpoint, params) {
    return Base.handleResponse(super.post(endpoint, params));
  }

  /**
   * Send a put request.
   *
   * @param {string} endpoint
   * @param {Object} params
   *
   * @return {Promise}
   */
  put(endpoint, params) {
    return Base.handleResponse(super.put(endpoint, params));
  }

  /**
   * Send a patch request.
   *
   * @param {string} endpoint
   * @param {Object} params
   *
   * @return {Promise}
   */
  patch(endpoint, params) {
    return Base.handleResponse(super.patch(endpoint, params));
  }

  /**
   * Send a del request.
   *
   * @param {string} endpoint
   * @param {Object} params
   *
   * @return {Promise}
   */
  del(endpoint, params) {
    return Base.handleResponse(super.del(endpoint, params));
  }

  /**
   *
   * @param response
   * @return {*}
   */
  static handleResponse(response) {
    return new Promise((resolve, reject) => {
      response.then((res) => {
        resolve(res);
      }).catch((error) => {
        if (!error.response || error.response.status === 401) {
          Base.attemptReAuthorization();
        }

        reject(error);
      });
    });
  }

  static attemptReAuthorization() {
    AuthService.logout();
    window.location.reload(true);
  }
}
