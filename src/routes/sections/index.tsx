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
import { sofa5PagesNavData } from 'src/layouts/config-nav-sofa5-pages';
// ----------------------------------------------------------------------

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

// SOFA5 PAGES
const Sofa5AboutPage = lazy(() => import('src/pages/sofa5-pages/about'));
const Sofa5AboutSubPage = lazy(() => import('src/pages/sofa5-pages/about-sub'));
const Sofa5ProductsPage = lazy(() => import('src/pages/sofa5-pages/products'));
const Sofa5ProductCategoryPage = lazy(() => import('src/pages/sofa5-pages/product-category'));
const Sofa5ProductDetailPage = lazy(() => import('src/pages/sofa5-pages/product-detail'));
const Sofa5CollectionsPage = lazy(() => import('src/pages/sofa5-pages/collections'));
const Sofa5CollectionDetailPage = lazy(() => import('src/pages/sofa5-pages/collection-detail'));
const Sofa5ProjectsPage = lazy(() => import('src/pages/sofa5-pages/projects'));
const Sofa5ProjectDetailPage = lazy(() => import('src/pages/sofa5-pages/project-detail'));
const Sofa5ShowroomsPage = lazy(() => import('src/pages/sofa5-pages/showrooms'));
const Sofa5ShowroomDetailPage = lazy(() => import('src/pages/sofa5-pages/showroom-detail'));
const Sofa5ShowroomVisitPage = lazy(() => import('src/pages/sofa5-pages/showroom-visit'));
const Sofa5ServicesPage = lazy(() => import('src/pages/sofa5-pages/services'));
const Sofa5ServiceDesignPage = lazy(() => import('src/pages/sofa5-pages/service-design'));
const Sofa5ServiceProductionPage = lazy(() => import('src/pages/sofa5-pages/service-production'));
const Sofa5BlogPage = lazy(() => import('src/pages/sofa5-pages/blog'));
const Sofa5BlogCategoryPage = lazy(() => import('src/pages/sofa5-pages/blog-category'));
const Sofa5BlogDetailPage = lazy(() => import('src/pages/sofa5-pages/blog-detail'));
const Sofa5PromotionsPage = lazy(() => import('src/pages/sofa5-pages/promotions'));
const Sofa5PromotionServicePage = lazy(() => import('src/pages/sofa5-pages/promotion-service'));
const Sofa5CareersPage = lazy(() => import('src/pages/sofa5-pages/careers'));
const Sofa5CareerDetailPage = lazy(() => import('src/pages/sofa5-pages/career-detail'));
const Sofa5CareerApplyPage = lazy(() => import('src/pages/sofa5-pages/career-apply'));
const Sofa5CareerTrackingPage = lazy(() => import('src/pages/sofa5-pages/career-tracking'));
const Sofa5ContactPage = lazy(() => import('src/pages/sofa5-pages/contact'));
const Sofa5AccountPage = lazy(() => import('src/pages/sofa5-pages/account'));
const Sofa5SupportPage = lazy(() => import('src/pages/sofa5-pages/support'));
const Sofa5B2BPage = lazy(() => import('src/pages/sofa5-pages/b2b'));
const Sofa5B2BRegisterPage = lazy(() => import('src/pages/sofa5-pages/b2b-register'));
const Sofa5B2BQuotePage = lazy(() => import('src/pages/sofa5-pages/b2b-quote'));
const Sofa5B2BOEMPage = lazy(() => import('src/pages/sofa5-pages/b2b-oem'));
const Sofa5B2BPolicyPage = lazy(() => import('src/pages/sofa5-pages/b2b-policy'));
const Sofa5B2BDistributorsPage = lazy(() => import('src/pages/sofa5-pages/b2b-distributors'));
const Sofa5B2BWholesalersPage = lazy(() => import('src/pages/sofa5-pages/b2b-wholesalers'));
const Sofa5B2BPartnersPage = lazy(() => import('src/pages/sofa5-pages/b2b-partners'));
const Sofa5CartPage = lazy(() => import('src/pages/sofa5-pages/cart'));
const Sofa5CheckoutPage = lazy(() => import('src/pages/sofa5-pages/checkout'));
const Sofa5CheckoutSuccessPage = lazy(() => import('src/pages/sofa5-pages/checkout-success'));
const Sofa5OrderTrackingPage = lazy(() => import('src/pages/sofa5-pages/order-tracking'));
const Sofa5PaymentPage = lazy(() => import('src/pages/sofa5-pages/payment'));
const Sofa5ShopPage = lazy(() => import('src/pages/sofa5-pages/shop'));
const Sofa5ShopSearchPage = lazy(() => import('src/pages/sofa5-pages/shop-search'));
const Sofa5ShopComparePage = lazy(() => import('src/pages/sofa5-pages/shop-compare'));
const Sofa5ShopWishlistPage = lazy(() => import('src/pages/sofa5-pages/shop-wishlist'));
const Sofa5SupportFaqPage = lazy(() => import('src/pages/sofa5-pages/support-faq'));
const Sofa5SupportHelpCenterPage = lazy(() => import('src/pages/sofa5-pages/support-help-center'));
const Sofa5SupportLiveChatPage = lazy(() => import('src/pages/sofa5-pages/support-live-chat'));
const Sofa5SupportTicketPage = lazy(() => import('src/pages/sofa5-pages/support-ticket'));
const Sofa5SupportBuyingGuidePage = lazy(() => import('src/pages/sofa5-pages/support-buying-guide'));
const Sofa5SupportPaymentGuidePage = lazy(() => import('src/pages/sofa5-pages/support-payment-guide'));
const Sofa5SupportShippingPolicyPage = lazy(() => import('src/pages/sofa5-pages/support-shipping-policy'));
const Sofa5SupportWarrantyPolicyPage = lazy(() => import('src/pages/sofa5-pages/support-warranty-policy'));
const Sofa5SupportReturnsPolicyPage = lazy(() => import('src/pages/sofa5-pages/support-returns-policy'));
const Sofa5AccountRegisterPage = lazy(() => import('src/pages/sofa5-pages/account-register'));
const Sofa5AccountLoginPage = lazy(() => import('src/pages/sofa5-pages/account-login'));
const Sofa5AccountForgotPage = lazy(() => import('src/pages/sofa5-pages/account-forgot'));
const Sofa5AccountProfilePage = lazy(() => import('src/pages/sofa5-pages/account-profile'));
const Sofa5AccountAddressesPage = lazy(() => import('src/pages/sofa5-pages/account-addresses'));
const Sofa5AccountOrdersPage = lazy(() => import('src/pages/sofa5-pages/account-orders'));
const Sofa5AccountWishlistPage = lazy(() => import('src/pages/sofa5-pages/account-wishlist'));
const Sofa5AccountTransactionsPage = lazy(() => import('src/pages/sofa5-pages/account-transactions'));
const Sofa5AccountWarrantyPage = lazy(() => import('src/pages/sofa5-pages/account-warranty'));
const Sofa5MemberCustomerDashboardPage = lazy(() => import('src/pages/sofa5-pages/member-customer-dashboard'));
const Sofa5MemberCustomerProfilePage = lazy(() => import('src/pages/sofa5-pages/member-customer-profile'));
const Sofa5MemberCustomerOrdersPage = lazy(() => import('src/pages/sofa5-pages/member-customer-orders'));
const Sofa5MemberCustomerWarrantyPage = lazy(() => import('src/pages/sofa5-pages/member-customer-warranty'));
const Sofa5MemberCustomerLoyaltyPage = lazy(() => import('src/pages/sofa5-pages/member-customer-loyalty'));
const Sofa5MemberCustomerVouchersPage = lazy(() => import('src/pages/sofa5-pages/member-customer-vouchers'));
const Sofa5MemberCustomerComplaintsPage = lazy(() => import('src/pages/sofa5-pages/member-customer-complaints'));
const Sofa5MemberDealerDashboardPage = lazy(() => import('src/pages/sofa5-pages/member-dealer-dashboard'));
const Sofa5MemberDealerPricingPage = lazy(() => import('src/pages/sofa5-pages/member-dealer-pricing'));
const Sofa5MemberDealerQuotesPage = lazy(() => import('src/pages/sofa5-pages/member-dealer-quotes'));
const Sofa5MemberDealerOrdersPage = lazy(() => import('src/pages/sofa5-pages/member-dealer-orders'));
const Sofa5MemberDealerDebtPage = lazy(() => import('src/pages/sofa5-pages/member-dealer-debt'));
const Sofa5MemberDealerDocumentsPage = lazy(() => import('src/pages/sofa5-pages/member-dealer-documents'));

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

    // SOFA8 PAGES
    ...sofa8PagesRoutes,

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

const sofa8PagesRoutes = [
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
];
