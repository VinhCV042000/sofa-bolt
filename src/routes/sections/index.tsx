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

import { SplashScreen } from 'src/components/loading-screen';

import { authRoutes } from './auth';
import { mainRoutes } from './main';
import { authDemoRoutes } from './auth-demo';
import { dashboardRoutes } from './dashboard';
import { componentsRoutes } from './components';

import { sofa8PagesNavData } from 'src/layouts/config-nav-sofa8-pages';
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

// SOFA8 PAGES
const Sofa8AboutPage = lazy(() => import('src/pages/sofa8-pages/about'));
const Sofa8AboutSubPage = lazy(() => import('src/pages/sofa8-pages/about-sub'));
const Sofa8ProductsPage = lazy(() => import('src/pages/sofa8-pages/products'));
const Sofa8ProductCategoryPage = lazy(() => import('src/pages/sofa8-pages/product-category'));
const Sofa8ProductDetailPage = lazy(() => import('src/pages/sofa8-pages/product-detail'));
const Sofa8CollectionsPage = lazy(() => import('src/pages/sofa8-pages/collections'));
const Sofa8CollectionDetailPage = lazy(() => import('src/pages/sofa8-pages/collection-detail'));
const Sofa8ProjectsPage = lazy(() => import('src/pages/sofa8-pages/projects'));
const Sofa8ProjectDetailPage = lazy(() => import('src/pages/sofa8-pages/project-detail'));
const Sofa8ShowroomsPage = lazy(() => import('src/pages/sofa8-pages/showrooms'));
const Sofa8ShowroomDetailPage = lazy(() => import('src/pages/sofa8-pages/showroom-detail'));
const Sofa8ShowroomVisitPage = lazy(() => import('src/pages/sofa8-pages/showroom-visit'));
const Sofa8ServicesPage = lazy(() => import('src/pages/sofa8-pages/services'));
const Sofa8ServiceDesignPage = lazy(() => import('src/pages/sofa8-pages/service-design'));
const Sofa8ServiceProductionPage = lazy(() => import('src/pages/sofa8-pages/service-production'));
const Sofa8BlogPage = lazy(() => import('src/pages/sofa8-pages/blog'));
const Sofa8BlogCategoryPage = lazy(() => import('src/pages/sofa8-pages/blog-category'));
const Sofa8BlogDetailPage = lazy(() => import('src/pages/sofa8-pages/blog-detail'));
const Sofa8PromotionsPage = lazy(() => import('src/pages/sofa8-pages/promotions'));
const Sofa8PromotionServicePage = lazy(() => import('src/pages/sofa8-pages/promotion-service'));
const Sofa8CareersPage = lazy(() => import('src/pages/sofa8-pages/careers'));
const Sofa8CareerDetailPage = lazy(() => import('src/pages/sofa8-pages/career-detail'));
const Sofa8CareerApplyPage = lazy(() => import('src/pages/sofa8-pages/career-apply'));
const Sofa8CareerTrackingPage = lazy(() => import('src/pages/sofa8-pages/career-tracking'));
const Sofa8ContactPage = lazy(() => import('src/pages/sofa8-pages/contact'));
const Sofa8AccountPage = lazy(() => import('src/pages/sofa8-pages/account'));
const Sofa8AccountSectionPage = lazy(() => import('src/pages/sofa8-pages/account-section'));
const Sofa8B2BPage = lazy(() => import('src/pages/sofa8-pages/b2b'));
const Sofa8B2BRegisterPage = lazy(() => import('src/pages/sofa8-pages/b2b-register'));
const Sofa8B2BQuotePage = lazy(() => import('src/pages/sofa8-pages/b2b-quote'));
const Sofa8B2BOEMPage = lazy(() => import('src/pages/sofa8-pages/b2b-oem'));
const Sofa8B2BPolicyPage = lazy(() => import('src/pages/sofa8-pages/b2b-policy'));
const Sofa8CartPage = lazy(() => import('src/pages/sofa8-pages/cart'));
const Sofa8CheckoutPage = lazy(() => import('src/pages/sofa8-pages/checkout'));
const Sofa8CheckoutSuccessPage = lazy(() => import('src/pages/sofa8-pages/checkout-success'));
const Sofa8OrderTrackingPage = lazy(() => import('src/pages/sofa8-pages/order-tracking'));
const Sofa8PaymentPage = lazy(() => import('src/pages/sofa8-pages/payment'));
const Sofa8SupportPage = lazy(() => import('src/pages/sofa8-pages/support'));
const Sofa8FaqPage = lazy(() => import('src/pages/sofa8-pages/faq'));
const Sofa8PolicyPage = lazy(() => import('src/pages/sofa8-pages/policy'));
const Sofa8MemberPage = lazy(() => import('src/pages/sofa8-pages/member'));
    // SOFA8 PAGES
    { path: '/sofa8/about', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8AboutPage /></MainLayout></Suspense>) },
    { path: '/sofa8/about/:section', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8AboutSubPage /></MainLayout></Suspense>) },
    { path: '/sofa8/products', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8ProductsPage /></MainLayout></Suspense>) },
    { path: '/sofa8/products/category/:slug', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8ProductCategoryPage /></MainLayout></Suspense>) },
    { path: '/sofa8/products/:id', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8ProductDetailPage /></MainLayout></Suspense>) },
    { path: '/sofa8/collections', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8CollectionsPage /></MainLayout></Suspense>) },
    { path: '/sofa8/collections/:slug', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8CollectionDetailPage /></MainLayout></Suspense>) },
    { path: '/sofa8/projects', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8ProjectsPage /></MainLayout></Suspense>) },
    { path: '/sofa8/projects/:id', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8ProjectDetailPage /></MainLayout></Suspense>) },
    { path: '/sofa8/showrooms', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8ShowroomsPage /></MainLayout></Suspense>) },
    { path: '/sofa8/showrooms/:id', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8ShowroomDetailPage /></MainLayout></Suspense>) },
    { path: '/sofa8/showrooms/visit', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8ShowroomVisitPage /></MainLayout></Suspense>) },
    { path: '/sofa8/showrooms/consult', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8ShowroomVisitPage /></MainLayout></Suspense>) },
    { path: '/sofa8/services', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8ServicesPage /></MainLayout></Suspense>) },
    { path: '/sofa8/services/design', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8ServiceDesignPage /></MainLayout></Suspense>) },
    { path: '/sofa8/services/design/:sub', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8ServiceDesignPage /></MainLayout></Suspense>) },
    { path: '/sofa8/services/production', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8ServiceProductionPage /></MainLayout></Suspense>) },
    { path: '/sofa8/services/production/:sub', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8ServiceProductionPage /></MainLayout></Suspense>) },
    { path: '/sofa8/blog', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8BlogPage /></MainLayout></Suspense>) },
    { path: '/sofa8/blog/category/:slug', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8BlogCategoryPage /></MainLayout></Suspense>) },
    { path: '/sofa8/blog/:id', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8BlogDetailPage /></MainLayout></Suspense>) },
    { path: '/sofa8/promotions', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8PromotionsPage /></MainLayout></Suspense>) },
    { path: '/sofa8/promotions/:service', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8PromotionServicePage /></MainLayout></Suspense>) },
    { path: '/sofa8/careers', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8CareersPage /></MainLayout></Suspense>) },
    { path: '/sofa8/careers/:id', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8CareerDetailPage /></MainLayout></Suspense>) },
    { path: '/sofa8/careers/apply/:id', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8CareerApplyPage /></MainLayout></Suspense>) },
    { path: '/sofa8/careers/tracking', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8CareerTrackingPage /></MainLayout></Suspense>) },
    { path: '/sofa8/contact', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8ContactPage /></MainLayout></Suspense>) },
    { path: '/sofa8/account', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8AccountPage /></MainLayout></Suspense>) },
    { path: '/sofa8/account/:section', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8AccountSectionPage /></MainLayout></Suspense>) },
    { path: '/sofa8/b2b', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8B2BPage /></MainLayout></Suspense>) },
    { path: '/sofa8/b2b/register', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8B2BRegisterPage /></MainLayout></Suspense>) },
    { path: '/sofa8/b2b/quote', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8B2BQuotePage /></MainLayout></Suspense>) },
    { path: '/sofa8/b2b/oem', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8B2BOEMPage /></MainLayout></Suspense>) },
    { path: '/sofa8/b2b/policy', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8B2BPolicyPage /></MainLayout></Suspense>) },
    { path: '/sofa8/cart', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8CartPage /></MainLayout></Suspense>) },
    { path: '/sofa8/checkout', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8CheckoutPage /></MainLayout></Suspense>) },
    { path: '/sofa8/checkout/success', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8CheckoutSuccessPage /></MainLayout></Suspense>) },
    { path: '/sofa8/orders/tracking', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8OrderTrackingPage /></MainLayout></Suspense>) },
    { path: '/sofa8/payment', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8PaymentPage /></MainLayout></Suspense>) },
    { path: '/sofa8/support', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8SupportPage /></MainLayout></Suspense>) },
    { path: '/sofa8/faq', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8FaqPage /></MainLayout></Suspense>) },
    { path: '/sofa8/policy/:section', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8PolicyPage /></MainLayout></Suspense>) },
    { path: '/sofa8/member', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8MemberPage /></MainLayout></Suspense>) },
    { path: '/sofa8/member/:section', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa8PagesNavData }}><Sofa8MemberPage /></MainLayout></Suspense>) },
