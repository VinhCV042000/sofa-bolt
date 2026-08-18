import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CONFIG } from 'src/config-global';
import { DashboardLayout } from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

import { AuthGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

// Overview
const IndexPage = lazy(() => import('src/pages/dashboard'));
const OverviewEcommercePage = lazy(() => import('src/pages/dashboard/ecommerce'));
const OverviewAnalyticsPage = lazy(() => import('src/pages/dashboard/analytics'));
const OverviewBankingPage = lazy(() => import('src/pages/dashboard/banking'));
const OverviewBookingPage = lazy(() => import('src/pages/dashboard/booking'));
const OverviewFilePage = lazy(() => import('src/pages/dashboard/file'));
const OverviewCoursePage = lazy(() => import('src/pages/dashboard/course'));
// Product
const ProductDetailsPage = lazy(() => import('src/pages/dashboard/product/details'));
const ProductListPage = lazy(() => import('src/pages/dashboard/product/list'));
const ProductCreatePage = lazy(() => import('src/pages/dashboard/product/new'));
const ProductEditPage = lazy(() => import('src/pages/dashboard/product/edit'));
// Order
const OrderListPage = lazy(() => import('src/pages/dashboard/order/list'));
const OrderDetailsPage = lazy(() => import('src/pages/dashboard/order/details'));
// Invoice
const InvoiceListPage = lazy(() => import('src/pages/dashboard/invoice/list'));
const InvoiceDetailsPage = lazy(() => import('src/pages/dashboard/invoice/details'));
const InvoiceCreatePage = lazy(() => import('src/pages/dashboard/invoice/new'));
const InvoiceEditPage = lazy(() => import('src/pages/dashboard/invoice/edit'));
// User
const UserProfilePage = lazy(() => import('src/pages/dashboard/user/profile'));
const UserCardsPage = lazy(() => import('src/pages/dashboard/user/cards'));
const UserListPage = lazy(() => import('src/pages/dashboard/user/list'));
const UserAccountPage = lazy(() => import('src/pages/dashboard/user/account'));
const UserCreatePage = lazy(() => import('src/pages/dashboard/user/new'));
const UserEditPage = lazy(() => import('src/pages/dashboard/user/edit'));
// Blog
const BlogPostsPage = lazy(() => import('src/pages/dashboard/post/list'));
const BlogPostPage = lazy(() => import('src/pages/dashboard/post/details'));
const BlogNewPostPage = lazy(() => import('src/pages/dashboard/post/new'));
const BlogEditPostPage = lazy(() => import('src/pages/dashboard/post/edit'));
// Job
const JobDetailsPage = lazy(() => import('src/pages/dashboard/job/details'));
const JobListPage = lazy(() => import('src/pages/dashboard/job/list'));
const JobCreatePage = lazy(() => import('src/pages/dashboard/job/new'));
const JobEditPage = lazy(() => import('src/pages/dashboard/job/edit'));
// Tour
const TourDetailsPage = lazy(() => import('src/pages/dashboard/tour/details'));
const TourListPage = lazy(() => import('src/pages/dashboard/tour/list'));
const TourCreatePage = lazy(() => import('src/pages/dashboard/tour/new'));
const TourEditPage = lazy(() => import('src/pages/dashboard/tour/edit'));
// Sofa1 — Product
const Sofa1ProductListPage = lazy(() => import('src/pages/dashboard/sofa1/product/list'));
const Sofa1ProductCreatePage = lazy(() => import('src/pages/dashboard/sofa1/product/new'));
const Sofa1ProductEditPage = lazy(() => import('src/pages/dashboard/sofa1/product/edit'));
// Sofa1 — Category
const Sofa1CategoryListPage = lazy(() => import('src/pages/dashboard/sofa1/category/list'));
const Sofa1CategoryCreatePage = lazy(() => import('src/pages/dashboard/sofa1/category/new'));
const Sofa1CategoryEditPage = lazy(() => import('src/pages/dashboard/sofa1/category/edit'));
// Sofa1 — Collection
const Sofa1CollectionListPage = lazy(() => import('src/pages/dashboard/sofa1/collection/list'));
const Sofa1CollectionCreatePage = lazy(() => import('src/pages/dashboard/sofa1/collection/new'));
const Sofa1CollectionEditPage = lazy(() => import('src/pages/dashboard/sofa1/collection/edit'));
// Sofa1 — Project
const Sofa1ProjectListPage = lazy(() => import('src/pages/dashboard/sofa1/project/list'));
const Sofa1ProjectCreatePage = lazy(() => import('src/pages/dashboard/sofa1/project/new'));
const Sofa1ProjectEditPage = lazy(() => import('src/pages/dashboard/sofa1/project/edit'));
// Sofa1 — Showroom
const Sofa1ShowroomListPage = lazy(() => import('src/pages/dashboard/sofa1/showroom/list'));
const Sofa1ShowroomCreatePage = lazy(() => import('src/pages/dashboard/sofa1/showroom/new'));
const Sofa1ShowroomEditPage = lazy(() => import('src/pages/dashboard/sofa1/showroom/edit'));
// Sofa1 — Blog
const Sofa1BlogListPage = lazy(() => import('src/pages/dashboard/sofa1/blog/list'));
const Sofa1BlogCreatePage = lazy(() => import('src/pages/dashboard/sofa1/blog/new'));
const Sofa1BlogEditPage = lazy(() => import('src/pages/dashboard/sofa1/blog/edit'));
// Sofa1 — Career
const Sofa1CareerListPage = lazy(() => import('src/pages/dashboard/sofa1/career/list'));
const Sofa1CareerCreatePage = lazy(() => import('src/pages/dashboard/sofa1/career/new'));
const Sofa1CareerEditPage = lazy(() => import('src/pages/dashboard/sofa1/career/edit'));
// Sofa1 — Promotion
const Sofa1PromotionListPage = lazy(() => import('src/pages/dashboard/sofa1/promotion/list'));
const Sofa1PromotionCreatePage = lazy(() => import('src/pages/dashboard/sofa1/promotion/new'));
const Sofa1PromotionEditPage = lazy(() => import('src/pages/dashboard/sofa1/promotion/edit'));
// Sofa1 — Order / Customer / B2B Lead / Contact / Career Application (list-only)
const Sofa1OrderListPage = lazy(() => import('src/pages/dashboard/sofa1/order/list'));
const Sofa1CustomerListPage = lazy(() => import('src/pages/dashboard/sofa1/customer/list'));
const Sofa1B2BLeadListPage = lazy(() => import('src/pages/dashboard/sofa1/b2b-lead/list'));
const Sofa1ContactMessageListPage = lazy(
  () => import('src/pages/dashboard/sofa1/contact-message/list')
);
const Sofa1CareerApplicationListPage = lazy(
  () => import('src/pages/dashboard/sofa1/career-application/list')
);
// File manager
const FileManagerPage = lazy(() => import('src/pages/dashboard/file-manager'));
// App
const ChatPage = lazy(() => import('src/pages/dashboard/chat'));
const MailPage = lazy(() => import('src/pages/dashboard/mail'));
const CalendarPage = lazy(() => import('src/pages/dashboard/calendar'));
const KanbanPage = lazy(() => import('src/pages/dashboard/kanban'));
// Test render page by role
const PermissionDeniedPage = lazy(() => import('src/pages/dashboard/permission'));
// Blank page
const ParamsPage = lazy(() => import('src/pages/dashboard/params'));
const BlankPage = lazy(() => import('src/pages/dashboard/blank'));

// ----------------------------------------------------------------------

const layoutContent = (
  <DashboardLayout>
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </DashboardLayout>
);

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: CONFIG.auth.skip ? <>{layoutContent}</> : <AuthGuard>{layoutContent}</AuthGuard>,
    children: [
      { element: <IndexPage />, index: true },
      { path: 'ecommerce', element: <OverviewEcommercePage /> },
      { path: 'analytics', element: <OverviewAnalyticsPage /> },
      { path: 'banking', element: <OverviewBankingPage /> },
      { path: 'booking', element: <OverviewBookingPage /> },
      { path: 'file', element: <OverviewFilePage /> },
      { path: 'course', element: <OverviewCoursePage /> },
      {
        path: 'user',
        children: [
          { element: <UserProfilePage />, index: true },
          { path: 'profile', element: <UserProfilePage /> },
          { path: 'cards', element: <UserCardsPage /> },
          { path: 'list', element: <UserListPage /> },
          { path: 'new', element: <UserCreatePage /> },
          { path: ':id/edit', element: <UserEditPage /> },
          { path: 'account', element: <UserAccountPage /> },
        ],
      },
      {
        path: 'product',
        children: [
          { element: <ProductListPage />, index: true },
          { path: 'list', element: <ProductListPage /> },
          { path: ':id', element: <ProductDetailsPage /> },
          { path: 'new', element: <ProductCreatePage /> },
          { path: ':id/edit', element: <ProductEditPage /> },
        ],
      },
      {
        path: 'order',
        children: [
          { element: <OrderListPage />, index: true },
          { path: 'list', element: <OrderListPage /> },
          { path: ':id', element: <OrderDetailsPage /> },
        ],
      },
      {
        path: 'invoice',
        children: [
          { element: <InvoiceListPage />, index: true },
          { path: 'list', element: <InvoiceListPage /> },
          { path: ':id', element: <InvoiceDetailsPage /> },
          { path: ':id/edit', element: <InvoiceEditPage /> },
          { path: 'new', element: <InvoiceCreatePage /> },
        ],
      },
      {
        path: 'post',
        children: [
          { element: <BlogPostsPage />, index: true },
          { path: 'list', element: <BlogPostsPage /> },
          { path: ':title', element: <BlogPostPage /> },
          { path: ':title/edit', element: <BlogEditPostPage /> },
          { path: 'new', element: <BlogNewPostPage /> },
        ],
      },
      {
        path: 'job',
        children: [
          { element: <JobListPage />, index: true },
          { path: 'list', element: <JobListPage /> },
          { path: ':id', element: <JobDetailsPage /> },
          { path: 'new', element: <JobCreatePage /> },
          { path: ':id/edit', element: <JobEditPage /> },
        ],
      },
      {
        path: 'tour',
        children: [
          { element: <TourListPage />, index: true },
          { path: 'list', element: <TourListPage /> },
          { path: ':id', element: <TourDetailsPage /> },
          { path: 'new', element: <TourCreatePage /> },
          { path: ':id/edit', element: <TourEditPage /> },
        ],
      },
      {
        path: 'sofa1',
        children: [
          { element: <Sofa1ProductListPage />, index: true },
          {
            path: 'product',
            children: [
              { element: <Sofa1ProductListPage />, index: true },
              { path: 'new', element: <Sofa1ProductCreatePage /> },
              { path: ':id/edit', element: <Sofa1ProductEditPage /> },
            ],
          },
          {
            path: 'category',
            children: [
              { element: <Sofa1CategoryListPage />, index: true },
              { path: 'new', element: <Sofa1CategoryCreatePage /> },
              { path: ':id/edit', element: <Sofa1CategoryEditPage /> },
            ],
          },
          {
            path: 'collection',
            children: [
              { element: <Sofa1CollectionListPage />, index: true },
              { path: 'new', element: <Sofa1CollectionCreatePage /> },
              { path: ':id/edit', element: <Sofa1CollectionEditPage /> },
            ],
          },
          {
            path: 'project',
            children: [
              { element: <Sofa1ProjectListPage />, index: true },
              { path: 'new', element: <Sofa1ProjectCreatePage /> },
              { path: ':id/edit', element: <Sofa1ProjectEditPage /> },
            ],
          },
          {
            path: 'showroom',
            children: [
              { element: <Sofa1ShowroomListPage />, index: true },
              { path: 'new', element: <Sofa1ShowroomCreatePage /> },
              { path: ':id/edit', element: <Sofa1ShowroomEditPage /> },
            ],
          },
          {
            path: 'blog',
            children: [
              { element: <Sofa1BlogListPage />, index: true },
              { path: 'new', element: <Sofa1BlogCreatePage /> },
              { path: ':id/edit', element: <Sofa1BlogEditPage /> },
            ],
          },
          {
            path: 'career',
            children: [
              { element: <Sofa1CareerListPage />, index: true },
              { path: 'new', element: <Sofa1CareerCreatePage /> },
              { path: ':id/edit', element: <Sofa1CareerEditPage /> },
            ],
          },
          {
            path: 'promotion',
            children: [
              { element: <Sofa1PromotionListPage />, index: true },
              { path: 'new', element: <Sofa1PromotionCreatePage /> },
              { path: ':id/edit', element: <Sofa1PromotionEditPage /> },
            ],
          },
          { path: 'order', children: [{ element: <Sofa1OrderListPage />, index: true }] },
          { path: 'customer', children: [{ element: <Sofa1CustomerListPage />, index: true }] },
          { path: 'b2b-lead', children: [{ element: <Sofa1B2BLeadListPage />, index: true }] },
          {
            path: 'contact-message',
            children: [{ element: <Sofa1ContactMessageListPage />, index: true }],
          },
          {
            path: 'career-application',
            children: [{ element: <Sofa1CareerApplicationListPage />, index: true }],
          },
        ],
      },
      { path: 'file-manager', element: <FileManagerPage /> },
      { path: 'mail', element: <MailPage /> },
      { path: 'chat', element: <ChatPage /> },
      { path: 'calendar', element: <CalendarPage /> },
      { path: 'kanban', element: <KanbanPage /> },
      { path: 'permission', element: <PermissionDeniedPage /> },
      { path: 'params', element: <ParamsPage /> },
      { path: 'blank', element: <BlankPage /> },
    ],
  },
];
