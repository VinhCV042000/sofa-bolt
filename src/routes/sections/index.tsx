import { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { MainLayout } from 'src/layouts/main';
import { sofaNavData } from 'src/layouts/config-nav-sofa';
import { sofa1NavData } from 'src/layouts/config-nav-sofa1';
import { sofa2NavData } from 'src/layouts/config-nav-sofa2';
import { sofa4NavData } from 'src/layouts/config-nav-sofa4';
import { sofa5NavData } from 'src/layouts/config-nav-sofa5';

import { SplashScreen } from 'src/components/loading-screen';

import { authRoutes } from './auth';
import { mainRoutes } from './main';
import { authDemoRoutes } from './auth-demo';
import { dashboardRoutes } from './dashboard';
import { componentsRoutes } from './components';

// ----------------------------------------------------------------------

const HomePage = lazy(() => import('src/pages/home'));
const Sofa1Page = lazy(() => import('src/pages/sofa1'));
const Sofa2Page = lazy(() => import('src/pages/sofa2'));
const Sofa4Page = lazy(() => import('src/pages/sofa4'));
const Sofa5Page = lazy(() => import('src/pages/sofa5'));

export function Router() {
  return useRoutes([
    {
      path: '/',
      /**
       * Skip home page
       * element: <Navigate to={CONFIG.auth.redirectPath} replace />,
       */
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofaNavData }}>
            <HomePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1NavData }}>
            <Sofa1Page />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2NavData }}>
            <Sofa2Page />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4NavData }}>
            <Sofa4Page />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa5',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa5NavData }}>
            <Sofa5Page />
          </MainLayout>
        </Suspense>
      ),
    },

    // Auth
    ...authRoutes,
    ...authDemoRoutes,

    // Dashboard
    ...dashboardRoutes,

    // Main
    ...mainRoutes,

    // Components
    ...componentsRoutes,

    // No match
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
