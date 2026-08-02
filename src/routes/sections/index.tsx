import { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { MainLayout } from 'src/layouts/main';
import { sofaNavData } from 'src/layouts/config-nav-sofa';
import { sofa1NavData } from 'src/layouts/config-nav-sofa1';
import { sofa2NavData } from 'src/layouts/config-nav-sofa2';
import { sofa3NavData } from 'src/layouts/config-nav-sofa3';
import { sofa4NavData } from 'src/layouts/config-nav-sofa4';
import { sofa5NavData } from 'src/layouts/config-nav-sofa5';
import { sofa6NavData } from 'src/layouts/config-nav-sofa6';
import { sofa7NavData } from 'src/layouts/config-nav-sofa7';
import { sofa8NavData } from 'src/layouts/config-nav-sofa8';
import { sofa9NavData } from 'src/layouts/config-nav-sofa9';
import { sofa10NavData } from 'src/layouts/config-nav-sofa10';
import { sofa11NavData } from 'src/layouts/config-nav-sofa11';
import { sofa12NavData } from 'src/layouts/config-nav-sofa12';
import { sofa13NavData } from 'src/layouts/config-nav-sofa13';
import { sofa14NavData } from 'src/layouts/config-nav-sofa14';
import { sofa15NavData } from 'src/layouts/config-nav-sofa15';
import { sofa16NavData } from 'src/layouts/config-nav-sofa16';
import { sofa17NavData } from 'src/layouts/config-nav-sofa17';
import { sofa18NavData } from 'src/layouts/config-nav-sofa18';
import { sofa19NavData } from 'src/layouts/config-nav-sofa19';

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
const Sofa3Page = lazy(() => import('src/pages/sofa3'));
const Sofa4Page = lazy(() => import('src/pages/sofa4'));
const Sofa5Page = lazy(() => import('src/pages/sofa5'));
const Sofa6Page = lazy(() => import('src/pages/sofa6'));
const Sofa7Page = lazy(() => import('src/pages/sofa7'));
const Sofa8Page = lazy(() => import('src/pages/sofa8'));
const Sofa9Page = lazy(() => import('src/pages/sofa9'));
const Sofa10Page = lazy(() => import('src/pages/sofa10'));
const Sofa11Page = lazy(() => import('src/pages/sofa11'));
const Sofa12Page = lazy(() => import('src/pages/sofa12'));
const Sofa13Page = lazy(() => import('src/pages/sofa13'));
const Sofa14Page = lazy(() => import('src/pages/sofa14'));
const Sofa15Page = lazy(() => import('src/pages/sofa15'));
const Sofa16Page = lazy(() => import('src/pages/sofa16'));
const Sofa17Page = lazy(() => import('src/pages/sofa17'));
const Sofa18Page = lazy(() => import('src/pages/sofa18'));
const Sofa19Page = lazy(() => import('src/pages/sofa19'));

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

    {
      path: '/sofa6',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6NavData }}>
            <Sofa6Page />
          </MainLayout>
        </Suspense>
      ),
    },

    {
      path: '/sofa7',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7NavData }}>
            <Sofa7Page />
          </MainLayout>
        </Suspense>
      ),
    },

    {
      path: '/sofa8',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8NavData }}>
            <Sofa8Page />
          </MainLayout>
        </Suspense>
      ),
    },

    {
      path: '/sofa9',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9NavData }}>
            <Sofa9Page />
          </MainLayout>
        </Suspense>
      ),
    },

    {
      path: '/sofa10',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10NavData }}>
            <Sofa10Page />
          </MainLayout>
        </Suspense>
      ),
    },

    {
      path: '/sofa11',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11NavData }}>
            <Sofa11Page />
          </MainLayout>
        </Suspense>
      ),
    },


    {
      path: '/sofa12',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12NavData }}>
            <Sofa12Page />
          </MainLayout>
        </Suspense>
      ),
    },

    {
      path: '/sofa13',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13NavData }}>
            <Sofa13Page />
          </MainLayout>
        </Suspense>
      ),
    },

    {
      path: '/sofa14',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14NavData }}>
            <Sofa14Page />
          </MainLayout>
        </Suspense>
      ),
    },

    {
      path: '/sofa15',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15NavData }}>
            <Sofa15Page />
          </MainLayout>
        </Suspense>
      ),
    },

    {
      path: '/sofa16',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16NavData }}>
            <Sofa16Page />
          </MainLayout>
        </Suspense>
      ),
    },

    {
      path: '/sofa17',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa17NavData }}>
            <Sofa17Page />
          </MainLayout>
        </Suspense>
      ),
    },

    {
      path: '/sofa18',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa18NavData }}>
            <Sofa18Page />
          </MainLayout>
        </Suspense>
      ),
    },

    {
      path: '/sofa19',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa19NavData }}>
            <Sofa19Page />
          </MainLayout>
        </Suspense>
      ),
    },

    {
      path: '/sofa3',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3NavData }}>
            <Sofa3Page />
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
