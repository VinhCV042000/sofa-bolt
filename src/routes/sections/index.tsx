import { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { MainLayout } from 'src/layouts/main';
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
import { sofa2PagesNavData } from 'src/layouts/config-nav-sofa2-pages';
import { sofa1PagesNavData } from 'src/layouts/config-nav-sofa1-pages';
import { sofa6PagesNavData } from 'src/layouts/config-nav-sofa6-pages';
import { sofa3PagesNavData } from 'src/layouts/config-nav-sofa3-pages';
import { sofa4PagesNavData } from 'src/layouts/config-nav-sofa4-pages';

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

// Sofa2 Pages
const Sofa2AboutPage = lazy(() => import('src/pages/sofa2-pages/about'));
const Sofa2AboutSubPage = lazy(() => import('src/pages/sofa2-pages/about-sub'));
const Sofa2ProductsPage = lazy(() => import('src/pages/sofa2-pages/products'));
const Sofa2ProductCategoryPage = lazy(() => import('src/pages/sofa2-pages/product-category'));
const Sofa2ProductDetailPage = lazy(() => import('src/pages/sofa2-pages/product-detail'));
const Sofa2CollectionsPage = lazy(() => import('src/pages/sofa2-pages/collections'));
const Sofa2CollectionDetailPage = lazy(() => import('src/pages/sofa2-pages/collection-detail'));
const Sofa2ProjectsPage = lazy(() => import('src/pages/sofa2-pages/projects'));
const Sofa2ProjectDetailPage = lazy(() => import('src/pages/sofa2-pages/project-detail'));
const Sofa2ShowroomsPage = lazy(() => import('src/pages/sofa2-pages/showrooms'));
const Sofa2ShowroomDetailPage = lazy(() => import('src/pages/sofa2-pages/showroom-detail'));
const Sofa2ShowroomVisitPage = lazy(() => import('src/pages/sofa2-pages/showroom-visit'));
const Sofa2ServicesPage = lazy(() => import('src/pages/sofa2-pages/services'));
const Sofa2ServiceDesignPage = lazy(() => import('src/pages/sofa2-pages/service-design'));
const Sofa2ServiceProductionPage = lazy(() => import('src/pages/sofa2-pages/service-production'));
const Sofa2BlogPage = lazy(() => import('src/pages/sofa2-pages/blog'));
const Sofa2BlogCategoryPage = lazy(() => import('src/pages/sofa2-pages/blog-category'));
const Sofa2BlogDetailPage = lazy(() => import('src/pages/sofa2-pages/blog-detail'));
const Sofa2PromotionsPage = lazy(() => import('src/pages/sofa2-pages/promotions'));
const Sofa2PromotionServicePage = lazy(() => import('src/pages/sofa2-pages/promotion-service'));
const Sofa2CareersPage = lazy(() => import('src/pages/sofa2-pages/careers'));
const Sofa2CareerDetailPage = lazy(() => import('src/pages/sofa2-pages/career-detail'));
const Sofa2CareerApplyPage = lazy(() => import('src/pages/sofa2-pages/career-apply'));
const Sofa2CareerTrackingPage = lazy(() => import('src/pages/sofa2-pages/career-tracking'));
const Sofa2ContactPage = lazy(() => import('src/pages/sofa2-pages/contact'));
const Sofa2AccountPage = lazy(() => import('src/pages/sofa2-pages/account'));
const Sofa2SupportPage = lazy(() => import('src/pages/sofa2-pages/support'));
const Sofa2B2BPage = lazy(() => import('src/pages/sofa2-pages/b2b'));
const Sofa2B2BRegisterPage = lazy(() => import('src/pages/sofa2-pages/b2b-register'));
const Sofa2B2BQuotePage = lazy(() => import('src/pages/sofa2-pages/b2b-quote'));
const Sofa2B2BOEMPage = lazy(() => import('src/pages/sofa2-pages/b2b-oem'));
const Sofa2B2BPolicyPage = lazy(() => import('src/pages/sofa2-pages/b2b-policy'));
const Sofa2CartPage = lazy(() => import('src/pages/sofa2-pages/cart'));
const Sofa2CheckoutPage = lazy(() => import('src/pages/sofa2-pages/checkout'));
const Sofa2CheckoutSuccessPage = lazy(() => import('src/pages/sofa2-pages/checkout-success'));
const Sofa2OrderTrackingPage = lazy(() => import('src/pages/sofa2-pages/order-tracking'));
const Sofa2PaymentPage = lazy(() => import('src/pages/sofa2-pages/payment'));

// Sofa1 Pages
const Sofa1AboutPage = lazy(() => import('src/pages/sofa1-pages/about'));
const Sofa1AboutSubPage = lazy(() => import('src/pages/sofa1-pages/about-sub'));
const Sofa1ProductsPage = lazy(() => import('src/pages/sofa1-pages/products'));
const Sofa1ProductCategoryPage = lazy(() => import('src/pages/sofa1-pages/product-category'));
const Sofa1ProductDetailPage = lazy(() => import('src/pages/sofa1-pages/product-detail'));
const Sofa1CollectionsPage = lazy(() => import('src/pages/sofa1-pages/collections'));
const Sofa1CollectionDetailPage = lazy(() => import('src/pages/sofa1-pages/collection-detail'));
const Sofa1ProjectsPage = lazy(() => import('src/pages/sofa1-pages/projects'));
const Sofa1ProjectDetailPage = lazy(() => import('src/pages/sofa1-pages/project-detail'));
const Sofa1ShowroomsPage = lazy(() => import('src/pages/sofa1-pages/showrooms'));
const Sofa1ShowroomDetailPage = lazy(() => import('src/pages/sofa1-pages/showroom-detail'));
const Sofa1ShowroomVisitPage = lazy(() => import('src/pages/sofa1-pages/showroom-visit'));
const Sofa1ServicesPage = lazy(() => import('src/pages/sofa1-pages/services'));
const Sofa1ServiceDesignPage = lazy(() => import('src/pages/sofa1-pages/service-design'));
const Sofa1ServiceProductionPage = lazy(() => import('src/pages/sofa1-pages/service-production'));
const Sofa1BlogPage = lazy(() => import('src/pages/sofa1-pages/blog'));
const Sofa1BlogCategoryPage = lazy(() => import('src/pages/sofa1-pages/blog-category'));
const Sofa1BlogDetailPage = lazy(() => import('src/pages/sofa1-pages/blog-detail'));
const Sofa1PromotionsPage = lazy(() => import('src/pages/sofa1-pages/promotions'));
const Sofa1PromotionServicePage = lazy(() => import('src/pages/sofa1-pages/promotion-service'));
const Sofa1CareersPage = lazy(() => import('src/pages/sofa1-pages/careers'));
const Sofa1CareerDetailPage = lazy(() => import('src/pages/sofa1-pages/career-detail'));
const Sofa1CareerApplyPage = lazy(() => import('src/pages/sofa1-pages/career-apply'));
const Sofa1CareerTrackingPage = lazy(() => import('src/pages/sofa1-pages/career-tracking'));
const Sofa1ContactPage = lazy(() => import('src/pages/sofa1-pages/contact'));
const Sofa1AccountPage = lazy(() => import('src/pages/sofa1-pages/account'));
const Sofa1SupportPage = lazy(() => import('src/pages/sofa1-pages/support'));
const Sofa1B2BPage = lazy(() => import('src/pages/sofa1-pages/b2b'));
const Sofa1B2BRegisterPage = lazy(() => import('src/pages/sofa1-pages/b2b-register'));
const Sofa1B2BQuotePage = lazy(() => import('src/pages/sofa1-pages/b2b-quote'));
const Sofa1B2BOEMPage = lazy(() => import('src/pages/sofa1-pages/b2b-oem'));
const Sofa1B2BPolicyPage = lazy(() => import('src/pages/sofa1-pages/b2b-policy'));
const Sofa1CartPage = lazy(() => import('src/pages/sofa1-pages/cart'));
const Sofa1CheckoutPage = lazy(() => import('src/pages/sofa1-pages/checkout'));
const Sofa1CheckoutSuccessPage = lazy(() => import('src/pages/sofa1-pages/checkout-success'));
const Sofa1OrderTrackingPage = lazy(() => import('src/pages/sofa1-pages/order-tracking'));
const Sofa1PaymentPage = lazy(() => import('src/pages/sofa1-pages/payment'));

// Sofa6 Pages
const Sofa6AboutPage = lazy(() => import('src/pages/sofa6-pages/about'));
const Sofa6AboutSubPage = lazy(() => import('src/pages/sofa6-pages/about-sub'));
const Sofa6ProductsPage = lazy(() => import('src/pages/sofa6-pages/products'));
const Sofa6ProductCategoryPage = lazy(() => import('src/pages/sofa6-pages/product-category'));
const Sofa6ProductDetailPage = lazy(() => import('src/pages/sofa6-pages/product-detail'));
const Sofa6CollectionsPage = lazy(() => import('src/pages/sofa6-pages/collections'));
const Sofa6CollectionDetailPage = lazy(() => import('src/pages/sofa6-pages/collection-detail'));
const Sofa6ProjectsPage = lazy(() => import('src/pages/sofa6-pages/projects'));
const Sofa6ProjectDetailPage = lazy(() => import('src/pages/sofa6-pages/project-detail'));
const Sofa6ShowroomsPage = lazy(() => import('src/pages/sofa6-pages/showrooms'));
const Sofa6ShowroomDetailPage = lazy(() => import('src/pages/sofa6-pages/showroom-detail'));
const Sofa6ShowroomVisitPage = lazy(() => import('src/pages/sofa6-pages/showroom-visit'));
const Sofa6ServicesPage = lazy(() => import('src/pages/sofa6-pages/services'));
const Sofa6ServiceDesignPage = lazy(() => import('src/pages/sofa6-pages/service-design'));
const Sofa6ServiceProductionPage = lazy(() => import('src/pages/sofa6-pages/service-production'));
const Sofa6BlogPage = lazy(() => import('src/pages/sofa6-pages/blog'));
const Sofa6BlogCategoryPage = lazy(() => import('src/pages/sofa6-pages/blog-category'));
const Sofa6BlogDetailPage = lazy(() => import('src/pages/sofa6-pages/blog-detail'));
const Sofa6PromotionsPage = lazy(() => import('src/pages/sofa6-pages/promotions'));
const Sofa6PromotionServicePage = lazy(() => import('src/pages/sofa6-pages/promotion-service'));
const Sofa6CareersPage = lazy(() => import('src/pages/sofa6-pages/careers'));
const Sofa6CareerDetailPage = lazy(() => import('src/pages/sofa6-pages/career-detail'));
const Sofa6CareerApplyPage = lazy(() => import('src/pages/sofa6-pages/career-apply'));
const Sofa6CareerTrackingPage = lazy(() => import('src/pages/sofa6-pages/career-tracking'));
const Sofa6ContactPage = lazy(() => import('src/pages/sofa6-pages/contact'));
const Sofa6AccountPage = lazy(() => import('src/pages/sofa6-pages/account'));
const Sofa6AccountSectionPage = lazy(() => import('src/pages/sofa6-pages/account-section'));
const Sofa6SupportPage = lazy(() => import('src/pages/sofa6-pages/support'));
const Sofa6FaqPage = lazy(() => import('src/pages/sofa6-pages/faq'));
const Sofa6PolicyPage = lazy(() => import('src/pages/sofa6-pages/policy'));
const Sofa6B2BPage = lazy(() => import('src/pages/sofa6-pages/b2b'));
const Sofa6B2BRegisterPage = lazy(() => import('src/pages/sofa6-pages/b2b-register'));
const Sofa6B2BQuotePage = lazy(() => import('src/pages/sofa6-pages/b2b-quote'));
const Sofa6B2BOEMPage = lazy(() => import('src/pages/sofa6-pages/b2b-oem'));
const Sofa6B2BPolicyPage = lazy(() => import('src/pages/sofa6-pages/b2b-policy'));
const Sofa6CartPage = lazy(() => import('src/pages/sofa6-pages/cart'));
const Sofa6CheckoutPage = lazy(() => import('src/pages/sofa6-pages/checkout'));
const Sofa6CheckoutSuccessPage = lazy(() => import('src/pages/sofa6-pages/checkout-success'));
const Sofa6OrderTrackingPage = lazy(() => import('src/pages/sofa6-pages/order-tracking'));
const Sofa6PaymentPage = lazy(() => import('src/pages/sofa6-pages/payment'));
const Sofa6MemberPage = lazy(() => import('src/pages/sofa6-pages/member'));
const Sofa1FaqPage = lazy(() => import('src/pages/sofa1-pages/faq'));
const Sofa1PolicyPage = lazy(() => import('src/pages/sofa1-pages/policy'));

// Sofa3 Pages
const Sofa3AboutPage = lazy(() => import('src/pages/sofa3-pages/about'));
const Sofa3AboutSubPage = lazy(() => import('src/pages/sofa3-pages/about-sub'));
const Sofa3ProductsPage = lazy(() => import('src/pages/sofa3-pages/products'));
const Sofa3ProductCategoryPage = lazy(() => import('src/pages/sofa3-pages/product-category'));
const Sofa3ProductDetailPage = lazy(() => import('src/pages/sofa3-pages/product-detail'));
const Sofa3CollectionsPage = lazy(() => import('src/pages/sofa3-pages/collections'));
const Sofa3CollectionDetailPage = lazy(() => import('src/pages/sofa3-pages/collection-detail'));
const Sofa3ProjectsPage = lazy(() => import('src/pages/sofa3-pages/projects'));
const Sofa3ProjectDetailPage = lazy(() => import('src/pages/sofa3-pages/project-detail'));
const Sofa3ShowroomsPage = lazy(() => import('src/pages/sofa3-pages/showrooms'));
const Sofa3ShowroomDetailPage = lazy(() => import('src/pages/sofa3-pages/showroom-detail'));
const Sofa3ShowroomVisitPage = lazy(() => import('src/pages/sofa3-pages/showroom-visit'));
const Sofa3ServicesPage = lazy(() => import('src/pages/sofa3-pages/services'));
const Sofa3ServiceDesignPage = lazy(() => import('src/pages/sofa3-pages/service-design'));
const Sofa3ServiceProductionPage = lazy(() => import('src/pages/sofa3-pages/service-production'));
const Sofa3BlogPage = lazy(() => import('src/pages/sofa3-pages/blog'));
const Sofa3BlogCategoryPage = lazy(() => import('src/pages/sofa3-pages/blog-category'));
const Sofa3BlogDetailPage = lazy(() => import('src/pages/sofa3-pages/blog-detail'));
const Sofa3PromotionsPage = lazy(() => import('src/pages/sofa3-pages/promotions'));
const Sofa3PromotionServicePage = lazy(() => import('src/pages/sofa3-pages/promotion-service'));
const Sofa3CareersPage = lazy(() => import('src/pages/sofa3-pages/careers'));
const Sofa3CareerDetailPage = lazy(() => import('src/pages/sofa3-pages/career-detail'));
const Sofa3CareerApplyPage = lazy(() => import('src/pages/sofa3-pages/career-apply'));
const Sofa3CareerTrackingPage = lazy(() => import('src/pages/sofa3-pages/career-tracking'));
const Sofa3ContactPage = lazy(() => import('src/pages/sofa3-pages/contact'));
const Sofa3AccountPage = lazy(() => import('src/pages/sofa3-pages/account'));
const Sofa3SupportPage = lazy(() => import('src/pages/sofa3-pages/support'));
const Sofa3B2BPage = lazy(() => import('src/pages/sofa3-pages/b2b'));
const Sofa3B2BRegisterPage = lazy(() => import('src/pages/sofa3-pages/b2b-register'));
const Sofa3B2BQuotePage = lazy(() => import('src/pages/sofa3-pages/b2b-quote'));
const Sofa3B2BOEMPage = lazy(() => import('src/pages/sofa3-pages/b2b-oem'));
const Sofa3B2BPolicyPage = lazy(() => import('src/pages/sofa3-pages/b2b-policy'));
const Sofa3CartPage = lazy(() => import('src/pages/sofa3-pages/cart'));
const Sofa3CheckoutPage = lazy(() => import('src/pages/sofa3-pages/checkout'));
const Sofa3CheckoutSuccessPage = lazy(() => import('src/pages/sofa3-pages/checkout-success'));
const Sofa3OrderTrackingPage = lazy(() => import('src/pages/sofa3-pages/order-tracking'));
const Sofa3PaymentPage = lazy(() => import('src/pages/sofa3-pages/payment'));

// Sofa4 Pages
const Sofa4AboutPage = lazy(() => import('src/pages/sofa4-pages/about'));
const Sofa4AboutSubPage = lazy(() => import('src/pages/sofa4-pages/about-sub'));
const Sofa4ProductsPage = lazy(() => import('src/pages/sofa4-pages/products'));
const Sofa4ProductCategoryPage = lazy(() => import('src/pages/sofa4-pages/product-category'));
const Sofa4ProductDetailPage = lazy(() => import('src/pages/sofa4-pages/product-detail'));
const Sofa4CollectionsPage = lazy(() => import('src/pages/sofa4-pages/collections'));
const Sofa4CollectionDetailPage = lazy(() => import('src/pages/sofa4-pages/collection-detail'));
const Sofa4ProjectsPage = lazy(() => import('src/pages/sofa4-pages/projects'));
const Sofa4ProjectDetailPage = lazy(() => import('src/pages/sofa4-pages/project-detail'));
const Sofa4ShowroomsPage = lazy(() => import('src/pages/sofa4-pages/showrooms'));
const Sofa4ShowroomDetailPage = lazy(() => import('src/pages/sofa4-pages/showroom-detail'));
const Sofa4ShowroomVisitPage = lazy(() => import('src/pages/sofa4-pages/showroom-visit'));
const Sofa4ServicesPage = lazy(() => import('src/pages/sofa4-pages/services'));
const Sofa4ServiceDesignPage = lazy(() => import('src/pages/sofa4-pages/service-design'));
const Sofa4ServiceProductionPage = lazy(() => import('src/pages/sofa4-pages/service-production'));
const Sofa4BlogPage = lazy(() => import('src/pages/sofa4-pages/blog'));
const Sofa4BlogCategoryPage = lazy(() => import('src/pages/sofa4-pages/blog-category'));
const Sofa4BlogDetailPage = lazy(() => import('src/pages/sofa4-pages/blog-detail'));
const Sofa4PromotionsPage = lazy(() => import('src/pages/sofa4-pages/promotions'));
const Sofa4PromotionServicePage = lazy(() => import('src/pages/sofa4-pages/promotion-service'));
const Sofa4CareersPage = lazy(() => import('src/pages/sofa4-pages/careers'));
const Sofa4CareerDetailPage = lazy(() => import('src/pages/sofa4-pages/career-detail'));
const Sofa4CareerApplyPage = lazy(() => import('src/pages/sofa4-pages/career-apply'));
const Sofa4CareerTrackingPage = lazy(() => import('src/pages/sofa4-pages/career-tracking'));
const Sofa4ContactPage = lazy(() => import('src/pages/sofa4-pages/contact'));
const Sofa4AccountPage = lazy(() => import('src/pages/sofa4-pages/account'));
const Sofa4SupportPage = lazy(() => import('src/pages/sofa4-pages/support'));
const Sofa4B2BPage = lazy(() => import('src/pages/sofa4-pages/b2b'));
const Sofa4B2BRegisterPage = lazy(() => import('src/pages/sofa4-pages/b2b-register'));
const Sofa4B2BQuotePage = lazy(() => import('src/pages/sofa4-pages/b2b-quote'));
const Sofa4B2BOEMPage = lazy(() => import('src/pages/sofa4-pages/b2b-oem'));
const Sofa4B2BPolicyPage = lazy(() => import('src/pages/sofa4-pages/b2b-policy'));
const Sofa4CartPage = lazy(() => import('src/pages/sofa4-pages/cart'));
const Sofa4CheckoutPage = lazy(() => import('src/pages/sofa4-pages/checkout'));
const Sofa4CheckoutSuccessPage = lazy(() => import('src/pages/sofa4-pages/checkout-success'));
const Sofa4OrderTrackingPage = lazy(() => import('src/pages/sofa4-pages/order-tracking'));
const Sofa4PaymentPage = lazy(() => import('src/pages/sofa4-pages/payment'));

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
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofaPagesNavData }}>
            <SofaAboutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/services',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofaPagesNavData }}>
            <SofaServicesPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/services/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofaPagesNavData }}>
            <SofaServiceDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/training',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofaPagesNavData }}>
            <SofaTrainingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/blog',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofaPagesNavData }}>
            <SofaBlogPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/blog/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofaPagesNavData }}>
            <SofaBlogDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/careers',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofaPagesNavData }}>
            <SofaCareersPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/booking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofaPagesNavData }}>
            <SofaBookingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa-contact',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofaPagesNavData }}>
            <SofaContactPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/offers',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofaPagesNavData }}>
            <SofaOffersPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/feedback',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofaPagesNavData }}>
            <SofaFeedbackPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/promotions',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofaPagesNavData }}>
            <SofaPromotionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/branches',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofaPagesNavData }}>
            <SofaBranchesPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/account',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofaPagesNavData }}>
            <SofaAccountPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/partners',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofaPagesNavData }}>
            <SofaPartnersPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/packages',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofaPagesNavData }}>
            <SofaPackagesPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/before-after',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofaPagesNavData }}>
            <SofaBeforeAfterPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/gallery',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofaPagesNavData }}>
            <SofaGalleryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/faq',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofaPagesNavData }}>
            <SofaFaqPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/policy',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofaPagesNavData }}>
            <SofaPolicyPage />
          </MainLayout>
        </Suspense>
      ),
    },

    // Sofa2 Pages
    {
      path: '/sofa2/about',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2AboutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/about/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2AboutSubPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/products',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2ProductsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/products/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2ProductCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/products/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2ProductDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/collections',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2CollectionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/collections/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2CollectionDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/projects',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2ProjectsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/projects/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2ProjectDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/showrooms',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2ShowroomsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/showrooms/visit',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/showrooms/consult',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/showrooms/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2ShowroomDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/services',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2ServicesPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/services/design',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/services/design/custom',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/services/design/3d',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/services/design/consult',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/services/production',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/services/production/oem',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/services/production/odm',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/services/production/project',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/blog',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2BlogPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/blog/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2BlogCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/blog/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2BlogDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/promotions',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2PromotionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/promotions/:service',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2PromotionServicePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/careers',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2CareersPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/careers/apply',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2CareerApplyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/careers/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2CareerTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/careers/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2CareerDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/contact',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2ContactPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/account',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2AccountPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/support',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2SupportPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/b2b',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2B2BPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/b2b/register',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2B2BRegisterPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/b2b/quote',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2B2BQuotePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/b2b/oem',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2B2BOEMPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/b2b/policy',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2B2BPolicyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/cart',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2CartPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/checkout',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2CheckoutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/checkout/success',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2CheckoutSuccessPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/orders/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2OrderTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa2/payment',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa2PagesNavData }}>
            <Sofa2PaymentPage />
          </MainLayout>
        </Suspense>
      ),
    },

    // Sofa1 Pages
    {
      path: '/sofa1/about',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1AboutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/about/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1AboutSubPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/products',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1ProductsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/products/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1ProductCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/products/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1ProductDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/collections',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1CollectionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/collections/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1CollectionDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/projects',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1ProjectsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/projects/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1ProjectDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/showrooms',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1ShowroomsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/showrooms/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1ShowroomDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/showrooms/visit',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/showrooms/consult',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/services',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1ServicesPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/services/design',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/services/design/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/services/production',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/services/production/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/blog',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1BlogPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/blog/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1BlogCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/blog/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1BlogDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/promotions',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1PromotionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/promotions/:service',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1PromotionServicePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/careers',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1CareersPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/careers/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1CareerDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/careers/apply',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1CareerApplyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/careers/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1CareerTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/contact',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1ContactPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/account',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1AccountPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/support',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1SupportPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/faq',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1FaqPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/policy',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1PolicyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/b2b',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1B2BPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/b2b/register',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1B2BRegisterPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/b2b/quote',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1B2BQuotePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/b2b/oem',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1B2BOEMPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/b2b/policy',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1B2BPolicyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/cart',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1CartPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/checkout',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1CheckoutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/checkout/success',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1CheckoutSuccessPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/orders/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1OrderTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa1/payment',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1PaymentPage />
          </MainLayout>
        </Suspense>
      ),
    },

    // Sofa6 Pages
    { path: '/sofa6/about', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6AboutPage /></MainLayout></Suspense>) },
    { path: '/sofa6/about/:section', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6AboutSubPage /></MainLayout></Suspense>) },
    { path: '/sofa6/products', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6ProductsPage /></MainLayout></Suspense>) },
    { path: '/sofa6/products/category/:slug', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6ProductCategoryPage /></MainLayout></Suspense>) },
    { path: '/sofa6/products/:id', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6ProductDetailPage /></MainLayout></Suspense>) },
    { path: '/sofa6/collections', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6CollectionsPage /></MainLayout></Suspense>) },
    { path: '/sofa6/collections/:slug', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6CollectionDetailPage /></MainLayout></Suspense>) },
    { path: '/sofa6/projects', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6ProjectsPage /></MainLayout></Suspense>) },
    { path: '/sofa6/projects/:id', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6ProjectDetailPage /></MainLayout></Suspense>) },
    { path: '/sofa6/showrooms', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6ShowroomsPage /></MainLayout></Suspense>) },
    { path: '/sofa6/showrooms/visit', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6ShowroomVisitPage /></MainLayout></Suspense>) },
    { path: '/sofa6/showrooms/consult', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6ShowroomVisitPage /></MainLayout></Suspense>) },
    { path: '/sofa6/showrooms/:id', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6ShowroomDetailPage /></MainLayout></Suspense>) },
    { path: '/sofa6/services', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6ServicesPage /></MainLayout></Suspense>) },
    { path: '/sofa6/services/design', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6ServiceDesignPage /></MainLayout></Suspense>) },
    { path: '/sofa6/services/design/:sub', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6ServiceDesignPage /></MainLayout></Suspense>) },
    { path: '/sofa6/services/production', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6ServiceProductionPage /></MainLayout></Suspense>) },
    { path: '/sofa6/services/production/:sub', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6ServiceProductionPage /></MainLayout></Suspense>) },
    { path: '/sofa6/blog', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6BlogPage /></MainLayout></Suspense>) },
    { path: '/sofa6/blog/category/:slug', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6BlogCategoryPage /></MainLayout></Suspense>) },
    { path: '/sofa6/blog/:id', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6BlogDetailPage /></MainLayout></Suspense>) },
    { path: '/sofa6/promotions', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6PromotionsPage /></MainLayout></Suspense>) },
    { path: '/sofa6/promotions/:service', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6PromotionServicePage /></MainLayout></Suspense>) },
    { path: '/sofa6/careers', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6CareersPage /></MainLayout></Suspense>) },
    { path: '/sofa6/careers/apply', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6CareerApplyPage /></MainLayout></Suspense>) },
    { path: '/sofa6/careers/tracking', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6CareerTrackingPage /></MainLayout></Suspense>) },
    { path: '/sofa6/careers/:id', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6CareerDetailPage /></MainLayout></Suspense>) },
    { path: '/sofa6/contact', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6ContactPage /></MainLayout></Suspense>) },
    { path: '/sofa6/account', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6AccountPage /></MainLayout></Suspense>) },
    { path: '/sofa6/account/:section', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6AccountSectionPage /></MainLayout></Suspense>) },
    { path: '/sofa6/support', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6SupportPage /></MainLayout></Suspense>) },
    { path: '/sofa6/faq', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6FaqPage /></MainLayout></Suspense>) },
    { path: '/sofa6/policy', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6PolicyPage /></MainLayout></Suspense>) },
    { path: '/sofa6/policy/:section', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6PolicyPage /></MainLayout></Suspense>) },
    { path: '/sofa6/b2b', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6B2BPage /></MainLayout></Suspense>) },
    { path: '/sofa6/b2b/register', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6B2BRegisterPage /></MainLayout></Suspense>) },
    { path: '/sofa6/b2b/quote', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6B2BQuotePage /></MainLayout></Suspense>) },
    { path: '/sofa6/b2b/oem', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6B2BOEMPage /></MainLayout></Suspense>) },
    { path: '/sofa6/b2b/policy', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6B2BPolicyPage /></MainLayout></Suspense>) },
    { path: '/sofa6/cart', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6CartPage /></MainLayout></Suspense>) },
    { path: '/sofa6/checkout', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6CheckoutPage /></MainLayout></Suspense>) },
    { path: '/sofa6/checkout/success', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6CheckoutSuccessPage /></MainLayout></Suspense>) },
    { path: '/sofa6/orders/tracking', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6OrderTrackingPage /></MainLayout></Suspense>) },
    { path: '/sofa6/payment', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6PaymentPage /></MainLayout></Suspense>) },
    { path: '/sofa6/member', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6MemberPage /></MainLayout></Suspense>) },
    { path: '/sofa6/member/:section', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa6PagesNavData }}><Sofa6MemberPage /></MainLayout></Suspense>) },

    // Sofa3 Pages
    {
      path: '/sofa3/about',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3AboutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/about/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3AboutSubPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/products',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3ProductsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/products/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3ProductCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/products/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3ProductDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/collections',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3CollectionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/collections/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3CollectionDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/projects',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3ProjectsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/projects/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3ProjectDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/showrooms',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3ShowroomsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/showrooms/visit',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/showrooms/consult',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/showrooms/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3ShowroomDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/services',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3ServicesPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/services/design',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/services/design/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/services/production',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/services/production/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/blog',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3BlogPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/blog/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3BlogCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/blog/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3BlogDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/promotions',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3PromotionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/promotions/:service',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3PromotionServicePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/careers',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3CareersPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/careers/apply',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3CareerApplyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/careers/apply/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3CareerApplyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/careers/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3CareerTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/careers/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3CareerDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/contact',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3ContactPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/account',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3AccountPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/support',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3SupportPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/b2b',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3B2BPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/b2b/register',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3B2BRegisterPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/b2b/quote',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3B2BQuotePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/b2b/oem',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3B2BOEMPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/b2b/policy',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3B2BPolicyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/cart',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3CartPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/checkout',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3CheckoutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/checkout/success',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3CheckoutSuccessPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/orders/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3OrderTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa3/payment',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa3PagesNavData }}>
            <Sofa3PaymentPage />
          </MainLayout>
        </Suspense>
      ),
    },

    // Sofa4 Pages
    { path: '/sofa4/about', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4AboutPage /></MainLayout></Suspense>) },
    { path: '/sofa4/about/:section', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4AboutSubPage /></MainLayout></Suspense>) },
    { path: '/sofa4/products', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4ProductsPage /></MainLayout></Suspense>) },
    { path: '/sofa4/products/category/:slug', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4ProductCategoryPage /></MainLayout></Suspense>) },
    { path: '/sofa4/products/:id', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4ProductDetailPage /></MainLayout></Suspense>) },
    { path: '/sofa4/collections', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4CollectionsPage /></MainLayout></Suspense>) },
    { path: '/sofa4/collections/:slug', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4CollectionDetailPage /></MainLayout></Suspense>) },
    { path: '/sofa4/projects', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4ProjectsPage /></MainLayout></Suspense>) },
    { path: '/sofa4/projects/:id', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4ProjectDetailPage /></MainLayout></Suspense>) },
    { path: '/sofa4/showrooms', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4ShowroomsPage /></MainLayout></Suspense>) },
    { path: '/sofa4/showrooms/visit', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4ShowroomVisitPage /></MainLayout></Suspense>) },
    { path: '/sofa4/showrooms/consult', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4ShowroomVisitPage /></MainLayout></Suspense>) },
    { path: '/sofa4/showrooms/:id', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4ShowroomDetailPage /></MainLayout></Suspense>) },
    { path: '/sofa4/services', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4ServicesPage /></MainLayout></Suspense>) },
    { path: '/sofa4/services/design', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4ServiceDesignPage /></MainLayout></Suspense>) },
    { path: '/sofa4/services/design/:sub', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4ServiceDesignPage /></MainLayout></Suspense>) },
    { path: '/sofa4/services/production', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4ServiceProductionPage /></MainLayout></Suspense>) },
    { path: '/sofa4/services/production/:sub', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4ServiceProductionPage /></MainLayout></Suspense>) },
    { path: '/sofa4/blog', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4BlogPage /></MainLayout></Suspense>) },
    { path: '/sofa4/blog/category/:slug', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4BlogCategoryPage /></MainLayout></Suspense>) },
    { path: '/sofa4/blog/:slug', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4BlogDetailPage /></MainLayout></Suspense>) },
    { path: '/sofa4/promotions', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4PromotionsPage /></MainLayout></Suspense>) },
    { path: '/sofa4/promotions/:service', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4PromotionServicePage /></MainLayout></Suspense>) },
    { path: '/sofa4/careers', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4CareersPage /></MainLayout></Suspense>) },
    { path: '/sofa4/careers/apply', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4CareerApplyPage /></MainLayout></Suspense>) },
    { path: '/sofa4/careers/apply/:id', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4CareerApplyPage /></MainLayout></Suspense>) },
    { path: '/sofa4/careers/tracking', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4CareerTrackingPage /></MainLayout></Suspense>) },
    { path: '/sofa4/careers/:id', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4CareerDetailPage /></MainLayout></Suspense>) },
    { path: '/sofa4/contact', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4ContactPage /></MainLayout></Suspense>) },
    { path: '/sofa4/account', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4AccountPage /></MainLayout></Suspense>) },
    { path: '/sofa4/support', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4SupportPage /></MainLayout></Suspense>) },
    { path: '/sofa4/b2b', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4B2BPage /></MainLayout></Suspense>) },
    { path: '/sofa4/b2b/register', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4B2BRegisterPage /></MainLayout></Suspense>) },
    { path: '/sofa4/b2b/quote', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4B2BQuotePage /></MainLayout></Suspense>) },
    { path: '/sofa4/b2b/oem', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4B2BOEMPage /></MainLayout></Suspense>) },
    { path: '/sofa4/b2b/policy', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4B2BPolicyPage /></MainLayout></Suspense>) },
    { path: '/sofa4/cart', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4CartPage /></MainLayout></Suspense>) },
    { path: '/sofa4/checkout', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4CheckoutPage /></MainLayout></Suspense>) },
    { path: '/sofa4/checkout/success', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4CheckoutSuccessPage /></MainLayout></Suspense>) },
    { path: '/sofa4/orders/tracking', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4OrderTrackingPage /></MainLayout></Suspense>) },
    { path: '/sofa4/payment', element: (<Suspense fallback={<SplashScreen />}><MainLayout data={{ nav: sofa4PagesNavData }}><Sofa4PaymentPage /></MainLayout></Suspense>) },

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
