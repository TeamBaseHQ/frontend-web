import appRoutes from './routes/app';
import globalRoutes from './routes/global';
import appStoreRoutes from './routes/app-store';

export default [
  ...globalRoutes,
  ...appRoutes,
  ...appStoreRoutes,
];
