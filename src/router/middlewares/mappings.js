import AuthMiddleware from './AuthMiddleware';

export default {
  auth: (to, from, next) => AuthMiddleware.handleAuth(to, from, next),
  'no-auth': (to, from, next) => AuthMiddleware.handleNoAuth(to, from, next),
};
