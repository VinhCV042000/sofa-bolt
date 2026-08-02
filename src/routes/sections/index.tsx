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
import { sofa20NavData } from 'src/layouts/config-nav-sofa20';
import { sofaPagesNavData } from 'src/layouts/config-nav-sofa-pages';

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
const Sofa20Page = lazy(() => import('src/pages/sofa20'));

const SofaAboutPage = lazy(() => import('src/pages/sofa-pages/about'));
const SofaServicesPage = lazy(() => import('src/pages/sofa-pages/services'));
const SofaServiceDetailPage = lazy(() => import('src/pages/sofa-pages/service-detail'));
const SofaTrainingPage = lazy(() => import('src/pages/sofa-pages/training'));
const SofaBlogPage = lazy(() => import('src/pages/sofa-pages/blog'));
const SofaBlogDetailPage = lazy(() => import('src/pages/sofa-pages/blog-detail'));
const SofaCareersPage = lazy(() => import('src/pages/sofa-pages/careers'));
const SofaBookingPage = lazy(() => import('src/pages/sofa-pages/booking'));
const SofaContactPage = lazy(() => import('src/pages/sofa-pages/contact'));
const SofaOffersPage = lazy(() => import('src/pages/sofa-pages/offers'));
const SofaFeedbackPage = lazy(() => import('src/pages/sofa-pages/feedback'));
const SofaPromotionsPage = lazy(() => import('src/pages/sofa-pages/promotions'));
const SofaBranchesPage = lazy(() => import('src/pages/sofa-pages/branches'));
const SofaAccountPage = lazy(() => import('src/pages/sofa-pages/account'));
const SofaPartnersPage = lazy(() => import('src/pages/sofa-pages/partners'));
const SofaPackagesPage = lazy(() => import('src/pages/sofa-pages/packages'));
const SofaBeforeAfterPage = lazy(() => import('src/pages/sofa-pages/before-after'));
const SofaGalleryPage = lazy(() => import('src/pages/sofa-pages/gallery'));
const SofaFaqPage = lazy(() => import('src/pages/sofa-pages/faq'));
const SofaPolicyPage = lazy(() => import('src/pages/sofa-pages/policy'));

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
          <MainLayout data={{ nav: sofaPagesNavData }}>
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
      path: '/sofa20',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa20NavData }}>
            <Sofa20Page />
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

    // Sofa Pages
    {
      path: '/about',
      element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofaPagesNavData }}><SofaAboutPage /></MainLayout></Suspense>),
    },
    {
      path: '/services',
      element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofaPagesNavData }}><SofaServicesPage /></MainLayout></Suspense>),
    },
    {
      path: '/services/:id',
      element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofaPagesNavData }}><SofaServiceDetailPage /></MainLayout></Suspense>),
    },
    {
      path: '/training',
      element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofaPagesNavData }}><SofaTrainingPage /></MainLayout></Suspense>),
    },
    {
      path: '/blog',
      element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofaPagesNavData }}><SofaBlogPage /></MainLayout></Suspense>),
    },
    {
      path: '/blog/:id',
      element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofaPagesNavData }}><SofaBlogDetailPage /></MainLayout></Suspense>),
    },
    {
      path: '/careers',
      element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofaPagesNavData }}><SofaCareersPage /></MainLayout></Suspense>),
    },
    {
      path: '/booking',
      element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofaPagesNavData }}><SofaBookingPage /></MainLayout></Suspense>),
    },
    {
      path: '/sofa-contact',
      element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofaPagesNavData }}><SofaContactPage /></MainLayout></Suspense>),
    },
    {
      path: '/offers',
      element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofaPagesNavData }}><SofaOffersPage /></MainLayout></Suspense>),
    },
    {
      path: '/feedback',
      element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofaPagesNavData }}><SofaFeedbackPage /></MainLayout></Suspense>),
    },
    {
      path: '/promotions',
      element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofaPagesNavData }}><SofaPromotionsPage /></MainLayout></Suspense>),
    },
    {
      path: '/branches',
      element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofaPagesNavData }}><SofaBranchesPage /></MainLayout></Suspense>),
    },
    {
      path: '/account',
      element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofaPagesNavData }}><SofaAccountPage /></MainLayout></Suspense>),
    },
    {
      path: '/partners',
      element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofaPagesNavData }}><SofaPartnersPage /></MainLayout></Suspense>),
    },
    {
      path: '/packages',
      element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofaPagesNavData }}><SofaPackagesPage /></MainLayout></Suspense>),
    },
    {
      path: '/before-after',
      element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofaPagesNavData }}><SofaBeforeAfterPage /></MainLayout></Suspense>),
    },
    {
      path: '/gallery',
      element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofaPagesNavData }}><SofaGalleryPage /></MainLayout></Suspense>),
    },
    {
      path: '/faq',
      element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofaPagesNavData }}><SofaFaqPage /></MainLayout></Suspense>),
    },
    {
      path: '/policy',
      element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofaPagesNavData }}><SofaPolicyPage /></MainLayout></Suspense>),
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
