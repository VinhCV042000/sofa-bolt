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
import { sofa8PagesNavData } from 'src/layouts/config-nav-sofa8-pages';
import { sofa1PagesNavData } from 'src/layouts/config-nav-sofa1-pages';
import { sofa2PagesNavData } from 'src/layouts/config-nav-sofa2-pages';
import { sofa3PagesNavData } from 'src/layouts/config-nav-sofa3-pages';
import { sofa4PagesNavData } from 'src/layouts/config-nav-sofa4-pages';
import { sofa6PagesNavData } from 'src/layouts/config-nav-sofa6-pages';
import { sofa7PagesNavData } from 'src/layouts/config-nav-sofa7-pages';
import { sofa9PagesNavData } from 'src/layouts/config-nav-sofa9-pages';
import { sofa10PagesNavData } from 'src/layouts/config-nav-sofa10-pages';
import { sofa11PagesNavData } from 'src/layouts/config-nav-sofa11-pages';
import { sofa12PagesNavData } from 'src/layouts/config-nav-sofa12-pages';
import { sofa13PagesNavData } from 'src/layouts/config-nav-sofa13-pages';
import { sofa14PagesNavData } from 'src/layouts/config-nav-sofa14-pages';
import { sofa15PagesNavData } from 'src/layouts/config-nav-sofa15-pages';
import { sofa16PagesNavData } from 'src/layouts/config-nav-sofa16-pages';
import { sofa18PagesNavData } from 'src/layouts/config-nav-sofa18-pages';

import { SplashScreen } from 'src/components/loading-screen';

import { authRoutes } from './auth';
import { mainRoutes } from './main';
import { authDemoRoutes } from './auth-demo';
import { dashboardRoutes } from './dashboard';
import { componentsRoutes } from './components';

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

// SOFA1 PAGES
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
const Sofa1SupportPage = lazy(() => import('src/pages/sofa1-pages/support'));
const Sofa1FaqPage = lazy(() => import('src/pages/sofa1-pages/faq'));
const Sofa1PolicyPage = lazy(() => import('src/pages/sofa1-pages/policy'));

// SOFA2 PAGES
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
const Sofa2SupportPage = lazy(() => import('src/pages/sofa2-pages/support'));

// SOFA3 PAGES
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
const Sofa3SupportPage = lazy(() => import('src/pages/sofa3-pages/support'));

// SOFA4 PAGES
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
const Sofa4SupportPage = lazy(() => import('src/pages/sofa4-pages/support'));

// SOFA6 PAGES
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
const Sofa6SupportPage = lazy(() => import('src/pages/sofa6-pages/support'));
const Sofa6FaqPage = lazy(() => import('src/pages/sofa6-pages/faq'));
const Sofa6PolicyPage = lazy(() => import('src/pages/sofa6-pages/policy'));
const Sofa6MemberPage = lazy(() => import('src/pages/sofa6-pages/member'));

// SOFA7 PAGES
const Sofa7AboutPage = lazy(() => import('src/pages/sofa7-pages/about'));
const Sofa7AboutSubPage = lazy(() => import('src/pages/sofa7-pages/about-sub'));
const Sofa7ProductsPage = lazy(() => import('src/pages/sofa7-pages/products'));
const Sofa7ProductCategoryPage = lazy(() => import('src/pages/sofa7-pages/product-category'));
const Sofa7ProductDetailPage = lazy(() => import('src/pages/sofa7-pages/product-detail'));
const Sofa7CollectionsPage = lazy(() => import('src/pages/sofa7-pages/collections'));
const Sofa7CollectionDetailPage = lazy(() => import('src/pages/sofa7-pages/collection-detail'));
const Sofa7ProjectsPage = lazy(() => import('src/pages/sofa7-pages/projects'));
const Sofa7ProjectDetailPage = lazy(() => import('src/pages/sofa7-pages/project-detail'));
const Sofa7ShowroomsPage = lazy(() => import('src/pages/sofa7-pages/showrooms'));
const Sofa7ShowroomDetailPage = lazy(() => import('src/pages/sofa7-pages/showroom-detail'));
const Sofa7ShowroomVisitPage = lazy(() => import('src/pages/sofa7-pages/showroom-visit'));
const Sofa7ServicesPage = lazy(() => import('src/pages/sofa7-pages/services'));
const Sofa7ServiceDesignPage = lazy(() => import('src/pages/sofa7-pages/service-design'));
const Sofa7ServiceProductionPage = lazy(() => import('src/pages/sofa7-pages/service-production'));
const Sofa7BlogPage = lazy(() => import('src/pages/sofa7-pages/blog'));
const Sofa7BlogCategoryPage = lazy(() => import('src/pages/sofa7-pages/blog-category'));
const Sofa7BlogDetailPage = lazy(() => import('src/pages/sofa7-pages/blog-detail'));
const Sofa7PromotionsPage = lazy(() => import('src/pages/sofa7-pages/promotions'));
const Sofa7PromotionServicePage = lazy(() => import('src/pages/sofa7-pages/promotion-service'));
const Sofa7CareersPage = lazy(() => import('src/pages/sofa7-pages/careers'));
const Sofa7CareerDetailPage = lazy(() => import('src/pages/sofa7-pages/career-detail'));
const Sofa7CareerApplyPage = lazy(() => import('src/pages/sofa7-pages/career-apply'));
const Sofa7CareerTrackingPage = lazy(() => import('src/pages/sofa7-pages/career-tracking'));
const Sofa7ContactPage = lazy(() => import('src/pages/sofa7-pages/contact'));
const Sofa7AccountPage = lazy(() => import('src/pages/sofa7-pages/account'));
const Sofa7AccountSectionPage = lazy(() => import('src/pages/sofa7-pages/account-section'));
const Sofa7B2BPage = lazy(() => import('src/pages/sofa7-pages/b2b'));
const Sofa7B2BRegisterPage = lazy(() => import('src/pages/sofa7-pages/b2b-register'));
const Sofa7B2BQuotePage = lazy(() => import('src/pages/sofa7-pages/b2b-quote'));
const Sofa7B2BOEMPage = lazy(() => import('src/pages/sofa7-pages/b2b-oem'));
const Sofa7B2BPolicyPage = lazy(() => import('src/pages/sofa7-pages/b2b-policy'));
const Sofa7CartPage = lazy(() => import('src/pages/sofa7-pages/cart'));
const Sofa7CheckoutPage = lazy(() => import('src/pages/sofa7-pages/checkout'));
const Sofa7CheckoutSuccessPage = lazy(() => import('src/pages/sofa7-pages/checkout-success'));
const Sofa7OrderTrackingPage = lazy(() => import('src/pages/sofa7-pages/order-tracking'));
const Sofa7PaymentPage = lazy(() => import('src/pages/sofa7-pages/payment'));
const Sofa7SupportPage = lazy(() => import('src/pages/sofa7-pages/support'));
const Sofa7FaqPage = lazy(() => import('src/pages/sofa7-pages/faq'));
const Sofa7PolicyPage = lazy(() => import('src/pages/sofa7-pages/policy'));
const Sofa7MemberPage = lazy(() => import('src/pages/sofa7-pages/member'));

// SOFA9 PAGES
const Sofa9AboutPage = lazy(() => import('src/pages/sofa9-pages/about'));
const Sofa9AboutSubPage = lazy(() => import('src/pages/sofa9-pages/about-sub'));
const Sofa9ProductsPage = lazy(() => import('src/pages/sofa9-pages/products'));
const Sofa9ProductCategoryPage = lazy(() => import('src/pages/sofa9-pages/product-category'));
const Sofa9ProductDetailPage = lazy(() => import('src/pages/sofa9-pages/product-detail'));
const Sofa9CollectionsPage = lazy(() => import('src/pages/sofa9-pages/collections'));
const Sofa9CollectionDetailPage = lazy(() => import('src/pages/sofa9-pages/collection-detail'));
const Sofa9ProjectsPage = lazy(() => import('src/pages/sofa9-pages/projects'));
const Sofa9ProjectDetailPage = lazy(() => import('src/pages/sofa9-pages/project-detail'));
const Sofa9ShowroomsPage = lazy(() => import('src/pages/sofa9-pages/showrooms'));
const Sofa9ShowroomDetailPage = lazy(() => import('src/pages/sofa9-pages/showroom-detail'));
const Sofa9ShowroomVisitPage = lazy(() => import('src/pages/sofa9-pages/showroom-visit'));
const Sofa9ServicesPage = lazy(() => import('src/pages/sofa9-pages/services'));
const Sofa9ServiceDesignPage = lazy(() => import('src/pages/sofa9-pages/service-design'));
const Sofa9ServiceProductionPage = lazy(() => import('src/pages/sofa9-pages/service-production'));
const Sofa9BlogPage = lazy(() => import('src/pages/sofa9-pages/blog'));
const Sofa9BlogCategoryPage = lazy(() => import('src/pages/sofa9-pages/blog-category'));
const Sofa9BlogDetailPage = lazy(() => import('src/pages/sofa9-pages/blog-detail'));
const Sofa9PromotionsPage = lazy(() => import('src/pages/sofa9-pages/promotions'));
const Sofa9PromotionServicePage = lazy(() => import('src/pages/sofa9-pages/promotion-service'));
const Sofa9CareersPage = lazy(() => import('src/pages/sofa9-pages/careers'));
const Sofa9CareerDetailPage = lazy(() => import('src/pages/sofa9-pages/career-detail'));
const Sofa9CareerApplyPage = lazy(() => import('src/pages/sofa9-pages/career-apply'));
const Sofa9CareerTrackingPage = lazy(() => import('src/pages/sofa9-pages/career-tracking'));
const Sofa9ContactPage = lazy(() => import('src/pages/sofa9-pages/contact'));
const Sofa9AccountPage = lazy(() => import('src/pages/sofa9-pages/account'));
const Sofa9AccountSectionPage = lazy(() => import('src/pages/sofa9-pages/account-section'));
const Sofa9B2BPage = lazy(() => import('src/pages/sofa9-pages/b2b'));
const Sofa9B2BRegisterPage = lazy(() => import('src/pages/sofa9-pages/b2b-register'));
const Sofa9B2BQuotePage = lazy(() => import('src/pages/sofa9-pages/b2b-quote'));
const Sofa9B2BOEMPage = lazy(() => import('src/pages/sofa9-pages/b2b-oem'));
const Sofa9B2BPolicyPage = lazy(() => import('src/pages/sofa9-pages/b2b-policy'));
const Sofa9CartPage = lazy(() => import('src/pages/sofa9-pages/cart'));
const Sofa9CheckoutPage = lazy(() => import('src/pages/sofa9-pages/checkout'));
const Sofa9CheckoutSuccessPage = lazy(() => import('src/pages/sofa9-pages/checkout-success'));
const Sofa9OrderTrackingPage = lazy(() => import('src/pages/sofa9-pages/order-tracking'));
const Sofa9PaymentPage = lazy(() => import('src/pages/sofa9-pages/payment'));
const Sofa9SupportPage = lazy(() => import('src/pages/sofa9-pages/support'));
const Sofa9FaqPage = lazy(() => import('src/pages/sofa9-pages/faq'));
const Sofa9PolicyPage = lazy(() => import('src/pages/sofa9-pages/policy'));
const Sofa9MemberPage = lazy(() => import('src/pages/sofa9-pages/member'));

// SOFA10 PAGES
const Sofa10AboutPage = lazy(() => import('src/pages/sofa10-pages/about'));
const Sofa10AboutSubPage = lazy(() => import('src/pages/sofa10-pages/about-sub'));
const Sofa10ProductsPage = lazy(() => import('src/pages/sofa10-pages/products'));
const Sofa10ProductCategoryPage = lazy(() => import('src/pages/sofa10-pages/product-category'));
const Sofa10ProductDetailPage = lazy(() => import('src/pages/sofa10-pages/product-detail'));
const Sofa10CollectionsPage = lazy(() => import('src/pages/sofa10-pages/collections'));
const Sofa10CollectionDetailPage = lazy(() => import('src/pages/sofa10-pages/collection-detail'));
const Sofa10ProjectsPage = lazy(() => import('src/pages/sofa10-pages/projects'));
const Sofa10ProjectDetailPage = lazy(() => import('src/pages/sofa10-pages/project-detail'));
const Sofa10ShowroomsPage = lazy(() => import('src/pages/sofa10-pages/showrooms'));
const Sofa10ShowroomDetailPage = lazy(() => import('src/pages/sofa10-pages/showroom-detail'));
const Sofa10ShowroomVisitPage = lazy(() => import('src/pages/sofa10-pages/showroom-visit'));
const Sofa10ServicesPage = lazy(() => import('src/pages/sofa10-pages/services'));
const Sofa10ServiceDesignPage = lazy(() => import('src/pages/sofa10-pages/service-design'));
const Sofa10ServiceProductionPage = lazy(() => import('src/pages/sofa10-pages/service-production'));
const Sofa10BlogPage = lazy(() => import('src/pages/sofa10-pages/blog'));
const Sofa10BlogCategoryPage = lazy(() => import('src/pages/sofa10-pages/blog-category'));
const Sofa10BlogDetailPage = lazy(() => import('src/pages/sofa10-pages/blog-detail'));
const Sofa10PromotionsPage = lazy(() => import('src/pages/sofa10-pages/promotions'));
const Sofa10PromotionServicePage = lazy(() => import('src/pages/sofa10-pages/promotion-service'));
const Sofa10CareersPage = lazy(() => import('src/pages/sofa10-pages/careers'));
const Sofa10CareerDetailPage = lazy(() => import('src/pages/sofa10-pages/career-detail'));
const Sofa10CareerApplyPage = lazy(() => import('src/pages/sofa10-pages/career-apply'));
const Sofa10CareerTrackingPage = lazy(() => import('src/pages/sofa10-pages/career-tracking'));
const Sofa10ContactPage = lazy(() => import('src/pages/sofa10-pages/contact'));
const Sofa10AccountPage = lazy(() => import('src/pages/sofa10-pages/account'));
const Sofa10AccountSectionPage = lazy(() => import('src/pages/sofa10-pages/account-section'));
const Sofa10B2BPage = lazy(() => import('src/pages/sofa10-pages/b2b'));
const Sofa10B2BRegisterPage = lazy(() => import('src/pages/sofa10-pages/b2b-register'));
const Sofa10B2BQuotePage = lazy(() => import('src/pages/sofa10-pages/b2b-quote'));
const Sofa10B2BOEMPage = lazy(() => import('src/pages/sofa10-pages/b2b-oem'));
const Sofa10B2BPolicyPage = lazy(() => import('src/pages/sofa10-pages/b2b-policy'));
const Sofa10CartPage = lazy(() => import('src/pages/sofa10-pages/cart'));
const Sofa10CheckoutPage = lazy(() => import('src/pages/sofa10-pages/checkout'));
const Sofa10CheckoutSuccessPage = lazy(() => import('src/pages/sofa10-pages/checkout-success'));
const Sofa10OrderTrackingPage = lazy(() => import('src/pages/sofa10-pages/order-tracking'));
const Sofa10PaymentPage = lazy(() => import('src/pages/sofa10-pages/payment'));
const Sofa10SupportPage = lazy(() => import('src/pages/sofa10-pages/support'));
const Sofa10FaqPage = lazy(() => import('src/pages/sofa10-pages/faq'));
const Sofa10PolicyPage = lazy(() => import('src/pages/sofa10-pages/policy'));
const Sofa10MemberPage = lazy(() => import('src/pages/sofa10-pages/member'));

// SOFA11 PAGES
const Sofa11AboutPage = lazy(() => import('src/pages/sofa11-pages/about'));
const Sofa11AboutSubPage = lazy(() => import('src/pages/sofa11-pages/about-sub'));
const Sofa11ProductsPage = lazy(() => import('src/pages/sofa11-pages/products'));
const Sofa11ProductCategoryPage = lazy(() => import('src/pages/sofa11-pages/product-category'));
const Sofa11ProductDetailPage = lazy(() => import('src/pages/sofa11-pages/product-detail'));
const Sofa11CollectionsPage = lazy(() => import('src/pages/sofa11-pages/collections'));
const Sofa11CollectionDetailPage = lazy(() => import('src/pages/sofa11-pages/collection-detail'));
const Sofa11ProjectsPage = lazy(() => import('src/pages/sofa11-pages/projects'));
const Sofa11ProjectDetailPage = lazy(() => import('src/pages/sofa11-pages/project-detail'));
const Sofa11ShowroomsPage = lazy(() => import('src/pages/sofa11-pages/showrooms'));
const Sofa11ShowroomDetailPage = lazy(() => import('src/pages/sofa11-pages/showroom-detail'));
const Sofa11ShowroomVisitPage = lazy(() => import('src/pages/sofa11-pages/showroom-visit'));
const Sofa11ServicesPage = lazy(() => import('src/pages/sofa11-pages/services'));
const Sofa11ServiceDesignPage = lazy(() => import('src/pages/sofa11-pages/service-design'));
const Sofa11ServiceProductionPage = lazy(() => import('src/pages/sofa11-pages/service-production'));
const Sofa11BlogPage = lazy(() => import('src/pages/sofa11-pages/blog'));
const Sofa11BlogCategoryPage = lazy(() => import('src/pages/sofa11-pages/blog-category'));
const Sofa11BlogDetailPage = lazy(() => import('src/pages/sofa11-pages/blog-detail'));
const Sofa11PromotionsPage = lazy(() => import('src/pages/sofa11-pages/promotions'));
const Sofa11PromotionServicePage = lazy(() => import('src/pages/sofa11-pages/promotion-service'));
const Sofa11CareersPage = lazy(() => import('src/pages/sofa11-pages/careers'));
const Sofa11CareerDetailPage = lazy(() => import('src/pages/sofa11-pages/career-detail'));
const Sofa11CareerApplyPage = lazy(() => import('src/pages/sofa11-pages/career-apply'));
const Sofa11CareerTrackingPage = lazy(() => import('src/pages/sofa11-pages/career-tracking'));
const Sofa11ContactPage = lazy(() => import('src/pages/sofa11-pages/contact'));
const Sofa11AccountPage = lazy(() => import('src/pages/sofa11-pages/account'));
const Sofa11AccountSectionPage = lazy(() => import('src/pages/sofa11-pages/account-section'));
const Sofa11B2BPage = lazy(() => import('src/pages/sofa11-pages/b2b'));
const Sofa11B2BRegisterPage = lazy(() => import('src/pages/sofa11-pages/b2b-register'));
const Sofa11B2BQuotePage = lazy(() => import('src/pages/sofa11-pages/b2b-quote'));
const Sofa11B2BOEMPage = lazy(() => import('src/pages/sofa11-pages/b2b-oem'));
const Sofa11B2BPolicyPage = lazy(() => import('src/pages/sofa11-pages/b2b-policy'));
const Sofa11CartPage = lazy(() => import('src/pages/sofa11-pages/cart'));
const Sofa11CheckoutPage = lazy(() => import('src/pages/sofa11-pages/checkout'));
const Sofa11CheckoutSuccessPage = lazy(() => import('src/pages/sofa11-pages/checkout-success'));
const Sofa11OrderTrackingPage = lazy(() => import('src/pages/sofa11-pages/order-tracking'));
const Sofa11PaymentPage = lazy(() => import('src/pages/sofa11-pages/payment'));
const Sofa11SupportPage = lazy(() => import('src/pages/sofa11-pages/support'));
const Sofa11FaqPage = lazy(() => import('src/pages/sofa11-pages/faq'));
const Sofa11PolicyPage = lazy(() => import('src/pages/sofa11-pages/policy'));
const Sofa11MemberPage = lazy(() => import('src/pages/sofa11-pages/member'));

// SOFA12 PAGES
const Sofa12AboutPage = lazy(() => import('src/pages/sofa12-pages/about'));
const Sofa12AboutSubPage = lazy(() => import('src/pages/sofa12-pages/about-sub'));
const Sofa12ProductsPage = lazy(() => import('src/pages/sofa12-pages/products'));
const Sofa12ProductCategoryPage = lazy(() => import('src/pages/sofa12-pages/product-category'));
const Sofa12ProductDetailPage = lazy(() => import('src/pages/sofa12-pages/product-detail'));
const Sofa12CollectionsPage = lazy(() => import('src/pages/sofa12-pages/collections'));
const Sofa12CollectionDetailPage = lazy(() => import('src/pages/sofa12-pages/collection-detail'));
const Sofa12ProjectsPage = lazy(() => import('src/pages/sofa12-pages/projects'));
const Sofa12ProjectDetailPage = lazy(() => import('src/pages/sofa12-pages/project-detail'));
const Sofa12ShowroomsPage = lazy(() => import('src/pages/sofa12-pages/showrooms'));
const Sofa12ShowroomDetailPage = lazy(() => import('src/pages/sofa12-pages/showroom-detail'));
const Sofa12ShowroomVisitPage = lazy(() => import('src/pages/sofa12-pages/showroom-visit'));
const Sofa12ServicesPage = lazy(() => import('src/pages/sofa12-pages/services'));
const Sofa12ServiceDesignPage = lazy(() => import('src/pages/sofa12-pages/service-design'));
const Sofa12ServiceProductionPage = lazy(() => import('src/pages/sofa12-pages/service-production'));
const Sofa12BlogPage = lazy(() => import('src/pages/sofa12-pages/blog'));
const Sofa12BlogCategoryPage = lazy(() => import('src/pages/sofa12-pages/blog-category'));
const Sofa12BlogDetailPage = lazy(() => import('src/pages/sofa12-pages/blog-detail'));
const Sofa12PromotionsPage = lazy(() => import('src/pages/sofa12-pages/promotions'));
const Sofa12PromotionServicePage = lazy(() => import('src/pages/sofa12-pages/promotion-service'));
const Sofa12CareersPage = lazy(() => import('src/pages/sofa12-pages/careers'));
const Sofa12CareerDetailPage = lazy(() => import('src/pages/sofa12-pages/career-detail'));
const Sofa12CareerApplyPage = lazy(() => import('src/pages/sofa12-pages/career-apply'));
const Sofa12CareerTrackingPage = lazy(() => import('src/pages/sofa12-pages/career-tracking'));
const Sofa12ContactPage = lazy(() => import('src/pages/sofa12-pages/contact'));
const Sofa12AccountPage = lazy(() => import('src/pages/sofa12-pages/account'));
const Sofa12SupportPage = lazy(() => import('src/pages/sofa12-pages/support'));

// SOFA13 PAGES
const Sofa13AboutPage = lazy(() => import('src/pages/sofa13-pages/about'));
const Sofa13AboutSubPage = lazy(() => import('src/pages/sofa13-pages/about-sub'));
const Sofa13ProductsPage = lazy(() => import('src/pages/sofa13-pages/products'));
const Sofa13ProductCategoryPage = lazy(() => import('src/pages/sofa13-pages/product-category'));
const Sofa13ProductDetailPage = lazy(() => import('src/pages/sofa13-pages/product-detail'));
const Sofa13CollectionsPage = lazy(() => import('src/pages/sofa13-pages/collections'));
const Sofa13CollectionDetailPage = lazy(() => import('src/pages/sofa13-pages/collection-detail'));
const Sofa13ProjectsPage = lazy(() => import('src/pages/sofa13-pages/projects'));
const Sofa13ProjectDetailPage = lazy(() => import('src/pages/sofa13-pages/project-detail'));
const Sofa13ShowroomsPage = lazy(() => import('src/pages/sofa13-pages/showrooms'));
const Sofa13ShowroomDetailPage = lazy(() => import('src/pages/sofa13-pages/showroom-detail'));
const Sofa13ShowroomVisitPage = lazy(() => import('src/pages/sofa13-pages/showroom-visit'));
const Sofa13ServicesPage = lazy(() => import('src/pages/sofa13-pages/services'));
const Sofa13ServiceDesignPage = lazy(() => import('src/pages/sofa13-pages/service-design'));
const Sofa13ServiceProductionPage = lazy(() => import('src/pages/sofa13-pages/service-production'));
const Sofa13BlogPage = lazy(() => import('src/pages/sofa13-pages/blog'));
const Sofa13BlogCategoryPage = lazy(() => import('src/pages/sofa13-pages/blog-category'));
const Sofa13BlogDetailPage = lazy(() => import('src/pages/sofa13-pages/blog-detail'));
const Sofa13PromotionsPage = lazy(() => import('src/pages/sofa13-pages/promotions'));
const Sofa13PromotionServicePage = lazy(() => import('src/pages/sofa13-pages/promotion-service'));
const Sofa13CareersPage = lazy(() => import('src/pages/sofa13-pages/careers'));
const Sofa13CareerDetailPage = lazy(() => import('src/pages/sofa13-pages/career-detail'));
const Sofa13CareerApplyPage = lazy(() => import('src/pages/sofa13-pages/career-apply'));
const Sofa13CareerTrackingPage = lazy(() => import('src/pages/sofa13-pages/career-tracking'));
const Sofa13ContactPage = lazy(() => import('src/pages/sofa13-pages/contact'));
const Sofa13AccountPage = lazy(() => import('src/pages/sofa13-pages/account'));
const Sofa13AccountSectionPage = lazy(() => import('src/pages/sofa13-pages/account-section'));
const Sofa13B2BPage = lazy(() => import('src/pages/sofa13-pages/b2b'));
const Sofa13B2BRegisterPage = lazy(() => import('src/pages/sofa13-pages/b2b-register'));
const Sofa13B2BQuotePage = lazy(() => import('src/pages/sofa13-pages/b2b-quote'));
const Sofa13B2BOEMPage = lazy(() => import('src/pages/sofa13-pages/b2b-oem'));
const Sofa13B2BPolicyPage = lazy(() => import('src/pages/sofa13-pages/b2b-policy'));
const Sofa13CartPage = lazy(() => import('src/pages/sofa13-pages/cart'));
const Sofa13CheckoutPage = lazy(() => import('src/pages/sofa13-pages/checkout'));
const Sofa13CheckoutSuccessPage = lazy(() => import('src/pages/sofa13-pages/checkout-success'));
const Sofa13OrderTrackingPage = lazy(() => import('src/pages/sofa13-pages/order-tracking'));
const Sofa13PaymentPage = lazy(() => import('src/pages/sofa13-pages/payment'));
const Sofa13SupportPage = lazy(() => import('src/pages/sofa13-pages/support'));
const Sofa13FaqPage = lazy(() => import('src/pages/sofa13-pages/faq'));
const Sofa13PolicyPage = lazy(() => import('src/pages/sofa13-pages/policy'));
const Sofa13MemberPage = lazy(() => import('src/pages/sofa13-pages/member'));

// SOFA14 PAGES
const Sofa14AboutPage = lazy(() => import('src/pages/sofa14-pages/about'));
const Sofa14AboutSubPage = lazy(() => import('src/pages/sofa14-pages/about-sub'));
const Sofa14ProductsPage = lazy(() => import('src/pages/sofa14-pages/products'));
const Sofa14ProductCategoryPage = lazy(() => import('src/pages/sofa14-pages/product-category'));
const Sofa14ProductDetailPage = lazy(() => import('src/pages/sofa14-pages/product-detail'));
const Sofa14CollectionsPage = lazy(() => import('src/pages/sofa14-pages/collections'));
const Sofa14CollectionDetailPage = lazy(() => import('src/pages/sofa14-pages/collection-detail'));
const Sofa14ProjectsPage = lazy(() => import('src/pages/sofa14-pages/projects'));
const Sofa14ProjectDetailPage = lazy(() => import('src/pages/sofa14-pages/project-detail'));
const Sofa14ShowroomsPage = lazy(() => import('src/pages/sofa14-pages/showrooms'));
const Sofa14ShowroomDetailPage = lazy(() => import('src/pages/sofa14-pages/showroom-detail'));
const Sofa14ShowroomVisitPage = lazy(() => import('src/pages/sofa14-pages/showroom-visit'));
const Sofa14ServicesPage = lazy(() => import('src/pages/sofa14-pages/services'));
const Sofa14ServiceDesignPage = lazy(() => import('src/pages/sofa14-pages/service-design'));
const Sofa14ServiceProductionPage = lazy(() => import('src/pages/sofa14-pages/service-production'));
const Sofa14BlogPage = lazy(() => import('src/pages/sofa14-pages/blog'));
const Sofa14BlogCategoryPage = lazy(() => import('src/pages/sofa14-pages/blog-category'));
const Sofa14BlogDetailPage = lazy(() => import('src/pages/sofa14-pages/blog-detail'));
const Sofa14PromotionsPage = lazy(() => import('src/pages/sofa14-pages/promotions'));
const Sofa14PromotionServicePage = lazy(() => import('src/pages/sofa14-pages/promotion-service'));
const Sofa14CareersPage = lazy(() => import('src/pages/sofa14-pages/careers'));
const Sofa14CareerDetailPage = lazy(() => import('src/pages/sofa14-pages/career-detail'));
const Sofa14CareerApplyPage = lazy(() => import('src/pages/sofa14-pages/career-apply'));
const Sofa14CareerTrackingPage = lazy(() => import('src/pages/sofa14-pages/career-tracking'));
const Sofa14ContactPage = lazy(() => import('src/pages/sofa14-pages/contact'));
const Sofa14AccountPage = lazy(() => import('src/pages/sofa14-pages/account'));
const Sofa14AccountSectionPage = lazy(() => import('src/pages/sofa14-pages/account-section'));
const Sofa14B2BPage = lazy(() => import('src/pages/sofa14-pages/b2b'));
const Sofa14B2BRegisterPage = lazy(() => import('src/pages/sofa14-pages/b2b-register'));
const Sofa14B2BQuotePage = lazy(() => import('src/pages/sofa14-pages/b2b-quote'));
const Sofa14B2BOEMPage = lazy(() => import('src/pages/sofa14-pages/b2b-oem'));
const Sofa14B2BPolicyPage = lazy(() => import('src/pages/sofa14-pages/b2b-policy'));
const Sofa14CartPage = lazy(() => import('src/pages/sofa14-pages/cart'));
const Sofa14CheckoutPage = lazy(() => import('src/pages/sofa14-pages/checkout'));
const Sofa14CheckoutSuccessPage = lazy(() => import('src/pages/sofa14-pages/checkout-success'));
const Sofa14OrderTrackingPage = lazy(() => import('src/pages/sofa14-pages/order-tracking'));
const Sofa14PaymentPage = lazy(() => import('src/pages/sofa14-pages/payment'));
const Sofa14SupportPage = lazy(() => import('src/pages/sofa14-pages/support'));
const Sofa14FaqPage = lazy(() => import('src/pages/sofa14-pages/faq'));
const Sofa14PolicyPage = lazy(() => import('src/pages/sofa14-pages/policy'));
const Sofa14MemberPage = lazy(() => import('src/pages/sofa14-pages/member'));

// SOFA15 PAGES
const Sofa15AboutPage = lazy(() => import('src/pages/sofa15-pages/about'));
const Sofa15AboutSubPage = lazy(() => import('src/pages/sofa15-pages/about-sub'));
const Sofa15ProductsPage = lazy(() => import('src/pages/sofa15-pages/products'));
const Sofa15ProductCategoryPage = lazy(() => import('src/pages/sofa15-pages/product-category'));
const Sofa15ProductDetailPage = lazy(() => import('src/pages/sofa15-pages/product-detail'));
const Sofa15CollectionsPage = lazy(() => import('src/pages/sofa15-pages/collections'));
const Sofa15CollectionDetailPage = lazy(() => import('src/pages/sofa15-pages/collection-detail'));
const Sofa15ProjectsPage = lazy(() => import('src/pages/sofa15-pages/projects'));
const Sofa15ProjectDetailPage = lazy(() => import('src/pages/sofa15-pages/project-detail'));
const Sofa15ShowroomsPage = lazy(() => import('src/pages/sofa15-pages/showrooms'));
const Sofa15ShowroomDetailPage = lazy(() => import('src/pages/sofa15-pages/showroom-detail'));
const Sofa15ShowroomVisitPage = lazy(() => import('src/pages/sofa15-pages/showroom-visit'));
const Sofa15ServicesPage = lazy(() => import('src/pages/sofa15-pages/services'));
const Sofa15ServiceDesignPage = lazy(() => import('src/pages/sofa15-pages/service-design'));
const Sofa15ServiceProductionPage = lazy(() => import('src/pages/sofa15-pages/service-production'));
const Sofa15BlogPage = lazy(() => import('src/pages/sofa15-pages/blog'));
const Sofa15BlogCategoryPage = lazy(() => import('src/pages/sofa15-pages/blog-category'));
const Sofa15BlogDetailPage = lazy(() => import('src/pages/sofa15-pages/blog-detail'));
const Sofa15PromotionsPage = lazy(() => import('src/pages/sofa15-pages/promotions'));
const Sofa15PromotionServicePage = lazy(() => import('src/pages/sofa15-pages/promotion-service'));
const Sofa15CareersPage = lazy(() => import('src/pages/sofa15-pages/careers'));
const Sofa15CareerDetailPage = lazy(() => import('src/pages/sofa15-pages/career-detail'));
const Sofa15CareerApplyPage = lazy(() => import('src/pages/sofa15-pages/career-apply'));
const Sofa15CareerTrackingPage = lazy(() => import('src/pages/sofa15-pages/career-tracking'));
const Sofa15ContactPage = lazy(() => import('src/pages/sofa15-pages/contact'));
const Sofa15AuthPage = lazy(() => import('src/pages/sofa15-pages/auth'));
const Sofa15AccountPage = lazy(() => import('src/pages/sofa15-pages/account'));
const Sofa15B2bPage = lazy(() => import('src/pages/sofa15-pages/b2b'));
const Sofa15CartPage = lazy(() => import('src/pages/sofa15-pages/cart'));
const Sofa15CheckoutPage = lazy(() => import('src/pages/sofa15-pages/checkout'));
const Sofa15CheckoutSuccessPage = lazy(() => import('src/pages/sofa15-pages/checkout-success'));
const Sofa15OrderTrackingPage = lazy(() => import('src/pages/sofa15-pages/order-tracking'));
const Sofa15SearchPage = lazy(() => import('src/pages/sofa15-pages/search'));
const Sofa15ComparePage = lazy(() => import('src/pages/sofa15-pages/compare'));
const Sofa15SupportPage = lazy(() => import('src/pages/sofa15-pages/support'));
const Sofa15FaqPage = lazy(() => import('src/pages/sofa15-pages/faq'));
const Sofa15PolicyPage = lazy(() => import('src/pages/sofa15-pages/policy'));
const Sofa15MemberPage = lazy(() => import('src/pages/sofa15-pages/member'));

// SOFA16 PAGES
const Sofa16AboutPage = lazy(() => import('src/pages/sofa16-pages/about'));
const Sofa16AboutSubPage = lazy(() => import('src/pages/sofa16-pages/about-sub'));
const Sofa16ProductsPage = lazy(() => import('src/pages/sofa16-pages/products'));
const Sofa16ProductCategoryPage = lazy(() => import('src/pages/sofa16-pages/product-category'));
const Sofa16ProductDetailPage = lazy(() => import('src/pages/sofa16-pages/product-detail'));
const Sofa16CollectionsPage = lazy(() => import('src/pages/sofa16-pages/collections'));
const Sofa16CollectionDetailPage = lazy(() => import('src/pages/sofa16-pages/collection-detail'));
const Sofa16ProjectsPage = lazy(() => import('src/pages/sofa16-pages/projects'));
const Sofa16ProjectDetailPage = lazy(() => import('src/pages/sofa16-pages/project-detail'));
const Sofa16ShowroomsPage = lazy(() => import('src/pages/sofa16-pages/showrooms'));
const Sofa16ShowroomDetailPage = lazy(() => import('src/pages/sofa16-pages/showroom-detail'));
const Sofa16ShowroomVisitPage = lazy(() => import('src/pages/sofa16-pages/showroom-visit'));
const Sofa16ServicesPage = lazy(() => import('src/pages/sofa16-pages/services'));
const Sofa16ServiceDesignPage = lazy(() => import('src/pages/sofa16-pages/service-design'));
const Sofa16ServiceProductionPage = lazy(() => import('src/pages/sofa16-pages/service-production'));
const Sofa16BlogPage = lazy(() => import('src/pages/sofa16-pages/blog'));
const Sofa16BlogCategoryPage = lazy(() => import('src/pages/sofa16-pages/blog-category'));
const Sofa16BlogDetailPage = lazy(() => import('src/pages/sofa16-pages/blog-detail'));
const Sofa16PromotionsPage = lazy(() => import('src/pages/sofa16-pages/promotions'));
const Sofa16CareersPage = lazy(() => import('src/pages/sofa16-pages/careers'));
const Sofa16ContactPage = lazy(() => import('src/pages/sofa16-pages/contact'));
const Sofa16AccountPage = lazy(() => import('src/pages/sofa16-pages/account'));
const Sofa16B2bPage = lazy(() => import('src/pages/sofa16-pages/b2b'));
const Sofa16CartPage = lazy(() => import('src/pages/sofa16-pages/cart'));
const Sofa16CheckoutPage = lazy(() => import('src/pages/sofa16-pages/checkout'));
const Sofa16CheckoutSuccessPage = lazy(() => import('src/pages/sofa16-pages/checkout-success'));
const Sofa16OrderTrackingPage = lazy(() => import('src/pages/sofa16-pages/order-tracking'));
const Sofa16SearchPage = lazy(() => import('src/pages/sofa16-pages/search'));
const Sofa16ComparePage = lazy(() => import('src/pages/sofa16-pages/compare'));
const Sofa16FaqPage = lazy(() => import('src/pages/sofa16-pages/faq'));
const Sofa16SupportPage = lazy(() => import('src/pages/sofa16-pages/support'));
const Sofa16PolicyPage = lazy(() => import('src/pages/sofa16-pages/policy'));
const Sofa16MemberPage = lazy(() => import('src/pages/sofa16-pages/member'));

// SOFA18 PAGES
const Sofa18AboutPage = lazy(() => import('src/pages/sofa18-pages/about'));
const Sofa18AboutSubPage = lazy(() => import('src/pages/sofa18-pages/about-sub'));
const Sofa18ProductsPage = lazy(() => import('src/pages/sofa18-pages/products'));
const Sofa18ProductCategoryPage = lazy(() => import('src/pages/sofa18-pages/product-category'));
const Sofa18ProductDetailPage = lazy(() => import('src/pages/sofa18-pages/product-detail'));

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

    // Auth
    ...authRoutes,
    ...authDemoRoutes,

    // Dashboard
    ...dashboardRoutes,

    // Main
    ...mainRoutes,

    // Components
    ...componentsRoutes,

    // SOFA8 PAGES
    {
      path: '/sofa8/about',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8AboutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/about/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8AboutSubPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/products',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8ProductsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/products/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8ProductCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/products/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8ProductDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/collections',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8CollectionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/collections/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8CollectionDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/projects',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8ProjectsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/projects/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8ProjectDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/showrooms',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8ShowroomsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/showrooms/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8ShowroomDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/showrooms/visit',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/showrooms/consult',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/services',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8ServicesPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/services/design',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/services/design/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/services/production',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/services/production/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/blog',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8BlogPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/blog/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8BlogCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/blog/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8BlogDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/promotions',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8PromotionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/promotions/:service',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8PromotionServicePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/careers',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8CareersPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/careers/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8CareerDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/careers/apply/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8CareerApplyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/careers/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8CareerTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/contact',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8ContactPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/account',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8AccountPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/account/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8AccountSectionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/b2b',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8B2BPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/b2b/register',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8B2BRegisterPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/b2b/quote',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8B2BQuotePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/b2b/oem',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8B2BOEMPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/b2b/policy',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8B2BPolicyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/cart',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8CartPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/checkout',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8CheckoutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/checkout/success',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8CheckoutSuccessPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/orders/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8OrderTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/payment',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8PaymentPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/support',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8SupportPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/faq',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8FaqPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/policy/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8PolicyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/member',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8MemberPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa8/member/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa8PagesNavData }}>
            <Sofa8MemberPage />
          </MainLayout>
        </Suspense>
      ),
    },

    // SOFA1 PAGES
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
      path: '/sofa1/careers/apply/:id',
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
      path: '/sofa1/policy/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa1PagesNavData }}>
            <Sofa1PolicyPage />
          </MainLayout>
        </Suspense>
      ),
    },

    // SOFA2 PAGES
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
      path: '/sofa2/services/design/:sub',
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
      path: '/sofa2/services/production/:sub',
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
      path: '/sofa2/careers/apply/:id',
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

    // SOFA3 PAGES
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
      path: '/sofa3/blog/:id',
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

    // SOFA4 PAGES
    {
      path: '/sofa4/about',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4AboutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/about/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4AboutSubPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/products',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4ProductsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/products/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4ProductCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/products/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4ProductDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/collections',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4CollectionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/collections/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4CollectionDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/projects',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4ProjectsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/projects/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4ProjectDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/showrooms',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4ShowroomsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/showrooms/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4ShowroomDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/showrooms/visit',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/showrooms/consult',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/services',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4ServicesPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/services/design',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/services/design/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/services/production',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/services/production/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/blog',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4BlogPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/blog/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4BlogCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/blog/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4BlogDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/promotions',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4PromotionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/promotions/:service',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4PromotionServicePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/careers',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4CareersPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/careers/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4CareerDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/careers/apply/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4CareerApplyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/careers/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4CareerTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/contact',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4ContactPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/account',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4AccountPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/b2b',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4B2BPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/b2b/register',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4B2BRegisterPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/b2b/quote',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4B2BQuotePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/b2b/oem',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4B2BOEMPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/b2b/policy',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4B2BPolicyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/cart',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4CartPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/checkout',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4CheckoutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/checkout/success',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4CheckoutSuccessPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/orders/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4OrderTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/payment',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4PaymentPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa4/support',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa4PagesNavData }}>
            <Sofa4SupportPage />
          </MainLayout>
        </Suspense>
      ),
    },

    // SOFA6 PAGES
    {
      path: '/sofa6/about',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6AboutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/about/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6AboutSubPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/products',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6ProductsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/products/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6ProductCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/products/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6ProductDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/collections',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6CollectionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/collections/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6CollectionDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/projects',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6ProjectsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/projects/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6ProjectDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/showrooms',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6ShowroomsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/showrooms/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6ShowroomDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/showrooms/visit',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/showrooms/consult',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/services',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6ServicesPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/services/design',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/services/design/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/services/production',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/services/production/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/blog',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6BlogPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/blog/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6BlogCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/blog/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6BlogDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/promotions',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6PromotionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/promotions/:service',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6PromotionServicePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/careers',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6CareersPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/careers/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6CareerDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/careers/apply/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6CareerApplyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/careers/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6CareerTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/contact',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6ContactPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/account',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6AccountPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/account/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6AccountSectionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/b2b',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6B2BPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/b2b/register',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6B2BRegisterPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/b2b/quote',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6B2BQuotePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/b2b/oem',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6B2BOEMPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/b2b/policy',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6B2BPolicyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/cart',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6CartPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/checkout',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6CheckoutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/checkout/success',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6CheckoutSuccessPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/orders/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6OrderTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/payment',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6PaymentPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/support',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6SupportPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/faq',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6FaqPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/policy/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6PolicyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/member',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6MemberPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa6/member/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa6PagesNavData }}>
            <Sofa6MemberPage />
          </MainLayout>
        </Suspense>
      ),
    },

    // SOFA7 PAGES
    {
      path: '/sofa7/about',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7AboutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/about/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7AboutSubPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/products',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7ProductsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/products/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7ProductCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/products/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7ProductDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/collections',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7CollectionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/collections/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7CollectionDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/projects',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7ProjectsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/projects/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7ProjectDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/showrooms',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7ShowroomsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/showrooms/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7ShowroomDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/showrooms/visit',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/showrooms/consult',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/services',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7ServicesPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/services/design',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/services/design/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/services/production',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/services/production/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/blog',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7BlogPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/blog/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7BlogCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/blog/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7BlogDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/promotions',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7PromotionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/promotions/:service',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7PromotionServicePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/careers',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7CareersPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/careers/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7CareerDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/careers/apply/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7CareerApplyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/careers/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7CareerTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/contact',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7ContactPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/account',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7AccountPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/account/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7AccountSectionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/b2b',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7B2BPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/b2b/register',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7B2BRegisterPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/b2b/quote',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7B2BQuotePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/b2b/oem',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7B2BOEMPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/b2b/policy',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7B2BPolicyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/cart',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7CartPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/checkout',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7CheckoutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/checkout/success',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7CheckoutSuccessPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/orders/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7OrderTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/payment',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7PaymentPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/support',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7SupportPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/faq',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7FaqPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/policy/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7PolicyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/member',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7MemberPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa7/member/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa7PagesNavData }}>
            <Sofa7MemberPage />
          </MainLayout>
        </Suspense>
      ),
    },

    // SOFA9 PAGES
    {
      path: '/sofa9/about',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9AboutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/about/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9AboutSubPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/products',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9ProductsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/products/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9ProductCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/products/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9ProductDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/collections',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9CollectionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/collections/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9CollectionDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/projects',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9ProjectsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/projects/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9ProjectDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/showrooms',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9ShowroomsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/showrooms/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9ShowroomDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/showrooms/visit',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/showrooms/consult',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/services',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9ServicesPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/services/design',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/services/design/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/services/production',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/services/production/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/blog',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9BlogPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/blog/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9BlogCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/blog/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9BlogDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/promotions',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9PromotionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/promotions/:service',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9PromotionServicePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/careers',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9CareersPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/careers/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9CareerDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/careers/apply/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9CareerApplyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/careers/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9CareerTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/contact',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9ContactPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/account',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9AccountPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/account/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9AccountSectionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/b2b',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9B2BPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/b2b/register',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9B2BRegisterPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/b2b/quote',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9B2BQuotePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/b2b/oem',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9B2BOEMPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/b2b/policy',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9B2BPolicyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/cart',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9CartPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/checkout',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9CheckoutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/checkout/success',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9CheckoutSuccessPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/orders/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9OrderTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/payment',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9PaymentPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/support',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9SupportPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/faq',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9FaqPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/policy/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9PolicyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/member',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9MemberPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa9/member/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa9PagesNavData }}>
            <Sofa9MemberPage />
          </MainLayout>
        </Suspense>
      ),
    },

    // SOFA10 PAGES
    {
      path: '/sofa10/about',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10AboutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/about/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10AboutSubPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/products',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10ProductsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/products/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10ProductCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/products/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10ProductDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/collections',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10CollectionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/collections/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10CollectionDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/projects',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10ProjectsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/projects/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10ProjectDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/showrooms',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10ShowroomsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/showrooms/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10ShowroomDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/showrooms/visit',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/showrooms/consult',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/services',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10ServicesPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/services/design',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/services/design/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/services/production',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/services/production/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/blog',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10BlogPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/blog/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10BlogCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/blog/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10BlogDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/promotions',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10PromotionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/promotions/:service',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10PromotionServicePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/careers',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10CareersPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/careers/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10CareerDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/careers/apply/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10CareerApplyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/careers/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10CareerTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/contact',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10ContactPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/account',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10AccountPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/account/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10AccountSectionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/b2b',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10B2BPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/b2b/register',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10B2BRegisterPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/b2b/quote',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10B2BQuotePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/b2b/oem',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10B2BOEMPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/b2b/policy',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10B2BPolicyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/cart',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10CartPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/checkout',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10CheckoutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/checkout/success',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10CheckoutSuccessPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/orders/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10OrderTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/payment',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10PaymentPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/support',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10SupportPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/faq',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10FaqPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/policy/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10PolicyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/member',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10MemberPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa10/member/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa10PagesNavData }}>
            <Sofa10MemberPage />
          </MainLayout>
        </Suspense>
      ),
    },

    // SOFA11 PAGES
    {
      path: '/sofa11/about',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11AboutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/about/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11AboutSubPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/products',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11ProductsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/products/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11ProductCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/products/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11ProductDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/collections',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11CollectionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/collections/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11CollectionDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/projects',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11ProjectsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/projects/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11ProjectDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/showrooms',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11ShowroomsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/showrooms/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11ShowroomDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/showrooms/visit',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/showrooms/consult',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/services',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11ServicesPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/services/design',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/services/design/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/services/production',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/services/production/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/blog',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11BlogPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/blog/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11BlogCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/blog/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11BlogDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/promotions',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11PromotionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/promotions/:service',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11PromotionServicePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/careers',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11CareersPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/careers/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11CareerDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/careers/apply/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11CareerApplyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/careers/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11CareerTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/contact',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11ContactPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/account',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11AccountPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/account/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11AccountSectionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/b2b',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11B2BPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/b2b/register',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11B2BRegisterPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/b2b/quote',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11B2BQuotePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/b2b/oem',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11B2BOEMPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/b2b/policy',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11B2BPolicyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/cart',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11CartPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/checkout',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11CheckoutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/checkout/success',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11CheckoutSuccessPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/orders/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11OrderTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/payment',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11PaymentPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/support',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11SupportPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/faq',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11FaqPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/policy/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11PolicyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/member',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11MemberPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa11/member/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa11PagesNavData }}>
            <Sofa11MemberPage />
          </MainLayout>
        </Suspense>
      ),
    },

    // SOFA12 PAGES
    {
      path: '/sofa12/about',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12AboutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/about/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12AboutSubPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/products',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12ProductsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/products/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12ProductCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/products/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12ProductDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/collections',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12CollectionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/collections/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12CollectionDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/projects',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12ProjectsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/projects/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12ProjectDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/showrooms',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12ShowroomsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/showrooms/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12ShowroomDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/showrooms/visit',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/showrooms/consult',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/services',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12ServicesPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/services/design',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/services/design/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/services/production',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/services/production/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/blog',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12BlogPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/blog/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12BlogCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/blog/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12BlogDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/promotions',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12PromotionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/promotions/:service',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12PromotionServicePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/careers',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12CareersPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/careers/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12CareerDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/careers/apply/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12CareerApplyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/careers/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12CareerTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/contact',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12ContactPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/account',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12AccountPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa12/support',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa12PagesNavData }}>
            <Sofa12SupportPage />
          </MainLayout>
        </Suspense>
      ),
    },

    // SOFA13 PAGES
    {
      path: '/sofa13/about',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13AboutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/about/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13AboutSubPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/products',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13ProductsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/products/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13ProductCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/products/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13ProductDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/collections',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13CollectionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/collections/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13CollectionDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/projects',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13ProjectsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/projects/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13ProjectDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/showrooms',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13ShowroomsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/showrooms/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13ShowroomDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/showrooms/visit',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/showrooms/consult',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/services',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13ServicesPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/services/design',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/services/design/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/services/production',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/services/production/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/blog',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13BlogPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/blog/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13BlogCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/blog/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13BlogDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/promotions',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13PromotionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/promotions/:service',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13PromotionServicePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/careers',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13CareersPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/careers/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13CareerDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/careers/apply/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13CareerApplyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/careers/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13CareerTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/contact',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13ContactPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/account',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13AccountPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/account/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13AccountSectionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/b2b',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13B2BPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/b2b/register',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13B2BRegisterPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/b2b/quote',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13B2BQuotePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/b2b/oem',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13B2BOEMPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/b2b/policy',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13B2BPolicyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/cart',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13CartPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/checkout',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13CheckoutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/checkout/success',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13CheckoutSuccessPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/orders/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13OrderTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/payment',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13PaymentPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/support',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13SupportPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/faq',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13FaqPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/policy/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13PolicyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/member',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13MemberPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa13/member/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa13PagesNavData }}>
            <Sofa13MemberPage />
          </MainLayout>
        </Suspense>
      ),
    },

    // SOFA14 PAGES
    {
      path: '/sofa14/about',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14AboutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/about/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14AboutSubPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/products',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14ProductsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/products/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14ProductCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/products/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14ProductDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/collections',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14CollectionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/collections/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14CollectionDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/projects',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14ProjectsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/projects/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14ProjectDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/showrooms',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14ShowroomsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/showrooms/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14ShowroomDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/showrooms/visit',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/showrooms/consult',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/services',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14ServicesPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/services/design',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/services/design/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/services/production',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/services/production/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/blog',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14BlogPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/blog/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14BlogCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/blog/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14BlogDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/promotions',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14PromotionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/promotions/:service',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14PromotionServicePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/careers',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14CareersPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/careers/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14CareerDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/careers/apply/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14CareerApplyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/careers/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14CareerTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/contact',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14ContactPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/account',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14AccountPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/account/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14AccountSectionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/b2b',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14B2BPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/b2b/register',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14B2BRegisterPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/b2b/quote',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14B2BQuotePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/b2b/oem',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14B2BOEMPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/b2b/policy',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14B2BPolicyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/cart',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14CartPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/checkout',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14CheckoutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/checkout/success',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14CheckoutSuccessPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/orders/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14OrderTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/payment',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14PaymentPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/support',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14SupportPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/faq',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14FaqPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/policy/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14PolicyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/member',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14MemberPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa14/member/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa14PagesNavData }}>
            <Sofa14MemberPage />
          </MainLayout>
        </Suspense>
      ),
    },

    // SOFA15 PAGES
    {
      path: '/sofa15/about',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15AboutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/about/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15AboutSubPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/products',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15ProductsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/products/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15ProductCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/products/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15ProductDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/collections',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15CollectionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/collections/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15CollectionDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/projects',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15ProjectsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/projects/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15ProjectDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/showrooms',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15ShowroomsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/showrooms/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15ShowroomDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/showrooms/visit',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/showrooms/consult',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/services',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15ServicesPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/services/design',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/services/design/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/services/production',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/services/production/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/blog',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15BlogPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/blog/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15BlogCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/blog/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15BlogDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/promotions',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15PromotionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/promotions/:service',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15PromotionServicePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/careers',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15CareersPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/careers/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15CareerDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/careers/apply/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15CareerApplyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/careers/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15CareerTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/contact',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15ContactPage />
          </MainLayout>
        </Suspense>
      ),
    },

    {
      path: '/sofa15/auth/:mode',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15AuthPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/account',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15AccountPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/account/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15AccountPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/b2b',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15B2bPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/b2b/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15B2bPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/cart',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15CartPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/checkout',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15CheckoutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/checkout/success',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15CheckoutSuccessPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/orders/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15OrderTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/search',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15SearchPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/compare',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15ComparePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/support',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15SupportPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/support/:topic',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15SupportPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/faq',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15FaqPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/policy/:type',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15PolicyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/member',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15MemberPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa15/member/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa15PagesNavData }}>
            <Sofa15MemberPage />
          </MainLayout>
        </Suspense>
      ),
    },

    // SOFA16 PAGES
    {
      path: '/sofa16/about',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16AboutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/about/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16AboutSubPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/products',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16ProductsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/products/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16ProductCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/products/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16ProductDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/collections',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16CollectionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/collections/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16CollectionDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/projects',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16ProjectsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/projects/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16ProjectDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/showrooms',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16ShowroomsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/showrooms/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16ShowroomDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/showrooms/visit',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/showrooms/consult',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16ShowroomVisitPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/services',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16ServicesPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/services/design',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/services/design/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16ServiceDesignPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/services/production',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/services/production/:sub',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16ServiceProductionPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/blog',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16BlogPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/blog/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16BlogCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/blog/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16BlogDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },

    {
      path: '/sofa16/promotions',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16PromotionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/promotions/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16PromotionsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/careers',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16CareersPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/careers/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16CareersPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/contact',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16ContactPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/account',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16AccountPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/account/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16AccountPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/b2b',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16B2bPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/b2b/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16B2bPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/cart',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16CartPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/checkout',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16CheckoutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/checkout/success',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16CheckoutSuccessPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/orders/tracking',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16OrderTrackingPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/search',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16SearchPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/compare',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16ComparePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/faq',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16FaqPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/support',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16SupportPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/support/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16SupportPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/policy',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16PolicyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/policy/:type',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16PolicyPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/member',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16MemberPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa16/member/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa16PagesNavData }}>
            <Sofa16MemberPage />
          </MainLayout>
        </Suspense>
      ),
    },

    // SOFA18 PAGES
    {
      path: '/sofa18/about',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa18PagesNavData }}>
            <Sofa18AboutPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa18/about/:section',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa18PagesNavData }}>
            <Sofa18AboutSubPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa18/products',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa18PagesNavData }}>
            <Sofa18ProductsPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa18/products/category/:slug',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa18PagesNavData }}>
            <Sofa18ProductCategoryPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '/sofa18/products/:id',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout data={{ nav: sofa18PagesNavData }}>
            <Sofa18ProductDetailPage />
          </MainLayout>
        </Suspense>
      ),
    },
    // No match
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
