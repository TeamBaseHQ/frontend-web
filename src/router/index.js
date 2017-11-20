import Vue from 'vue';
import Router from 'vue-router';
import routeList from './routes';
import Mappings from './middlewares/mappings';

Vue.use(Router);

// Create a Router instance.
// -------------------------
// All the routes are
// to be registered in
// the routes.js file.
const router = new Router({
  mode: 'history',
  routes: routeList,
  linkExactActiveClass: 'has-active-child',
});

// Middleware dispatcher
router.beforeEach((to, from, next) => {
  to.matched.forEach((route) => {
    if (route.meta &&
      route.meta.middlewares !== undefined &&
      route.meta.middlewares.length
    ) {
      // Loop over all the middlewares of the route
      route.meta.middlewares.forEach((alias) => {
        // If a middleware was found
        const middleware = Mappings[alias];

        if (middleware) {
          // Call the middleware
          return middleware.call(this, to, from, next);
        }

        return middleware;
      });
    }
  });

  // Continue
  next();
});

export default router;
