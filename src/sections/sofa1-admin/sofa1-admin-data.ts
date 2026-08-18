// SOFA1 ADMIN — cấu hình khu vực quản trị
// ----------------------------------------------------------------------
// Các module có `linked: true` đọc trực tiếp từ src/_mock/_sofa1.ts — cùng
// một nguồn dữ liệu với trang xem công khai (/sofa1, /sofa1/*) và trang
// quản trị CRUD đầy đủ (/dashboard/sofa1/*). Sửa dữ liệu ở _mock/_sofa1.ts
// sẽ phản ánh ở cả ba nơi. Các module không có `linked` là khối minh hoạ
// (chưa có model dữ liệu thật trong hệ thống, ví dụ thuộc tính/biến thể,
// kho vận, SEO kỹ thuật, phân quyền) — được giữ lại làm ví dụ giao diện.
// ----------------------------------------------------------------------

import { paths } from 'src/routes/paths';

import { fDate } from 'src/utils/format-time';

import {
  _sofa1Faqs,
  _sofa1Menus,
  _sofa1Banners,
  _sofa1Sliders,
  _sofa1SeoPages,
  _sofa1CmsBlocks,
  _sofa1StaticPages,
  SOFA1_CMS_STATUS_OPTIONS,
  SOFA1_SEO_STATUS_OPTIONS,
  SOFA1_SLIDER_PAGE_OPTIONS,
  SOFA1_MENU_POSITION_OPTIONS,
  SOFA1_CMS_BLOCK_TYPE_OPTIONS,
} from 'src/_mock/_sofa1-cms';
import {
  _sofa1Orders,
  _sofa1Careers,
  _sofa1Projects,
  _sofa1Products,
  _sofa1B2BLeads,
  _sofa1Showrooms,
  _sofa1BlogPosts,
  _sofa1Customers,
  _sofa1Categories,
  _sofa1Promotions,
  _sofa1Collections,
  _sofa1BlogCategories,
  _sofa1ContactMessages,
  _sofa1CareerApplications,
  SOFA1_LEAD_STATUS_OPTIONS,
  SOFA1_ORDER_STATUS_OPTIONS,
  SOFA1_CAREER_STATUS_OPTIONS,
  SOFA1_PRODUCT_STOCK_OPTIONS,
  SOFA1_CONTACT_STATUS_OPTIONS,
  SOFA1_CUSTOMER_STATUS_OPTIONS,
  SOFA1_PROMOTION_STATUS_OPTIONS,
  SOFA1_APPLICATION_STATUS_OPTIONS,
} from 'src/_mock/_sofa1';

export const SOFA1_ADMIN_ROOT = '/sofa1/admin';

export type Sofa1AdminColumn = { key: string; label: string; type?: 'text' | 'status' | 'money' | 'number' };

export type Sofa1AdminRow = Record<string, string | number> & {
  id?: string;
  editHref?: string;
  /** Đường dẫn tới trang xem công khai tương ứng với chính bản ghi này. */
  viewHref?: string;
};

/** Định nghĩa 1 trường trong form Thêm/Sửa dựng động (dùng cho module CRUD độc lập). */
export type Sofa1CmsFieldDef = {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'number' | 'select' | 'date';
  options?: { value: string; label: string }[];
  required?: boolean;
};

export type Sofa1AdminModule = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  stats: { label: string; value: string; trend?: string }[];
  columns: Sofa1AdminColumn[];
  rows: Sofa1AdminRow[];
  actions?: string[];
  /** Đường dẫn tới trang "Thêm mới" thật (CRUD đầy đủ ở /dashboard/sofa1/*). */
  newHref?: string;
  /** Đường dẫn tới trang quản trị CRUD đầy đủ cho module này (khu /dashboard/sofa1). */
  manageHref?: string;
  /** true = dữ liệu đọc trực tiếp từ src/_mock/_sofa1*.ts (nguồn thống nhất). */
  linked?: boolean;
  /**
   * Khi có: module này dùng form Thêm/Sửa dựng ngay tại /sofa1/admin (không
   * điều hướng sang /dashboard/sofa1) — đúng yêu cầu "trang độc lập, không
   * liên kết đến sofa1/dashboard, chỉ liên kết các trang view".
   */
  crudFields?: Sofa1CmsFieldDef[];
  /** Nhãn số ít cho 1 bản ghi, dùng trong tiêu đề dialog (ví dụ "câu hỏi FAQ"). */
  crudEntityLabel?: string;
  /** Đường dẫn trang xem công khai (view) áp dụng cho toàn bộ module — vd '/sofa1/faq'. */
  publicHref?: string;
};

export type Sofa1AdminGroup = {
  slug: string;
  name: string;
  icon: string;
  modules: Sofa1AdminModule[];
};

const money = (v: number) => v;

function mod(
  slug: string,
  name: string,
  description: string,
  icon: string,
  stats: Sofa1AdminModule['stats'],
  columns: Sofa1AdminColumn[],
  rows: Sofa1AdminRow[],
  actions?: string[],
  linkOpts?: {
    newHref?: string;
    manageHref?: string;
    linked?: boolean;
    crudFields?: Sofa1CmsFieldDef[];
    crudEntityLabel?: string;
    publicHref?: string;
  }
): Sofa1AdminModule {
  return { slug, name, description, icon, stats, columns, rows, actions, ...linkOpts };
}

const STATUS_COL: Sofa1AdminColumn = { key: 'status', label: 'Trạng thái', type: 'status' };

// ----------------------------------------------------------------------
// Helpers dựng module thật từ src/_mock/_sofa1.ts
// ----------------------------------------------------------------------

const optionLabel = (options: { value: string; label: string }[], value: string) =>
  options.find((o) => o.value === value)?.label ?? value;

const publishLabel = (publish: string) => (publish === 'published' ? 'Đã xuất bản' : 'Bản nháp');

const stockLabel = (value: string) => {
  const found = SOFA1_PRODUCT_STOCK_OPTIONS.find((o) => o.value === value);
  if (!found) return value;
  return { 'In stock': 'Còn hàng', 'Low stock': 'Sắp hết', 'Out of stock': 'Hết hàng' }[
    found.label
  ] ?? found.label;
};

function countByPublish<T extends { publish: string }>(items: T[]) {
  const published = items.filter((i) => i.publish === 'published').length;
  return { total: items.length, published, draft: items.length - published };
}

function countByStatus<T extends { status: string }>(items: T[], value: string) {
  return items.filter((i) => i.status === value).length;
}

/**
 * Với các module CRUD độc lập (CMS), cột "status" hiển thị trực tiếp nhãn
 * tiếng Việt (không có API/backend để tách value/label) — nên option của
 * form Thêm/Sửa dùng chính nhãn làm value để không lệch giữa hiển thị và
 * dữ liệu chỉnh sửa.
 */
const statusSelectOptions = (options: { value: string; label: string }[]) =>
  options.map((o) => ({ value: o.label, label: o.label }));

function latestFirst<T extends { createdAt: unknown }>(items: T[], limit = 6): T[] {
  return [...items]
    .sort((a, b) => new Date(b.createdAt as never).getTime() - new Date(a.createdAt as never).getTime())
    .slice(0, limit);
}

const CATEGORIES_MODULE = mod(
  'categories',
  'Danh mục',
  'Danh mục sản phẩm — dữ liệu thật, dùng chung với trang xem và /dashboard/sofa1/category.',
  'solar:folder-with-files-bold-duotone',
  [
    { label: 'Danh mục', value: String(_sofa1Categories.length) },
    {
      label: 'Đã xuất bản',
      value: String(countByPublish(_sofa1Categories).published),
    },
    {
      label: 'Bản nháp',
      value: String(countByPublish(_sofa1Categories).draft),
    },
    {
      label: 'Tổng SP gán',
      value: String(_sofa1Categories.reduce((sum, c) => sum + c.itemCount, 0)),
    },
  ],
  [
    { key: 'name', label: 'Danh mục' },
    { key: 'itemCount', label: 'Sản phẩm', type: 'number' },
    { key: 'updated', label: 'Cập nhật' },
    STATUS_COL,
  ],
  latestFirst(_sofa1Categories, 8).map((c) => ({
    id: c.id,
    name: c.name,
    itemCount: c.itemCount,
    updated: fDate(c.createdAt) ?? '—',
    status: publishLabel(c.publish),
    editHref: paths.dashboard.sofa1.category.edit(c.id),
  })),
  ['Thêm danh mục', 'Quản lý đầy đủ'],
  {
    newHref: paths.dashboard.sofa1.category.new,
    manageHref: paths.dashboard.sofa1.category.root,
    linked: true,
  }
);

const PRODUCTS_MODULE = mod(
  'products',
  'Sản phẩm',
  'Danh sách sản phẩm — dữ liệu thật, dùng chung với trang xem và /dashboard/sofa1/product.',
  'solar:armchair-bold-duotone',
  [
    { label: 'Sản phẩm', value: String(_sofa1Products.length) },
    {
      label: 'Đang bán',
      value: String(countByPublish(_sofa1Products).published),
    },
    {
      label: 'Hết hàng',
      value: String(_sofa1Products.filter((p) => p.inventoryType === 'out of stock').length),
    },
    {
      label: 'Sắp hết hàng',
      value: String(_sofa1Products.filter((p) => p.inventoryType === 'low stock').length),
    },
  ],
  [
    { key: 'sku', label: 'SKU' },
    { key: 'name', label: 'Tên sản phẩm' },
    { key: 'category', label: 'Danh mục' },
    { key: 'price', label: 'Giá bán', type: 'money' },
    { key: 'stock', label: 'Kho' },
    STATUS_COL,
  ],
  latestFirst(_sofa1Products, 8).map((p) => ({
    id: p.id,
    sku: p.sku,
    name: p.name,
    category: _sofa1Categories.find((c) => c.id === p.categoryId)?.name ?? p.categoryId,
    price: p.priceSale || p.price,
    stock: stockLabel(p.inventoryType),
    status: publishLabel(p.publish),
    editHref: paths.dashboard.sofa1.product.edit(p.id),
  })),
  ['Thêm sản phẩm', 'Quản lý đầy đủ'],
  {
    newHref: paths.dashboard.sofa1.product.new,
    manageHref: paths.dashboard.sofa1.product.root,
    linked: true,
  }
);

const COLLECTIONS_MODULE = mod(
  'collections',
  'Bộ sưu tập',
  'Bộ sưu tập sản phẩm theo chủ đề — dữ liệu thật, dùng chung với /dashboard/sofa1/collection.',
  'solar:widget-4-bold-duotone',
  [
    { label: 'Bộ sưu tập', value: String(_sofa1Collections.length) },
    {
      label: 'Đã xuất bản',
      value: String(countByPublish(_sofa1Collections).published),
    },
    {
      label: 'Tổng SP trong BST',
      value: String(_sofa1Collections.reduce((sum, c) => sum + c.productIds.length, 0)),
    },
    { label: 'Cập nhật gần nhất', value: fDate(latestFirst(_sofa1Collections, 1)[0]?.createdAt) ?? '—' },
  ],
  [
    { key: 'name', label: 'Bộ sưu tập' },
    { key: 'displayCount', label: 'Hiển thị' },
    { key: 'products', label: 'SP', type: 'number' },
    STATUS_COL,
  ],
  latestFirst(_sofa1Collections, 8).map((c) => ({
    id: c.id,
    name: c.name,
    displayCount: c.displayCount,
    products: c.productIds.length,
    status: publishLabel(c.publish),
    editHref: paths.dashboard.sofa1.collection.edit(c.id),
  })),
  ['Thêm bộ sưu tập', 'Quản lý đầy đủ'],
  {
    newHref: paths.dashboard.sofa1.collection.new,
    manageHref: paths.dashboard.sofa1.collection.root,
    linked: true,
  }
);

const PROJECTS_MODULE = mod(
  'projects',
  'Dự án',
  'Dự án nội thất tiêu biểu — dữ liệu thật, dùng chung với /dashboard/sofa1/project.',
  'solar:buildings-3-bold-duotone',
  [
    { label: 'Dự án', value: String(_sofa1Projects.length) },
    {
      label: 'Đã xuất bản',
      value: String(countByPublish(_sofa1Projects).published),
    },
    { label: 'Năm gần nhất', value: _sofa1Projects[0]?.year ?? '—' },
    {
      label: 'Loại dự án',
      value: String(new Set(_sofa1Projects.map((p) => p.type)).size),
    },
  ],
  [
    { key: 'name', label: 'Dự án' },
    { key: 'type', label: 'Loại' },
    { key: 'location', label: 'Địa điểm' },
    { key: 'year', label: 'Năm' },
    STATUS_COL,
  ],
  latestFirst(_sofa1Projects, 8).map((p) => ({
    id: p.id,
    name: p.name,
    type: p.type,
    location: p.location,
    year: p.year,
    status: publishLabel(p.publish),
    editHref: paths.dashboard.sofa1.project.edit(p.id),
  })),
  ['Thêm dự án', 'Quản lý đầy đủ'],
  {
    newHref: paths.dashboard.sofa1.project.new,
    manageHref: paths.dashboard.sofa1.project.root,
    linked: true,
  }
);

const SHOWROOMS_MODULE = mod(
  'showrooms',
  'Showroom',
  'Danh sách showroom trưng bày — dữ liệu thật, dùng chung với /dashboard/sofa1/showroom.',
  'solar:shop-2-bold-duotone',
  [
    { label: 'Showroom', value: String(_sofa1Showrooms.length) },
    {
      label: 'Đã xuất bản',
      value: String(countByPublish(_sofa1Showrooms).published),
    },
    {
      label: 'Khu vực',
      value: String(new Set(_sofa1Showrooms.map((s) => s.city)).size),
    },
    { label: 'Cập nhật gần nhất', value: fDate(latestFirst(_sofa1Showrooms, 1)[0]?.createdAt) ?? '—' },
  ],
  [
    { key: 'name', label: 'Showroom' },
    { key: 'city', label: 'Khu vực' },
    { key: 'phone', label: 'Điện thoại' },
    { key: 'hours', label: 'Giờ mở' },
    STATUS_COL,
  ],
  latestFirst(_sofa1Showrooms, 8).map((s) => ({
    id: s.id,
    name: s.name,
    city: s.city,
    phone: s.phone,
    hours: s.openHours,
    status: publishLabel(s.publish),
    editHref: paths.dashboard.sofa1.showroom.edit(s.id),
  })),
  ['Thêm showroom', 'Quản lý đầy đủ'],
  {
    newHref: paths.dashboard.sofa1.showroom.new,
    manageHref: paths.dashboard.sofa1.showroom.root,
    linked: true,
  }
);

const BLOG_REAL_MODULE = mod(
  'blog',
  'Trang blog',
  'Bài viết blog — dữ liệu thật, dùng chung với trang xem /sofa1/blog. Thêm/sửa ngay tại đây.',
  'solar:notebook-bold-duotone',
  [
    { label: 'Bài viết', value: String(_sofa1BlogPosts.length) },
    {
      label: 'Đã xuất bản',
      value: String(countByPublish(_sofa1BlogPosts).published),
    },
    { label: 'Bản nháp', value: String(countByPublish(_sofa1BlogPosts).draft) },
    { label: 'Chuyên mục', value: String(_sofa1BlogCategories.length) },
  ],
  [
    { key: 'title', label: 'Tiêu đề' },
    { key: 'category', label: 'Chuyên mục' },
    { key: 'author', label: 'Tác giả' },
    STATUS_COL,
    { key: 'updated', label: 'Ngày đăng' },
  ],
  latestFirst(_sofa1BlogPosts, 8).map((post) => ({
    id: post.id,
    title: post.title,
    category: optionLabel(
      _sofa1BlogCategories.map((c) => ({ value: c.slug, label: c.label })),
      post.category
    ),
    author: post.author,
    status: publishLabel(post.publish),
    updated: fDate(post.createdAt) ?? '—',
    viewHref: `/sofa1/blog/${post.id}`,
  })),
  ['Viết bài'],
  {
    linked: true,
    publicHref: '/sofa1/blog',
    crudEntityLabel: 'bài viết',
    crudFields: [
      { key: 'title', label: 'Tiêu đề', type: 'text', required: true },
      {
        key: 'category',
        label: 'Chuyên mục',
        type: 'select',
        required: true,
        options: _sofa1BlogCategories.map((c) => ({ value: c.label, label: c.label })),
      },
      { key: 'author', label: 'Tác giả', type: 'text', required: true },
      { key: 'excerpt', label: 'Mô tả ngắn', type: 'textarea' },
      { key: 'status', label: 'Trạng thái', type: 'select', options: statusSelectOptions(SOFA1_CMS_STATUS_OPTIONS) },
    ],
  }
);

const CAREERS_MODULE = mod(
  'careers',
  'Tuyển dụng',
  'Tin tuyển dụng đang đăng — dữ liệu thật, dùng chung với /dashboard/sofa1/career.',
  'solar:case-round-minimalistic-bold-duotone',
  [
    { label: 'Tin tuyển dụng', value: String(_sofa1Careers.length) },
    {
      label: 'Đang tuyển',
      value: String(countByStatus(_sofa1Careers, 'open')),
    },
    { label: 'Đã đóng', value: String(countByStatus(_sofa1Careers, 'closed')) },
    {
      label: 'Phòng ban',
      value: String(new Set(_sofa1Careers.map((c) => c.department)).size),
    },
  ],
  [
    { key: 'title', label: 'Vị trí' },
    { key: 'department', label: 'Phòng ban' },
    { key: 'location', label: 'Địa điểm' },
    { key: 'salary', label: 'Mức lương' },
    STATUS_COL,
  ],
  latestFirst(_sofa1Careers, 8).map((c) => ({
    id: c.id,
    title: c.title,
    department: c.department,
    location: c.location,
    salary: c.salary,
    status: optionLabel(SOFA1_CAREER_STATUS_OPTIONS, c.status),
    editHref: paths.dashboard.sofa1.career.edit(c.id),
  })),
  ['Thêm tin tuyển dụng', 'Quản lý đầy đủ'],
  {
    newHref: paths.dashboard.sofa1.career.new,
    manageHref: paths.dashboard.sofa1.career.root,
    linked: true,
  }
);

const CAREER_APPLICATIONS_MODULE = mod(
  'applications',
  'Đơn ứng tuyển',
  'Hồ sơ ứng tuyển gửi từ trang tuyển dụng — dữ liệu thật.',
  'solar:document-add-bold-duotone',
  [
    { label: 'Hồ sơ', value: String(_sofa1CareerApplications.length) },
    {
      label: 'Mới nộp',
      value: String(countByStatus(_sofa1CareerApplications, 'new')),
    },
    {
      label: 'Đã tuyển',
      value: String(countByStatus(_sofa1CareerApplications, 'hired')),
    },
    {
      label: 'Đang xét duyệt',
      value: String(countByStatus(_sofa1CareerApplications, 'reviewing')),
    },
  ],
  [
    { key: 'candidateName', label: 'Ứng viên' },
    { key: 'careerTitle', label: 'Vị trí ứng tuyển' },
    { key: 'phone', label: 'Điện thoại' },
    STATUS_COL,
    { key: 'updated', label: 'Ngày nộp' },
  ],
  latestFirst(_sofa1CareerApplications, 8).map((a) => ({
    id: a.id,
    candidateName: a.candidateName,
    careerTitle: a.careerTitle,
    phone: a.phone,
    status: optionLabel(SOFA1_APPLICATION_STATUS_OPTIONS, a.status),
    updated: fDate(a.createdAt) ?? '—',
  })),
  undefined,
  { manageHref: paths.dashboard.sofa1.careerApplication.root, linked: true }
);

const PROMOTIONS_MODULE = mod(
  'promotions',
  'Khuyến mãi',
  'Chương trình khuyến mãi dịch vụ — dữ liệu thật, dùng chung với /dashboard/sofa1/promotion.',
  'solar:gift-bold-duotone',
  [
    { label: 'Chương trình', value: String(_sofa1Promotions.length) },
    {
      label: 'Đang áp dụng',
      value: String(countByStatus(_sofa1Promotions, 'active')),
    },
    {
      label: 'Sắp diễn ra',
      value: String(countByStatus(_sofa1Promotions, 'upcoming')),
    },
    {
      label: 'Đã hết hạn',
      value: String(countByStatus(_sofa1Promotions, 'expired')),
    },
  ],
  [
    { key: 'title', label: 'Chương trình' },
    { key: 'service', label: 'Dịch vụ' },
    { key: 'discount', label: 'Ưu đãi' },
    { key: 'validUntil', label: 'Đến hết' },
    STATUS_COL,
  ],
  latestFirst(_sofa1Promotions, 8).map((p) => ({
    id: p.id,
    title: p.title,
    service: p.service,
    discount: `${p.discountPercent}%`,
    validUntil: fDate(p.validUntil) ?? '—',
    status: optionLabel(SOFA1_PROMOTION_STATUS_OPTIONS, p.status),
    editHref: paths.dashboard.sofa1.promotion.edit(p.id),
  })),
  ['Thêm khuyến mãi', 'Quản lý đầy đủ'],
  {
    newHref: paths.dashboard.sofa1.promotion.new,
    manageHref: paths.dashboard.sofa1.promotion.root,
    linked: true,
  }
);

const ORDERS_REAL_MODULE = mod(
  'orders',
  'Đơn hàng',
  'Toàn bộ đơn hàng — dữ liệu thật, dùng chung với /dashboard/sofa1/order.',
  'solar:bill-list-bold-duotone',
  [
    { label: 'Đơn hàng', value: String(_sofa1Orders.length) },
    {
      label: 'Chờ xác nhận',
      value: String(countByStatus(_sofa1Orders, 'pending')),
    },
    {
      label: 'Tổng doanh thu',
      value: `${(
        _sofa1Orders.reduce((sum, o) => sum + o.total, 0) / 1_000_000
      ).toLocaleString('vi-VN', { maximumFractionDigits: 1 })} tr`,
    },
    {
      label: 'Đã hủy',
      value: String(countByStatus(_sofa1Orders, 'cancelled')),
    },
  ],
  [
    { key: 'orderNumber', label: 'Mã đơn' },
    { key: 'customerName', label: 'Khách hàng' },
    { key: 'items', label: 'SL sản phẩm', type: 'number' },
    { key: 'total', label: 'Tổng tiền', type: 'money' },
    STATUS_COL,
  ],
  latestFirst(_sofa1Orders, 8).map((o) => ({
    id: o.id,
    orderNumber: o.orderNumber,
    customerName: o.customerName,
    items: o.items.length,
    total: o.total,
    status: optionLabel(SOFA1_ORDER_STATUS_OPTIONS, o.status),
  })),
  ['Quản lý đầy đủ'],
  { manageHref: paths.dashboard.sofa1.order.root, linked: true }
);

const CUSTOMERS_REAL_MODULE = mod(
  'customers',
  'Khách hàng',
  'Hồ sơ khách hàng — dữ liệu thật, dùng chung với /dashboard/sofa1/customer.',
  'solar:user-id-bold-duotone',
  [
    { label: 'Khách hàng', value: String(_sofa1Customers.length) },
    { label: 'VIP', value: String(countByStatus(_sofa1Customers, 'vip')) },
    {
      label: 'Đang hoạt động',
      value: String(countByStatus(_sofa1Customers, 'active')),
    },
    {
      label: 'Tổng chi tiêu',
      value: `${(
        _sofa1Customers.reduce((sum, c) => sum + c.totalSpent, 0) / 1_000_000_000
      ).toLocaleString('vi-VN', { maximumFractionDigits: 2 })} tỷ`,
    },
  ],
  [
    { key: 'name', label: 'Khách hàng' },
    { key: 'phone', label: 'Điện thoại' },
    { key: 'totalOrders', label: 'Số đơn', type: 'number' },
    { key: 'totalSpent', label: 'Chi tiêu', type: 'money' },
    STATUS_COL,
  ],
  latestFirst(_sofa1Customers, 8).map((c) => ({
    id: c.id,
    name: c.name,
    phone: c.phone,
    totalOrders: c.totalOrders,
    totalSpent: c.totalSpent,
    status: optionLabel(SOFA1_CUSTOMER_STATUS_OPTIONS, c.status),
  })),
  ['Quản lý đầy đủ'],
  { manageHref: paths.dashboard.sofa1.customer.root, linked: true }
);

const LEADS_REAL_MODULE = mod(
  'leads',
  'Khách hàng doanh nghiệp',
  'Yêu cầu tư vấn B2B — dữ liệu thật, dùng chung với /dashboard/sofa1/b2b-lead.',
  'solar:magnet-bold-duotone',
  [
    { label: 'Yêu cầu', value: String(_sofa1B2BLeads.length) },
    { label: 'Mới', value: String(countByStatus(_sofa1B2BLeads, 'new')) },
    {
      label: 'Đã báo giá',
      value: String(countByStatus(_sofa1B2BLeads, 'quoted')),
    },
    { label: 'Thành công', value: String(countByStatus(_sofa1B2BLeads, 'won')) },
  ],
  [
    { key: 'companyName', label: 'Công ty' },
    { key: 'contactName', label: 'Người liên hệ' },
    { key: 'projectType', label: 'Loại dự án' },
    STATUS_COL,
  ],
  latestFirst(_sofa1B2BLeads, 8).map((l) => ({
    id: l.id,
    companyName: l.companyName,
    contactName: l.contactName,
    projectType: l.projectType,
    status: optionLabel(SOFA1_LEAD_STATUS_OPTIONS, l.status),
  })),
  ['Quản lý đầy đủ'],
  { manageHref: paths.dashboard.sofa1.b2bLead.root, linked: true }
);

const CONTACT_MESSAGES_MODULE = mod(
  'contact-messages',
  'Liên hệ',
  'Tin nhắn gửi từ form liên hệ — dữ liệu thật.',
  'solar:letter-unread-bold-duotone',
  [
    { label: 'Tin nhắn', value: String(_sofa1ContactMessages.length) },
    { label: 'Mới', value: String(countByStatus(_sofa1ContactMessages, 'new')) },
    {
      label: 'Đã phản hồi',
      value: String(countByStatus(_sofa1ContactMessages, 'replied')),
    },
    {
      label: 'Lưu trữ',
      value: String(countByStatus(_sofa1ContactMessages, 'archived')),
    },
  ],
  [
    { key: 'name', label: 'Người gửi' },
    { key: 'subject', label: 'Chủ đề' },
    { key: 'phone', label: 'Điện thoại' },
    STATUS_COL,
    { key: 'updated', label: 'Ngày gửi' },
  ],
  latestFirst(_sofa1ContactMessages, 8).map((m) => ({
    id: m.id,
    name: m.name,
    subject: m.subject,
    phone: m.phone,
    status: optionLabel(SOFA1_CONTACT_STATUS_OPTIONS, m.status),
    updated: fDate(m.createdAt) ?? '—',
  })),
  ['Quản lý đầy đủ'],
  { manageHref: paths.dashboard.sofa1.contactMessage.root, linked: true }
);

// ----------------------------------------------------------------------
// CMS
// ----------------------------------------------------------------------

/**
 * Trang tĩnh (home/about/contact/policy/terms): hiển thị các "khối nội
 * dung" thuộc trang đó, đọc thật từ `_sofa1CmsBlocks`. CRUD (thêm/sửa/xoá
 * khối) diễn ra ngay tại /sofa1/admin — không điều hướng sang dashboard;
 * nút "Xem trang công khai" mở đúng trang /sofa1/* tương ứng.
 */
const cmsPage = (slug: 'home' | 'about' | 'contact' | 'policy' | 'terms', name: string, path: string) => {
  const blocks = _sofa1CmsBlocks.filter((b) => b.page === slug);
  const published = blocks.filter((b) => b.status === 'published').length;
  const draft = blocks.filter((b) => b.status === 'draft').length;
  return mod(
    slug,
    name,
    `Quản lý nội dung, bố cục và trạng thái xuất bản cho ${name.toLowerCase()} (${path}).`,
    'solar:document-text-bold-duotone',
    [
      { label: 'Khối nội dung', value: String(blocks.length) },
      { label: 'Đã xuất bản', value: String(published) },
      { label: 'Bản nháp', value: String(draft) },
      { label: 'Tạm ẩn', value: String(blocks.length - published - draft) },
    ],
    [
      { key: 'block', label: 'Khối nội dung' },
      { key: 'type', label: 'Loại' },
      STATUS_COL,
      { key: 'updated', label: 'Cập nhật' },
      { key: 'author', label: 'Người sửa' },
    ],
    latestFirst(blocks, 20).map((b) => ({
      id: b.id,
      block: b.block,
      type: optionLabel(SOFA1_CMS_BLOCK_TYPE_OPTIONS, b.type),
      status: optionLabel(SOFA1_CMS_STATUS_OPTIONS, b.status),
      updated: fDate(b.createdAt) ?? '—',
      author: b.author,
    })),
    ['Thêm khối'],
    {
      linked: true,
      publicHref: path,
      crudEntityLabel: 'khối nội dung',
      crudFields: [
        { key: 'block', label: 'Tên khối nội dung', type: 'text', required: true },
        {
          key: 'type',
          label: 'Loại khối',
          type: 'select',
          required: true,
          options: statusSelectOptions(SOFA1_CMS_BLOCK_TYPE_OPTIONS),
        },
        { key: 'author', label: 'Người sửa', type: 'text', required: true },
        { key: 'status', label: 'Trạng thái', type: 'select', options: statusSelectOptions(SOFA1_CMS_STATUS_OPTIONS) },
      ],
    }
  );
};

const FAQ_MODULE = mod(
  'faq',
  'Trang FAQ',
  'Câu hỏi thường gặp — dữ liệu thật, hiển thị trực tiếp ở /sofa1/faq.',
  'solar:question-circle-bold-duotone',
  [
    { label: 'Câu hỏi', value: String(_sofa1Faqs.length) },
    { label: 'Đã xuất bản', value: String(countByStatus(_sofa1Faqs, 'published')) },
    { label: 'Bản nháp', value: String(countByStatus(_sofa1Faqs, 'draft')) },
    { label: 'Chuyên mục', value: String(new Set(_sofa1Faqs.map((f) => f.category)).size) },
  ],
  [
    { key: 'question', label: 'Câu hỏi' },
    { key: 'category', label: 'Chuyên mục' },
    { key: 'order', label: 'Thứ tự', type: 'number' },
    STATUS_COL,
  ],
  [..._sofa1Faqs]
    .sort((a, b) => a.order - b.order)
    .map((f) => ({
      id: f.id,
      question: f.question,
      answer: f.answer,
      category: f.category,
      order: f.order,
      status: optionLabel(SOFA1_CMS_STATUS_OPTIONS, f.status),
    })),
  ['Thêm câu hỏi'],
  {
    linked: true,
    publicHref: '/sofa1/faq',
    crudEntityLabel: 'câu hỏi FAQ',
    crudFields: [
      { key: 'question', label: 'Câu hỏi', type: 'text', required: true },
      { key: 'answer', label: 'Câu trả lời', type: 'textarea', required: true },
      { key: 'category', label: 'Chuyên mục', type: 'text' },
      { key: 'order', label: 'Thứ tự hiển thị', type: 'number' },
      { key: 'status', label: 'Trạng thái', type: 'select', options: statusSelectOptions(SOFA1_CMS_STATUS_OPTIONS) },
    ],
  }
);

const MENU_MODULE = mod(
  'menu',
  'Menu',
  'Cấu trúc menu header, footer và menu mobile — dữ liệu thật.',
  'solar:hamburger-menu-bold-duotone',
  [
    { label: 'Menu', value: String(_sofa1Menus.length) },
    { label: 'Mục menu', value: String(_sofa1Menus.reduce((sum, m) => sum + m.itemsCount, 0)) },
    { label: 'Đã xuất bản', value: String(countByStatus(_sofa1Menus, 'published')) },
    { label: 'Bản nháp', value: String(countByStatus(_sofa1Menus, 'draft')) },
  ],
  [
    { key: 'name', label: 'Menu' },
    { key: 'position', label: 'Vị trí' },
    { key: 'itemsCount', label: 'Số mục', type: 'number' },
    STATUS_COL,
  ],
  _sofa1Menus.map((m) => ({
    id: m.id,
    name: m.name,
    position: optionLabel(SOFA1_MENU_POSITION_OPTIONS, m.position),
    itemsCount: m.itemsCount,
    status: optionLabel(SOFA1_CMS_STATUS_OPTIONS, m.status),
  })),
  ['Thêm menu'],
  {
    linked: true,
    publicHref: '/sofa1',
    crudEntityLabel: 'menu',
    crudFields: [
      { key: 'name', label: 'Tên menu', type: 'text', required: true },
      {
        key: 'position',
        label: 'Vị trí',
        type: 'select',
        required: true,
        options: statusSelectOptions(SOFA1_MENU_POSITION_OPTIONS),
      },
      { key: 'itemsCount', label: 'Số mục', type: 'number' },
      { key: 'status', label: 'Trạng thái', type: 'select', options: statusSelectOptions(SOFA1_CMS_STATUS_OPTIONS) },
    ],
  }
);

const BANNER_MODULE = mod(
  'banner',
  'Banner',
  'Banner khuyến mãi theo vị trí và lịch hiển thị — dữ liệu thật.',
  'solar:gallery-wide-bold-duotone',
  [
    { label: 'Banner', value: String(_sofa1Banners.length) },
    { label: 'Đang chạy', value: String(countByStatus(_sofa1Banners, 'published')) },
    { label: 'Tạm ẩn', value: String(countByStatus(_sofa1Banners, 'hidden')) },
    { label: 'Vị trí', value: String(new Set(_sofa1Banners.map((b) => b.position)).size) },
  ],
  [
    { key: 'name', label: 'Banner' },
    { key: 'position', label: 'Vị trí' },
    { key: 'schedule', label: 'Lịch chạy' },
    STATUS_COL,
  ],
  _sofa1Banners.map((b) => ({
    id: b.id,
    name: b.name,
    position: b.position,
    schedule: `${b.startDate} – ${b.endDate}`,
    startDate: b.startDate,
    endDate: b.endDate,
    status: optionLabel(SOFA1_CMS_STATUS_OPTIONS, b.status),
  })),
  ['Tạo banner'],
  {
    linked: true,
    publicHref: '/sofa1',
    crudEntityLabel: 'banner',
    crudFields: [
      { key: 'name', label: 'Tên banner', type: 'text', required: true },
      { key: 'position', label: 'Vị trí hiển thị', type: 'text', required: true },
      { key: 'startDate', label: 'Ngày bắt đầu (dd/mm/yyyy)', type: 'text' },
      { key: 'endDate', label: 'Ngày kết thúc (dd/mm/yyyy)', type: 'text' },
      { key: 'status', label: 'Trạng thái', type: 'select', options: statusSelectOptions(SOFA1_CMS_STATUS_OPTIONS) },
    ],
  }
);

const SLIDER_MODULE = mod(
  'slider',
  'Slider',
  'Slideshow trang chủ và trang danh mục — dữ liệu thật.',
  'solar:slider-horizontal-bold-duotone',
  [
    { label: 'Slider', value: String(_sofa1Sliders.length) },
    { label: 'Slide', value: String(_sofa1Sliders.reduce((sum, s) => sum + s.slidesCount, 0)) },
    { label: 'Đã xuất bản', value: String(countByStatus(_sofa1Sliders, 'published')) },
    { label: 'Bản nháp', value: String(countByStatus(_sofa1Sliders, 'draft')) },
  ],
  [
    { key: 'name', label: 'Slider' },
    { key: 'slidesCount', label: 'Số slide', type: 'number' },
    { key: 'page', label: 'Trang áp dụng' },
    STATUS_COL,
  ],
  _sofa1Sliders.map((s) => ({
    id: s.id,
    name: s.name,
    slidesCount: s.slidesCount,
    page: optionLabel(SOFA1_SLIDER_PAGE_OPTIONS, s.page),
    status: optionLabel(SOFA1_CMS_STATUS_OPTIONS, s.status),
  })),
  ['Tạo slider'],
  {
    linked: true,
    publicHref: '/sofa1',
    crudEntityLabel: 'slider',
    crudFields: [
      { key: 'name', label: 'Tên slider', type: 'text', required: true },
      { key: 'slidesCount', label: 'Số slide', type: 'number' },
      {
        key: 'page',
        label: 'Trang áp dụng',
        type: 'select',
        options: statusSelectOptions(SOFA1_SLIDER_PAGE_OPTIONS),
      },
      { key: 'status', label: 'Trạng thái', type: 'select', options: statusSelectOptions(SOFA1_CMS_STATUS_OPTIONS) },
    ],
  }
);

const SEO_MODULE = mod(
  'seo',
  'SEO',
  'Thẻ tiêu đề cho từng trang tĩnh — dữ liệu thật, xem nhanh trang thật từ đây.',
  'solar:magnifer-bold-duotone',
  [
    { label: 'Trang theo dõi', value: String(_sofa1SeoPages.length) },
    { label: 'Tốt', value: String(countByStatus(_sofa1SeoPages, 'good')) },
    { label: 'Thiếu meta', value: String(countByStatus(_sofa1SeoPages, 'missing-meta')) },
    { label: 'Độ dài TB', value: `${Math.round(_sofa1SeoPages.reduce((s, p) => s + p.title.length, 0) / Math.max(_sofa1SeoPages.length, 1))} ký tự` },
  ],
  [
    { key: 'page', label: 'Trang' },
    { key: 'title', label: 'Meta title' },
    { key: 'length', label: 'Độ dài', type: 'number' },
    STATUS_COL,
  ],
  _sofa1SeoPages.map((p) => ({
    id: p.id,
    page: p.page,
    title: p.title,
    length: p.title.length,
    status: optionLabel(SOFA1_SEO_STATUS_OPTIONS, p.status),
    viewHref: p.page,
  })),
  ['Thêm trang SEO'],
  {
    linked: true,
    crudEntityLabel: 'trang SEO',
    crudFields: [
      { key: 'page', label: 'Đường dẫn trang (vd /sofa1/faq)', type: 'text', required: true },
      { key: 'title', label: 'Meta title', type: 'text' },
      { key: 'status', label: 'Trạng thái', type: 'select', options: statusSelectOptions(SOFA1_SEO_STATUS_OPTIONS) },
    ],
  }
);

const STATIC_PAGES_MODULE = mod(
  'static-pages',
  'Trang tĩnh',
  'Các trang nội dung tự tạo ngoài cấu trúc mặc định — dữ liệu thật.',
  'solar:file-text-bold-duotone',
  [
    { label: 'Trang tĩnh', value: String(_sofa1StaticPages.length) },
    { label: 'Đã xuất bản', value: String(countByStatus(_sofa1StaticPages, 'published')) },
    { label: 'Bản nháp', value: String(countByStatus(_sofa1StaticPages, 'draft')) },
    { label: 'Tạm ẩn', value: String(countByStatus(_sofa1StaticPages, 'hidden')) },
  ],
  [
    { key: 'title', label: 'Tiêu đề' },
    { key: 'slug', label: 'Đường dẫn' },
    STATUS_COL,
    { key: 'updated', label: 'Cập nhật' },
  ],
  latestFirst(_sofa1StaticPages, 20).map((p) => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    content: p.content,
    status: optionLabel(SOFA1_CMS_STATUS_OPTIONS, p.status),
    updated: fDate(p.createdAt) ?? '—',
    viewHref: p.slug,
  })),
  ['Tạo trang'],
  {
    linked: true,
    crudEntityLabel: 'trang tĩnh',
    crudFields: [
      { key: 'title', label: 'Tiêu đề', type: 'text', required: true },
      { key: 'slug', label: 'Đường dẫn (vd /sofa1/ten-trang)', type: 'text', required: true },
      { key: 'content', label: 'Nội dung', type: 'textarea' },
      { key: 'status', label: 'Trạng thái', type: 'select', options: statusSelectOptions(SOFA1_CMS_STATUS_OPTIONS) },
    ],
  }
);

const CMS_GROUP: Sofa1AdminGroup = {
  slug: 'cms',
  name: 'CMS',
  icon: 'solar:documents-bold-duotone',
  modules: [
    cmsPage('home', 'Trang chủ', '/sofa1'),
    cmsPage('about', 'Trang giới thiệu', '/sofa1/about'),
    cmsPage('contact', 'Trang liên hệ', '/sofa1/contact'),
    cmsPage('policy', 'Trang chính sách', '/sofa1/policy'),
    cmsPage('terms', 'Trang điều khoản', '/sofa1/policy/terms'),
    FAQ_MODULE,
    BLOG_REAL_MODULE,
    MENU_MODULE,
    BANNER_MODULE,
    SLIDER_MODULE,
    SEO_MODULE,
    STATIC_PAGES_MODULE,
  ],
};

// ----------------------------------------------------------------------
// SẢN PHẨM
// ----------------------------------------------------------------------

const PRODUCT_GROUP: Sofa1AdminGroup = {
  slug: 'catalog',
  name: 'Sản phẩm',
  icon: 'solar:box-bold-duotone',
  modules: [
    CATEGORIES_MODULE,
    PRODUCTS_MODULE,
    mod(
      'attributes',
      'Thuộc tính',
      'Bộ thuộc tính dùng để tạo biến thể: màu, chất liệu, kích thước.',
      'solar:tuning-square-bold-duotone',
      [
        { label: 'Nhóm thuộc tính', value: '9' },
        { label: 'Giá trị', value: '146' },
        { label: 'Dùng cho biến thể', value: '6' },
        { label: 'Bộ lọc mặt tiền', value: '5' },
      ],
      [
        { key: 'name', label: 'Thuộc tính' },
        { key: 'values', label: 'Số giá trị', type: 'number' },
        { key: 'usage', label: 'Áp dụng' },
        STATUS_COL,
      ],
      [
        { name: 'Màu sắc', values: 32, usage: 'Biến thể + Bộ lọc', status: 'Hoạt động' },
        { name: 'Chất liệu', values: 12, usage: 'Biến thể + Bộ lọc', status: 'Hoạt động' },
        { name: 'Kích thước', values: 18, usage: 'Biến thể', status: 'Hoạt động' },
        { name: 'Kiểu chân', values: 6, usage: 'Tuỳ chọn', status: 'Hoạt động' },
        { name: 'Độ cứng đệm', values: 4, usage: 'Tuỳ chọn', status: 'Tạm ẩn' },
      ],
      ['Thêm thuộc tính']
    ),
    mod(
      'variants',
      'Biến thể sản phẩm',
      'Tổ hợp SKU theo màu, chất liệu và kích thước.',
      'solar:layers-bold-duotone',
      [
        { label: 'Biến thể', value: '1.284' },
        { label: 'Có tồn kho', value: '1.120' },
        { label: 'Cảnh báo tồn', value: '38' },
        { label: 'Ngừng bán', value: '26' },
      ],
      [
        { key: 'sku', label: 'SKU biến thể' },
        { key: 'product', label: 'Sản phẩm gốc' },
        { key: 'option', label: 'Tuỳ chọn' },
        { key: 'stock', label: 'Tồn', type: 'number' },
        { key: 'price', label: 'Giá', type: 'money' },
      ],
      [
        { sku: 'SF-ROMA-01-NAU', product: 'Sofa Roma', option: 'Da bò / Nâu / 2m4', stock: 12, price: money(28500000) },
        { sku: 'SF-ROMA-01-DEN', product: 'Sofa Roma', option: 'Da bò / Đen / 2m4', stock: 5, price: money(28900000) },
        { sku: 'SF-LINE-04-BEI', product: 'Sofa Linen Milano', option: 'Linen / Be / 2m2', stock: 24, price: money(18900000) },
        { sku: 'SF-LCOR-12-XAM', product: 'Sofa góc L Aurora', option: 'Nỉ / Xám / 3m0', stock: 0, price: money(32400000) },
      ],
      ['Tạo biến thể']
    ),
    mod(
      'inventory',
      'Kho hàng',
      'Tồn kho theo sản phẩm tại từng kho/showroom.',
      'solar:box-minimalistic-bold-duotone',
      [
        { label: 'Tổng tồn', value: '3.482' },
        { label: 'Sắp hết', value: '38' },
        { label: 'Hết hàng', value: '14' },
        { label: 'Giá trị tồn', value: '18.6 tỷ' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'warehouse', label: 'Kho' },
        { key: 'stock', label: 'Tồn', type: 'number' },
        { key: 'reserved', label: 'Đang giữ', type: 'number' },
        STATUS_COL,
      ],
      [
        { sku: 'SF-ROMA-01-NAU', warehouse: 'Kho Hà Nội', stock: 12, reserved: 3, status: 'Đủ hàng' },
        { sku: 'SF-LINE-04-BEI', warehouse: 'Kho HCM', stock: 24, reserved: 6, status: 'Đủ hàng' },
        { sku: 'SF-LCOR-12-XAM', warehouse: 'Kho HCM', stock: 0, reserved: 0, status: 'Hết hàng' },
        { sku: 'SF-BED-07-XANH', warehouse: 'Kho Đà Nẵng', stock: 4, reserved: 2, status: 'Sắp hết' },
      ],
      ['Nhập kho', 'Kiểm kê']
    ),
    mod(
      'pricing',
      'Giá bán',
      'Bảng giá niêm yết, giá khuyến mãi và giá đại lý.',
      'solar:tag-price-bold-duotone',
      [
        { label: 'Bảng giá', value: '5' },
        { label: 'SP đang giảm giá', value: '64' },
        { label: 'Giảm trung bình', value: '18%' },
        { label: 'Biên lợi nhuận', value: '34%', trend: '+2%' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'list', label: 'Giá niêm yết', type: 'money' },
        { key: 'sale', label: 'Giá bán', type: 'money' },
        { key: 'dealer', label: 'Giá đại lý', type: 'money' },
        STATUS_COL,
      ],
      [
        { sku: 'SF-ROMA-01', list: money(36000000), sale: money(28500000), dealer: money(25200000), status: 'Đang giảm' },
        { sku: 'SF-LINE-04', list: money(21500000), sale: money(18900000), dealer: money(16600000), status: 'Đang giảm' },
        { sku: 'SF-BED-07', list: money(15200000), sale: money(15200000), dealer: money(13400000), status: 'Giá gốc' },
        { sku: 'SF-REC-03', list: money(41800000), sale: money(41800000), dealer: money(37100000), status: 'Giá gốc' },
      ],
      ['Tạo bảng giá']
    ),
  ],
};

// ----------------------------------------------------------------------
// NỘI DUNG & SHOWROOM (bộ sưu tập, dự án, showroom — dữ liệu thật)
// ----------------------------------------------------------------------

const CONTENT_GROUP: Sofa1AdminGroup = {
  slug: 'content',
  name: 'Nội dung & Showroom',
  icon: 'solar:gallery-wide-bold-duotone',
  modules: [COLLECTIONS_MODULE, PROJECTS_MODULE, SHOWROOMS_MODULE],
};

// ----------------------------------------------------------------------
// NHÂN SỰ (tuyển dụng, đơn ứng tuyển — dữ liệu thật)
// ----------------------------------------------------------------------

const HR_GROUP: Sofa1AdminGroup = {
  slug: 'hr',
  name: 'Nhân sự',
  icon: 'solar:case-round-minimalistic-bold-duotone',
  modules: [CAREERS_MODULE, CAREER_APPLICATIONS_MODULE],
};

// ----------------------------------------------------------------------
// KHO HÀNG (nhóm riêng)
// ----------------------------------------------------------------------

const WAREHOUSE_GROUP: Sofa1AdminGroup = {
  slug: 'warehouse',
  name: 'Kho hàng',
  icon: 'solar:warehouse-bold-duotone',
  modules: [
    mod(
      'overview',
      'Tổng quan kho',
      'Tình trạng tồn kho toàn hệ thống theo từng kho và showroom.',
      'solar:chart-square-bold-duotone',
      [
        { label: 'Kho', value: '6' },
        { label: 'Tổng tồn', value: '3.482' },
        { label: 'Đơn chờ xuất', value: '58' },
        { label: 'Tỷ lệ lấp đầy', value: '72%' },
      ],
      [
        { key: 'warehouse', label: 'Kho' },
        { key: 'city', label: 'Khu vực' },
        { key: 'stock', label: 'Tồn', type: 'number' },
        { key: 'fill', label: 'Lấp đầy' },
        STATUS_COL,
      ],
      [
        { warehouse: 'Kho trung tâm Hà Nội', city: 'Hà Nội', stock: 1280, fill: '78%', status: 'Hoạt động' },
        { warehouse: 'Kho Bình Dương', city: 'HCM', stock: 1104, fill: '81%', status: 'Hoạt động' },
        { warehouse: 'Kho Đà Nẵng', city: 'Đà Nẵng', stock: 512, fill: '54%', status: 'Hoạt động' },
        { warehouse: 'Kho ký gửi đại lý', city: 'Toàn quốc', stock: 586, fill: '63%', status: 'Hoạt động' },
      ],
      ['Thêm kho']
    ),
    mod(
      'receipts',
      'Nhập – Xuất kho',
      'Phiếu nhập từ nhà máy và phiếu xuất giao khách.',
      'solar:import-bold-duotone',
      [
        { label: 'Phiếu tháng này', value: '186' },
        { label: 'Chờ duyệt', value: '9' },
        { label: 'Giá trị nhập', value: '4.2 tỷ' },
        { label: 'Giá trị xuất', value: '5.1 tỷ' },
      ],
      [
        { key: 'code', label: 'Mã phiếu' },
        { key: 'type', label: 'Loại' },
        { key: 'warehouse', label: 'Kho' },
        { key: 'value', label: 'Giá trị', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'PN-2608-014', type: 'Nhập', warehouse: 'Kho Hà Nội', value: money(482000000), status: 'Hoàn tất' },
        { code: 'PX-2608-092', type: 'Xuất', warehouse: 'Kho HCM', value: money(128500000), status: 'Hoàn tất' },
        { code: 'PN-2608-015', type: 'Nhập', warehouse: 'Kho Đà Nẵng', value: money(96000000), status: 'Chờ duyệt' },
        { code: 'PX-2608-093', type: 'Xuất', warehouse: 'Kho Hà Nội', value: money(28500000), status: 'Đang xử lý' },
      ],
      ['Tạo phiếu nhập', 'Tạo phiếu xuất']
    ),
    mod(
      'transfers',
      'Chuyển kho & Kiểm kê',
      'Điều chuyển hàng giữa các kho và biên bản kiểm kê định kỳ.',
      'solar:transfer-horizontal-bold-duotone',
      [
        { label: 'Lệnh chuyển', value: '32' },
        { label: 'Đang vận chuyển', value: '7' },
        { label: 'Lệch kiểm kê', value: '3' },
        { label: 'Kiểm kê gần nhất', value: '31/07' },
      ],
      [
        { key: 'code', label: 'Mã lệnh' },
        { key: 'from', label: 'Từ kho' },
        { key: 'to', label: 'Đến kho' },
        { key: 'items', label: 'Số món', type: 'number' },
        STATUS_COL,
      ],
      [
        { code: 'CK-0812', from: 'Kho HCM', to: 'Kho Đà Nẵng', items: 18, status: 'Đang vận chuyển' },
        { code: 'CK-0811', from: 'Kho Hà Nội', to: 'Showroom Cầu Giấy', items: 6, status: 'Hoàn tất' },
        { code: 'KK-0803', from: 'Kho Bình Dương', to: '—', items: 420, status: 'Lệch 3 món' },
      ],
      ['Tạo lệnh chuyển', 'Mở kiểm kê']
    ),
  ],
};

// ----------------------------------------------------------------------
// ĐƠN HÀNG
// ----------------------------------------------------------------------

const ORDER_GROUP: Sofa1AdminGroup = {
  slug: 'orders',
  name: 'Đơn hàng',
  icon: 'solar:cart-large-2-bold-duotone',
  modules: [
    ORDERS_REAL_MODULE,
    mod(
      'payments',
      'Thanh toán',
      'Giao dịch thanh toán, đối soát cổng và trả góp.',
      'solar:card-transfer-bold-duotone',
      [
        { label: 'Giao dịch tháng', value: '512' },
        { label: 'Thành công', value: '96.2%' },
        { label: 'Chờ đối soát', value: '18' },
        { label: 'Trả góp', value: '74 đơn' },
      ],
      [
        { key: 'txn', label: 'Mã giao dịch' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'method', label: 'Phương thức' },
        { key: 'amount', label: 'Số tiền', type: 'money' },
        STATUS_COL,
      ],
      [
        { txn: 'TXN-88213', order: 'SF-26081201', method: 'VNPay', amount: money(28500000), status: 'Thành công' },
        { txn: 'TXN-88210', order: 'SF-26081198', method: 'Chuyển khoản', amount: money(41800000), status: 'Thành công' },
        { txn: 'TXN-88208', order: 'SF-26081195', method: 'Công nợ đại lý', amount: money(186000000), status: 'Chờ đối soát' },
        { txn: 'TXN-88201', order: 'SF-26081190', method: 'Thẻ quốc tế', amount: money(18900000), status: 'Thất bại' },
      ],
      ['Đối soát']
    ),
    mod(
      'shipping',
      'Vận chuyển',
      'Điều phối giao lắp, đối tác vận chuyển và lịch lắp đặt.',
      'solar:delivery-bold-duotone',
      [
        { label: 'Đơn đang giao', value: '58' },
        { label: 'Giao đúng hẹn', value: '94%' },
        { label: 'Đội lắp đặt', value: '12' },
        { label: 'Phí VC tháng', value: '182 tr' },
      ],
      [
        { key: 'code', label: 'Vận đơn' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'carrier', label: 'Đơn vị' },
        { key: 'eta', label: 'Dự kiến' },
        STATUS_COL,
      ],
      [
        { code: 'VD-40112', order: 'SF-26081201', carrier: 'Đội xe nội bộ', eta: '16/08/2026', status: 'Đang giao' },
        { code: 'VD-40109', order: 'SF-26081198', carrier: 'Đội xe nội bộ', eta: '12/08/2026', status: 'Đã giao' },
        { code: 'VD-40105', order: 'SF-26081195', carrier: 'Nhất Tín Logistics', eta: '20/08/2026', status: 'Chờ lấy hàng' },
      ],
      ['Tạo vận đơn']
    ),
    mod(
      'refunds',
      'Hoàn tiền',
      'Yêu cầu hoàn tiền và tiến trình xử lý.',
      'solar:money-bag-bold-duotone',
      [
        { label: 'Yêu cầu tháng', value: '14' },
        { label: 'Đã hoàn', value: '11' },
        { label: 'Giá trị hoàn', value: '164 tr' },
        { label: 'Thời gian TB', value: '3.2 ngày' },
      ],
      [
        { key: 'code', label: 'Mã yêu cầu' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'reason', label: 'Lý do' },
        { key: 'amount', label: 'Số tiền', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'HT-2608-04', order: 'SF-26081190', reason: 'Khách huỷ đơn', amount: money(18900000), status: 'Đã hoàn' },
        { code: 'HT-2608-05', order: 'SF-26081152', reason: 'Sai màu vải', amount: money(6500000), status: 'Đang xử lý' },
        { code: 'HT-2608-06', order: 'SF-26081140', reason: 'Giao trễ hẹn', amount: money(1200000), status: 'Chờ duyệt' },
      ],
      ['Duyệt hoàn tiền']
    ),
    mod(
      'returns',
      'Đổi trả',
      'Yêu cầu đổi/trả sản phẩm và tình trạng hàng hoàn.',
      'solar:restart-bold-duotone',
      [
        { label: 'Yêu cầu tháng', value: '9' },
        { label: 'Tỷ lệ đổi trả', value: '1.8%' },
        { label: 'Đang thu hồi', value: '3' },
        { label: 'Tái nhập kho', value: '5' },
      ],
      [
        { key: 'code', label: 'Mã yêu cầu' },
        { key: 'product', label: 'Sản phẩm' },
        { key: 'type', label: 'Loại' },
        { key: 'reason', label: 'Lý do' },
        STATUS_COL,
      ],
      [
        { code: 'DT-2608-02', product: 'Sofa Linen Milano', type: 'Đổi màu', reason: 'Không hợp nội thất', status: 'Đang thu hồi' },
        { code: 'DT-2608-03', product: 'Sofa Roma', type: 'Trả hàng', reason: 'Lỗi đường may', status: 'Đã tái nhập' },
        { code: 'DT-2608-04', product: 'Sofa giường Nordic', type: 'Đổi size', reason: 'Không vừa phòng', status: 'Chờ duyệt' },
      ],
      ['Tạo yêu cầu']
    ),
  ],
};

// ----------------------------------------------------------------------
// CRM
// ----------------------------------------------------------------------

const CRM_GROUP: Sofa1AdminGroup = {
  slug: 'crm',
  name: 'CRM',
  icon: 'solar:users-group-rounded-bold-duotone',
  modules: [
    CUSTOMERS_REAL_MODULE,
    LEADS_REAL_MODULE,
    CONTACT_MESSAGES_MODULE,
    mod(
      'purchase-history',
      'Lịch sử mua hàng',
      'Dòng thời gian giao dịch của từng khách hàng.',
      'solar:history-bold-duotone',
      [
        { label: 'Giao dịch', value: '18.240' },
        { label: 'Khách mua lại', value: '38%' },
        { label: 'Chu kỳ mua lại', value: '14 tháng' },
        { label: 'Đơn/khách', value: '1.5' },
      ],
      [
        { key: 'customer', label: 'Khách hàng' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'date', label: 'Ngày mua' },
        { key: 'total', label: 'Giá trị', type: 'money' },
        STATUS_COL,
      ],
      [
        { customer: 'Nguyễn Thu Hà', order: 'SF-26081201', date: '12/08/2026', total: money(28500000), status: 'Đang giao' },
        { customer: 'Nguyễn Thu Hà', order: 'SF-25110432', date: '04/11/2025', total: money(56000000), status: 'Hoàn tất' },
        { customer: 'Trần Minh Quân', order: 'SF-26081198', date: '11/08/2026', total: money(41800000), status: 'Hoàn tất' },
      ]
    ),
    mod(
      'care',
      'Chăm sóc khách hàng',
      'Ticket, lịch gọi lại, khảo sát hài lòng và bảo hành.',
      'solar:chat-round-call-bold-duotone',
      [
        { label: 'Ticket mở', value: '38' },
        { label: 'Thời gian phản hồi', value: '42 phút' },
        { label: 'CSAT', value: '4.7/5', trend: '+0.2' },
        { label: 'Bảo hành đang xử lý', value: '11' },
      ],
      [
        { key: 'ticket', label: 'Ticket' },
        { key: 'customer', label: 'Khách hàng' },
        { key: 'topic', label: 'Chủ đề' },
        { key: 'agent', label: 'Nhân viên' },
        STATUS_COL,
      ],
      [
        { ticket: 'TK-9021', customer: 'Lê Hoàng Nam', topic: 'Hoàn tiền đơn huỷ', agent: 'Thu Hà', status: 'Đang xử lý' },
        { ticket: 'TK-9018', customer: 'Nguyễn Thu Hà', topic: 'Đặt lịch giao lắp', agent: 'Ngọc Anh', status: 'Đã đóng' },
        { ticket: 'TK-9015', customer: 'CT TNHH An Phát', topic: 'Bảo hành khung gỗ', agent: 'Minh Quân', status: 'Chờ khách phản hồi' },
      ],
      ['Tạo ticket']
    ),
  ],
};

// ----------------------------------------------------------------------
// MARKETING
// ----------------------------------------------------------------------

const MARKETING_GROUP: Sofa1AdminGroup = {
  slug: 'marketing',
  name: 'Marketing',
  icon: 'solar:megaphone-bold-duotone',
  modules: [
    PROMOTIONS_MODULE,
    mod(
      'email',
      'Email Marketing',
      'Chiến dịch email, kịch bản tự động và hiệu quả gửi.',
      'solar:letter-bold-duotone',
      [
        { label: 'Chiến dịch', value: '24' },
        { label: 'Tỷ lệ mở', value: '38.2%', trend: '+3.1%' },
        { label: 'Tỷ lệ click', value: '6.8%' },
        { label: 'Doanh thu quy đổi', value: '820 tr' },
      ],
      [
        { key: 'campaign', label: 'Chiến dịch' },
        { key: 'segment', label: 'Tệp gửi' },
        { key: 'sent', label: 'Đã gửi', type: 'number' },
        { key: 'open', label: 'Tỷ lệ mở' },
        STATUS_COL,
      ],
      [
        { campaign: 'Sale tháng 8 – 30%', segment: 'Toàn bộ khách', sent: 12480, open: '41%', status: 'Đã gửi' },
        { campaign: 'Bộ sưu tập Linen mới', segment: 'Quan tâm sofa vải', sent: 3240, open: '46%', status: 'Đã gửi' },
        { campaign: 'Nhắc giỏ hàng bỏ quên', segment: 'Tự động', sent: 862, open: '52%', status: 'Đang chạy' },
        { campaign: 'Chúc mừng sinh nhật', segment: 'Tự động', sent: 214, open: '58%', status: 'Đang chạy' },
      ],
      ['Tạo chiến dịch']
    ),
    mod(
      'sms',
      'SMS Marketing',
      'Tin nhắn thương hiệu, OTP và chăm sóc sau bán.',
      'solar:chat-square-code-bold-duotone',
      [
        { label: 'Tin đã gửi', value: '48.2K' },
        { label: 'Tỷ lệ nhận', value: '98.4%' },
        { label: 'Chi phí tháng', value: '32 tr' },
        { label: 'Brandname', value: 'SOFA1' },
      ],
      [
        { key: 'campaign', label: 'Chiến dịch' },
        { key: 'segment', label: 'Tệp gửi' },
        { key: 'sent', label: 'Đã gửi', type: 'number' },
        { key: 'cost', label: 'Chi phí', type: 'money' },
        STATUS_COL,
      ],
      [
        { campaign: 'Flash sale cuối tuần', segment: 'Khách HN + HCM', sent: 18400, cost: money(12880000), status: 'Đã gửi' },
        { campaign: 'Nhắc lịch giao lắp', segment: 'Tự động', sent: 486, cost: money(340000), status: 'Đang chạy' },
        { campaign: 'Ưu đãi khách VIP', segment: 'Hạng Vàng', sent: 312, cost: money(218000), status: 'Lên lịch' },
      ],
      ['Tạo chiến dịch SMS']
    ),
    mod(
      'push',
      'Push Notification',
      'Thông báo đẩy web/app theo hành vi người dùng.',
      'solar:bell-bing-bold-duotone',
      [
        { label: 'Người đăng ký', value: '26.4K' },
        { label: 'Tỷ lệ click', value: '4.2%' },
        { label: 'Thông báo tháng', value: '18' },
        { label: 'Huỷ đăng ký', value: '0.8%' },
      ],
      [
        { key: 'title', label: 'Thông báo' },
        { key: 'trigger', label: 'Kích hoạt' },
        { key: 'reach', label: 'Tiếp cận', type: 'number' },
        { key: 'ctr', label: 'CTR' },
        STATUS_COL,
      ],
      [
        { title: 'Giảm 30% sofa da', trigger: 'Thủ công', reach: 24800, ctr: '5.1%', status: 'Đã gửi' },
        { title: 'Sản phẩm bạn xem đã giảm giá', trigger: 'Hành vi', reach: 3620, ctr: '9.4%', status: 'Đang chạy' },
        { title: 'Showroom mới Đà Nẵng', trigger: 'Vị trí', reach: 1240, ctr: '3.2%', status: 'Lên lịch' },
      ],
      ['Tạo thông báo']
    ),
    mod(
      'coupon',
      'Coupon',
      'Mã giảm giá, điều kiện áp dụng và giới hạn sử dụng.',
      'solar:ticket-sale-bold-duotone',
      [
        { label: 'Mã đang chạy', value: '16' },
        { label: 'Lượt dùng', value: '2.184' },
        { label: 'Giá trị giảm', value: '486 tr' },
        { label: 'Tỷ lệ dùng', value: '34%' },
      ],
      [
        { key: 'code', label: 'Mã' },
        { key: 'value', label: 'Ưu đãi' },
        { key: 'condition', label: 'Điều kiện' },
        { key: 'used', label: 'Đã dùng', type: 'number' },
        STATUS_COL,
      ],
      [
        { code: 'SOFA30', value: 'Giảm 30%', condition: 'Đơn từ 20 triệu', used: 842, status: 'Đang chạy' },
        { code: 'FREESHIP', value: 'Miễn phí giao lắp', condition: 'Nội thành HN/HCM', used: 1120, status: 'Đang chạy' },
        { code: 'VIP5', value: 'Giảm 5 triệu', condition: 'Khách hạng Vàng', used: 96, status: 'Đang chạy' },
        { code: 'JULY20', value: 'Giảm 20%', condition: 'Đơn từ 10 triệu', used: 126, status: 'Hết hạn' },
      ],
      ['Tạo coupon']
    ),
    mod(
      'affiliate',
      'Affiliate',
      'Cộng tác viên, hoa hồng và thanh toán đối soát.',
      'solar:hand-money-bold-duotone',
      [
        { label: 'Cộng tác viên', value: '284' },
        { label: 'Đơn giới thiệu', value: '412' },
        { label: 'Hoa hồng tháng', value: '312 tr' },
        { label: 'Tỷ lệ hoa hồng', value: '6%' },
      ],
      [
        { key: 'partner', label: 'Cộng tác viên' },
        { key: 'channel', label: 'Kênh' },
        { key: 'orders', label: 'Đơn', type: 'number' },
        { key: 'commission', label: 'Hoa hồng', type: 'money' },
        STATUS_COL,
      ],
      [
        { partner: 'Nội Thất Review', channel: 'YouTube', orders: 86, commission: money(96400000), status: 'Đang hợp tác' },
        { partner: 'Homey Blog', channel: 'Blog', orders: 42, commission: money(38200000), status: 'Đang hợp tác' },
        { partner: 'Décor Tips', channel: 'TikTok', orders: 31, commission: money(24800000), status: 'Chờ đối soát' },
      ],
      ['Mời cộng tác viên']
    ),
  ],
};

// ----------------------------------------------------------------------
// ANALYTICS
// ----------------------------------------------------------------------

const ANALYTICS_GROUP: Sofa1AdminGroup = {
  slug: 'analytics',
  name: 'Analytics',
  icon: 'solar:chart-2-bold-duotone',
  modules: [
    mod(
      'revenue',
      'Doanh thu',
      'Doanh thu theo thời gian, kênh bán và khu vực.',
      'solar:dollar-minimalistic-bold-duotone',
      [
        { label: 'Doanh thu tháng', value: '6.8 tỷ', trend: '+11%' },
        { label: 'Lợi nhuận gộp', value: '2.3 tỷ' },
        { label: 'Đơn hàng', value: '486' },
        { label: 'AOV', value: '14.0 tr', trend: '+3%' },
      ],
      [
        { key: 'channel', label: 'Kênh bán' },
        { key: 'orders', label: 'Đơn', type: 'number' },
        { key: 'revenue', label: 'Doanh thu', type: 'money' },
        { key: 'share', label: 'Tỷ trọng' },
        { key: 'growth', label: 'Tăng trưởng' },
      ],
      [
        { channel: 'Website', orders: 214, revenue: money(2840000000), share: '42%', growth: '+16%' },
        { channel: 'Showroom', orders: 168, revenue: money(2410000000), share: '35%', growth: '+6%' },
        { channel: 'Đại lý B2B', orders: 64, revenue: money(1320000000), share: '19%', growth: '+12%' },
        { channel: 'Sàn TMĐT', orders: 40, revenue: money(230000000), share: '4%', growth: '-3%' },
      ]
    ),
    mod(
      'best-sellers',
      'Sản phẩm bán chạy',
      'Xếp hạng sản phẩm theo doanh số và tồn kho tương ứng.',
      'solar:medal-star-bold-duotone',
      [
        { label: 'SP bán chạy', value: '38' },
        { label: 'Top 10 đóng góp', value: '46%' },
        { label: 'SP không bán được', value: '24' },
        { label: 'Vòng quay tồn', value: '4.2' },
      ],
      [
        { key: 'product', label: 'Sản phẩm' },
        { key: 'sold', label: 'Đã bán', type: 'number' },
        { key: 'revenue', label: 'Doanh thu', type: 'money' },
        { key: 'stock', label: 'Tồn', type: 'number' },
      ],
      [
        { product: 'Sofa Roma da bò nâu', sold: 86, revenue: money(2451000000), stock: 12 },
        { product: 'Sofa Linen Milano', sold: 74, revenue: money(1398600000), stock: 24 },
        { product: 'Sofa góc L Aurora', sold: 52, revenue: money(1684800000), stock: 0 },
        { product: 'Sofa giường Nordic', sold: 48, revenue: money(729600000), stock: 4 },
      ]
    ),
    mod(
      'traffic',
      'Nguồn truy cập',
      'Phân bổ lưu lượng theo kênh và chất lượng phiên.',
      'solar:global-bold-duotone',
      [
        { label: 'Phiên tháng', value: '284K', trend: '+9%' },
        { label: 'Người dùng mới', value: '68%' },
        { label: 'Thời gian TB', value: '3:12' },
        { label: 'Tỷ lệ thoát', value: '42%' },
      ],
      [
        { key: 'source', label: 'Nguồn' },
        { key: 'sessions', label: 'Phiên', type: 'number' },
        { key: 'bounce', label: 'Thoát' },
        { key: 'conversion', label: 'Chuyển đổi' },
      ],
      [
        { source: 'Organic Search', sessions: 128400, bounce: '38%', conversion: '2.4%' },
        { source: 'Paid Social', sessions: 62800, bounce: '48%', conversion: '1.6%' },
        { source: 'Direct', sessions: 48200, bounce: '35%', conversion: '3.1%' },
        { source: 'Referral', sessions: 24600, bounce: '44%', conversion: '1.9%' },
        { source: 'Email', sessions: 19800, bounce: '29%', conversion: '4.8%' },
      ]
    ),
    mod(
      'behavior',
      'Hành vi khách hàng',
      'Luồng xem trang, tìm kiếm nội bộ và tương tác sản phẩm.',
      'solar:cursor-bold-duotone',
      [
        { label: 'Trang/phiên', value: '4.6' },
        { label: 'Thêm giỏ', value: '18.2K' },
        { label: 'Bỏ giỏ', value: '68%' },
        { label: 'Xem 360°', value: '9.4K' },
      ],
      [
        { key: 'step', label: 'Bước hành trình' },
        { key: 'users', label: 'Người dùng', type: 'number' },
        { key: 'drop', label: 'Rời bỏ' },
        { key: 'time', label: 'Thời gian TB' },
      ],
      [
        { step: 'Xem trang chủ', users: 284000, drop: '22%', time: '0:48' },
        { step: 'Xem danh mục', users: 221000, drop: '31%', time: '1:22' },
        { step: 'Xem chi tiết SP', users: 152000, drop: '46%', time: '2:36' },
        { step: 'Thêm vào giỏ', users: 18200, drop: '68%', time: '0:22' },
        { step: 'Hoàn tất thanh toán', users: 5800, drop: '—', time: '3:04' },
      ]
    ),
    mod(
      'conversion',
      'Tỷ lệ chuyển đổi',
      'Phễu chuyển đổi theo kênh, thiết bị và chiến dịch.',
      'solar:filter-bold-duotone',
      [
        { label: 'CR tổng', value: '2.04%', trend: '+0.3%' },
        { label: 'CR mobile', value: '1.62%' },
        { label: 'CR desktop', value: '2.86%' },
        { label: 'CR có tư vấn', value: '11.4%' },
      ],
      [
        { key: 'segment', label: 'Phân khúc' },
        { key: 'sessions', label: 'Phiên', type: 'number' },
        { key: 'orders', label: 'Đơn', type: 'number' },
        { key: 'cr', label: 'CR' },
      ],
      [
        { segment: 'Mobile – Organic', sessions: 96400, orders: 1562, cr: '1.62%' },
        { segment: 'Desktop – Organic', sessions: 32000, orders: 915, cr: '2.86%' },
        { segment: 'Email remarketing', sessions: 19800, orders: 950, cr: '4.80%' },
        { segment: 'Tư vấn showroom', sessions: 4200, orders: 479, cr: '11.4%' },
      ]
    ),
  ],
};

// ----------------------------------------------------------------------
// SEO
// ----------------------------------------------------------------------

const seoPage = (slug: string, name: string, sample: string) =>
  mod(
    slug,
    name,
    `Tối ưu tiêu đề, mô tả, heading và liên kết nội bộ cho ${name.toLowerCase()}.`,
    'solar:graph-up-bold-duotone',
    [
      { label: 'URL theo dõi', value: '48' },
      { label: 'Điểm trung bình', value: '88/100' },
      { label: 'Thiếu meta', value: '3' },
      { label: 'Từ khoá top 10', value: '26' },
    ],
    [
      { key: 'url', label: 'URL' },
      { key: 'title', label: 'Meta title' },
      { key: 'keyword', label: 'Từ khoá chính' },
      { key: 'position', label: 'Thứ hạng', type: 'number' },
      STATUS_COL,
    ],
    [
      { url: sample, title: `${name} – SOFA1`, keyword: 'sofa cao cấp', position: 4, status: 'Tốt' },
      { url: `${sample}/linen`, title: 'Sofa vải linen cao cấp', keyword: 'sofa vải linen', position: 7, status: 'Tốt' },
      { url: `${sample}/da-bo`, title: '', keyword: 'sofa da bò', position: 18, status: 'Thiếu meta' },
      { url: `${sample}/goc-l`, title: 'Sofa góc L hiện đại', keyword: 'sofa góc l', position: 11, status: 'Cần cải thiện' },
    ],
    ['Quét SEO', 'Xuất báo cáo']
  );

const SEO_GROUP: Sofa1AdminGroup = {
  slug: 'seo',
  name: 'SEO',
  icon: 'solar:graph-new-bold-duotone',
  modules: [
    seoPage('category', 'Trang danh mục', '/sofa1/products/category'),
    seoPage('product', 'Trang sản phẩm', '/sofa1/products'),
    seoPage('collection', 'Trang bộ sưu tập', '/sofa1/collections'),
    seoPage('project', 'Trang dự án', '/sofa1/projects'),
    seoPage('showroom', 'Trang showroom', '/sofa1/showrooms'),
    seoPage('blog', 'Trang blog', '/sofa1/blog'),
    seoPage('brand', 'Trang thương hiệu', '/sofa1/about'),
    mod(
      'sitemap',
      'Sitemap',
      'Sơ đồ site XML gửi tới công cụ tìm kiếm.',
      'solar:sitemap-bold-duotone',
      [
        { label: 'URL trong sitemap', value: '1.482' },
        { label: 'Đã index', value: '1.396' },
        { label: 'Lỗi', value: '6' },
        { label: 'Cập nhật cuối', value: '13/08' },
      ],
      [
        { key: 'file', label: 'Tệp sitemap' },
        { key: 'urls', label: 'Số URL', type: 'number' },
        { key: 'indexed', label: 'Đã index', type: 'number' },
        STATUS_COL,
      ],
      [
        { file: 'sitemap-products.xml', urls: 412, indexed: 402, status: 'Hợp lệ' },
        { file: 'sitemap-categories.xml', urls: 24, indexed: 24, status: 'Hợp lệ' },
        { file: 'sitemap-blog.xml', urls: 148, indexed: 142, status: 'Hợp lệ' },
        { file: 'sitemap-pages.xml', urls: 46, indexed: 40, status: '6 URL lỗi' },
      ],
      ['Tạo lại sitemap', 'Gửi Search Console']
    ),
    mod(
      'robots',
      'Robots',
      'Quy tắc thu thập dữ liệu cho từng bot.',
      'solar:shield-check-bold-duotone',
      [
        { label: 'Quy tắc', value: '12' },
        { label: 'Đường dẫn chặn', value: '7' },
        { label: 'Bot cho phép', value: '4' },
        { label: 'Cập nhật cuối', value: '02/08' },
      ],
      [
        { key: 'agent', label: 'User-agent' },
        { key: 'rule', label: 'Quy tắc' },
        { key: 'path', label: 'Đường dẫn' },
        STATUS_COL,
      ],
      [
        { agent: '*', rule: 'Allow', path: '/', status: 'Hoạt động' },
        { agent: '*', rule: 'Disallow', path: '/sofa1/admin', status: 'Hoạt động' },
        { agent: '*', rule: 'Disallow', path: '/sofa1/cart', status: 'Hoạt động' },
        { agent: 'Googlebot', rule: 'Allow', path: '/', status: 'Hoạt động' },
      ],
      ['Sửa robots.txt']
    ),
    mod(
      'schema',
      'Schema',
      'Dữ liệu có cấu trúc JSON-LD cho sản phẩm, bài viết và doanh nghiệp.',
      'solar:code-square-bold-duotone',
      [
        { label: 'Loại schema', value: '8' },
        { label: 'URL áp dụng', value: '1.204' },
        { label: 'Cảnh báo', value: '4' },
        { label: 'Lỗi', value: '0' },
      ],
      [
        { key: 'type', label: 'Loại schema' },
        { key: 'scope', label: 'Áp dụng cho' },
        { key: 'urls', label: 'URL', type: 'number' },
        STATUS_COL,
      ],
      [
        { type: 'Product', scope: 'Trang sản phẩm', urls: 412, status: 'Hợp lệ' },
        { type: 'BreadcrumbList', scope: 'Toàn site', urls: 1204, status: 'Hợp lệ' },
        { type: 'Article', scope: 'Blog', urls: 148, status: '4 cảnh báo' },
        { type: 'LocalBusiness', scope: 'Showroom', urls: 12, status: 'Hợp lệ' },
        { type: 'FAQPage', scope: 'Trang FAQ', urls: 1, status: 'Hợp lệ' },
      ],
      ['Kiểm tra schema']
    ),
  ],
};

// ----------------------------------------------------------------------
// PHÂN QUYỀN
// ----------------------------------------------------------------------

const ACCESS_GROUP: Sofa1AdminGroup = {
  slug: 'access',
  name: 'Phân quyền',
  icon: 'solar:lock-keyhole-bold-duotone',
  modules: [
    mod(
      'users',
      'Người dùng',
      'Tài khoản quản trị viên và trạng thái truy cập.',
      'solar:user-bold-duotone',
      [
        { label: 'Tài khoản', value: '38' },
        { label: 'Đang hoạt động', value: '34' },
        { label: 'Bật 2FA', value: '26' },
        { label: 'Bị khoá', value: '2' },
      ],
      [
        { key: 'name', label: 'Người dùng' },
        { key: 'email', label: 'Email' },
        { key: 'role', label: 'Vai trò' },
        { key: 'last', label: 'Đăng nhập cuối' },
        STATUS_COL,
      ],
      [
        { name: 'Ngọc Anh', email: 'ngocanh@sofa1.vn', role: 'Quản trị hệ thống', last: '15/08/2026 09:12', status: 'Hoạt động' },
        { name: 'Minh Quân', email: 'quan@sofa1.vn', role: 'Quản lý bán hàng', last: '14/08/2026 17:40', status: 'Hoạt động' },
        { name: 'Thu Hà', email: 'ha@sofa1.vn', role: 'CSKH', last: '15/08/2026 08:02', status: 'Hoạt động' },
        { name: 'Gia Bảo', email: 'bao@sofa1.vn', role: 'Biên tập nội dung', last: '02/07/2026 10:20', status: 'Bị khoá' },
      ],
      ['Mời người dùng']
    ),
    mod(
      'roles',
      'Vai trò',
      'Nhóm vai trò và phạm vi quyền tương ứng.',
      'solar:users-group-two-rounded-bold-duotone',
      [
        { label: 'Vai trò', value: '7' },
        { label: 'Vai trò tuỳ chỉnh', value: '3' },
        { label: 'Người dùng gán', value: '38' },
        { label: 'Vai trò mặc định', value: 'Nhân viên' },
      ],
      [
        { key: 'role', label: 'Vai trò' },
        { key: 'users', label: 'Người dùng', type: 'number' },
        { key: 'scope', label: 'Phạm vi' },
        STATUS_COL,
      ],
      [
        { role: 'Quản trị hệ thống', users: 3, scope: 'Toàn quyền', status: 'Hệ thống' },
        { role: 'Quản lý bán hàng', users: 8, scope: 'Đơn hàng, CRM, Kho', status: 'Hệ thống' },
        { role: 'Biên tập nội dung', users: 6, scope: 'CMS, Blog, SEO', status: 'Tuỳ chỉnh' },
        { role: 'CSKH', users: 12, scope: 'CRM, Đổi trả, Hỗ trợ', status: 'Tuỳ chỉnh' },
        { role: 'Kế toán', users: 4, scope: 'Thanh toán, Hoàn tiền', status: 'Tuỳ chỉnh' },
      ],
      ['Tạo vai trò']
    ),
    mod(
      'permissions',
      'Quyền hạn',
      'Ma trận quyền chi tiết theo module và hành động.',
      'solar:key-bold-duotone',
      [
        { label: 'Module', value: '32' },
        { label: 'Quyền', value: '128' },
        { label: 'Quyền nhạy cảm', value: '14' },
        { label: 'Cần phê duyệt', value: '6' },
      ],
      [
        { key: 'module', label: 'Module' },
        { key: 'action', label: 'Hành động' },
        { key: 'roles', label: 'Vai trò được cấp' },
        STATUS_COL,
      ],
      [
        { module: 'Đơn hàng', action: 'Huỷ đơn', roles: 'Quản trị, Quản lý bán hàng', status: 'Cần phê duyệt' },
        { module: 'Hoàn tiền', action: 'Duyệt hoàn tiền', roles: 'Quản trị, Kế toán', status: 'Nhạy cảm' },
        { module: 'CMS', action: 'Xuất bản trang', roles: 'Quản trị, Biên tập', status: 'Bình thường' },
        { module: 'Phân quyền', action: 'Gán vai trò', roles: 'Quản trị', status: 'Nhạy cảm' },
      ],
      ['Sửa ma trận quyền']
    ),
    mod(
      'audit-log',
      'Nhật ký hệ thống',
      'Lịch sử thao tác, đăng nhập và thay đổi cấu hình.',
      'solar:clipboard-list-bold-duotone',
      [
        { label: 'Sự kiện hôm nay', value: '1.284' },
        { label: 'Đăng nhập thất bại', value: '12' },
        { label: 'Thay đổi cấu hình', value: '8' },
        { label: 'Lưu trữ', value: '180 ngày' },
      ],
      [
        { key: 'time', label: 'Thời gian' },
        { key: 'user', label: 'Người dùng' },
        { key: 'action', label: 'Hành động' },
        { key: 'ip', label: 'IP' },
        STATUS_COL,
      ],
      [
        { time: '15/08 09:12', user: 'Ngọc Anh', action: 'Xuất bản trang chủ', ip: '113.20.x.14', status: 'Thành công' },
        { time: '15/08 08:41', user: 'Thu Hà', action: 'Duyệt hoàn tiền HT-2608-04', ip: '113.20.x.22', status: 'Thành công' },
        { time: '15/08 07:58', user: 'unknown', action: 'Đăng nhập thất bại', ip: '45.61.x.203', status: 'Từ chối' },
        { time: '14/08 22:10', user: 'Minh Quân', action: 'Sửa bảng giá đại lý', ip: '113.20.x.31', status: 'Thành công' },
      ],
      ['Xuất nhật ký']
    ),
  ],
};

export const SOFA1_ADMIN_GROUPS: Sofa1AdminGroup[] = [
  CMS_GROUP,
  PRODUCT_GROUP,
  CONTENT_GROUP,
  WAREHOUSE_GROUP,
  ORDER_GROUP,
  CRM_GROUP,
  MARKETING_GROUP,
  HR_GROUP,
  ANALYTICS_GROUP,
  SEO_GROUP,
  ACCESS_GROUP,
];

export function findSofa1AdminModule(groupSlug?: string, moduleSlug?: string) {
  const group = SOFA1_ADMIN_GROUPS.find((g) => g.slug === groupSlug);
  if (!group) return null;
  const found = group.modules.find((m) => m.slug === moduleSlug) ?? group.modules[0];
  return { group, module: found };
}

// ----------------------------------------------------------------------
// KPI tổng quan — tính trực tiếp từ src/_mock/_sofa1.ts (dữ liệu thật).
// ----------------------------------------------------------------------

const totalRevenue = _sofa1Orders.reduce((sum, o) => sum + o.total, 0);
const pendingOrders = countByStatus(_sofa1Orders, 'pending');
const publishedProducts = countByPublish(_sofa1Products).published;

export const SOFA1_ADMIN_KPIS = [
  {
    label: 'Tổng doanh thu (đơn ghi nhận)',
    value: `${(totalRevenue / 1_000_000_000).toLocaleString('vi-VN', {
      maximumFractionDigits: 2,
    })} tỷ`,
    trend: `${_sofa1Orders.length} đơn`,
    color: 'primary' as const,
  },
  {
    label: 'Đơn hàng',
    value: String(_sofa1Orders.length),
    trend: `${pendingOrders} chờ xác nhận`,
    color: 'info' as const,
  },
  {
    label: 'Khách hàng',
    value: String(_sofa1Customers.length),
    trend: `${countByStatus(_sofa1Customers, 'vip')} VIP`,
    color: 'success' as const,
  },
  {
    label: 'Sản phẩm đang bán',
    value: String(publishedProducts),
    trend: `/ ${_sofa1Products.length} tổng`,
    color: 'warning' as const,
  },
];

// ----------------------------------------------------------------------
// Hoạt động gần đây — gộp từ đơn hàng, lead B2B, liên hệ, đơn ứng tuyển
// (dữ liệu thật, sắp xếp theo thời gian tạo gần nhất).
// ----------------------------------------------------------------------

const recentOrderActivities = _sofa1Orders.map((o) => ({
  createdAt: o.createdAt,
  text: `Đơn hàng ${o.orderNumber} của ${o.customerName} — ${optionLabel(
    SOFA1_ORDER_STATUS_OPTIONS,
    o.status
  )}`,
  tag: 'Đơn hàng',
}));

const recentLeadActivities = _sofa1B2BLeads.map((l) => ({
  createdAt: l.createdAt,
  text: `${l.companyName} gửi yêu cầu tư vấn B2B (${l.projectType})`,
  tag: 'CRM',
}));

const recentContactActivities = _sofa1ContactMessages.map((m) => ({
  createdAt: m.createdAt,
  text: `${m.name} gửi liên hệ: “${m.subject}”`,
  tag: 'Liên hệ',
}));

const recentApplicationActivities = _sofa1CareerApplications.map((a) => ({
  createdAt: a.createdAt,
  text: `${a.candidateName} ứng tuyển vị trí ${a.careerTitle}`,
  tag: 'Nhân sự',
}));

export const SOFA1_ADMIN_ACTIVITIES = [
  ...recentOrderActivities,
  ...recentLeadActivities,
  ...recentContactActivities,
  ...recentApplicationActivities,
]
  .sort((a, b) => new Date(b.createdAt as never).getTime() - new Date(a.createdAt as never).getTime())
  .slice(0, 6)
  .map((item) => ({ time: fDate(item.createdAt) ?? '—', text: item.text, tag: item.tag }));