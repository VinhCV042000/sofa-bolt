// SOFA15 ADMIN — cấu hình khu vực quản trị (dữ liệu demo)
// Theme: Art Deco Gatsby — opulent gold, deep black, emerald, 1920s geometric luxury
// ----------------------------------------------------------------------

export const SOFA15_ADMIN_ROOT = '/sofa15/admin';

export type Sofa15AdminColumn = { key: string; label: string; type?: 'text' | 'status' | 'money' | 'number' };

export type Sofa15AdminModule = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  stats: { label: string; value: string; trend?: string }[];
  columns: Sofa15AdminColumn[];
  rows: Record<string, string | number>[];
  actions?: string[];
};

export type Sofa15AdminGroup = {
  slug: string;
  name: string;
  icon: string;
  modules: Sofa15AdminModule[];
};

const money = (v: number) => v;

function mod(
  slug: string,
  name: string,
  description: string,
  icon: string,
  stats: Sofa15AdminModule['stats'],
  columns: Sofa15AdminColumn[],
  rows: Record<string, string | number>[],
  actions?: string[]
): Sofa15AdminModule {
  return { slug, name, description, icon, stats, columns, rows, actions };
}

const STATUS_COL: Sofa15AdminColumn = { key: 'status', label: 'Trạng thái', type: 'status' };

// ----------------------------------------------------------------------
// CMS
// ----------------------------------------------------------------------

const cmsPage = (slug: string, name: string, path: string) =>
  mod(
    slug,
    name,
    `Quản lý nội dung, bố cục và trạng thái xuất bản cho ${name.toLowerCase()} (${path}).`,
    'solar:document-text-bold-duotone',
    [
      { label: 'Khối nội dung', value: '8' },
      { label: 'Lượt xem 30 ngày', value: '28.4K', trend: '+16%' },
      { label: 'Bản nháp', value: '1' },
      { label: 'Cập nhật cuối', value: '12/09' },
    ],
    [
      { key: 'block', label: 'Khối nội dung' },
      { key: 'type', label: 'Loại' },
      STATUS_COL,
      { key: 'updated', label: 'Cập nhật' },
      { key: 'author', label: 'Người sửa' },
    ],
    [
      { block: 'Hero Art Deco Gatsby', type: 'Banner', status: 'Đã xuất bản', updated: '12/09/2026', author: 'Kim Ngân' },
      { block: 'Về sofa15', type: 'Rich text', status: 'Đã xuất bản', updated: '08/09/2026', author: 'Đức Huy' },
      { block: 'Bộ sưu tập Golden Age', type: 'Danh sách SP', status: 'Bản nháp', updated: '07/09/2026', author: 'Thảo My' },
      { block: 'Khách hàng deco', type: 'Slider', status: 'Đã xuất bản', updated: '01/09/2026', author: 'Kim Ngân' },
      { block: 'CTA Giao 48h', type: 'Banner', status: 'Tạm ẩn', updated: '26/08/2026', author: 'Đức Huy' },
    ],
    ['Thêm khối', 'Xem trước', 'Xuất bản']
  );

const CMS_GROUP: Sofa15AdminGroup = {
  slug: 'cms',
  name: 'CMS',
  icon: 'solar:documents-bold-duotone',
  modules: [
    cmsPage('home', 'Trang chủ', '/sofa15'),
    cmsPage('about', 'Trang giới thiệu', '/sofa15/about'),
    cmsPage('contact', 'Trang liên hệ', '/sofa15/contact'),
    cmsPage('policy', 'Trang chính sách', '/sofa15/policy'),
    cmsPage('terms', 'Trang điều khoản', '/sofa15/terms'),
    cmsPage('faq', 'Trang FAQ', '/sofa15/faq'),
    mod(
      'blog',
      'Trang blog',
      'Quản lý bài viết, chuyên mục, tác giả và lịch đăng bài.',
      'solar:notebook-bold-duotone',
      [
        { label: 'Bài viết', value: '72' },
        { label: 'Chờ duyệt', value: '4' },
        { label: 'Lượt đọc / tháng', value: '48K', trend: '+12%' },
        { label: 'Chuyên mục', value: '6' },
      ],
      [
        { key: 'title', label: 'Tiêu đề' },
        { key: 'category', label: 'Chuyên mục' },
        STATUS_COL,
        { key: 'views', label: 'Lượt đọc', type: 'number' },
        { key: 'updated', label: 'Ngày đăng' },
      ],
      [
        { title: '10 không gian Art Deco cho căn hộ cao cấp', category: 'Inspiration', status: 'Đã xuất bản', views: 11200, updated: '11/09/2026' },
        { title: 'Phối velvet cho mùa thu sang trọng', category: 'Decor', status: 'Đã xuất bản', views: 8400, updated: '04/09/2026' },
        { title: 'Xu hướng sofa Art Deco 2026', category: 'Xu hướng', status: 'Chờ duyệt', views: 0, updated: '13/09/2026' },
        { title: 'Bảo quản da Ý trong khí hậu nhiệt đới', category: 'Bảo dưỡng', status: 'Bản nháp', views: 0, updated: '12/09/2026' },
      ],
      ['Viết bài', 'Duyệt bài']
    ),
    mod(
      'menu',
      'Menu',
      'Cấu trúc menu header, footer và menu mobile.',
      'solar:hamburger-menu-bold-duotone',
      [
        { label: 'Menu', value: '4' },
        { label: 'Mục menu', value: '42' },
        { label: 'Liên kết hỏng', value: '0' },
        { label: 'Cấp sâu nhất', value: '2' },
      ],
      [
        { key: 'menu', label: 'Menu' },
        { key: 'position', label: 'Vị trí' },
        { key: 'items', label: 'Số mục', type: 'number' },
        STATUS_COL,
      ],
      [
        { menu: 'Menu chính Art Deco', position: 'Header', items: 20, status: 'Đã xuất bản' },
        { menu: 'Menu bộ sưu tập', position: 'Header', items: 14, status: 'Đã xuất bản' },
        { menu: 'Menu footer', position: 'Footer', items: 6, status: 'Đã xuất bản' },
        { menu: 'Menu mobile', position: 'Mobile', items: 10, status: 'Bản nháp' },
      ],
      ['Thêm menu']
    ),
    mod(
      'banner',
      'Banner',
      'Banner khuyến mãi theo vị trí và lịch hiển thị.',
      'solar:gallery-wide-bold-duotone',
      [
        { label: 'Banner đang chạy', value: '6' },
        { label: 'CTR trung bình', value: '4.8%', trend: '+1.0%' },
        { label: 'Hết hạn tuần này', value: '1' },
        { label: 'Vị trí', value: '5' },
      ],
      [
        { key: 'name', label: 'Banner' },
        { key: 'position', label: 'Vị trí' },
        { key: 'schedule', label: 'Lịch chạy' },
        STATUS_COL,
      ],
      [
        { name: 'Golden Age — Giảm 30%', position: 'Top bar', schedule: '14/09 – 20/09', status: 'Đang chạy' },
        { name: 'Giao 48h nội thành', position: 'Trang chủ', schedule: 'Không giới hạn', status: 'Đang chạy' },
        { name: 'Bộ sưu tập Golden Age', position: 'Danh mục', schedule: '03/09 – 23/09', status: 'Đang chạy' },
        { name: 'Trả góp 0% APR', position: 'Chi tiết SP', schedule: '01/08 – 31/08', status: 'Hết hạn' },
      ],
      ['Tạo banner']
    ),
    mod(
      'slider',
      'Slider',
      'Slideshow trang chủ và trang danh mục.',
      'solar:slider-horizontal-bold-duotone',
      [
        { label: 'Slider', value: '3' },
        { label: 'Slide', value: '12' },
        { label: 'Thời gian chuyển', value: '5s' },
        { label: 'Lượt click', value: '7.4K' },
      ],
      [
        { key: 'name', label: 'Slider' },
        { key: 'slides', label: 'Số slide', type: 'number' },
        { key: 'page', label: 'Trang áp dụng' },
        STATUS_COL,
      ],
      [
        { name: 'Hero trang chủ Art Deco', slides: 5, page: 'Trang chủ', status: 'Đã xuất bản' },
        { name: 'Bộ sưu tập Golden Age', slides: 4, page: 'Bộ sưu tập', status: 'Đã xuất bản' },
        { name: 'Gallery deco', slides: 3, page: 'Showroom', status: 'Bản nháp' },
      ],
      ['Tạo slider']
    ),
    mod(
      'seo',
      'SEO nội dung',
      'Thẻ tiêu đề, mô tả và ảnh chia sẻ cho từng trang tĩnh.',
      'solar:magnifer-bold-duotone',
      [
        { label: 'Trang đã tối ưu', value: '88%' },
        { label: 'Thiếu meta', value: '3' },
        { label: 'Điểm SEO', value: '90/100', trend: '+5' },
        { label: 'Từ khoá top 10', value: '68' },
      ],
      [
        { key: 'page', label: 'Trang' },
        { key: 'title', label: 'Meta title' },
        { key: 'length', label: 'Độ dài', type: 'number' },
        STATUS_COL,
      ],
      [
        { page: '/sofa15', title: 'SOFA15 — Sofa Art Deco Gatsby', length: 46, status: 'Tốt' },
        { page: '/sofa15/about', title: 'Về SOFA15 | Art Deco Living', length: 38, status: 'Tốt' },
        { page: '/sofa15/faq', title: '', length: 0, status: 'Thiếu meta' },
        { page: '/sofa15/policy', title: 'Chính sách mua hàng SOFA15', length: 44, status: 'Tốt' },
      ],
      ['Quét lại']
    ),
    mod(
      'static-pages',
      'Trang tĩnh',
      'Các trang nội dung tự tạo ngoài cấu trúc mặc định.',
      'solar:file-text-bold-duotone',
      [
        { label: 'Trang tĩnh', value: '14' },
        { label: 'Đã xuất bản', value: '10' },
        { label: 'Bản nháp', value: '4' },
        { label: 'Lượt xem', value: '18K' },
      ],
      [
        { key: 'title', label: 'Tiêu đề' },
        { key: 'slug', label: 'Đường dẫn' },
        STATUS_COL,
        { key: 'updated', label: 'Cập nhật' },
      ],
      [
        { title: 'Hướng dẫn chọn size sofa Art Deco', slug: '/sofa15/huong-dan-size', status: 'Đã xuất bản', updated: '07/09/2026' },
        { title: 'Cam kết bảo hành 10 năm', slug: '/sofa15/cam-ket-bao-hanh', status: 'Đã xuất bản', updated: '01/09/2026' },
        { title: 'Đóng sofa theo kích thước riêng', slug: '/sofa15/custom-size', status: 'Bản nháp', updated: '13/09/2026' },
      ],
      ['Tạo trang']
    ),
  ],
};

// ----------------------------------------------------------------------
// SẢN PHẨM
// ----------------------------------------------------------------------

const PRODUCT_GROUP: Sofa15AdminGroup = {
  slug: 'catalog',
  name: 'Sản phẩm',
  icon: 'solar:box-bold-duotone',
  modules: [
    mod(
      'categories',
      'Danh mục',
      'Cây danh mục sản phẩm và thứ tự hiển thị.',
      'solar:folder-with-files-bold-duotone',
      [
        { label: 'Danh mục', value: '12' },
        { label: 'Danh mục cha', value: '5' },
        { label: 'Sản phẩm gán', value: '168' },
        { label: 'Ẩn', value: '0' },
      ],
      [
        { key: 'name', label: 'Danh mục' },
        { key: 'parent', label: 'Danh mục cha' },
        { key: 'products', label: 'Sản phẩm', type: 'number' },
        STATUS_COL,
      ],
      [
        { name: 'Golden Age', parent: 'Bộ sưu tập', products: 42, status: 'Hiển thị' },
        { name: 'Emerald Lounge', parent: 'Bộ sưu tập', products: 36, status: 'Hiển thị' },
        { name: 'Velvet Noir', parent: 'Bộ sưu tập', products: 28, status: 'Hiển thị' },
        { name: 'Imperial Gold', parent: 'Bộ sưu tập', products: 24, status: 'Hiển thị' },
        { name: 'Sofa velvet', parent: 'Theo chất liệu', products: 52, status: 'Hiển thị' },
      ],
      ['Thêm danh mục']
    ),
    mod(
      'products',
      'Sản phẩm',
      'Danh sách sản phẩm, hình ảnh, mô tả và trạng thái bán.',
      'solar:armchair-bold-duotone',
      [
        { label: 'Sản phẩm', value: '168' },
        { label: 'Đang bán', value: '156' },
        { label: 'Hết hàng', value: '5' },
        { label: 'Mới tháng này', value: '10', trend: '+10' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'name', label: 'Tên sản phẩm' },
        { key: 'collection', label: 'Bộ sưu tập' },
        { key: 'price', label: 'Giá bán', type: 'money' },
        STATUS_COL,
      ],
      [
        { sku: 'SF15-GA-01', name: 'Sofa Gatsby Gold', collection: 'Golden Age', price: money(22500000), status: 'Đang bán' },
        { sku: 'SF15-EL-02', name: 'Sofa Emerald Lounge', collection: 'Emerald Lounge', price: money(18200000), status: 'Đang bán' },
        { sku: 'SF15-VN-03', name: 'Sofa Velvet Noir', collection: 'Velvet Noir', price: money(19900000), status: 'Đang bán' },
        { sku: 'SF15-IG-04', name: 'Sofa Imperial Gold', collection: 'Imperial Gold', price: money(17500000), status: 'Đang bán' },
        { sku: 'SF15-GA-05', name: 'Sofa Diamond Cut', collection: 'Golden Age', price: money(24500000), status: 'Hết hàng' },
        { sku: 'SF15-EL-06', name: 'Sofa Emerald Crown', collection: 'Emerald Lounge', price: money(21500000), status: 'Đang bán' },
      ],
      ['Thêm sản phẩm', 'Nhập Excel']
    ),
    mod(
      'attributes',
      'Thuộc tính',
      'Bộ thuộc tính dùng để tạo biến thể: màu, chất liệu, kích thước.',
      'solar:tuning-square-bold-duotone',
      [
        { label: 'Nhóm thuộc tính', value: '6' },
        { label: 'Giá trị', value: '84' },
        { label: 'Dùng cho biến thể', value: '3' },
        { label: 'Bộ lọc mặt tiền', value: '4' },
      ],
      [
        { key: 'name', label: 'Thuộc tính' },
        { key: 'values', label: 'Số giá trị', type: 'number' },
        { key: 'usage', label: 'Áp dụng' },
        STATUS_COL,
      ],
      [
        { name: 'Màu velvet', values: 32, usage: 'Biến thể + Bộ lọc', status: 'Hoạt động' },
        { name: 'Chất liệu', values: 8, usage: 'Biến thể + Bộ lọc', status: 'Hoạt động' },
        { name: 'Kích thước', values: 12, usage: 'Biến thể', status: 'Hoạt động' },
        { name: 'Loại gỗ', values: 5, usage: 'Tuỳ chọn', status: 'Hoạt động' },
        { name: 'Loại nệm', values: 6, usage: 'Tuỳ chọn', status: 'Tạm ẩn' },
      ],
      ['Thêm thuộc tính']
    ),
    mod(
      'variants',
      'Biến thể sản phẩm',
      'Tổ hợp SKU theo màu, chất liệu và kích thước.',
      'solar:layers-bold-duotone',
      [
        { label: 'Biến thể', value: '582' },
        { label: 'Có tồn kho', value: '530' },
        { label: 'Cảnh báo tồn', value: '22' },
        { label: 'Ngừng bán', value: '10' },
      ],
      [
        { key: 'sku', label: 'SKU biến thể' },
        { key: 'product', label: 'Sản phẩm gốc' },
        { key: 'option', label: 'Tuỳ chọn' },
        { key: 'stock', label: 'Tồn', type: 'number' },
        { key: 'price', label: 'Giá', type: 'money' },
      ],
      [
        { sku: 'SF15-GA-01-GOLD', product: 'Sofa Gatsby Gold', option: 'Velvet / Gold / 2m4', stock: 14, price: money(22500000) },
        { sku: 'SF15-GA-01-BLK', product: 'Sofa Gatsby Gold', option: 'Velvet / Black / 2m4', stock: 6, price: money(22900000) },
        { sku: 'SF15-EL-02-EMR', product: 'Sofa Emerald Lounge', option: 'Velvet / Emerald / 2m2', stock: 20, price: money(18200000) },
        { sku: 'SF15-GA-05-DIA', product: 'Sofa Diamond Cut', option: 'Velvet / Gold / 2m6', stock: 0, price: money(24500000) },
      ],
      ['Tạo biến thể']
    ),
    mod(
      'inventory',
      'Kho hàng',
      'Tồn kho theo sản phẩm tại từng kho/showroom.',
      'solar:box-minimalistic-bold-duotone',
      [
        { label: 'Tổng tồn', value: '1.680' },
        { label: 'Sắp hết', value: '22' },
        { label: 'Hết hàng', value: '5' },
        { label: 'Giá trị tồn', value: '14.2 tỷ' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'warehouse', label: 'Kho' },
        { key: 'stock', label: 'Tồn', type: 'number' },
        { key: 'reserved', label: 'Đang giữ', type: 'number' },
        STATUS_COL,
      ],
      [
        { sku: 'SF15-GA-01-GOLD', warehouse: 'Kho Deco HN', stock: 14, reserved: 3, status: 'Đủ hàng' },
        { sku: 'SF15-EL-02-EMR', warehouse: 'Kho Deco HCM', stock: 20, reserved: 5, status: 'Đủ hàng' },
        { sku: 'SF15-GA-05-DIA', warehouse: 'Kho Deco HCM', stock: 0, reserved: 0, status: 'Hết hàng' },
        { sku: 'SF15-VN-03-BLK', warehouse: 'Showroom Deco ĐN', stock: 3, reserved: 1, status: 'Sắp hết' },
      ],
      ['Nhập kho', 'Kiểm kê']
    ),
    mod(
      'pricing',
      'Giá bán',
      'Bảng giá niêm yết, giá khuyến mãi và giá đại lý.',
      'solar:tag-price-bold-duotone',
      [
        { label: 'Bảng giá', value: '3' },
        { label: 'SP đang giảm giá', value: '38' },
        { label: 'Giảm trung bình', value: '24%' },
        { label: 'Biên lợi nhuận', value: '36%', trend: '+2%' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'list', label: 'Giá niêm yết', type: 'money' },
        { key: 'sale', label: 'Giá bán', type: 'money' },
        { key: 'dealer', label: 'Giá đại lý', type: 'money' },
        STATUS_COL,
      ],
      [
        { sku: 'SF15-GA-01', list: money(28500000), sale: money(22500000), dealer: money(19800000), status: 'Đang giảm' },
        { sku: 'SF15-EL-02', list: money(23000000), sale: money(18200000), dealer: money(16016000), status: 'Đang giảm' },
        { sku: 'SF15-VN-03', list: money(25000000), sale: money(19900000), dealer: money(17512000), status: 'Đang giảm' },
        { sku: 'SF15-EL-06', list: money(21500000), sale: money(21500000), dealer: money(18920000), status: 'Giá gốc' },
      ],
      ['Tạo bảng giá']
    ),
  ],
};

// ----------------------------------------------------------------------
// KHO HÀNG
// ----------------------------------------------------------------------

const WAREHOUSE_GROUP: Sofa15AdminGroup = {
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
        { label: 'Kho', value: '3' },
        { label: 'Tổng tồn', value: '1.680' },
        { label: 'Đơn chờ xuất', value: '32' },
        { label: 'Tỷ lệ lấp đầy', value: '62%' },
      ],
      [
        { key: 'warehouse', label: 'Kho' },
        { key: 'city', label: 'Khu vực' },
        { key: 'stock', label: 'Tồn', type: 'number' },
        { key: 'fill', label: 'Lấp đầy' },
        STATUS_COL,
      ],
      [
        { warehouse: 'Kho Deco Hà Nội', city: 'Hà Nội', stock: 720, fill: '68%', status: 'Hoạt động' },
        { warehouse: 'Kho Deco HCM', city: 'HCM', stock: 620, fill: '60%', status: 'Hoạt động' },
        { warehouse: 'Showroom Deco ĐN', city: 'Đà Nẵng', stock: 340, fill: '48%', status: 'Hoạt động' },
      ],
      ['Thêm kho']
    ),
    mod(
      'receipts',
      'Nhập – Xuất kho',
      'Phiếu nhập từ xưởng và phiếu xuất giao khách.',
      'solar:import-bold-duotone',
      [
        { label: 'Phiếu tháng này', value: '84' },
        { label: 'Chờ duyệt', value: '4' },
        { label: 'Giá trị nhập', value: '3.2 tỷ' },
        { label: 'Giá trị xuất', value: '3.8 tỷ' },
      ],
      [
        { key: 'code', label: 'Mã phiếu' },
        { key: 'type', label: 'Loại' },
        { key: 'warehouse', label: 'Kho' },
        { key: 'value', label: 'Giá trị', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'PN-2609-012', type: 'Nhập', warehouse: 'Kho Deco HN', value: money(342000000), status: 'Hoàn tất' },
        { code: 'PX-2609-078', type: 'Xuất', warehouse: 'Kho Deco HCM', value: money(82000000), status: 'Hoàn tất' },
        { code: 'PN-2609-013', type: 'Nhập', warehouse: 'Showroom Deco ĐN', value: money(52000000), status: 'Chờ duyệt' },
        { code: 'PX-2609-079', type: 'Xuất', warehouse: 'Kho Deco HN', value: money(22500000), status: 'Đang xử lý' },
      ],
      ['Tạo phiếu nhập', 'Tạo phiếu xuất']
    ),
    mod(
      'transfers',
      'Chuyển kho & Kiểm kê',
      'Điều chuyển hàng giữa các kho và biên bản kiểm kê định kỳ.',
      'solar:transfer-horizontal-bold-duotone',
      [
        { label: 'Lệnh chuyển', value: '16' },
        { label: 'Đang vận chuyển', value: '3' },
        { label: 'Lệch kiểm kê', value: '0' },
        { label: 'Kiểm kê gần nhất', value: '31/08' },
      ],
      [
        { key: 'code', label: 'Mã lệnh' },
        { key: 'from', label: 'Từ kho' },
        { key: 'to', label: 'Đến kho' },
        { key: 'items', label: 'Số món', type: 'number' },
        STATUS_COL,
      ],
      [
        { code: 'CK-0912', from: 'Kho Deco HCM', to: 'Showroom Deco ĐN', items: 8, status: 'Đang vận chuyển' },
        { code: 'CK-0911', from: 'Kho Deco HN', to: 'Showroom Deco ĐN', items: 5, status: 'Hoàn tất' },
        { code: 'KK-0901', from: 'Kho Deco HN', to: '—', items: 200, status: 'Đúng số' },
      ],
      ['Tạo lệnh chuyển', 'Mở kiểm kê']
    ),
  ],
};

// ----------------------------------------------------------------------
// ĐƠN HÀNG
// ----------------------------------------------------------------------

const ORDER_GROUP: Sofa15AdminGroup = {
  slug: 'orders',
  name: 'Đơn hàng',
  icon: 'solar:cart-large-2-bold-duotone',
  modules: [
    mod(
      'orders',
      'Đơn hàng',
      'Toàn bộ đơn hàng online, showroom và đại lý.',
      'solar:bill-list-bold-duotone',
      [
        { label: 'Đơn tháng này', value: '248', trend: '+16%' },
        { label: 'Chờ xác nhận', value: '12' },
        { label: 'Doanh thu', value: '4.6 tỷ', trend: '+14%' },
        { label: 'Giá trị TB/đơn', value: '18.5 tr' },
      ],
      [
        { key: 'code', label: 'Mã đơn' },
        { key: 'customer', label: 'Khách hàng' },
        { key: 'channel', label: 'Kênh' },
        { key: 'total', label: 'Tổng tiền', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'SF15-26091201', customer: 'Phạm Linh', channel: 'Website', total: money(22500000), status: 'Đang giao' },
        { code: 'SF15-26091186', customer: 'Hoàng Nam', channel: 'Showroom ĐN', total: money(19900000), status: 'Hoàn tất' },
        { code: 'SF15-26091180', customer: 'Trần Khôi', channel: 'Showroom HN', total: money(17500000), status: 'Chờ xác nhận' },
        { code: 'SF15-26091172', customer: 'Lê Quỳnh', channel: 'Website', total: money(18200000), status: 'Đã huỷ' },
      ],
      ['Tạo đơn', 'Xuất Excel']
    ),
    mod(
      'payments',
      'Thanh toán',
      'Giao dịch thanh toán, đối soát cổng và trả góp.',
      'solar:card-transfer-bold-duotone',
      [
        { label: 'Giao dịch tháng', value: '256' },
        { label: 'Thành công', value: '97.2%' },
        { label: 'Chờ đối soát', value: '7' },
        { label: 'Trả góp', value: '32 đơn' },
      ],
      [
        { key: 'txn', label: 'Mã giao dịch' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'method', label: 'Phương thức' },
        { key: 'amount', label: 'Số tiền', type: 'money' },
        STATUS_COL,
      ],
      [
        { txn: 'TXN-69118', order: 'SF15-26091201', method: 'VNPay', amount: money(22500000), status: 'Thành công' },
        { txn: 'TXN-69115', order: 'SF15-26091186', method: 'Chuyển khoản', amount: money(19900000), status: 'Thành công' },
        { txn: 'TXN-69112', order: 'SF15-26091180', method: 'Thẻ quốc tế', amount: money(17500000), status: 'Chờ đối soát' },
        { txn: 'TXN-69108', order: 'SF15-26091172', method: 'Thẻ quốc tế', amount: money(18200000), status: 'Thất bại' },
      ],
      ['Đối soát']
    ),
    mod(
      'shipping',
      'Vận chuyển',
      'Điều phối giao hàng 48h, đối tác vận chuyển và lịch lắp đặt.',
      'solar:delivery-bold-duotone',
      [
        { label: 'Đơn đang giao', value: '32' },
        { label: 'Giao đúng hẹn', value: '98%' },
        { label: 'Đội lắp đặt', value: '5' },
        { label: 'Phí VC tháng', value: '74 tr' },
      ],
      [
        { key: 'code', label: 'Vận đơn' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'carrier', label: 'Đội giao' },
        { key: 'eta', label: 'Dự kiến' },
        STATUS_COL,
      ],
      [
        { code: 'VD-29118', order: 'SF15-26091201', carrier: 'Đội Deco HN', eta: '16/09/2026', status: 'Đang giao' },
        { code: 'VD-29115', order: 'SF15-26091186', carrier: 'Đội Deco ĐN', eta: '12/09/2026', status: 'Đã giao' },
        { code: 'VD-29110', order: 'SF15-26091180', carrier: 'Đội Deco HN', eta: '20/09/2026', status: 'Chờ lấy hàng' },
      ],
      ['Tạo vận đơn']
    ),
    mod(
      'refunds',
      'Hoàn tiền',
      'Yêu cầu hoàn tiền và tiến trình xử lý.',
      'solar:money-bag-bold-duotone',
      [
        { label: 'Yêu cầu tháng', value: '5' },
        { label: 'Đã hoàn', value: '4' },
        { label: 'Giá trị hoàn', value: '52 tr' },
        { label: 'Thời gian TB', value: '1.6 ngày' },
      ],
      [
        { key: 'code', label: 'Mã yêu cầu' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'reason', label: 'Lý do' },
        { key: 'amount', label: 'Số tiền', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'HT-2609-03', order: 'SF15-26091172', reason: 'Khách huỷ đơn', amount: money(18200000), status: 'Đã hoàn' },
        { code: 'HT-2609-04', order: 'SF15-26091142', reason: 'Sai màu velvet', amount: money(3800000), status: 'Đang xử lý' },
        { code: 'HT-2609-05', order: 'SF15-26091128', reason: 'Giao trễ hẹn', amount: money(800000), status: 'Chờ duyệt' },
      ],
      ['Duyệt hoàn tiền']
    ),
    mod(
      'returns',
      'Đổi trả',
      'Yêu cầu đổi/trả sản phẩm và tình trạng hàng hoàn.',
      'solar:restart-bold-duotone',
      [
        { label: 'Yêu cầu tháng', value: '4' },
        { label: 'Tỷ lệ đổi trả', value: '1.6%' },
        { label: 'Đang thu hồi', value: '1' },
        { label: 'Tái nhập kho', value: '2' },
      ],
      [
        { key: 'code', label: 'Mã yêu cầu' },
        { key: 'product', label: 'Sản phẩm' },
        { key: 'type', label: 'Loại' },
        { key: 'reason', label: 'Lý do' },
        STATUS_COL,
      ],
      [
        { code: 'DT-2609-01', product: 'Sofa Emerald Lounge', type: 'Đổi màu', reason: 'Không hợp nội thất', status: 'Đang thu hồi' },
        { code: 'DT-2609-02', product: 'Sofa Velvet Noir', type: 'Trả hàng', reason: 'Lỗi đường may', status: 'Đã tái nhập' },
        { code: 'DT-2609-03', product: 'Sofa Imperial Gold', type: 'Đổi size', reason: 'Không vừa phòng', status: 'Chờ duyệt' },
      ],
      ['Tạo yêu cầu']
    ),
  ],
};

// ----------------------------------------------------------------------
// CRM
// ----------------------------------------------------------------------

const CRM_GROUP: Sofa15AdminGroup = {
  slug: 'crm',
  name: 'CRM',
  icon: 'solar:users-group-rounded-bold-duotone',
  modules: [
    mod(
      'customers',
      'Khách hàng',
      'Hồ sơ khách hàng, phân hạng và giá trị vòng đời.',
      'solar:user-id-bold-duotone',
      [
        { label: 'Khách hàng', value: '5.420' },
        { label: 'Mới tháng này', value: '248', trend: '+16%' },
        { label: 'Khách VIP', value: '102' },
        { label: 'LTV trung bình', value: '18.6 tr' },
      ],
      [
        { key: 'name', label: 'Khách hàng' },
        { key: 'phone', label: 'Điện thoại' },
        { key: 'tier', label: 'Hạng' },
        { key: 'spent', label: 'Chi tiêu', type: 'money' },
        STATUS_COL,
      ],
      [
        { name: 'Phạm Linh', phone: '0912 xxx 108', tier: 'Vàng', spent: money(42800000), status: 'Hoạt động' },
        { name: 'Hoàng Nam', phone: '0987 xxx 314', tier: 'Bạc', spent: money(19900000), status: 'Hoạt động' },
        { name: 'Trần Khôi', phone: '0905 xxx 628', tier: 'Vàng', spent: money(38400000), status: 'Hoạt động' },
        { name: 'Lê Quỳnh', phone: '0243 xxx 840', tier: 'Thường', spent: money(18200000), status: 'Ngưng tương tác' },
      ],
      ['Thêm khách hàng', 'Nhập danh bạ']
    ),
    mod(
      'leads',
      'Leads',
      'Khách tiềm năng từ form, hotline, showroom và quảng cáo.',
      'solar:magnet-bold-duotone',
      [
        { label: 'Lead tháng', value: '586' },
        { label: 'Đã liên hệ', value: '428' },
        { label: 'Tỷ lệ chốt', value: '24.8%', trend: '+3.6%' },
        { label: 'Lead nóng', value: '38' },
      ],
      [
        { key: 'name', label: 'Lead' },
        { key: 'source', label: 'Nguồn' },
        { key: 'interest', label: 'Quan tâm' },
        { key: 'owner', label: 'Phụ trách' },
        STATUS_COL,
      ],
      [
        { name: 'Vũ Uyên', source: 'Facebook Ads', interest: 'Golden Age', owner: 'Kim Ngân', status: 'Lead nóng' },
        { name: 'Đặng Quân', source: 'Google Ads', interest: 'Sofa velvet', owner: 'Đức Huy', status: 'Đã liên hệ' },
        { name: 'Hồ Hằng', source: 'Showroom ĐN', interest: 'Emerald Lounge', owner: 'Thảo My', status: 'Đang tư vấn' },
        { name: 'Bùi Khanh', source: 'Instagram', interest: 'Velvet Noir', owner: 'Chưa gán', status: 'Mới' },
      ],
      ['Thêm lead', 'Phân bổ']
    ),
    mod(
      'purchase-history',
      'Lịch sử mua hàng',
      'Dòng thời gian giao dịch của từng khách hàng.',
      'solar:history-bold-duotone',
      [
        { label: 'Giao dịch', value: '7.240' },
        { label: 'Khách mua lại', value: '34%' },
        { label: 'Chu kỳ mua lại', value: '10 tháng' },
        { label: 'Đơn/khách', value: '1.4' },
      ],
      [
        { key: 'customer', label: 'Khách hàng' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'date', label: 'Ngày mua' },
        { key: 'total', label: 'Giá trị', type: 'money' },
        STATUS_COL,
      ],
      [
        { customer: 'Phạm Linh', order: 'SF15-26091201', date: '12/09/2026', total: money(22500000), status: 'Đang giao' },
        { customer: 'Phạm Linh', order: 'SF15-25110418', date: '04/11/2025', total: money(32400000), status: 'Hoàn tất' },
        { customer: 'Hoàng Nam', order: 'SF15-26091186', date: '11/09/2026', total: money(19900000), status: 'Hoàn tất' },
      ]
    ),
    mod(
      'care',
      'Chăm sóc khách hàng',
      'Ticket, lịch gọi lại, khảo sát hài lòng và bảo hành.',
      'solar:chat-round-call-bold-duotone',
      [
        { label: 'Ticket mở', value: '14' },
        { label: 'Thời gian phản hồi', value: '16 phút' },
        { label: 'CSAT', value: '4.9/5', trend: '+0.1' },
        { label: 'Bảo hành đang xử lý', value: '3' },
      ],
      [
        { key: 'ticket', label: 'Ticket' },
        { key: 'customer', label: 'Khách hàng' },
        { key: 'topic', label: 'Chủ đề' },
        { key: 'agent', label: 'Nhân viên' },
        STATUS_COL,
      ],
      [
        { ticket: 'TK-8018', customer: 'Lê Quỳnh', topic: 'Hoàn tiền đơn huỷ', agent: 'Đức Huy', status: 'Đang xử lý' },
        { ticket: 'TK-8015', customer: 'Phạm Linh', topic: 'Đặt lịch giao 48h', agent: 'Kim Ngân', status: 'Đã đóng' },
        { ticket: 'TK-8012', customer: 'Trần Khôi', topic: 'Bảo hành khung gỗ', agent: 'Thảo My', status: 'Chờ khách phản hồi' },
      ],
      ['Tạo ticket']
    ),
  ],
};

// ----------------------------------------------------------------------
// MARKETING
// ----------------------------------------------------------------------

const MARKETING_GROUP: Sofa15AdminGroup = {
  slug: 'marketing',
  name: 'Marketing',
  icon: 'solar:megaphone-bold-duotone',
  modules: [
    mod(
      'email',
      'Email Marketing',
      'Chiến dịch email, kịch bản tự động và hiệu quả gửi.',
      'solar:letter-bold-duotone',
      [
        { label: 'Chiến dịch', value: '14' },
        { label: 'Tỷ lệ mở', value: '36.8%', trend: '+2.6%' },
        { label: 'Tỷ lệ click', value: '7.4%' },
        { label: 'Doanh thu quy đổi', value: '442 tr' },
      ],
      [
        { key: 'campaign', label: 'Chiến dịch' },
        { key: 'segment', label: 'Tệp gửi' },
        { key: 'sent', label: 'Đã gửi', type: 'number' },
        { key: 'open', label: 'Tỷ lệ mở' },
        STATUS_COL,
      ],
      [
        { campaign: 'Golden Age — Giảm 30%', segment: 'Toàn bộ khách', sent: 5420, open: '42%', status: 'Đã gửi' },
        { campaign: 'Bộ sưu tập Golden Age', segment: 'Quan tâm deco', sent: 1480, open: '48%', status: 'Đã gửi' },
        { campaign: 'Nhắc giỏ hàng bỏ quên', segment: 'Tự động', sent: 248, open: '54%', status: 'Đang chạy' },
        { campaign: 'Chúc mừng sinh nhật', segment: 'Tự động', sent: 72, open: '60%', status: 'Đang chạy' },
      ],
      ['Tạo chiến dịch']
    ),
    mod(
      'sms',
      'SMS Marketing',
      'Tin nhắn thương hiệu, OTP và chăm sóc sau bán.',
      'solar:chat-square-code-bold-duotone',
      [
        { label: 'Tin đã gửi', value: '18.4K' },
        { label: 'Tỷ lệ nhận', value: '98.6%' },
        { label: 'Chi phí tháng', value: '14 tr' },
        { label: 'Brandname', value: 'SOFA15' },
      ],
      [
        { key: 'campaign', label: 'Chiến dịch' },
        { key: 'segment', label: 'Tệp gửi' },
        { key: 'sent', label: 'Đã gửi', type: 'number' },
        { key: 'cost', label: 'Chi phí', type: 'money' },
        STATUS_COL,
      ],
      [
        { campaign: 'Golden Age sale', segment: 'Khách HN + HCM + ĐN', sent: 6800, cost: money(4760000), status: 'Đã gửi' },
        { campaign: 'Nhắc lịch giao', segment: 'Tự động', sent: 162, cost: money(113000), status: 'Đang chạy' },
        { campaign: 'Ưu đãi khách VIP', segment: 'Hạng Vàng', sent: 102, cost: money(71000), status: 'Lên lịch' },
      ],
      ['Tạo chiến dịch SMS']
    ),
    mod(
      'push',
      'Push Notification',
      'Thông báo đẩy web/app theo hành vi người dùng.',
      'solar:bell-bing-bold-duotone',
      [
        { label: 'Người đăng ký', value: '10.4K' },
        { label: 'Tỷ lệ click', value: '6.4%' },
        { label: 'Thông báo tháng', value: '12' },
        { label: 'Huỷ đăng ký', value: '0.3%' },
      ],
      [
        { key: 'title', label: 'Thông báo' },
        { key: 'trigger', label: 'Kích hoạt' },
        { key: 'reach', label: 'Tiếp cận', type: 'number' },
        { key: 'ctr', label: 'CTR' },
        STATUS_COL,
      ],
      [
        { title: 'Golden Age — Giảm 30%', trigger: 'Thủ công', reach: 10400, ctr: '8.2%', status: 'Đã gửi' },
        { title: 'Sản phẩm bạn xem đã giảm giá', trigger: 'Hành vi', reach: 1620, ctr: '12.4%', status: 'Đang chạy' },
        { title: 'Showroom Deco ĐN mới', trigger: 'Vị trí', reach: 520, ctr: '4.8%', status: 'Lên lịch' },
      ],
      ['Tạo thông báo']
    ),
    mod(
      'coupon',
      'Coupon',
      'Mã giảm giá, điều kiện áp dụng và giới hạn sử dụng.',
      'solar:ticket-sale-bold-duotone',
      [
        { label: 'Mã đang chạy', value: '7' },
        { label: 'Lượt dùng', value: '868' },
        { label: 'Giá trị giảm', value: '262 tr' },
        { label: 'Tỷ lệ dùng', value: '30%' },
      ],
      [
        { key: 'code', label: 'Mã' },
        { key: 'value', label: 'Ưu đãi' },
        { key: 'condition', label: 'Điều kiện' },
        { key: 'used', label: 'Đã dùng', type: 'number' },
        STATUS_COL,
      ],
      [
        { code: 'GOLD30', value: 'Giảm 30%', condition: 'Đơn từ 15 triệu', used: 380, status: 'Đang chạy' },
        { code: 'SHIP48', value: 'Miễn phí giao 48h', condition: 'Nội thành HN/HCM/ĐN', used: 420, status: 'Đang chạy' },
        { code: 'VIP5', value: 'Giảm 5 triệu', condition: 'Khách hạng Vàng', used: 38, status: 'Đang chạy' },
        { code: 'AUG18', value: 'Giảm 18%', condition: 'Đơn từ 10 triệu', used: 42, status: 'Hết hạn' },
      ],
      ['Tạo coupon']
    ),
    mod(
      'affiliate',
      'Affiliate',
      'Cộng tác viên, hoa hồng và thanh toán đối soát.',
      'solar:hand-money-bold-duotone',
      [
        { label: 'Cộng tác viên', value: '72' },
        { label: 'Đơn giới thiệu', value: '118' },
        { label: 'Hoa hồng tháng', value: '74 tr' },
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
        { partner: 'Deco Living Review', channel: 'YouTube', orders: 28, commission: money(34200000), status: 'Đang hợp tác' },
        { partner: 'Gatsby Decor Blog', channel: 'Blog', orders: 16, commission: money(11200000), status: 'Đang hợp tác' },
        { partner: 'Art Deco Tips', channel: 'TikTok', orders: 10, commission: money(5800000), status: 'Chờ đối soát' },
      ],
      ['Mời cộng tác viên']
    ),
  ],
};

// ----------------------------------------------------------------------
// ANALYTICS
// ----------------------------------------------------------------------

const ANALYTICS_GROUP: Sofa15AdminGroup = {
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
        { label: 'Doanh thu tháng', value: '4.6 tỷ', trend: '+14%' },
        { label: 'Lợi nhuận gộp', value: '1.66 tỷ' },
        { label: 'Đơn hàng', value: '248' },
        { label: 'AOV', value: '18.5 tr', trend: '+4%' },
      ],
      [
        { key: 'channel', label: 'Kênh bán' },
        { key: 'orders', label: 'Đơn', type: 'number' },
        { key: 'revenue', label: 'Doanh thu', type: 'money' },
        { key: 'share', label: 'Tỷ trọng' },
        { key: 'growth', label: 'Tăng trưởng' },
      ],
      [
        { channel: 'Website', orders: 124, revenue: money(2380000000), share: '52%', growth: '+20%' },
        { channel: 'Showroom', orders: 88, revenue: money(1620000000), share: '35%', growth: '+10%' },
        { channel: 'Đại lý B2B', orders: 28, revenue: money(460000000), share: '10%', growth: '+6%' },
        { channel: 'Sàn TMĐT', orders: 8, revenue: money(140000000), share: '3%', growth: '-1%' },
      ]
    ),
    mod(
      'best-sellers',
      'Sản phẩm bán chạy',
      'Xếp hạng sản phẩm theo doanh số và tồn kho tương ứng.',
      'solar:medal-star-bold-duotone',
      [
        { label: 'SP bán chạy', value: '16' },
        { label: 'Top 10 đóng góp', value: '54%' },
        { label: 'SP không bán được', value: '7' },
        { label: 'Vòng quay tồn', value: '3.4' },
      ],
      [
        { key: 'product', label: 'Sản phẩm' },
        { key: 'sold', label: 'Đã bán', type: 'number' },
        { key: 'revenue', label: 'Doanh thu', type: 'money' },
        { key: 'stock', label: 'Tồn', type: 'number' },
      ],
      [
        { product: 'Sofa Gatsby Gold', sold: 44, revenue: money(990000000), stock: 14 },
        { product: 'Sofa Velvet Noir', sold: 38, revenue: money(756200000), stock: 10 },
        { product: 'Sofa Emerald Lounge', sold: 34, revenue: money(618800000), stock: 8 },
        { product: 'Sofa Diamond Cut', sold: 26, revenue: money(637000000), stock: 0 },
      ]
    ),
    mod(
      'traffic',
      'Nguồn truy cập',
      'Phân bổ lưu lượng theo kênh và chất lượng phiên.',
      'solar:global-bold-duotone',
      [
        { label: 'Phiên tháng', value: '124K', trend: '+16%' },
        { label: 'Người dùng mới', value: '70%' },
        { label: 'Thời gian TB', value: '3:42' },
        { label: 'Tỷ lệ thoát', value: '40%' },
      ],
      [
        { key: 'source', label: 'Nguồn' },
        { key: 'sessions', label: 'Phiên', type: 'number' },
        { key: 'bounce', label: 'Thoát' },
        { key: 'conversion', label: 'Chuyển đổi' },
      ],
      [
        { source: 'Organic Search', sessions: 41200, bounce: '36%', conversion: '2.6%' },
        { source: 'Facebook', sessions: 32400, bounce: '42%', conversion: '2.0%' },
        { source: 'Direct', sessions: 21800, bounce: '32%', conversion: '3.4%' },
        { source: 'Instagram', sessions: 16800, bounce: '44%', conversion: '1.8%' },
        { source: 'Email', sessions: 11800, bounce: '24%', conversion: '5.2%' },
      ]
    ),
    mod(
      'behavior',
      'Hành vi khách hàng',
      'Luồng xem trang, tìm kiếm nội bộ và tương tác sản phẩm.',
      'solar:cursor-bold-duotone',
      [
        { label: 'Trang/phiên', value: '4.8' },
        { label: 'Thêm giỏ', value: '7.2K' },
        { label: 'Bỏ giỏ', value: '60%' },
        { label: 'Xem gallery', value: '5.4K' },
      ],
      [
        { key: 'step', label: 'Bước hành trình' },
        { key: 'users', label: 'Người dùng', type: 'number' },
        { key: 'drop', label: 'Rời bỏ' },
        { key: 'time', label: 'Thời gian TB' },
      ],
      [
        { step: 'Xem trang chủ', users: 124000, drop: '20%', time: '0:42' },
        { step: 'Xem bộ sưu tập', users: 96000, drop: '28%', time: '1:28' },
        { step: 'Xem chi tiết SP', users: 64000, drop: '44%', time: '2:14' },
        { step: 'Thêm vào giỏ', users: 7200, drop: '60%', time: '0:20' },
        { step: 'Hoàn tất thanh toán', users: 2680, drop: '—', time: '2:40' },
      ]
    ),
    mod(
      'conversion',
      'Tỷ lệ chuyển đổi',
      'Phễu chuyển đổi theo kênh, thiết bị và chiến dịch.',
      'solar:filter-bold-duotone',
      [
        { label: 'CR tổng', value: '2.42%', trend: '+0.4%' },
        { label: 'CR mobile', value: '1.84%' },
        { label: 'CR desktop', value: '3.28%' },
        { label: 'CR có tư vấn', value: '12.4%' },
      ],
      [
        { key: 'segment', label: 'Phân khúc' },
        { key: 'sessions', label: 'Phiên', type: 'number' },
        { key: 'orders', label: 'Đơn', type: 'number' },
        { key: 'cr', label: 'CR' },
      ],
      [
        { segment: 'Mobile – Organic', sessions: 41200, orders: 758, cr: '1.84%' },
        { segment: 'Desktop – Organic', sessions: 14800, orders: 486, cr: '3.28%' },
        { segment: 'Email remarketing', sessions: 11800, orders: 616, cr: '5.22%' },
        { segment: 'Tư vấn showroom', sessions: 2000, orders: 248, cr: '12.4%' },
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
      { label: 'URL theo dõi', value: '32' },
      { label: 'Điểm trung bình', value: '88/100' },
      { label: 'Thiếu meta', value: '2' },
      { label: 'Từ khoá top 10', value: '36' },
    ],
    [
      { key: 'url', label: 'URL' },
      { key: 'title', label: 'Meta title' },
      { key: 'keyword', label: 'Từ khoá chính' },
      { key: 'position', label: 'Thứ hạng', type: 'number' },
      STATUS_COL,
    ],
    [
      { url: sample, title: `${name} – SOFA15`, keyword: 'sofa art deco', position: 4, status: 'Tốt' },
      { url: `${sample}/velvet`, title: 'Sofa velvet cao cấp', keyword: 'sofa velvet', position: 6, status: 'Tốt' },
      { url: `${sample}/gatsby`, title: '', keyword: 'sofa gatsby', position: 16, status: 'Thiếu meta' },
      { url: `${sample}/emerald`, title: 'Sofa emerald lounge', keyword: 'sofa emerald', position: 9, status: 'Cần cải thiện' },
    ],
    ['Quét SEO', 'Xuất báo cáo']
  );

const SEO_GROUP: Sofa15AdminGroup = {
  slug: 'seo',
  name: 'SEO',
  icon: 'solar:graph-new-bold-duotone',
  modules: [
    seoPage('category', 'Trang danh mục', '/sofa15/products/category'),
    seoPage('product', 'Trang sản phẩm', '/sofa15/products'),
    seoPage('collection', 'Trang bộ sưu tập', '/sofa15/collections'),
    seoPage('project', 'Trang dự án', '/sofa15/projects'),
    seoPage('showroom', 'Trang showroom', '/sofa15/showrooms'),
    seoPage('blog', 'Trang blog', '/sofa15/blog'),
    seoPage('brand', 'Trang thương hiệu', '/sofa15/about'),
    mod(
      'sitemap',
      'Sitemap',
      'Sơ đồ site XML gửi tới công cụ tìm kiếm.',
      'solar:sitemap-bold-duotone',
      [
        { label: 'URL trong sitemap', value: '824' },
        { label: 'Đã index', value: '780' },
        { label: 'Lỗi', value: '2' },
        { label: 'Cập nhật cuối', value: '13/09' },
      ],
      [
        { key: 'file', label: 'Tệp sitemap' },
        { key: 'urls', label: 'Số URL', type: 'number' },
        { key: 'indexed', label: 'Đã index', type: 'number' },
        STATUS_COL,
      ],
      [
        { file: 'sitemap-products.xml', urls: 168, indexed: 160, status: 'Hợp lệ' },
        { file: 'sitemap-categories.xml', urls: 12, indexed: 12, status: 'Hợp lệ' },
        { file: 'sitemap-blog.xml', urls: 72, indexed: 68, status: 'Hợp lệ' },
        { file: 'sitemap-pages.xml', urls: 32, indexed: 28, status: '2 URL lỗi' },
      ],
      ['Tạo lại sitemap', 'Gửi Search Console']
    ),
    mod(
      'robots',
      'Robots',
      'Quy tắc thu thập dữ liệu cho từng bot.',
      'solar:shield-check-bold-duotone',
      [
        { label: 'Quy tắc', value: '6' },
        { label: 'Đường dẫn chặn', value: '3' },
        { label: 'Bot cho phép', value: '4' },
        { label: 'Cập nhật cuối', value: '01/09' },
      ],
      [
        { key: 'agent', label: 'User-agent' },
        { key: 'rule', label: 'Quy tắc' },
        { key: 'path', label: 'Đường dẫn' },
        STATUS_COL,
      ],
      [
        { agent: '*', rule: 'Allow', path: '/', status: 'Hoạt động' },
        { agent: '*', rule: 'Disallow', path: '/sofa15/admin', status: 'Hoạt động' },
        { agent: '*', rule: 'Disallow', path: '/sofa15/cart', status: 'Hoạt động' },
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
        { label: 'Loại schema', value: '5' },
        { label: 'URL áp dụng', value: '642' },
        { label: 'Cảnh báo', value: '1' },
        { label: 'Lỗi', value: '0' },
      ],
      [
        { key: 'type', label: 'Loại schema' },
        { key: 'scope', label: 'Áp dụng cho' },
        { key: 'urls', label: 'URL', type: 'number' },
        STATUS_COL,
      ],
      [
        { type: 'Product', scope: 'Trang sản phẩm', urls: 168, status: 'Hợp lệ' },
        { type: 'BreadcrumbList', scope: 'Toàn site', urls: 642, status: 'Hợp lệ' },
        { type: 'Article', scope: 'Blog', urls: 72, status: '1 cảnh báo' },
        { type: 'LocalBusiness', scope: 'Showroom', urls: 3, status: 'Hợp lệ' },
        { type: 'FAQPage', scope: 'Trang FAQ', urls: 1, status: 'Hợp lệ' },
      ],
      ['Kiểm tra schema']
    ),
  ],
};

// ----------------------------------------------------------------------
// PHÂN QUYỀN
// ----------------------------------------------------------------------

const ACCESS_GROUP: Sofa15AdminGroup = {
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
        { label: 'Tài khoản', value: '22' },
        { label: 'Đang hoạt động', value: '20' },
        { label: 'Bật 2FA', value: '14' },
        { label: 'Bị khoá', value: '0' },
      ],
      [
        { key: 'name', label: 'Người dùng' },
        { key: 'email', label: 'Email' },
        { key: 'role', label: 'Vai trò' },
        { key: 'last', label: 'Đăng nhập cuối' },
        STATUS_COL,
      ],
      [
        { name: 'Kim Ngân', email: 'kimngan@sofa15.vn', role: 'Quản trị hệ thống', last: '15/09/2026 08:42', status: 'Hoạt động' },
        { name: 'Đức Huy', email: 'duchuy@sofa15.vn', role: 'Quản lý bán hàng', last: '14/09/2026 16:20', status: 'Hoạt động' },
        { name: 'Thảo My', email: 'thaomy@sofa15.vn', role: 'CSKH', last: '15/09/2026 07:50', status: 'Hoạt động' },
        { name: 'Quang Vinh', email: 'vinh@sofa15.vn', role: 'Biên tập nội dung', last: '10/09/2026 09:30', status: 'Hoạt động' },
      ],
      ['Mời người dùng']
    ),
    mod(
      'roles',
      'Vai trò',
      'Nhóm vai trò và phạm vi quyền tương ứng.',
      'solar:users-group-two-rounded-bold-duotone',
      [
        { label: 'Vai trò', value: '5' },
        { label: 'Vai trò tuỳ chỉnh', value: '1' },
        { label: 'Người dùng gán', value: '22' },
        { label: 'Vai trò mặc định', value: 'Nhân viên' },
      ],
      [
        { key: 'role', label: 'Vai trò' },
        { key: 'users', label: 'Người dùng', type: 'number' },
        { key: 'scope', label: 'Phạm vi' },
        STATUS_COL,
      ],
      [
        { role: 'Quản trị hệ thống', users: 2, scope: 'Toàn quyền', status: 'Hệ thống' },
        { role: 'Quản lý bán hàng', users: 4, scope: 'Đơn hàng, CRM, Kho', status: 'Hệ thống' },
        { role: 'Biên tập nội dung', users: 3, scope: 'CMS, Blog, SEO', status: 'Tuỳ chỉnh' },
        { role: 'CSKH', users: 7, scope: 'CRM, Đổi trả, Hỗ trợ', status: 'Tuỳ chỉnh' },
        { role: 'Kế toán', users: 2, scope: 'Thanh toán, Hoàn tiền', status: 'Tuỳ chỉnh' },
      ],
      ['Tạo vai trò']
    ),
    mod(
      'permissions',
      'Quyền hạn',
      'Ma trận quyền chi tiết theo module và hành động.',
      'solar:key-bold-duotone',
      [
        { label: 'Module', value: '24' },
        { label: 'Quyền', value: '96' },
        { label: 'Quyền nhạy cảm', value: '8' },
        { label: 'Cần phê duyệt', value: '2' },
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
        { label: 'Sự kiện hôm nay', value: '642' },
        { label: 'Đăng nhập thất bại', value: '3' },
        { label: 'Thay đổi cấu hình', value: '2' },
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
        { time: '15/09 08:42', user: 'Kim Ngân', action: 'Xuất bản trang chủ Art Deco', ip: '113.20.x.18', status: 'Thành công' },
        { time: '15/09 08:20', user: 'Đức Huy', action: 'Duyệt hoàn tiền HT-2609-03', ip: '113.20.x.24', status: 'Thành công' },
        { time: '15/09 07:38', user: 'unknown', action: 'Đăng nhập thất bại', ip: '45.61.x.188', status: 'Từ chối' },
        { time: '14/09 20:14', user: 'Thảo My', action: 'Sửa bảng giá đại lý', ip: '113.20.x.32', status: 'Thành công' },
      ],
      ['Xuất nhật ký']
    ),
  ],
};

// ----------------------------------------------------------------------

export const SOFA15_ADMIN_GROUPS: Sofa15AdminGroup[] = [
  CMS_GROUP,
  PRODUCT_GROUP,
  WAREHOUSE_GROUP,
  ORDER_GROUP,
  CRM_GROUP,
  MARKETING_GROUP,
  ANALYTICS_GROUP,
  SEO_GROUP,
  ACCESS_GROUP,
];

export function findSofa15AdminModule(groupSlug?: string, moduleSlug?: string) {
  const group = SOFA15_ADMIN_GROUPS.find((g) => g.slug === groupSlug);
  if (!group) return null;
  const found = group.modules.find((m) => m.slug === moduleSlug) ?? group.modules[0];
  return { group, module: found };
}

export const SOFA15_ADMIN_KPIS = [
  { label: 'Doanh thu tháng', value: '4.6 tỷ', trend: '+14%', color: 'primary' as const },
  { label: 'Đơn hàng', value: '248', trend: '+16%', color: 'info' as const },
  { label: 'Khách hàng mới', value: '248', trend: '+16%', color: 'success' as const },
  { label: 'Tỷ lệ chuyển đổi', value: '2.42%', trend: '+0.4%', color: 'warning' as const },
];

export const SOFA15_ADMIN_ACTIVITIES = [
  { time: '08:42', text: 'Kim Ngân xuất bản lại Trang chủ Art Deco', tag: 'CMS' },
  { time: '08:20', text: 'Duyệt hoàn tiền HT-2609-03 (18.2tr)', tag: 'Đơn hàng' },
  { time: '07:50', text: '12 đơn hàng mới chờ xác nhận', tag: 'Đơn hàng' },
  { time: '07:18', text: 'Chiến dịch "Golden Age" đạt 42% tỷ lệ mở', tag: 'Marketing' },
  { time: '06:42', text: 'SKU SF15-GA-05-DIA hết hàng tại Kho Deco HCM', tag: 'Kho hàng' },
];

// ----------------------------------------------------------------------
// Dữ liệu biểu đồ (demo)
// ----------------------------------------------------------------------

export const SOFA15_ADMIN_CHART_MONTHS = [
  'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12',
];

export const SOFA15_ADMIN_REVENUE_SERIES = [
  { name: 'Doanh thu (tỷ)', data: [3.0, 3.4, 3.8, 4.2, 4.6, 5.0, 5.6, 6.2, 5.8, 6.4, 6.9, 7.5] },
  { name: 'Mục tiêu (tỷ)', data: [3.2, 3.6, 4.0, 4.4, 4.8, 5.2, 5.7, 6.1, 6.4, 6.7, 7.1, 7.4] },
];

export const SOFA15_ADMIN_ORDER_SERIES = [
  { name: 'Đơn hàng', data: [188, 210, 228, 248, 268, 290, 348, 402, 380, 416, 452, 498] },
];

export const SOFA15_ADMIN_CHANNEL_CHART = {
  labels: ['Website', 'Showroom', 'Đại lý B2B', 'Sàn TMĐT', 'Mạng xã hội'],
  series: [36, 30, 16, 10, 8],
};

export const SOFA15_ADMIN_TOP_PRODUCTS = {
  labels: ['Sofa Gatsby Gold', 'Sofa Velvet Noir', 'Sofa Emerald Lounge', 'Sofa Diamond Cut', 'Sofa Imperial Gold'],
  series: [188, 162, 134, 98, 76],
};
