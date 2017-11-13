import BaseService from './BaseService';

export default class UserService extends BaseService {
  static find(id) {
    return UserService.base().get(`/users/${id}`).then(response => UserService.getData(response));
  }
}
