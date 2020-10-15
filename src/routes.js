import { lazy } from 'react';
const Home = lazy(() => import('pages/Home'));

export const publicRoutes = [
  {
    url: '/',
    component: Home,
    exact: true,
  },
];
